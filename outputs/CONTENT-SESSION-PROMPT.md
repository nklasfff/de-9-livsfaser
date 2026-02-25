# CONTENT-SESSION: Skriv Alt Nyt Indhold til De 9 Livsfasers Energi

> **Denne prompt er til en separat Claude Code content-session.**
> Kopiér alt herunder ind i en ny `claude --worktree content` session.

---

## DIN OPGAVE

Du skal skrive ~25.000-35.000 ord nyt dansk indhold til en PWA-app der hedder "De 9 Livsfasers Energi". Alt indhold skal skrives direkte som JavaScript datastrukturer der kan indsættes i filen `js/data.js`.

**Du skriver IKKE kode. Du skriver TEKST i JavaScript-format.**

Appen er en companion til en dansk bog om kinesisk medicin (TCM) og fem-elementer (Vand, Træ, Ild, Jord, Metal) kombineret med ni livsfaser (0-63 år, hver 7 år). Målgruppen er danske kvinder 28-63 år.

---

## ISABELLES STEMME — DET VIGTIGSTE AF ALT

Al tekst skal lyde som forfatteren Isabelle Evita Soendergaard skrev den. Hun er:

- **Poetisk men jordnær** — bruger billeder fra naturen, kroppen, årstiderne
- **Tentativ** — "måske", "kan", "noget i dig" — aldrig skråsikker
- **Personlig** — taler direkte til "du", deler egne erfaringer
- **Inkluderende** — aldrig forudsætter børn, partner eller specifik livssituation
- **Dansk med naturlige diskurspartikler** — "nemlig", "jo", "faktisk", "egentlig"

### ALDRIG:
- "Det er vigtigt at..." / "Husk at..." / "Man skal..."
- Instruerende tone, ekspertstemme, klinisk sprog
- Engelske låneord (brug danske)
- Sætninger over 30 ord

### ALTID:
- 15-30 ord per sætning, naturlig flow
- Spørgsmål der inviterer til refleksion
- Kropslige billeder ("mærk", "sid med det", "lad det synke")
- Årstids- og naturbilleder

### EKSEMPLER FRA DEN EKSISTERENDE APP:

**Godt (dominant VAND):**
> "Vandet kalder dybt i dig lige nu. Det er måske derfor du mærker en trang til at trække dig. Det er ikke svaghed — det er din livsfase, årstid og organur der taler med én stemme."

**Godt (empati ved stress):**
> "Det du mærker giver mening. Stress er kroppen der råber på noget helt basalt — hvile, vand, stilhed. Måske behøver du ikke løse noget lige nu. Måske behøver du bare at lande."

**Godt (relation-anbefaling):**
> "Måske kan I mødes i ro. En gåtur ved vandet, en stille aften. Vand har ikke brug for ord, men for tilstedeværelse."

**Godt (centralfølelse, lang tekst):**
> "Frygt er vand-elementets følelse, og i de tidlige år er den overalt. Et barn, der møder verden for første gang, lever med frygt som en konstant baggrundslyd — frygten for det ukendte, for mørket, for adskillelse."

---

## DE FEM ELEMENTER — KERNEVIDEN

Hvert element har specifikke kvaliteter i TCM:

### VAND (水)
- **Organer:** Nyrer, Blære
- **Årstid:** Vinter
- **Følelse:** Frygt ↔ Tillid/Visdom
- **Smag:** Salt
- **Sanseorgan:** Ører
- **Kropsvæv:** Knogler
- **Farve:** Sort/mørkeblå
- **Kvalitet:** Dybde, intuition, stilhed, opbygning
- **Ubalance:** Tilbagetrækning, frygt, isolation, kulde
- **Livsfaser:** 1 (0-7) og 2 (7-14)

### TRÆ (木)
- **Organer:** Lever, Galdeblære
- **Årstid:** Forår
- **Følelse:** Vrede/frustration ↔ Venlighed/kreativitet
- **Smag:** Sur
- **Sanseorgan:** Øjne
- **Kropsvæv:** Sener
- **Farve:** Grøn
- **Kvalitet:** Vækst, retning, handlekraft, fleksibilitet
- **Ubalance:** Frustration, vrede, manglende retning, stivhed
- **Livsfaser:** 3 (14-21) og 4 (21-28)

