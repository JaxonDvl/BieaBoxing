/* ============================================================
   BIEA BOXING — Main Application Logic
   ============================================================
   Handles: navbar scroll, mobile menu, scroll animations,
   counter animation, dynamic content rendering.
   ============================================================ */

const App = {

  init() {
    this.setupNavbar();
    this.setupMobileMenu();
    this.setupScrollReveal();
    this.setupCounters();
    this.renderSchedule();
    this.renderTrainers();
    this.renderFightRecord();
    this.setupSmoothScroll();
    this.setupBackToTop();
    this.setCurrentYear();

    // Initialize i18n last (after DOM is populated)
    I18n.init();
  },

  // ========================================
  // NAVBAR — background on scroll
  // ========================================
  setupNavbar() {
    const navbar = document.getElementById('navbar');
    const links = document.querySelectorAll('.navbar__link');
    const sections = document.querySelectorAll('section[id]');

    const onScroll = () => {
      // Toggle background
      if (window.scrollY > 60) {
        navbar.classList.add('navbar--scrolled');
      } else {
        navbar.classList.remove('navbar--scrolled');
      }

      // Active link highlighting
      let current = '';
      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        if (window.scrollY >= top) {
          current = section.getAttribute('id');
        }
      });

      links.forEach((link) => {
        link.classList.remove('navbar__link--active');
        if (link.getAttribute('href') === '#' + current) {
          link.classList.add('navbar__link--active');
        }
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  },

  // ========================================
  // MOBILE MENU
  // ========================================
  setupMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('navMenu');

    if (!hamburger || !menu) return;

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('navbar__hamburger--active');
      menu.classList.toggle('navbar__menu--open');
      const isOpen = menu.classList.contains('navbar__menu--open');
      hamburger.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu when a link is clicked
    menu.querySelectorAll('.navbar__link').forEach((link) => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('navbar__hamburger--active');
        menu.classList.remove('navbar__menu--open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  },

  // ========================================
  // SMOOTH SCROLL for nav links
  // ========================================
  setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', (e) => {
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  },

  // ========================================
  // SCROLL REVEAL — Intersection Observer
  // ========================================
  setupScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible');

            // Stagger child cards if present
            const cards = entry.target.querySelectorAll('.service-card, .trainer-card, .stat-card');
            cards.forEach((card, i) => {
              setTimeout(() => {
                card.classList.add('reveal--visible');
              }, i * 100);
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    revealElements.forEach((el) => observer.observe(el));
  },

  // ========================================
  // COUNTER ANIMATION
  // ========================================
  setupCounters() {
    const counters = document.querySelectorAll('[data-count]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((counter) => observer.observe(counter));
  },

  animateCounter(el) {
    const target = parseInt(el.dataset.count, 10);
    const duration = 2000;
    const start = performance.now();

    const step = (timestamp) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target;
      }
    };

    requestAnimationFrame(step);
  },

  // ========================================
  // RENDER SCHEDULE TABLE
  // ========================================
  formatTime(time24) {
    const [h, m] = time24.split(':').map(Number);
    const period = h >= 12 ? 'pm' : 'am';
    const h12 = h % 12 || 12;
    return `${h12}:${m.toString().padStart(2, '0')} ${period}`;
  },

  renderSchedule() {
    const tbody = document.getElementById('scheduleBody');
    if (!tbody) return;

    const classes = siteContent.schedule.classes;
    const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

    tbody.innerHTML = classes.map((row) => {
      const timeRange = row.endTime
        ? `${this.formatTime(row.time)} - ${this.formatTime(row.endTime)}`
        : this.formatTime(row.time);

      const cells = days.map((day) => {
        const cell = row[day];
        if (!cell || !cell.type) {
          return '<td></td>';
        }
        const name = I18n.t(cell.name);
        return `<td><div class="schedule__cell schedule__cell--${cell.type}"><span class="schedule__cell-name">${name}</span><span class="schedule__cell-time">${timeRange}</span></div></td>`;
      }).join('');

      return `<tr><td class="schedule__time-cell"><strong>${row.time}</strong></td>${cells}</tr>`;
    }).join('');

    // Highlight today's column on desktop table
    const todayIndex = (new Date().getDay() + 6) % 7; // Mon=0 … Sun=6
    const headers = document.querySelectorAll('#scheduleTable thead th');
    if (headers[todayIndex + 1]) {
      headers[todayIndex + 1].classList.add('col-today');
      const todayLabel = I18n.t(siteContent.schedule.today);
      headers[todayIndex + 1].insertAdjacentHTML('beforeend', `<span class="col-today-badge">${todayLabel}</span>`);
    }
    document.querySelectorAll('#scheduleBody tr').forEach((row) => {
      if (row.cells[todayIndex + 1]) {
        row.cells[todayIndex + 1].classList.add('col-today');
      }
    });

    this._renderMobileSchedule(classes, days, todayIndex);
  },

  _renderMobileSchedule(classes, days, todayIndex) {
    const view = document.getElementById('scheduleDayView');
    if (!view) return;

    view.innerHTML = days.map((day, i) => {
      const dayClasses = classes.filter((row) => row[day] && row[day].type);
      if (dayClasses.length === 0) return '';

      const items = dayClasses.map((row) => {
        const cell = row[day];
        const name = I18n.t(cell.name);
        const timeRange = row.endTime
          ? `${this.formatTime(row.time)} – ${this.formatTime(row.endTime)}`
          : this.formatTime(row.time);
        return `<div class="schedule__list-item schedule__cell--${cell.type}">
          <span class="schedule__list-time">${timeRange}</span>
          <span class="schedule__list-name">${name}</span>
        </div>`;
      }).join('');

      const dayLabel = I18n.t(siteContent.schedule[day]);
      const todayClass = i === todayIndex ? ' schedule__list-day--today' : '';
      return `<div class="schedule__list-day${todayClass}">
        <div class="schedule__list-day-header">
          <p class="schedule__list-day-name">${dayLabel}</p>
          <span class="schedule__list-day-count">${dayClasses.length}</span>
        </div>
        ${items}
      </div>`;
    }).join('');
  },

  // ========================================
  // RENDER TRAINERS
  // ========================================
  renderTrainers() {
    const grid = document.getElementById('trainersGrid');
    if (!grid) return;

    const trainers = siteContent.trainers.list;

    grid.innerHTML = trainers.map((trainer) => {
      const imgHtml = trainer.image
        ? `<img src="${trainer.image}" alt="${trainer.name}" loading="lazy">`
        : `<div class="trainer-card__img-placeholder">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </div>`;

      return `
        <div class="trainer-card reveal">
          <div class="trainer-card__img-wrap">${imgHtml}</div>
          <div class="trainer-card__info">
            <h3 class="trainer-card__name">${trainer.name}</h3>
            <p class="trainer-card__specialty">${I18n.t(trainer.specialty)}</p>
            <p class="trainer-card__bio">${I18n.t(trainer.bio)}</p>
          </div>
        </div>`;
    }).join('');

    // Re-observe new trainer cards for scroll animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    grid.querySelectorAll('.trainer-card').forEach((card) => observer.observe(card));
  },

  // ========================================
  // RENDER FIGHT RECORD TABLE
  // ========================================
  renderFightRecord() {
    const tbody = document.getElementById('fightBody');
    if (!tbody) return;

    const fights = siteContent.events.fights;

    tbody.innerHTML = fights.map((fight, i) => {
      const resultClass = fight.result === 'W' ? 'result--win'
                        : fight.result === 'L' ? 'result--loss'
                        : 'result--draw';

      return `
        <tr>
          <td data-label="#">${fights.length - i}</td>
          <td data-label="Date">${fight.date}</td>
          <td data-label="Opponent" class="fight-opponent">${fight.opponent}</td>
          <td data-label="Record">${fight.record}</td>
          <td data-label="Location">${fight.location}</td>
          <td data-label="Result"><span class="${resultClass}">${fight.method}</span></td>
        </tr>`;
    }).join('');
  },

  // ========================================
  // BACK TO TOP BUTTON
  // ========================================
  setupBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      btn.classList.toggle('back-to-top--visible', window.scrollY > 400);
    }, { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  },

  // ========================================
  // CURRENT YEAR in footer
  // ========================================
  setCurrentYear() {
    const el = document.getElementById('currentYear');
    if (el) {
      el.textContent = new Date().getFullYear();
    }
  },
};

// ========================================
// BOOT
// ========================================
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
