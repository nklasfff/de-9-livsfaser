# MASTERPLAN — De 9 Livsfaser som levende spejl

> Denne plan er helheden. Ikke trin. Ikke dele.
> Alt påvirker alt — præcis som bogens cyklusser i cyklusser.
> Læs hele planen før du rører en eneste linje kode.

---

## VISIONEN I ÉN SÆTNING

Appen er et spejl der bevæger sig med hende — ikke et bibliotek hun browser.

---

## PRINCIPPET (fra Co-Star, overført til TCM)

Co-Star åbner med én sætning. Du genkender dig selv. Du kan gå dybere.
Hver gang du åbner, er det anderledes — fordi tiden har bevæget sig.
Relationer er vævet ind, ikke gemt bag en tab.

**Co-Stars princip:** appen VED hvem du er og TALER til dig.
**Vores unikke nøgle:** Co-Star bruger planeter (abstrakt). Vi bruger KROPPEN (mærkbar).
Organur-skiftet hver 2. time. Elementer i organer. Faser der er biologiske.
Når appen siger "din lever-tid begynder" — kan hun mærke det.
Det kan ingen astrologi-app. Det er vores differentiator.

---

## SYSTEMET (tre dimensioner, ét spejl)

Disse tre dimensioner er IKKE features der bygges separat.
De er tre facetter af det samme spejl — de virker samtidigt, altid.

### Dimension 1: JEG, NU

Hendes fem cyklusser lige nu — livsfase, årstid, måned, ugedag, organur —
smeltet sammen til én stemme. Portrait-systemet beregner allerede:
- Dominerende element (vægtet: livsfase x4, årstid x2, osv.)
- Klimatilstand (nærende flow, regulerende balance, osv.)
- Organur-resonans (matcher organur livsfasen?)
- Sekundært element

Alt dette TALER til hende — ikke som information i bokse,
men som Isabelles stemme der siger én ting der rammer.

**Materialet der driver det:**
- ELEMENT_FASE_ROTATION: 180 varianter (5 elementer x 9 faser x 4 varianter) — næsten ubrugt
- ELEMENT_FASE_DAGLIG: 45 daglige tekster (5 elementer x 9 faser)
- MORGEN_AFTEN_TEKST: 10 tekster (5 elementer x morgen/aften)
- ORGANUR_VINDUER: 12 blokke (tekst + råd + øvelse per 2-timers blok)
- Portrait.climate: klimatilstand der modificerer tonen

### Dimension 2: OS, NU

Hendes elementer møder hendes mors, datters, partners — lige nu.
Ikke bag en "Relationer"-tab. Vævet ind i spejlet.
"Dit Metal møder hendes Træ" er noget appen SIGER når det er relevant.

**Materialet der driver det:**
- TIDSREJSE_PAR: 25 par-dynamikker (element x element) med intro + råd + øvelse
- RELATION_DYBDE: 20 relationstekster
- TO_RYTMER_SAMTALE: samtaleopenere for par
- analyzeClimate(): beregner allerede element-interaktion (nærende/regulerende/parallel/modsat)
- cyclesAtDate(): kan beregne enhver persons cyklusser på enhver dato
- Bogen kapitel 16-17: FYLDIG par- og generations-materiale (se BOG-INTEGRATION nedenfor)

### Dimension 3: KROPPEN, NU

Organur-skiftet hver 2. time er hjerteslaget. Det gør at spejlet
aldrig er det samme. Kl. 7 er Mave-tid (Jord). Kl. 15 er Blære-tid (Vand).
Det ændrer ikke bare teksten — det ændrer hvad der er relevant,
hvilken praksis der passer, hvilken følelse der er naturlig.

**Materialet der driver det:**
- ORGAN_CLOCK: 12 organer med element og tidsblok
- ORGANUR_VINDUER: tekst + råd + øvelse for hvert organur
- YIN_YOGA_FULL: stillinger med element-tilknytning
- UDVIDET_HJAELP: 40 kort med tekst + råd + kost + øvelse
- Portrait.organResonance: matcher organur livsfasen?
- Bogen appendiks C+D: kroppens praksis + fødevarer/urter (se BOG-INTEGRATION)

---

## DYBDEMODELLEN (lodret, ikke vandret)

Brugeren bevæger sig DYBERE IND i dette øjeblik — ikke til SIDEN mellem kategorier.