### ILD (火)
- **Organer:** Hjerte, Tyndtarm (+ Perikardium, Tredobbelt Varmer)
- **Årstid:** Sommer
- **Følelse:** Angst/overexcitering ↔ Glæde/forbindelse
- **Smag:** Bitter
- **Sanseorgan:** Tunge
- **Kropsvæv:** Blodkar
- **Farve:** Rød
- **Kvalitet:** Forbindelse, varme, kommunikation, udstråling
- **Ubalance:** Overexcitering, angst, mani, tab af forbindelse
- **Livsfaser:** 5 (28-35)

### JORD (土)
- **Organer:** Milt, Mave
- **Årstid:** Sensommer/Eftersommer
- **Følelse:** Bekymring/grublen ↔ Omsorg/stabilitet
- **Smag:** Sød
- **Sanseorgan:** Mund
- **Kropsvæv:** Muskler
- **Farve:** Gul/orange
- **Kvalitet:** Næring, fundament, stabilitet, omsorg
- **Ubalance:** Bekymring, overkontrol, selvopofring, grublen
- **Livsfaser:** 6 (35-42)

### METAL (金)
- **Organer:** Lunger, Tyktarm
- **Årstid:** Efterår
- **Følelse:** Sorg ↔ Klarhed/accept
- **Smag:** Skarp
- **Sanseorgan:** Næse
- **Kropsvæv:** Hud
- **Farve:** Hvid/sølv
- **Kvalitet:** Essens, klarhed, slip, renhed
- **Ubalance:** Sorg, perfektionisme, ensomhed, rigiditet
- **Livsfaser:** 7 (42-49), 8 (49-56), 9 (56-63)

---

## DE NI LIVSFASER

| Fase | Alder | Element | Navn | Kernekvalitet |
|------|-------|---------|------|---------------|
| 1 | 0-7 | VAND | Den spæde begyndelse | Tillid, sansning, fundament |
| 2 | 7-14 | VAND→TRÆ | Udforskning | Nysgerrighed, leg, fantasi |
| 3 | 14-21 | TRÆ | Opvågning | Identitet, grænser, passion |
| 4 | 21-28 | TRÆ→ILD | Udfoldelse | Retning, ambition, kærlighed |
| 5 | 28-35 | ILD | Forbindelse | Relationer, hjerte, karriere |
| 6 | 35-42 | JORD | Modning | Fundament, omsorg, dybde |
| 7 | 42-49 | METAL | Forvandling | Overgang, klarhed, accept |
| 8 | 49-56 | METAL→VAND | Essens | Visdom, slip, frihed |
| 9 | 56-63 | VAND | Fuldendelse | Integration, arv, helhed |

---

## CONTENT-BLOKKE DER SKAL SKRIVES

Alt output skal være gyldigt JavaScript i de eksakte formater beskrevet nedenfor. Brug danske tegn direkte (æ, ø, å) — ingen unicode escapes nødvendige.

---

### BLOK 1: MORGEN_AFTEN_TEKST (30 snippets)
**Formål:** Forsiden viser forskellig tekst morgen vs. aften, per element.

