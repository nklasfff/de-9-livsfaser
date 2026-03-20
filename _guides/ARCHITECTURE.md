# Architecture

> **VIGTIGT:** Denne fil beskriver den tekniske arkitektur (filer, dataflow, beregninger).
> For VISIONEN — hvordan appen skal fungere som helhed — læs `_guides/MASTERPLAN.md`.
> De 44 skærme er IKKE en navigationsstruktur. De er lag af dybde under forsiden.
> Portrait-motoren STYRER hvad brugeren ser — ikke menuer eller tabs.

## File Structure
```
de-9-livsfaser/
├── index.html          # App shell (header, drawer, screen-content, tab-bar)
├── manifest.json       # PWA manifest (theme: #6c82a9, bg: #FDFCFB)
├── sw.js               # Service worker (bump version before deploy!)
├── css/                # tokens.css → base.css → components.css → sections.css → screens.css
├── js/
│   ├── storage.js      # LocalStorage wrapper (Storage object)
│   ├── calculations.js # Cycle calculations (Calculations object)
│   ├── data.js         # Content data (LIVSFASE_DETAIL, YIN_YOGA_FULL, etc.)
│   ├── data-expanded.js # 12 blokke, ~420 snippets i Isabelles stemme
│   ├── data-portrait.js # KLIMA_ELEMENT_TEKST, UNDERSTROEM_TEKST
│   ├── arc-nav.js      # DEAD CODE — loaded but never initialized
│   ├── router.js       # Hash-based SPA router (44 screens)
│   └── app.js          # All init functions + UI logic
├── screens/            # 44 HTML screen templates
├── fonts/              # WOFF2 (Playfair Display + DM Sans)
└── assets/images/      # 72 content images
```

**Script load order:** storage → calculations → data → data-expanded → data-portrait → arc-nav → router → app

## Data Flow
```
Storage.getUser() → { birthdate, name, ... }
  → Calculations.allCycles(birthdate, new Date())
  → { lifePhase, season, weekday, organ, monthCycle, elements, age }
  → Calculations.getWeightedDominant(cycles)
  → { element, count, counts, score, scores }
  → buildPortrait(data)
  → { resonance, secondary, climate, livsAarstid, organResonance, felt }
```

## Weighted Dominance
```
Livsfase: weight 4 (7 years) | Indre saeson: 2 (~1.4 years) | Aarstid: 1.5 (~3 months)
Maaned: 1 (1 month) | Organur: 0.5 (2 hours)
```

## Portrait System (app.js)
- `buildPortrait(data)` — central fortolkningsfunktion
- `getPortrait()` — cached per time
- `setNavContext(topic, extras)` — baerer portraetdata mellem skaerme
- `getNavContext()` — laeser kontekst (10s timeout)
- `renderTemaContent(containerId)` — viser specifikt hero-indhold

## Screen Loading Pattern
1. `Router.navigate('screen-name')` → fetches `screens/screen-name.html`
2. HTML injected into `<main id="screen-content">`
3. Transition animation → header updated → action bar on niveau 2
4. Init function called: `window[screen.init]()`

## Content in data-expanded.js
MORGEN_AFTEN_TEKST (30), ELEMENT_FASE_DAGLIG (45), ELEMENT_FASE_ROTATION (180),
TEMA_DYBDE (30), TIDSREJSE_PAR (25), OVERGANGSALDER_SPECIFIK (~40),
RELATION_DYBDE (20), UDVIDET_HJAELP (75), SJAELDNE_VINDUER (15),
CYKLUS_SKIFT_TEKST (20), AARSTID_ELEMENT_TEKST (25), ORGANUR_VINDUER (12),
EKSTRA_REFLEKSIONER_NY (45)

## LocalStorage Keys
| Key | Content |
|-----|---------|
| `livsfaser_user` | { birthdate, name, createdAt, tracksMenstruation, menstrualStart } |
| `livsfaser_relations` | [{ name, birthdate, gender, type }] |
| `livsfaser_checkins` | [{ date, mood, note, cycles }] |
| `livsfaser_reflections` | [{ date, question, text }] |
| `livsfaser_journal` | [{ date, text, phase, season, element }] |
| `livsfaser_onboarded` | 'true' when complete |
| `indstillinger` | Toggle states, cycle length, times |
| `saved_screens` | Screen names saved via action bar |

## Key Features
- **Check-in:** 7 mood buttons, Portrait comparison, streak tracking
- **Journal:** Textarea + save, filter chips, metadata
- **Refleksion:** Phase-specific questions (9 phases x 3+)
- **Vinduer:** Date input + cyclesAtDate() for any person at any date
- **Oejeblikket:** Fullscreen overlay ved aabning (organur + element + klima)
- **Breathing:** 4s inhale → 4s hold → 6s exhale (CSS animation)