```
OVERFLADE ──── Én sætning. Ét øjeblik. Hun genkender sig selv.
    │
    │          (tap/scroll)
    │
MELLEMLAG ──── Konteksten. Hvorfor hun føler det hun føler.
    │          Elementerne. Organur-skiftet. Kort, foldbart.
    │          Isabelles stemme. 2 billeder. 5 foldbare temaer.
    │          Relationer vævet ind. Kontekstuelle links.
    │
    │          ("Dyk dybere" — men kontekstuelt, ikke generisk)
    │
DYBDEN ─────── Bogens fulde rigdom. Praksis, refleksion, kost,
               temaer, relationer udfoldet. 8-12 sektioner
               med lotus-adskillere. formatExpandable(80).
               Alt fra data-expanded.js og bogen.
```

De 44 skærme der eksisterer er IKKE destinationer man navigerer til.
De er LAG AF DYBDE som appen trækker frem når de er relevante.
Forsiden er ikke én af mange skærme — forsiden ER appen.
Alt andet er dybde under forsiden.

### Hvad det betyder for navigation

**Bottom tabs forsvinder som primær navigation.**
Forsiden er spejlet. Alt andet nås derfra — kontekstuelt.

**Drawer-menuen bliver sekundær adgang** — for dem der vil finde
noget specifikt. Men den primære vej er altid: spejlet → dybere.

**Kontekstuelle links erstatter generiske pills.**
Ikke "Dyk dybere →" men "Dit Vand møder din datters Ild lige nu —
det forklarer noget." Hvert link er personligt og tidsbundet.

### Hvad det betyder for tid

Appen er ANDERLEDES kl. 7 og kl. 22. Ikke bare teksten.
Hvilke sektioner der vises først. Hvilken praksis der tilbydes.
Hvilken refleksion der stilles.

- **Morgen (05-11):** Fremadskuende. Praksis. Handling. "Hvad vil du give plads til i dag?"
- **Middag (11-17):** Nutidig. Mærk efter. Organur-bevidsthed. "Hvad mærker du lige nu?"
- **Aften (17-23):** Tilbageskuende. Refleksion. Journal. "Hvad vil du tage med fra i dag?"
- **Nat (23-05):** Stille. Minimal. "Slip. Sov. Kroppen arbejder."

---

## BOG-INTEGRATION — Hvordan bogen kommer med

Bogen (376.000 tegn) er autoriteten. Appen har allerede rigt indhold
i LIVSFASE_DETAIL (9 faser, hver med 15+ felter), men bogen har mere.

### Hvad bogen har som appen mangler

**Del 1 — Fundamentet:**
- Kap. 1: "Tre kvinder, tre sprog" — narrativet der gør relationer menneskelige
- Kap. 4: "Følelserne i kroppen" — kropslig forankring af hvert element
- Kap. 5: "Det vediske spor" — alternativ linse på faserne

**Del 2 — De ni faser:**
Hver fase har i bogen fyldigere versioner af:
- Temaer med fulde fortællinger (appen har korte)
- Kroppens praksis med detaljer (appen har overordnede)
- Refleksionsspørgsmål (bogen har flere og dybere)
- Fase-overgange med fulde beskrivelser

**Del 3 — Når faserne mødes (STORT UUDNYTTET):**
- Kap. 16: "To rytmer" — hendes 7-års, hans 8-års, par gennem årene,
  de steder det presser, hvad holder par sammen, når det ikke holder.
  LANGT fyldigere end TIDSREJSE_PAR.
- Kap. 17: "Når faserne mødes" — mor i hendes fase, barn i sin fase,
  søskende, veninder, arv. Tre-generations-dybden.
  LANGT fyldigere end RELATION_DYBDE.

**Appendikser (REFERENCE-MATERIALE):**
- A: TCM hurtig-reference
- B: Cyklusser i cyklusser (detaljer)
- C: Kroppens praksis (samlet oversigt)
- D: Fødevarer og urter (per element)
- E: Mandens 8-års cyklusser
- F: Videnskabens bekræftelse
- G: Universelle mønstre

### Hvordan bogen integreres

Bogens materiale skal TAGGES — markeres med:
- Hvilket element det handler om
- Hvilken fase det hører til
- Hvilken relation (par, mor-datter, søskende, veninder)
- Hvilken krop (organ, meridian, fødevare)
- Hvilken tid (morgen, aften, årstid)

Derefter kan motoren trække det rigtige stykke frem i det rigtige øjeblik.