```javascript
const MORGEN_AFTEN_TEKST = {
  'VAND': {
    morgen: [
      'Morgenen hører til stilheden. Dit vand-element inviterer dig til at starte langsomt — lad verden vente lidt endnu.',
      'Nyrernes energi samler sig i de tidlige timer. Måske en kop varmt vand, før du giver dig til dagens krav.',
      'Vand strømmer nedad. Lad din morgen starte i fødderne — mærk gulvet, mærk tyngden, mærk at du er her.'
    ],
    aften: [
      'Aftenen er vandets naturlige tid. Lad tankerne synke som sten i en stille sø. De finder selv deres plads.',
      'Nyrerne hviler sig bedst mellem 17 og 19. Giv dig selv lov til at trække dig — det er ikke dovenskab, det er biologi.',
      'Mørket hører til vand-elementet. Sluk lyset lidt tidligere i aften. Lad kroppen mærke at dagen er ved at være omme.'
    ]
  },
  'TRÆ': {
    morgen: [
      // 3 morgen-tekster for TRÆ
    ],
    aften: [
      // 3 aften-tekster for TRÆ
    ]
  },
  'ILD': {
    morgen: [ /* 3 */ ],
    aften: [ /* 3 */ ]
  },
  'JORD': {
    morgen: [ /* 3 */ ],
    aften: [ /* 3 */ ]
  },
  'METAL': {
    morgen: [ /* 3 */ ],
    aften: [ /* 3 */ ]
  }
};
```

**Krav:**
- 3 morgen-tekster + 3 aften-tekster per element = 30 total
- Hver tekst 25-50 ord
- Morgen: blidere, åbnende, inviterende
- Aften: afsluttende, reflekterende, rolige
- Referér til elementets organ, årstid eller kvalitet
- VAND-eksemplerne ovenfor er korrekte i stil — skriv resten

---

### BLOK 2: ELEMENT_FASE_DAGLIG (45 snippets)
**Formål:** Daglig læsning der kombinerer brugerens element + livsfase.

```javascript
const ELEMENT_FASE_DAGLIG = {
  'VAND': {
    1: 'Du er i Fase 1s vand, og dit dominerende element er også vand. Dobbelt dybde. Din krop husker stadig den allerførste stilhed — den tid hvor alt bare var sansning og nærhed. Lyt til den i dag.',
    2: 'Vand og Fase 2s begyndende vækst. Noget nyt vil gerne spire i dig, men det har brug for dybde først. Lad nysgerrigheden komme fra stilheden.',
    3: '...',
    // osv. for fase 3-9
  },
  'TRÆ': {
    1: '...',
    // osv. for fase 1-9
  },
  // osv. for ILD, JORD, METAL
};
```

**Krav:**
- 5 elementer × 9 faser = 45 tekster
- Hver tekst 40-70 ord
- Kombiner elementets kvalitet med fasens livstema
- Teksten skal være meningsfuld for en kvinde der ER i den fase og har det element som dominant
- Referér til fasens krop/sind/følelser

---

### BLOK 3: TEMA_DYBDE (6 temaer × 5 elementer = 30 tekster)
**Formål:** Dybe, substansielle tekster om livstemaer set gennem hvert elements linse.

```javascript
const TEMA_DYBDE = {
  overgangsalder: {
    'VAND': 'Overgangsalderen i vand-elementet handler om...',
    'TRÆ': '...',
    'ILD': '...',
    'JORD': '...',
    'METAL': '...'
  },
  graviditet_og_fertilitet: {
    'VAND': '...',
    // osv.
  },
  stress_og_udbraendthed: {
    // osv.
  },
  sorg_og_tab: {
    // osv.
  },
  ensomhed_og_isolation: {
    // osv.
  },
  forandring_og_overgang: {
    // osv.
  }
};
```

**Krav:**
- Hver tekst 150-250 ord (dette er dybde-content)
- Total: 30 tekster × ~200 ord = ~6.000 ord
- Skal bygge på ægte TCM-viden (se referencer nedenfor)
- Inkluderende — ikke alle kvinder oplever overgangsalder ens, ikke alle har børn
- Hver tekst skal indeholde: (1) hvad elementet siger om temaet, (2) hvordan det mærkes i kroppen, (3) en invitation til refleksion

**TCM-referencer for hvert tema:**

