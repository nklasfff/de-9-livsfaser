# DE 9 LIVSFASERS ENERGI — PWA

## SESSION STARTUP — LÆS DETTE FØRST

**VIGTIGST:** Læs `_guides/MASTERPLAN.md` HELE vejen igennem FØR du gør noget.
Den beskriver helheden — visionen, systemet, materialet, hvad der skal ændres.
Fortæl brugeren hvad du forstår om hvad vi bygger, før du rører kode.

**ALDRIG begynd at kode uden brugerens eksplicitte godkendelse.**
**ALDRIG foreslå "lad os starte med del 1" — alt påvirker alt.**

---

## PROJEKT

- **Hvad:** PWA companion til bogen "De 9 Livsfasers Energi" af Isabelle Evita Soendergaard
- **Tech:** Ren HTML5, CSS3, JavaScript — INGEN build, INGEN frameworks
- **Deploy:** GitHub Pages — https://nklasfff.github.io/de-9-livsfaser/
- **Sprog:** Dansk (da-DK)
- **Brugere:** Kvinder 28-63 (tilgængelig for alle kvinder)

## VISIONEN

Appen er et SPEJL der bevæger sig med hende — ikke et bibliotek hun browser.
Tre dimensioner virker samtidigt som ét spejl:
- **JEG, NU** — hendes fem cyklusser smeltet til én stemme
- **OS, NU** — hendes elementer møder mors, datters, partners
- **KROPPEN, NU** — organur-skift hver 2. time gør appen levende

Dybde er LODRET (dybere ind i dette øjeblik), ikke VANDRET (til siden mellem kategorier).
Læs `_guides/MASTERPLAN.md` for den fulde vision.

---

## FILER

**JS load-rækkefølge (index.html):**
storage.js → calculations.js → data.js → data-expanded.js → router.js → app.js

**Kernefiler:**
- `js/calculations.js` — PHASE_DATA, cyklusberegninger, vægtet dominans
- `js/data.js` — LIVSFASE_DETAIL (9 faser x 25+ felter), YIN_YOGA, REFLEKSION_DATA
- `js/data-expanded.js` — 12 blokke, ~420 snippets (MORGEN_AFTEN, ELEMENT_FASE_ROTATION, ORGANUR_VINDUER m.fl.)
- `js/app.js` — alle init-funktioner, Portrait-system, UI-logik (~8600 linjer)
- `js/router.js` — hash-baseret SPA router, 44 skærme
- `screens/` — 44 HTML templates
- `bog/bogen-komplet.txt` — hele bogen (376.000 tegn)

**Detaljer:** `_guides/ARCHITECTURE.md`, `_guides/ROUTER.md`, `_guides/DESIGN-SYSTEM.md`

---

## KORREKT ELEMENT-MAPPING (bekræftet mod TCM sheng-cyklus)

| Fase | Alder | Element | Årstid | Organ |
|------|-------|---------|--------|-------|
| 1 | 0-7 | TRÆ | Forår | Lever |
| 2 | 7-14 | TRÆ | Forår | Lever |
| 3 | 14-21 | ILD | Sommer | Hjerte |
| 4 | 21-28 | JORD | Sen sommer | Milt |
| 5 | 28-35 | JORD | Sen sommer | Milt |
| 6 | 35-42 | METAL | Efterår | Lunge |
| 7 | 42-49 | METAL | Efterår | Lunge |
| 8 | 49-56 | VAND | Vinter | Nyre |
| 9 | 56-63 | TRÆ | Andet Forår | Lever (Hun) |

---

## ISABELLES STEMME — KRITISK

Al tekst skal lyde som Isabelle skrev den — personlig, poetisk, tentativ:
- Brug "måske", "kan", "noget i dig"
- ALDRIG "det er vigtigt at", "husk at", "man skal"
- 15-30 ord per sætning, naturligt flow
- Danske diskurspartikler: "nemlig", "jo", "faktisk"

## INKLUSIVITET — KRITISK

Appen er for ALLE kvinder — med eller uden børn, i forhold eller single.
Relationer er VALGFRIE. Appen fungerer fuldt uden relationer.
Fokus er på HENDE SELV først.

---

## GOTCHAS

1. `arc-nav.js` er DEAD CODE — loaded men aldrig initialiseret
2. `Router.navigate()` er den ENESTE måde at navigere
3. `window._selectedPhase` gemmer fase til livsfase-detail
4. `_bound` flag — ALTID check `if (el._bound) return` før event listeners
5. Service worker cache version SKAL bumpes før deploy (sw.js linje 1)
6. Datoer — brug `Storage.getLocalDateStr()`, ALDRIG `toISOString().split('T')[0]`
7. `setText(id, text)` og `setHTML(id, html)` til DOM-opdateringer
8. `getUserCycles()` returnerer null uden bruger/fødselsdato — check altid
9. Action bar auto-injiceres på niveau 2 skærme — tilføj aldrig manuelt

---

## DEPLOY

```bash
python3 -m http.server 8000    # Lokal udvikling
git add <specifikke-filer>     # ALDRIG git add .
git commit -m "beskrivelse"
git push origin main
```

**ALTID bump sw.js cache version før push!**

---

## GUIDES OG MATERIALER

| Fil | Indhold |
|-----|---------|
| `_guides/MASTERPLAN.md` | **HELHEDEN — læs altid først** |
| `_guides/DESIGN-SYSTEM.md` | Farver, fonts, komponenter |
| `_guides/ARCHITECTURE.md` | Filstruktur, dataflow, Portrait |
| `_guides/ROUTER.md` | Alle 44 routes |
| `_guides/COSTAR-PLAN.md` | Co-Star transformation (6 greb) |
| `bog/bogen-komplet.txt` | Hele bogen (376.000 tegn) |
| `bog/0022-co-star-diagnose.txt` | Co-Star analyse og diagnose |
| `bog/0024-element-mapping.txt` | TCM element-mapping (autoritativ) |