**Konkret:**
1. Bogens fase-kapitler (7-15) → beriger LIVSFASE_DETAIL med de lag der mangler
2. Bogens relations-kapitler (16-17) → ny datastruktur: BOG_RELATIONER,
   tagget med element-kombinationer så motoren kan finde dem
3. Appendikser (A-G) → ny datastruktur: BOG_REFERENCE,
   tagget med element og fase for kontekstuel opslag

**Format:** Samme som eksisterende data — JS-objekter i en ny fil (data-bog.js),
tagget og tilgængelige for motoren. Isabelles stemme bevares ordret.

---

## BEREGNINGSMOTOR — Allerede på plads

Alt det tekniske fundament eksisterer og virker:

```
Storage.getUser() → { birthdate, name, ... }
  ↓
Calculations.allCycles(birthdate, now)
  ↓
{ lifePhase, season, weekday, organ, monthCycle, elements, age }
  ↓
Calculations.getWeightedDominant(cycles)
  ↓
Portrait: { element, climate, secondary, organResonance, resonance }
  ↓
SPEJLET: motoren VÆLGER hvad brugeren ser
```

**PHASE_DATA er korrekt** (bekræftet mod 0024 — TCM sheng-cyklus):
1. TRÆ (0-7), 2. TRÆ (7-14), 3. ILD (14-21), 4. JORD (21-28),
5. JORD (28-35), 6. METAL (35-42), 7. METAL (42-49), 8. VAND (49-56),
9. TRÆ (56-63) — Andet Forår

**LIVSFASE_DETAIL er rigt** — alle 9 faser har:
introText, organPar, smag, aarstid, følelser (balance/ubalance),
vediskKobling, livstemaer, psykOpgaver, kropTekst, sindTekst,
øvelse, kost, meridianStrygning, refleksioner, elementInfo,
fasensRåd (6-8 stk), kostDetaljer (fødevarer/urter/undgå),
ekstraRefleksioner (5-6 stk), overgangTekst, øvelser (5 stk med type),
relationerIFasen, balanceTekst, ubalanceTegn (fysiske/mentale/årsag),
centralFølelse (title + fyldig tekst), temaerNarrativer (3 stk),
denneFaseIDig, åretsRytme, elementEssay

---

## EKSISTERENDE MATERIALE — Komplet oversigt

### data.js (1172 linjer)
- LIVSFASE_DETAIL: 9 faser x 25+ felter — RIGT, KORREKT
- YIN_YOGA_FULL: stillinger med element-tilknytning
- REFLEKSION_DATA: 9 faser x 3 spørgsmål
- MENSTRUAL_WEEK_DATA: 4 uger med element/beskrivelse
- INNER_CLIMATE: element-interaktioner (nærende/regulerende/parallel/modsat)
- SHARE_TEMPLATES: dele-tekster
- Diverse hjælpe-data

### data-expanded.js (1172 linjer, 12 blokke)
1. MORGEN_AFTEN_TEKST: 5 elementer x morgen/aften (30 tekster)
2. ELEMENT_FASE_DAGLIG: 5 elementer x 9 faser (45 tekster)
2b. ELEMENT_FASE_ROTATION: 5 elementer x 9 faser x 4 varianter (180 tekster) — NÆSTEN UBRUGT
3. TEMA_DYBDE: 30 tematiske dybder
4. TIDSREJSE_PAR: 25 par-dynamikker (intro + råd + øvelse)
5. OVERGANGSALDER_SPECIFIK: ~40 tekster
6. RELATION_DYBDE: 20 relationstekster
7. UDVIDET_HJAELP: 40 kort (tekst + råd + kost + øvelse)
8. SJAELDNE_VINDUER: 15 tekster
9. CYKLUS_SKIFT_TEKST: 20 overgangstekster
10. AARSTID_ELEMENT_TEKST: 25 årstid-element tekster
11. ORGANUR_VINDUER: 12 organur-blokke (tekst + råd + øvelse)
12. EKSTRA_REFLEKSIONER_NY: 45 refleksioner

**Total: ~420+ snippets + 9 x 25+ fase-felter + bogen**

### Illustrationer (72 billeder)
Alle i assets/images/. Fase-illustrationer, lotus-dividers,
diagrammer, portræt, ikoner. Fuldt katalog i outputs/FIGUR-KATALOG.md.

---

## HVAD DER SKAL ÆNDRES (helheden, ikke dele)

### Overfladen transformeres