**Overgangsalder:**
- VAND: Kidney Yin-mangel — natursved, tørhed, angst. Nyrernes essens (Jing) aftager naturligt
- TRÆ: Lever Qi-stagnation — irritabilitet, humørsvingninger, hovedpine. Leveren kan ikke bevæge energien frit
- ILD: Hjerte-ild stiger — hedeture, hjertebanken, søvnløshed. Yin-mangel lader ilden stige ukontrolleret
- JORD: Milt Qi-mangel — træthed, vægtændringer, fordøjelsesbesvær. Milten kan ikke transformere fugt
- METAL: Lunge Qi falder — tør hud, følelsesmæssig sårbarhed, sorg over ungdommens tab

**Graviditet og fertilitet:**
- VAND: Kidney Yang som rod for fertilitet. Jing som grundlag for nyt liv
- TRÆ: Lever sikrer fri Qi-flow til livmoderen. Blod-stase kan blokere
- ILD: Hjertets forbindelse til livmoderen (Bao Mai). Glæde som nærende kraft
- JORD: Miltens evne til at producere blod. Næring som fundament
- METAL: Lungernes evne til at slippe — at give slip på kontrol og lade livet komme

**Stress og udbrændthed:**
- VAND: Binyretræthed, Kidney Qi-udtømning. Frygt som kronisk baggrund
- TRÆ: Lever Qi-stagnation, hovedpine, muskelspændinger. Frustration uden udløb
- ILD: Hjerte-overbelastning, angst, søvnløshed. For mange forbindelser, for lidt grounding
- JORD: Milt-overbelastning fra bekymring. Grublecirkler, dårlig fordøjelse
- METAL: Lungernes tilbagetrækning. Perfektionisme som drivkraft, sorg som resultat

**Sorg og tab:**
- VAND: Dybeste sorg — den ordløse, den kropslige. Nyrerne bærer gammel smerte
- TRÆ: Sorg som stagnation — væksten stopper, leveren lukker ned
- ILD: Sorg som ensomhed — hjertet mister sin forbindelse
- JORD: Sorg som rodløshed — at miste tryghedens fundament
- METAL: Sorg som metals naturlige bevægelse — at give slip, at lade gå

**Ensomhed og isolation:**
- VAND: Den dybe, ordløse ensomhed. Nyrernes urmenneskelige længsel efter forbindelse
- TRÆ: Ensomhed som mangel på retning — at vokse alene uden spejling
- ILD: Hjertets primære smertetilstand — afskåret fra andre
- JORD: At give uden at modtage. Tømning af miltens ressourcer
- METAL: Det essentielle fravær. At miste noget vigtigt og ikke kunne erstatte det

**Forandring og overgang:**
- VAND: Frygt for det ukendte. Tillid som modgift
- TRÆ: Frustration over begrænsning. Vækst som kræver nye rammer
- ILD: Tab af forbindelse i overgangen. At finde varme i det nye
- JORD: Fundamentet ryster. At genopbygge tryghed fra bunden
- METAL: Slip — det der var, er ikke længere. At finde essensen i det nye

---

### BLOK 4: TIDSREJSE_PAR (25 tekster)
**Formål:** Når brugeren ser sig selv + en relation på en given dato, vises denne tekst baseret på element-par.

```javascript
const TIDSREJSE_PAR = {
  'VAND_VAND': {
    intro: 'Dobbelt vand. I deler den samme dybe stilhed. Det kan føles som at sidde ved en sø sammen — ingen behøver sige noget.',
    raad: 'Lad stilheden være nok. Ikke alt behøver ord. Jeres forbindelse lever i det usagte.',
    oevelse: 'Sid sammen i fem minutter uden at tale. Bare vær. Mærk hvordan kroppen falder til ro i den andens nærvær.'
  },
  'VAND_TRÆ': {
    intro: '...',
    raad: '...',
    oevelse: '...'
  },
  // osv. for alle 25 kombinationer (5×5)
};
```

**Krav:**
- 25 kombinationer (VAND_VAND, VAND_TRÆ, VAND_ILD, VAND_JORD, VAND_METAL, TRÆ_VAND, TRÆ_TRÆ, ... METAL_METAL)
- Hvert par har: `intro` (40-60 ord), `raad` (20-40 ord), `oevelse` (30-50 ord)
- Bruger er altid det FØRSTE element, relationen er det ANDET
- Inkludér TCM-cyklus-logik: nærer-par (vand→træ), udfordrer-par (vand↔ild), spejl-par (vand↔vand)
- Brug {navn} som placeholder for relationens navn

