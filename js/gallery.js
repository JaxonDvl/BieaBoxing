/* ============================================================
   BIEA BOXING — Gallery Page Logic
   ============================================================
   Handles: filter buttons, lightbox, mobile menu,
   scroll reveal, language toggle, current year.
   ============================================================ */

const Gallery = {

  init() {
    this.setupFilters();
    this.setupLightbox();
    this.setupMobileMenu();
    this.setupScrollReveal();
    this.setCurrentYear();

    // Initialize i18n last (after DOM is populated)
    I18n.init();
  },

  // ========================================
  // FILTER BUTTONS
  // ========================================
  setupFilters() {
    const buttons = document.querySelectorAll('.gallery__filter');
    const items = document.querySelectorAll('.gallery__item');

    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        // Update active button
        buttons.forEach((b) => b.classList.remove('gallery__filter--active'));
        btn.classList.add('gallery__filter--active');

        const filter = btn.dataset.filter;

        items.forEach((item) => {
          if (filter === 'all' || item.dataset.type === filter) {
            item.classList.remove('gallery__item--hidden');
          } else {
            item.classList.add('gallery__item--hidden');
          }
        });
      });
    });
  },

  // ========================================
  // LIGHTBOX — click any item, arrow through
  // ========================================
  setupLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxPlaceholder = document.getElementById('lightboxPlaceholder');
    const counter = document.getElementById('lightboxCounter');
    const closeBtn = lightbox?.querySelector('.lightbox__close');
    const prevBtn = lightbox?.querySelector('.lightbox__prev');
    const nextBtn = lightbox?.querySelector('.lightbox__next');

    if (!lightbox) return;

    let currentIndex = 0;
    let items = [];

    const getVisibleItems = () =>
      Array.from(document.querySelectorAll('.gallery__item:not(.gallery__item--hidden)'));

    const showItem = (index) => {
      const item = items[index];
      if (!item) return;

      const img = item.querySelector('.gallery__thumb img');
      const isVideo = item.dataset.type === 'videos';

      if (img) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || '';
        lightboxImg.hidden = false;
        lightboxPlaceholder.hidden = true;
      } else {
        lightboxImg.hidden = true;
        lightboxPlaceholder.hidden = false;
        // Swap icon for video placeholders
        const svg = lightboxPlaceholder.querySelector('svg');
        if (isVideo) {
          svg.innerHTML = '<polygon points="5 3 19 12 5 21 5 3"/>';
          svg.style.color = 'var(--color-red)';
        } else {
          svg.innerHTML = '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>';
          svg.style.color = '';
        }
      }

      counter.textContent = `${index + 1} / ${items.length}`;
    };

    const open = (index) => {
      items = getVisibleItems();
      if (items.length === 0) return;

      currentIndex = index;
      showItem(currentIndex);
      lightbox.hidden = false;
      requestAnimationFrame(() => lightbox.classList.add('lightbox--open'));
      document.body.style.overflow = 'hidden';
    };

    const close = () => {
      lightbox.classList.remove('lightbox--open');
      setTimeout(() => {
        lightbox.hidden = true;
        lightboxImg.src = '';
        lightboxImg.hidden = false;
        lightboxPlaceholder.hidden = true;
      }, 300);
      document.body.style.overflow = '';
    };

    const navigate = (dir) => {
      if (items.length === 0) return;
      currentIndex = (currentIndex + dir + items.length) % items.length;
      showItem(currentIndex);
    };

    // Click any gallery item to open lightbox
    document.getElementById('galleryGrid')?.addEventListener('click', (e) => {
      const item = e.target.closest('.gallery__item');
      if (!item) return;

      const visibleItems = getVisibleItems();
      const index = visibleItems.indexOf(item);
      if (index >= 0) open(index);
    });

    closeBtn?.addEventListener('click', close);
    prevBtn?.addEventListener('click', () => navigate(-1));
    nextBtn?.addEventListener('click', () => navigate(1));

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (lightbox.hidden) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') navigate(-1);
      if (e.key === 'ArrowRight') navigate(1);
    });

    // Close on backdrop click
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target === lightbox.querySelector('.lightbox__content')) close();
    });

    // Swipe support for mobile
    let touchStartX = 0;
    lightbox.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightbox.addEventListener('touchend', (e) => {
      const diff = e.changedTouches[0].screenX - touchStartX;
      if (Math.abs(diff) > 50) {
        navigate(diff > 0 ? -1 : 1);
      }
    }, { passive: true });
  },

  // ========================================
  // MOBILE MENU (same as main page)
  // ========================================
  setupMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('navMenu');

    if (!hamburger || !menu) return;

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('navbar__hamburger--active');
      menu.classList.toggle('navbar__menu--open');
      document.body.style.overflow = menu.classList.contains('navbar__menu--open') ? 'hidden' : '';
    });

    menu.querySelectorAll('.navbar__link').forEach((link) => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('navbar__hamburger--active');
        menu.classList.remove('navbar__menu--open');
        document.body.style.overflow = '';
      });
    });
  },

  // ========================================
  // SCROLL REVEAL
  // ========================================
  setupScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    revealElements.forEach((el) => observer.observe(el));
  },

  // ========================================
  // CURRENT YEAR
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
  Gallery.init();
});
