/* ============================================================
   BIEA BOXING — Theme Switcher
   ============================================================
   Handles switching between "Classic" (red/gold) and
   "Electric" (neon lime/charcoal) themes.
   ============================================================ */

const Theme = {
  currentTheme: 'classic',
  STORAGE_KEY: 'biea-theme',
  _initialized: false,

  init() {
    if (this._initialized) return;
    this._initialized = true;

    const saved = localStorage.getItem(this.STORAGE_KEY);
    if (saved === 'classic' || saved === 'electric') {
      this.currentTheme = saved;
    }

    this.applyTheme(false);
    this.updateToggleUI();

    const toggle = document.getElementById('themeToggle');
    if (toggle) {
      toggle.addEventListener('click', () => {
        this.setTheme(this.currentTheme === 'classic' ? 'electric' : 'classic');
      });
    }
  },

  setTheme(theme) {
    if (theme === this.currentTheme) return;
    this.currentTheme = theme;
    localStorage.setItem(this.STORAGE_KEY, theme);
    this.applyTheme(true);
    this.updateToggleUI();
    this.updateMetaThemeColor();
  },

  applyTheme(animate) {
    const html = document.documentElement;

    if (animate) {
      html.classList.add('theme-transitioning');
    }

    if (this.currentTheme === 'electric') {
      html.classList.add('theme-electric');
    } else {
      html.classList.remove('theme-electric');
    }

    if (animate) {
      setTimeout(() => {
        html.classList.remove('theme-transitioning');
      }, 500);
    }
  },

  updateToggleUI() {
    const label = document.getElementById('themeLabel');
    const iconWrap = document.getElementById('themeIcon');

    if (label) {
      label.textContent = this.currentTheme === 'classic' ? 'ELECTRIC' : 'CLASSIC';
    }

    if (iconWrap) {
      if (this.currentTheme === 'classic') {
        // Lightning bolt — click to go Electric
        iconWrap.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>';
      } else {
        // Flame — click to go Classic
        iconWrap.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>';
      }
    }
  },

  updateMetaThemeColor() {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute('content', this.currentTheme === 'electric' ? '#D4FF00' : '#DC2626');
    }
  },
};

// Self-initialize on DOMContentLoaded as a safety net
// (in case App.init() throws before reaching Theme.init())
document.addEventListener('DOMContentLoaded', () => {
  Theme.init();
});