---

### BLOK 5: OVERGANGSALDER_SPECIFIK (15 tekster)
**Formål:** Specifikt indhold for kvinder i overgangsalderen (typisk fase 7-8, alder 42-56).

```javascript
const OVERGANGSALDER_SPECIFIK = {
  intro: 'Overgangsalderen er ikke et forfald — det er en forvandling. I kinesisk medicin betragtes den som en naturlig frigørelse af den energi, der tidligere gik til menstruation og potentiel fertilitet. Den energi er stadig din — den skal bare finde en ny vej.',

  faser: {
    tidlig: {
      // Perimenopause (typisk 42-47)
      krop: '...',   // 100-150 ord om kropslige ændringer set gennem TCM
      sind: '...',   // 100-150 ord om mentale/emotionelle ændringer
      element_raad: {
        'VAND': '...', // 50-80 ord specifikt råd
        'TRÆ': '...',
        'ILD': '...',
        'JORD': '...',
        'METAL': '...'
      }
    },
    midt: {
      // Aktiv menopause (typisk 47-52)
      krop: '...',
      sind: '...',
      element_raad: { /* 5 elementer */ }
    },
    sen: {
      // Postmenopause (typisk 52+)
      krop: '...',
      sind: '...',
      element_raad: { /* 5 elementer */ }
    }
  },

  hedeture: '...', // 80-120 ord om hedeture i TCM-perspektiv
  soevn: '...',    // 80-120 ord om søvnproblemer i overgangsalderen
  humoor: '...',   // 80-120 ord om humørsvingninger
  libido: '...',   // 80-120 ord om seksualitet og intimitet (i Isabelles blide stemme)

  refleksioner: [
    'Hvad har du fået frigivet ved at slippe menstruationen?',
    'Hvad ved du nu, som du ikke vidste for ti år siden?',
    'Hvilken kvinde er du ved at blive — og hvad har hun brug for?',
    'Hvad ville du sige til din krop, hvis du talte til den som en veninde?',
    'Er der noget du har ventet med at gøre — og er tiden måske nu?'
  ]
};
```

**Krav:**
- Total ~3.000 ord
- Byg på ægte TCM-viden om menopause (Kidney Yin-mangel, Lever Qi-stagnation, Heart Fire)
- ALDRIG nedladende eller medicaliserende — dette er en naturlig overgang
- Inkludér kropslige øvelser og kostråd der er forankret i TCM
- Isabelles stemme hele vejen igennem

---

### BLOK 6: RELATION_DYBDE (5 elementer × 4 relationstyper = 20 tekster)
**Formål:** Dybere tekster om element-møder i specifikke relationstyper.

```javascript
const RELATION_DYBDE = {
  partner: {
    'VAND': 'At leve med en partner i vand-energi er som at dele et hus med havet...',
    'TRÆ': '...',
    'ILD': '...',
    'JORD': '...',
    'METAL': '...'
  },
  mor: {
    'VAND': '...',
    // osv.
  },
  datter: {
    'VAND': '...',
    // osv.
  },
  veninde: {
    'VAND': '...',
    // osv.
  }
};
```

**Krav:**
- Hver tekst 80-120 ord
- partner: intim, ligeværdig, tæt
- mor: respektfuld, nuanceret, anerkendende af kompleksitet
- datter: varm, beskyttende men ikke kontrollerende
- veninde: åben, nysgerrig, legende
- Brug {navn} som placeholder

---

### BLOK 7: STRESS_DEPRESSION_ENSOMHED (25 tekster)
**Formål:** Udvidet "hjælp mig nu" content — dybere end de eksisterende empati-snippets.

