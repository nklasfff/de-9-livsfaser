/* ============================================================
   STORAGE — localStorage wrapper
   ============================================================ */

const Storage = {
  /* ---- User profile ---- */
  getUser() {
    try {
      const d = localStorage.getItem('livsfaser_user');
      return d ? JSON.parse(d) : null;
    } catch { return null; }
  },

  saveUser(data) {
    localStorage.setItem('livsfaser_user', JSON.stringify(data));
  },

  /* ---- Relations ---- */
  getRelations() {
    try {
      const d = localStorage.getItem('livsfaser_relations');
      return d ? JSON.parse(d) : [];
    } catch { return []; }
  },

  saveRelations(arr) {
    localStorage.setItem('livsfaser_relations', JSON.stringify(arr));
  },

  /* ---- Favorites ---- */
  getFavorites() {
    try {
      const d = localStorage.getItem('livsfaser_favorites');
      return d ? JSON.parse(d) : { screens: [] };
    } catch { return { screens: [] }; }
  },

  saveFavorites(data) {
    localStorage.setItem('livsfaser_favorites', JSON.stringify(data));
  },

  /* ---- Check-ins ---- */
  getCheckins() {
    try {
      const d = localStorage.getItem('livsfaser_checkins');
      return d ? JSON.parse(d) : [];
    } catch { return []; }
  },

  saveCheckin(entry) {
    const all = this.getCheckins();
    all.push(entry);
    localStorage.setItem('livsfaser_checkins', JSON.stringify(all));
  },

  /* ---- Reflections ---- */
  getReflections() {
    try {
      const d = localStorage.getItem('livsfaser_reflections');
      return d ? JSON.parse(d) : [];
    } catch { return []; }
  },

  saveReflection(entry) {
    const all = this.getReflections();
    all.push(entry);
    localStorage.setItem('livsfaser_reflections', JSON.stringify(all));
  },

  /* ---- Settings ---- */
  getSettings() {
    try {
      const d = localStorage.getItem('livsfaser_settings');
      return d ? JSON.parse(d) : {};
    } catch { return {}; }
  },

  saveSettings(data) {
    localStorage.setItem('livsfaser_settings', JSON.stringify(data));
  },

  /* ---- Onboarding ---- */
  isOnboarded() {
    return localStorage.getItem('livsfaser_onboarded') === 'true';
  },

  setOnboarded() {
    localStorage.setItem('livsfaser_onboarded', 'true');
  },

  /* ---- Helpers ---- */
  getLocalDateStr(d) {
    const dt = d || new Date();
    const y = dt.getFullYear();
    const m = String(dt.getMonth() + 1).padStart(2, '0');
    const day = String(dt.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  },

  clearAll() {
    const keys = [
      'livsfaser_user', 'livsfaser_relations', 'livsfaser_favorites',
      'livsfaser_checkins', 'livsfaser_reflections', 'livsfaser_settings',
      'livsfaser_onboarded'
    ];
    keys.forEach(k => localStorage.removeItem(k));
  }
};

window.Storage = Storage;
