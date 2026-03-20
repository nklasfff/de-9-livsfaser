# Design System

## Fonts (self-hosted WOFF2)
```css
--font-serif: 'Playfair Display', Georgia, 'Times New Roman', serif;
--font-sans: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```
Playfair Display: Regular, Medium, Italic, Medium Italic
DM Sans: Light (300), Regular (400), Medium (500)

## Colors (tokens.css)
```css
--bg: #FDFCFB;
--text-dark: #2a2520; --text-body: #3a3530; --text-mid: #555; --text-light: #888;
--blaa: #6c82a9; --blaa-light: #889ec3; --lilla: #6B5F7B; --lilla-light: #8B7D9B;
--tone-cyklusser: #6c82a9; --tone-relationer: #7b7a9e; --tone-praksis: #7a908b;
--tone-rejse: #8a96a9; --tone-vinduer: #6B5F7B;
--error: #C85A54; --shadow-card: 0 2px 10px rgba(0,0,0,0.04); --radius: 14px;
```

## RGBA Opacity Scale (section-toned components)
```
0.02-0.04  Background fills    |  0.06-0.08  Borders
0.10-0.12  Active chips/badges |  0.15-0.18  SVG fills, hover
0.25-0.30  SVG strokes         |  0.40       Arrows, secondary
```

## Skaerm-moenster (primaer + sekundaer — `.s` sektioner)
```
Rytme: BILLEDE → kort tekst → BOKS → kort tekst → BILLEDE → kort tekst → FOLDBAR → INTERAKTION → links
```
- `<div class="s">` for alle sektioner (30px top-padding)
- 2 illustrationer per skaerm (figur 1 oeverst, figur 2 midt/nede)
- Korte tekster: `formatExpandable(tekst, 15)` — aldrig fulde afsnit
- 5 foldbare temaer (klik for at aabne, aldrig vis alt)
- "Dyk dybere" pills i bunden (pb:32) — FOERSTE pill = den dybe skaerm
- Afslut med `<div class="section-closer"></div>`

## Dyb skaerm-moenster (`.dybde-section`)

Golden standard: `cir-dit-liv` (Dit Dybe Billede)

```
HERO — eyebrow + titel (serif 28px) + intro (serif 16px italic) + UNIK figur
SEKTION — eyebrow (INGEN inline farve) + formatExpandable(tekst, 80)
LOTUS-DIVIDER — unik per skaerm, ALTID 36x36px
... (8-12 sektioner)
REFLEKSION — serif 17px italic + journal-link (color:var(--blaa))
SECTION-CLOSER + "Tilbage til toppen"
```

**Regler for ALLE dybe skaerme:**
- `<div class="dybde-section">` (IKKE `.s`)
- `.eyebrow`: INGEN inline `style="color:..."` — brug CSS default
- `formatExpandable(tekst, 80)`, `(tekst, 60)` kun for krop/sind
- Lotus-divider: `<div class="lotus-divider"><img ... style="width:36px;height:36px">`
- Dots: `<div class="dots">` — INGEN inline farve
- Expand: `.dybde-expand-btn` — farve fra CSS (`var(--blaa)`)
- Journal-link: ALTID, `color:var(--blaa);opacity:0.7`
- Hero-billeder: INGEN `border-radius`
- Farver: ALT bruger `var(--blaa)` (IKKE tone-farver)

**Unikke lotus per skaerm:**
cir-dit-liv: `lotus-maerk-efter.png` | rel-dybere: `mockup_fordybelse_lotus.png`
din-praksis: `groen-lotus.png` | rej-dybere: `lotus-graa.png` | tids-dybere: `lilla-lotus.png`

## Dybe skaerme mapping
```
Forside → Dit Dybe Billede (cir-dit-liv)
Relationer → Dine Dybere Relationer (rel-dybere)
Tidsrejse → Din Dybere Tidsrejse (tids-dybere)
Vinduer → Dine Dybere Vinduer (vin-dybere)
De Ni Faser → Dine Dybere Faser (faser-dybere)
Min Praksis → Din Dybere Praksis (din-praksis)
Min Rejse → Din Dybere Rejse (rej-dybere)
Baggrund → De Dybere Baggrunde (baggrund-dybere)
Tre Generationer → (ingen separat dyb skaerm)
```