```javascript
const UDVIDET_HJAELP = {
  stress: {
    'VAND': {
      dyb: '...', // 100-150 ord — dybere forklaring end HJAELP_KROP
      oevelse: '...', // 40-60 ord — en specifik øvelse
      kost_raad: '...' // 30-40 ord — hvad der hjælper lige nu
    },
    'TRÆ': { dyb: '...', oevelse: '...', kost_raad: '...' },
    'ILD': { /* */ },
    'JORD': { /* */ },
    'METAL': { /* */ }
  },
  depression: {
    // 5 elementer × { dyb, oevelse, kost_raad }
  },
  ensomhed: {
    // 5 elementer × { dyb, oevelse, kost_raad }
  },
  angst: {
    // 5 elementer × { dyb, oevelse, kost_raad }
  },
  udbraendthed: {
    // 5 elementer × { dyb, oevelse, kost_raad }
  }
};
```

**Krav:**
- 5 temaer × 5 elementer × 3 felter = 75 snippets, ~3.750 ord total
- `dyb`: forklarer hvad der sker i kroppen/sindet fra TCM-perspektiv
- `oevelse`: én konkret, umiddelbar øvelse (åndedræt, bevægelse, berøring)
- `kost_raad`: én konkret ting at spise/drikke lige nu
- VIGTIGT: depression-content skal ALDRIG erstatte professionel hjælp. Inkludér altid en blid sætning som "Og husk at du altid kan tale med nogen — din læge, en veninde, en linje der lytter"

---

### BLOK 8: SJÆLDNE_VINDUER (15 tekster)
**Formål:** Tekster til "sjældne vinduer" — når flere cyklusser rammer samme element.

```javascript
const SJAELDNE_VINDUER = {
  dobbelt: {
    // Når 2 cyklusser deler element
    'VAND': 'To af dine cyklusser mødes i vand lige nu. Det er en invitation til at gå dybere end normalt — din intuition er skærpet, og kroppen beder om stilhed.',
    'TRÆ': '...',
    'ILD': '...',
    'JORD': '...',
    'METAL': '...'
  },
  tredobbelt: {
    // Når 3 cyklusser deler element — sjældnere
    'VAND': 'Tre cyklusser i vand. Det er sjældent, og det er kraftfuldt. Alt i dig peger mod dybden lige nu. Respektér det — dette er et vindue der ikke varer længe.',
    'TRÆ': '...',
    'ILD': '...',
    'JORD': '...',
    'METAL': '...'
  },
  fuld_resonans: {
    // Når 4+ cyklusser deler element — meget sjældent
    'VAND': 'Fuld vand-resonans. Det sker næsten aldrig. Alt i dig synger den samme tone — dybde, stilhed, intuition. Brug dette vindue til noget der betyder noget for dig.',
    'TRÆ': '...',
    'ILD': '...',
    'JORD': '...',
    'METAL': '...'
  }
};
```

**Krav:**
- 3 niveauer × 5 elementer = 15 tekster
- `dobbelt`: 30-50 ord, dagligdags-poetisk
- `tredobbelt`: 40-60 ord, mere intenst
- `fuld_resonans`: 50-80 ord, sjældent og betydningsfuldt
- Giv en klar følelse af "dette er specielt" — men aldrig dramatisk

---

### BLOK 9: CYKLUS_SKIFT_TEKST (20 tekster)
**Formål:** Tekster der vises når en cyklus skifter element (f.eks. ugedag skifter fra Jord til Metal).

