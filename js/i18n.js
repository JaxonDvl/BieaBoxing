/* ============================================================
   BIEA BOXING — Internationalization (i18n) System
   ============================================================
   Handles language switching between RO and EN.
   Reads text from content.js and updates the page.
   ============================================================ */

const I18n = {
  currentLang: 'ro',

  init() {
    // Load saved language preference
    const saved = localStorage.getItem('biea-lang');
    if (saved && (saved === 'ro' || saved === 'en')) {
      this.currentLang = saved;
    }

    // Set up toggle button
    const toggle = document.getElementById('langToggle');
    if (toggle) {
      toggle.addEventListener('click', (e) => {
        const option = e.target.closest('[data-lang]');
        if (option) {
          this.setLanguage(option.dataset.lang);
        }
      });
    }

    // Set html lang attribute
    document.documentElement.lang = this.currentLang;

    // Apply language
    this.applyLanguage();
    this.updateToggleUI();
  },

  setLanguage(lang) {
    if (lang === this.currentLang) return;
    this.currentLang = lang;
    localStorage.setItem('biea-lang', lang);
    document.documentElement.lang = lang;
    this.applyLanguage();
    this.updateToggleUI();

    // Re-render dynamic content
    if (typeof App !== 'undefined') {
      App.renderSchedule();
      App.renderTrainers();
      App.renderFightRecord();
    }
  },

  applyLanguage() {
    const lang = this.currentLang;

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const value = this.resolve(key);
      if (value !== undefined) {
        el.textContent = value;
      }
    });

    // Update elements with data-i18n-attr (for placeholders, aria-labels, etc.)
    document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
      const pairs = el.getAttribute('data-i18n-attr').split(';');
      pairs.forEach((pair) => {
        const [attr, key] = pair.split(':');
        if (attr && key) {
          const value = this.resolve(key.trim());
          if (value !== undefined) {
            el.setAttribute(attr.trim(), value);
          }
        }
      });
    });
  },

  // Resolve a dot-separated key like "hero.title" from siteContent
  resolve(key) {
    const parts = key.split('.');
    let obj = siteContent;

    for (const part of parts) {
      if (obj && typeof obj === 'object' && part in obj) {
        obj = obj[part];
      } else {
        return undefined;
      }
    }

    // If the resolved value is an object with ro/en keys, return the right language
    if (obj && typeof obj === 'object' && this.currentLang in obj) {
      return obj[this.currentLang];
    }

    // If it's a plain string, return as-is
    if (typeof obj === 'string') {
      return obj;
    }

    return undefined;
  },

  // Get text for current language from a { ro: "...", en: "..." } object
  t(obj) {
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    return obj[this.currentLang] || obj['ro'] || '';
  },

  updateToggleUI() {
    const options = document.querySelectorAll('.lang-toggle__option');
    options.forEach((opt) => {
      opt.classList.toggle(
        'lang-toggle__option--active',
        opt.dataset.lang === this.currentLang
      );
    });
  },
};