**FRA:** Forside med 16+ sektioner → 4 tabs → 44 skærme i kategorier
**TIL:** Spejl med ét øjeblik → kontekstuel dybde → bogens fulde rigdom

Konkret:
- Øjeblik-overlay ved åbning (buildOejeblik() — blender organur + element + klima)
- Forsiden forenkles: færre sektioner, de vigtigste FØRST (bestemt af tid og Portrait)
- Kontekstuelle links erstatter generiske pills
- Tid styrer rækkefølge og indhold
- Relationer væves ind, ikke separeres

### Motoren får myndighed

**FRA:** Portrait informerer tekst (farver, ord)
**TIL:** Portrait STYRER hvad brugeren ser (rækkefølge, links, indhold)

Konkret:
- Portrait bestemmer hvilke sektioner der vises først
- Portrait bestemmer hvilke links der tilbydes
- Portrait bestemmer hvilken praksis, refleksion, kost der præsenteres
- Tid (organur + morgen/middag/aften) modificerer alt

### Bogen integreres

**FRA:** Appen har sit eget indhold, bogen er separat
**TIL:** Bogens materiale er tagget og tilgængeligt for motoren

Konkret:
- data-bog.js: ny fil med bogens ekstra-materiale, tagget
- LIVSFASE_DETAIL beriges med bogens dybere fortællinger
- BOG_RELATIONER: par- og generationsmateriale fra kap. 16-17
- BOG_REFERENCE: appendiks-materiale, tagget per element/fase

### Deling bliver naturlig

**FRA:** Generisk del-knap
**TIL:** "Send dette til din mor" med personlig element-dynamik

Konkret:
- Øjeblikket kan deles som smukt billede (Instagram Stories-format)
- Relations-indsigter kan sendes direkte til den person de handler om
- Invitation-flow: "Vil du se din egen?" med app-link

---

## FILER DER SKAL LÆSES I ENHVER SESSION

Enhver session der arbejder på denne app SKAL starte med at læse:

1. `_guides/MASTERPLAN.md` — DENNE FIL (helheden)
2. `CLAUDE.md` — teknisk arkitektur, gotchas, konventioner
3. `_guides/DESIGN-SYSTEM.md` — farver, fonts, mønstre
4. `js/calculations.js` — PHASE_DATA, beregningsmotor
5. Den skærm der skal arbejdes på (screens/ + init-funktion i app.js)

---

## KILDE-DOKUMENTER

| Dokument | Indhold | Placering |
|----------|---------|-----------|
| 0007 | Bogen — 376.000 tegn, alle 9 faser, relationer, appendikser | Brugerens Downloads |
| 0009 | Co-Star navigation — hvordan lagene fungerer i praksis | Brugerens Downloads |
| 0022 | Diagnosen — de 6 greb, Co-Star-analyse, potentiale | Brugerens Downloads |
| 0024 | Korrekt element-mapping — TCM sheng-cyklus, 9 faser | Brugerens Downloads |
| 0025 | Intro-session — rækkefølge, kontekst | Brugerens Downloads |

---

## KORREKT ELEMENT-MAPPING (fra 0024, bekræftet)

| Fase | Alder | Element | Årstid | Organ-akse | Livstema |
|------|-------|---------|--------|------------|----------|
| 1 | 0-7 | TRÆ | Forår | Lever/Nyre | Spiring, grundlag |
| 2 | 7-14 | TRÆ | Forår | Lever/Nyre | Vækst, Tian Gui ankommer |
| 3 | 14-21 | ILD | Sommer | Hjerte | Identitet, passion, Shen modnes |
| 4 | 21-28 | JORD | Sen sommer | Milt | Stabilitet, frugtbarhedens top |
| 5 | 28-35 | JORD | Sen sommer | Milt | Nærende, konsolidering |
| 6 | 35-42 | METAL | Efterår | Lunge | Forfining, første nedgang |
| 7 | 42-49 | METAL | Efterår | Lunge | Afsked, transformation, menopause |
| 8 | 49-56 | VAND | Vinter | Nyre | Stilhed, fordybelse, ny homeostase |
| 9 | 56-63 | TRÆ | Andet Forår | Lever (Hun) | Genfødsel, fri Qi, autentisk stemme |

**Sheng-logik:** TRÆ→ILD→JORD→METAL→VAND→TRÆ (én komplet runde + ny begyndelse)
**Symmetri:** Livet begynder i Træ og genfødes i Træ. Første Træ = fysisk vækst. Andet Træ = åndelig vækst.