```javascript
const CYKLUS_SKIFT_TEKST = {
  // Nøgle: fra_element → til_element (kun de 20 mulige skift)
  'VAND_TRÆ': 'Vandet giver plads til vækst. Du mærker måske en ny energi — noget der vil fremad. Lad den komme, uden at forcere.',
  'VAND_ILD': 'Fra stilhed til flamme. Skiftet kan føles abrupt — nyd den nye varme, men husk at holde forbindelsen til dybden.',
  'VAND_JORD': 'Dybden finder fundament. Du bevæger dig fra det flydende til det faste — en god dag at skabe orden.',
  'VAND_METAL': 'Vand møder klarhed. Fra intuition til essens. Hvad ved du allerede, som du ikke har sagt højt?',
  'TRÆ_VAND': '...',
  'TRÆ_ILD': '...',
  'TRÆ_JORD': '...',
  'TRÆ_METAL': '...',
  'ILD_VAND': '...',
  'ILD_TRÆ': '...',
  'ILD_JORD': '...',
  'ILD_METAL': '...',
  'JORD_VAND': '...',
  'JORD_TRÆ': '...',
  'JORD_ILD': '...',
  'JORD_METAL': '...',
  'METAL_VAND': '...',
  'METAL_TRÆ': '...',
  'METAL_ILD': '...',
  'METAL_JORD': '...'
};
```

**Krav:**
- 20 skift-tekster, hver 30-50 ord
- Inkludér TCM-cyklus-logik: nærende skift (vand→træ) føles naturlige, udfordrende skift (vand→ild) føles mere abrupte
- De 4 VAND-eksempler ovenfor er korrekte i stil — skriv resten

---

### BLOK 10: AARSTID_ELEMENT_TEKST (25 tekster)
**Formål:** Tekster der kombinerer den aktuelle årstid med brugerens dominerende element.

```javascript
const AARSTID_ELEMENT_TEKST = {
  vinter: {
    'VAND': 'Vinter og vand. Dobbelt dybde, dobbelt stilhed. Dette er din årstid — alt i naturen bekræfter det din krop allerede ved: det er tid til at samle kræfter.',
    'TRÆ': 'Vinter med træ-energi. Der er noget i dig der vil vokse, men årstiden beder dig vente. Tillad spændingen — frøet har brug for mørket.',
    'ILD': '...',
    'JORD': '...',
    'METAL': '...'
  },
  foraar: {
    // 5 elementer
  },
  sommer: {
    // 5 elementer
  },
  sensommer: {
    // 5 elementer
  },
  efteraar: {
    // 5 elementer
  }
};
```

**Krav:**
- 5 årstider × 5 elementer = 25 tekster
- Hver tekst 40-70 ord
- Når årstid og element matcher (vinter+vand, forår+træ, sommer+ild, sensommer+jord, efterår+metal): kraftigere, bekræftende
- Når de ikke matcher: poetisk spænding, invitation til at holde begge energier

---

### BLOK 11: ORGANUR_VINDUER (12 tekster)
**Formål:** Korte tekster der vises når brugeren er i et bestemt organurs tidsvindue.

```javascript
const ORGANUR_VINDUER = {
  '03-05': { organ: 'Lunger', element: 'METAL', tekst: 'Lungernes tid. Mellem 3 og 5 om morgenen renser kroppen sig. Hvis du vågner nu, er det måske metalelementet der arbejder — en invitation til at slippe noget i søvne.' },
  '05-07': { organ: 'Tyktarm', element: 'METAL', tekst: '...' },
  '07-09': { organ: 'Mave', element: 'JORD', tekst: '...' },
  '09-11': { organ: 'Milt', element: 'JORD', tekst: '...' },
  '11-13': { organ: 'Hjerte', element: 'ILD', tekst: '...' },
  '13-15': { organ: 'Tyndtarm', element: 'ILD', tekst: '...' },
  '15-17': { organ: 'Blære', element: 'VAND', tekst: '...' },
  '17-19': { organ: 'Nyrer', element: 'VAND', tekst: '...' },
  '19-21': { organ: 'Perikardium', element: 'ILD', tekst: '...' },
  '21-23': { organ: 'Tredobbelt Varmer', element: 'ILD', tekst: '...' },
  '23-01': { organ: 'Galdeblære', element: 'TRÆ', tekst: '...' },
  '01-03': { organ: 'Lever', element: 'TRÆ', tekst: '...' }
};
```

**Krav:**
- 12 organer × 1 tekst = 12 tekster
- Hver tekst 40-60 ord
- Relatér til hverdagssituationer (morgenvågning, frokostpause, aftenro)
- Inkludér et praktisk tip

