/* ============================================================
   CALCULATIONS — Cycle calculation functions
   (Ported from livsfaser-app/js/app.js)
   ============================================================ */

const Calculations = {
  PHASE_DATA: {
    1: { element: 'TRÆ',  startAge: 0,  endAge: 7,  name: 'Livets begyndelse' },
    2: { element: 'TRÆ',  startAge: 7,  endAge: 14, name: 'Udforskning' },
    3: { element: 'ILD',  startAge: 14, endAge: 21, name: 'Forvandling' },
    4: { element: 'JORD', startAge: 21, endAge: 28, name: 'Blomstring' },
    5: { element: 'JORD', startAge: 28, endAge: 35, name: 'Ansvar' },
    6: { element: 'METAL', startAge: 35, endAge: 42, name: 'Klarhed' },
    7: { element: 'METAL', startAge: 42, endAge: 49, name: 'Frigørelse' },
    8: { element: 'VAND',  startAge: 49, endAge: 56, name: 'Dybde' },
    9: { element: 'TRÆ',  startAge: 56, endAge: 63, name: 'Andet Forår' }
  },

  MALE_PHASE_DATA: {
    1: { element: 'VAND', startAge: 0,  endAge: 8,  name: 'Drømmen' },
    2: { element: 'TRÆ',  startAge: 8,  endAge: 16, name: 'Eventyret' },
    3: { element: 'TRÆ',  startAge: 16, endAge: 24, name: 'Helten' },
    4: { element: 'ILD',  startAge: 24, endAge: 32, name: 'Bygherren' },
    5: { element: 'ILD',  startAge: 32, endAge: 40, name: 'Krigeren' },
    6: { element: 'JORD', startAge: 40, endAge: 48, name: 'Kongen' },
    7: { element: 'METAL',startAge: 48, endAge: 56, name: 'Vismanden' },
    8: { element: 'VAND', startAge: 56, endAge: 64, name: 'Ældsten' }
  },

  WEEKDAY_DATA: {
    0: { day: 'Søndag',  element: 'VAND' },
    1: { day: 'Mandag',  element: 'VAND' },
    2: { day: 'Tirsdag', element: 'TRÆ' },
    3: { day: 'Onsdag',  element: 'ILD' },
    4: { day: 'Torsdag', element: 'JORD' },
    5: { day: 'Fredag',  element: 'METAL' },
    6: { day: 'Lørdag',  element: 'JORD' }
  },

  ORGAN_CLOCK: {
    1:  { organ: 'Lever',            element: 'TRÆ',  hours: '01-03', startHour: 1 },
    3:  { organ: 'Lunger',           element: 'METAL', hours: '03-05', startHour: 3 },
    5:  { organ: 'Tyktarm',          element: 'METAL', hours: '05-07', startHour: 5 },
    7:  { organ: 'Mave',             element: 'JORD',  hours: '07-09', startHour: 7 },
    9:  { organ: 'Milt',             element: 'JORD',  hours: '09-11', startHour: 9 },
    11: { organ: 'Hjerte',           element: 'ILD',   hours: '11-13', startHour: 11 },
    13: { organ: 'Tyndtarm',         element: 'ILD',   hours: '13-15', startHour: 13 },
    15: { organ: 'Blære',            element: 'VAND',  hours: '15-17', startHour: 15 },
    17: { organ: 'Nyrer',            element: 'VAND',  hours: '17-19', startHour: 17 },
    19: { organ: 'Perikardium',      element: 'ILD',   hours: '19-21', startHour: 19 },
    21: { organ: 'Tredobbelt varmer',element: 'ILD',   hours: '21-23', startHour: 21 },
    23: { organ: 'Galdeblære',       element: 'TRÆ',  hours: '23-01', startHour: 23 }
  },

  MONTH_DATA: {
    1:  { element: 'VAND' },
    2:  { element: 'VAND' },
    3:  { element: 'TRÆ' },
    4:  { element: 'TRÆ' },
    5:  { element: 'ILD' },
    6:  { element: 'ILD' },
    7:  { element: 'JORD' },
    8:  { element: 'JORD' },
    9:  { element: 'METAL' },
    10: { element: 'METAL' },
    11: { element: 'VAND' },
    12: { element: 'VAND' }
  },

  ELEMENT_LABELS: {
    'VAND': 'Vand',
    'TRÆ': 'Træ',
    'ILD': 'Ild',
    'JORD': 'Jord',
    'METAL': 'Metal'
  },

  ELEMENT_TEGN: {
    'VAND': '水',
    'TRÆ': '木',
    'ILD': '火',
    'JORD': '土',
    'METAL': '金'
  },

  /* ---- Core calculations ---- */

  calculateAge(birthdate) {
    const birth = new Date(birthdate);
    const now = new Date();
    let age = now.getFullYear() - birth.getFullYear();
    const m = now.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && now.getDate() < birth.getDate())) age--;
    return age;
  },

  calculateLifePhase(age) {
    const phaseNumber = Math.min(Math.floor(age / 7) + 1, 9);
    const phase = this.PHASE_DATA[phaseNumber];
    return { ...phase, phase: phaseNumber };
  },

  calculateMalePhase(age) {
    const phaseNumber = Math.min(Math.floor(age / 8) + 1, 8);
    const phase = this.MALE_PHASE_DATA[phaseNumber];
    return { ...phase, phase: phaseNumber };
  },

  calculateSeason(date) {
    const d = date || new Date();
    const month = d.getMonth() + 1;
    const day = d.getDate();

    if ((month === 12 && day >= 21) || month === 1 || month === 2 || (month === 3 && day < 20))
      return { season: 'Vinter', element: 'VAND' };
    if ((month === 3 && day >= 20) || month === 4 || month === 5 || (month === 6 && day < 21))
      return { season: 'Forår', element: 'TRÆ' };
    if ((month === 6 && day >= 21) || month === 7 || (month === 8 && day < 23))
      return { season: 'Sommer', element: 'ILD' };
    if ((month === 8 && day >= 23) || (month === 9 && day < 23))
      return { season: 'Sensommer', element: 'JORD' };
    return { season: 'Efterår', element: 'METAL' };
  },

  calculateWeekday(date) {
    const d = date || new Date();
    return { ...this.WEEKDAY_DATA[d.getDay()] };
  },

  calculateOrganClock(date) {
    const d = date || new Date();
    const hour = d.getHours();
    const organHour = (hour % 2 === 0 ? hour - 1 : hour);
    const key = organHour < 1 ? 23 : organHour;
    const organ = this.ORGAN_CLOCK[key] || this.ORGAN_CLOCK[23];
    return { ...organ };
  },

  calculateMenstrualDay(startDate, currentDate, cycleLength) {
    const start = new Date(startDate);
    const current = currentDate || new Date();
    const diffTime = current - start;
    const len = cycleLength || 28;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const cycleDay = ((diffDays % len) + len) % len + 1;

    // Manifestet: Menstruation=Vand, Follikulær=Træ, Ægløsning=Ild, Luteal=Jord+Metal
    const mensDays = Math.round(len * 0.18);       // ~5 dage
    const folDays = Math.round(len * 0.25);         // ~7 dage
    const ovDays = Math.round(len * 0.14);           // ~4 dage
    const lutealMid = Math.round(len * 0.71);        // ~dag 20

    if (cycleDay <= mensDays) return { week: 1, day: cycleDay, element: 'VAND', phase: 'Menstruation', range: `1-${mensDays}` };
    if (cycleDay <= mensDays + folDays) return { week: 2, day: cycleDay, element: 'TRÆ', phase: 'Follikulær', range: `${mensDays+1}-${mensDays+folDays}` };
    if (cycleDay <= mensDays + folDays + ovDays) return { week: 3, day: cycleDay, element: 'ILD', phase: 'Ægløsning', range: `${mensDays+folDays+1}-${mensDays+folDays+ovDays}` };
    if (cycleDay <= lutealMid) return { week: 4, day: cycleDay, element: 'JORD', phase: 'Luteal (Jord)', range: `${mensDays+folDays+ovDays+1}-${lutealMid}` };
    return { week: 4, day: cycleDay, element: 'METAL', phase: 'Luteal (Metal)', range: `${lutealMid+1}-${len}` };
  },

  /* ---- Lag 2: Fasens indre rytme ---- */
  /*  Hver 7-års fase har 5 indre årstider à 1,4 år.
      Vinter/Vand → Forår/Træ → Sommer/Ild → Sensommer/Jord → Efterår/Metal
      Her lever Jord-elementet — som sensommer i ALLE faser. */
  calculateInnerSeason(birthdate, date) {
    const birth = new Date(birthdate);
    const d = date || new Date();
    const exactAge = (d - birth) / (365.25 * 24 * 60 * 60 * 1000);
    const age = Math.floor(exactAge);
    const phase = this.calculateLifePhase(age);
    const yearsInPhase = exactAge - phase.startAge;
    const seasonLength = 7 / 5; // 1,4 år per indre årstid

    const INNER_SEASONS = [
      { innerSeason: 'Vinter', element: 'VAND',  quality: 'Ankomst, orientering' },
      { innerSeason: 'Forår',  element: 'TRÆ',   quality: 'Retning viser sig' },
      { innerSeason: 'Sommer', element: 'ILD',   quality: 'Fasens energi topper' },
      { innerSeason: 'Sensommer', element: 'JORD', quality: 'Integration' },
      { innerSeason: 'Efterår', element: 'METAL', quality: 'Forberedelse på næste fase' }
    ];

    const seasonIndex = Math.min(Math.floor(yearsInPhase / seasonLength), 4);
    const progress = (yearsInPhase - (seasonIndex * seasonLength)) / seasonLength;

    return {
      ...INNER_SEASONS[seasonIndex],
      progress: Math.min(Math.max(progress, 0), 1),
      yearsInPhase: Math.round(yearsInPhase * 10) / 10
    };
  },

  calculateCalendarMonth(date) {
    const d = date || new Date();
    const month = d.getMonth() + 1;
    return { month, ...this.MONTH_DATA[month] };
  },

  /* ---- Combined calculation — De 5 Lag ---- */
  /*  Lag 1: Livsfase (DOMINERER)
      Lag 2: Fasens indre rytme (NUANCERER)
      Lag 3: Årets årstid (MODULERER)
      Lag 4: Månedscyklus — menstruel eller kalendermåned (FININDSTILLER)
      Lag 5: Organur (TIDSPUNKTS-VEJLEDER)
      Ugedag bevares som data men indgår IKKE i de 5 lag. */
  allCycles(birthdate, targetDate, options) {
    const date = targetDate || new Date();
    const age = this.calculateAge(birthdate);
    const lifePhase = this.calculateLifePhase(age);
    const innerSeason = this.calculateInnerSeason(birthdate, date);
    const season = this.calculateSeason(date);
    const weekday = this.calculateWeekday(date);
    const organ = this.calculateOrganClock(date);

    // Lag 4: Menstruel cyklus hvis brugeren tracker, ellers kalendermåned
    let monthCycle;
    if (options && options.tracksMenstruation && options.menstrualStart) {
      monthCycle = this.calculateMenstrualDay(options.menstrualStart, date, options.cycleLength);
    } else {
      monthCycle = this.calculateCalendarMonth(date);
    }

    // De 5 lag — manifestets hierarki
    const elements = [lifePhase.element, innerSeason.element, season.element, monthCycle.element, organ.element];

    return {
      age,
      lifePhase,
      innerSeason,
      season,
      weekday,
      organ,
      monthCycle,
      elements,
      date,
      birthdate
    };
  },

  /* ---- Phase progress ---- */
  calculatePhaseProgress(age) {
    const phase = this.calculateLifePhase(age);
    const progress = (age - phase.startAge) / (phase.endAge - phase.startAge);
    return { ...phase, progress: Math.min(Math.max(progress, 0), 1), yearsLeft: Math.max(phase.endAge - age, 0) };
  },

  /* ---- Day-based rotation index (for varying recommendations) ---- */
  dayRotation(arrayLength) {
    const d = new Date();
    const dayOfYear = Math.floor((d - new Date(d.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    return dayOfYear % (arrayLength || 3);
  },

  /* ---- Dominant element (simple count) ---- */
  getDominant(elements) {
    const counts = {};
    elements.forEach(e => { counts[e] = (counts[e] || 0) + 1; });
    let max = 0, dominant = 'VAND';
    Object.entries(counts).forEach(([el, c]) => {
      if (c > max) { max = c; dominant = el; }
    });
    return { element: dominant, count: max, counts };
  },

  /* ---- Weighted dominant element — De 5 Lags hierarki ---- */
  /*  Lag 1: Livsfase (7 år)     → DOMINERER     → weight 4
      Lag 2: Indre årstid (1,4 år) → NUANCERER   → weight 2
      Lag 3: Årets årstid (3 mdr)  → MODULERER   → weight 1.5
      Lag 4: Månedscyklus (1 mdr)  → FININDSTILLER → weight 1
      Lag 5: Organur (2 timer)     → VEJLEDER    → weight 0.5 */
  getWeightedDominant(cycles) {
    const WEIGHTS = {
      lifePhase: 4,       // Lag 1: 7 år — DOMINERER (skal kun overtrumfes af 3+ lag)
      innerSeason: 2,     // Lag 2: ~1,4 år — NUANCERER
      season: 1.5,        // Lag 3: ~3 måneder — MODULERER
      monthCycle: 1,      // Lag 4: ~1 måned — FININDSTILLER
      organ: 0.5          // Lag 5: 2 timer — TIDSPUNKTS-VEJLEDER
    };

    const scores = { 'VAND': 0, 'TRÆ': 0, 'ILD': 0, 'JORD': 0, 'METAL': 0 };

    scores[cycles.lifePhase.element]  += WEIGHTS.lifePhase;
    if (cycles.innerSeason) scores[cycles.innerSeason.element] += WEIGHTS.innerSeason;
    scores[cycles.season.element]     += WEIGHTS.season;
    scores[cycles.monthCycle.element] += WEIGHTS.monthCycle;
    scores[cycles.organ.element]      += WEIGHTS.organ;

    let max = 0, dominant = 'VAND';
    Object.entries(scores).forEach(([el, s]) => {
      if (s > max) { max = s; dominant = el; }
    });

    // Bagudkompatibel: count + counts fra simpel optælling
    const counts = {};
    cycles.elements.forEach(e => { counts[e] = (counts[e] || 0) + 1; });
    const count = counts[dominant] || 0;

    return { element: dominant, count, counts, score: max, scores };
  }
};

window.Calculations = Calculations;