---

### BLOK 12: EKSTRA_REFLEKSIONER (45 spørgsmål)
**Formål:** Flere refleksionsspørgsmål per fase — de nuværende 3 per fase er for få.

```javascript
const EKSTRA_REFLEKSIONER_NY = {
  1: [
    'Hvad er det allerførste du kan huske — og hvilken følelse bærer det?',
    'Hvem holdt dig, da du var bange? Og hvem holder dig nu?',
    'Hvad ville dit barn-jeg sige, hvis det kunne se dig i dag?',
    'Er der en frygt fra din barndom, du stadig bærer med dig?',
    'Hvad betyder tryghed for dig — helt konkret, helt kropsligt?'
  ],
  2: [
    // 5 refleksionsspørgsmål for fase 2
  ],
  // osv. for fase 3-9
};
```

**Krav:**
- 9 faser × 5 spørgsmål = 45 spørgsmål
- Hvert spørgsmål 10-25 ord
- Åbne spørgsmål der inviterer til skriven
- Relateret til fasens kernekvalitet
- ALDRIG forudsæt børn eller partner

---

## LEVERINGSFORMAT

Skriv hver blok som et komplet, gyldigt JavaScript `const`-statement. Brug denne rækkefølge:

1. MORGEN_AFTEN_TEKST
2. ELEMENT_FASE_DAGLIG
3. TEMA_DYBDE
4. TIDSREJSE_PAR
5. OVERGANGSALDER_SPECIFIK
6. RELATION_DYBDE
7. UDVIDET_HJAELP
8. SJAELDNE_VINDUER
9. CYKLUS_SKIFT_TEKST
10. AARSTID_ELEMENT_TEKST
11. ORGANUR_VINDUER
12. EKSTRA_REFLEKSIONER_NY

Skriv `window.BLOK_NAVN = BLOK_NAVN;` i bunden af hver blok, så den eksporteres til appen.

Gem alt i filen `js/data-expanded.js` (ny fil, separat fra det eksisterende data.js).

---

## TOTALT FORVENTET OUTPUT

| Blok | Snippets | Estimerede ord |
|------|----------|---------------|
| MORGEN_AFTEN_TEKST | 30 | 1.200 |
| ELEMENT_FASE_DAGLIG | 45 | 2.700 |
| TEMA_DYBDE | 30 | 6.000 |
| TIDSREJSE_PAR | 75 (25×3 felter) | 3.750 |
| OVERGANGSALDER_SPECIFIK | ~25 felter | 3.000 |
| RELATION_DYBDE | 20 | 2.000 |
| UDVIDET_HJAELP | 75 | 3.750 |
| SJAELDNE_VINDUER | 15 | 750 |
| CYKLUS_SKIFT_TEKST | 20 | 900 |
| AARSTID_ELEMENT_TEKST | 25 | 1.500 |
| ORGANUR_VINDUER | 12 | 600 |
| EKSTRA_REFLEKSIONER_NY | 45 | 600 |
| **Total** | **~420 snippets** | **~26.750 ord** |

---

## VIGTIGE NOTER

1. **Alt skal være på dansk** — naturligt, levende dansk med æ, ø, å
2. **Isabelles stemme HELE VEJEN** — aldrig skifte til ekspertstemme eller klinisk sprog
3. **TCM skal være korrekt** — brug de rigtige organ-par, element-relationer, cyklus-retninger
4. **Inkluderende** — aldrig forudsæt børn, partner, bestemt seksualitet eller livssituation
5. **Gem som `js/data-expanded.js`** — én samlet fil med alle 12 blokke
6. **Test at JavaScript er gyldigt** — ingen manglende kommaer, anførselstegn eller brackets
7. **Brug enkelt-anførselstegn** for strings (matcher eksisterende data.js-stil)
8. **Escape kun single quotes** i teksten med `\'` — danske tegn (æøå) direkte
9. **Brug `\u2014` for tankestreg** (em-dash) og `\n\n` for linjeskift i lange tekster
