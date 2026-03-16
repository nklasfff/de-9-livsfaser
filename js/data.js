/* ============================================================
   DATA — All content data for De 9 Livsfaser
   Ported from livsfaser-app/js/app.js
   ============================================================ */

// ---- De Ni Livsfaser: Detaljedata per fase ----

const LIVSFASE_DETAIL = {
  1: {
    introText: 'Den sp\u00e6de begyndelse. Barnet lever i ren sansning, uden filtre, uden gr\u00e6nser. Alt er flydende som vand \u2014 tillid, ber\u00f8ring, lyd. Her l\u00e6gges grundstenen for alt det, der kommer.',
    organPar: 'Nyrer og Bl\u00e6re', smag: 'Salt', aarstid: 'Vinter',
    folelser: { balance: 'Tillid, tryghed, ro', ubalance: 'Frygt, utryghed, tilbagetr\u00e6kning' },
    vediskKobling: 'Brahmacharya \u2014 den tidlige l\u00e6ringsperiode',
    livstemaer: ['Grundl\u00e6ggende tillid', 'Sanselig udforskning', 'Tilknytning'],
    psykOpgaver: ['Opbygge basal tillid', 'Kropslig sikkerhed', 'Emotionel tilknytning'],
    kropTekst: 'Kroppen i denne fase er ren v\u00e6kst og modtagelighed. Nyrerne \u2014 livskraftens rod i kinesisk medicin \u2014 etablerer sig. Knoglerne dannes, t\u00e6nderne bryder frem. Alt er bl\u00f8dt og formbart. Barnets krop er som vand: den tilpasser sig, optager, flyder.',
    sindTekst: 'Sindet er \u00e5bent som en stille s\u00f8. Barnet lever i nuet uden fortid eller fremtid. Fantasien er virkelig, dr\u00f8mmene er levende. Emotionelt handler alt om sikkerhed \u2014 at blive set, holdt, tr\u00f8stet. Her grundl\u00e6gges evnen til at m\u00e6rke sig selv.',
    oevelse: { title: 'Butterfly (Yin Yoga)', desc: '\u00c5bner hofterne og stimulerer nyremeridianen. Velegnet til at finde indre ro.' },
    kost: { title: 'Sort sesam og valn\u00f8dder', desc: 'N\u00e6rer nyreessensen og styrker livskraften. Varme supper med tang og b\u00f8nner.' },
    meridianStrygning: { title: 'Nyrernes meridian', desc: 'Fra fodens underside opad langs indersiden af benet. Samler livets erfaring op fra jorden.' },
    refleksioner: ['Hvad f\u00f8ler du dig tryg ved i dit liv lige nu?', 'Hvorn\u00e5r m\u00e6rkede du sidst en dyb ro i kroppen?', 'Hvad ville det betyde at give slip p\u00e5 en frygt?'],
    elementInfo: { energi: 'Kulde, stilhed, opbygning', sanseorgan: '\u00d8rer', kropsvaev: 'Knogler', farve: 'Sort / m\u00f8rkebl\u00e5' },
    fasensRaad: [
      'Beskyt s\u00f8vnen. Det er i s\u00f8vnen, den dybe genopbygning sker. G\u00e5 tidligt i seng, sluk sk\u00e6rmene, og lad m\u00f8rket g\u00f8re sit arbejde.',
      'Skab forudsigelige rytmer. B\u00f8rn trives med gentagelse \u2014 morgenmad, leg, frokost, lur, godnathistorie, s\u00f8vn. Rytmen bliver et anker.',
      'Hold barnet varmt. Beskyt f\u00f8dder, \u00f8rer, l\u00e6nd og ryg mod kulde. Varme sokker og huer er beskyttelse af vand-elementet.',
      'F\u00f8lg barnets tempo. Lad milep\u00e6le komme, n\u00e5r kroppen er klar. Sammenlign ikke med andre b\u00f8rn \u2014 lad naturen g\u00f8re sit.',
      'Spis varmt og n\u00e6rende. Gr\u00f8d, supper, langtidskogte retter \u2014 mad der er let at ford\u00f8je og dybt n\u00e6rende. Undg\u00e5 for meget sukker og kolde drikkevarer.',
      'Drik varmt vand og te i de kolde m\u00e5neder. St\u00f8t kroppens naturlige udrensning, is\u00e6r i bl\u00e6re-tiden kl. 15\u201317.',
      'Skab \u00f8er af stilhed i hverdagen. B\u00f8rn har brug for tid uden stimuli, tid til at lege frit, tid til at kede sig.',
      'Pas p\u00e5 din egen ro. Din energi smitter. N\u00e5r du er afsp\u00e6ndt, kan barnet slappe af.'
    ],
    kostDetaljer: {
      fodevarer: 'Sorte og m\u00f8rke f\u00f8devarer n\u00e6rer nyrerne \u2014 sorte b\u00f8nner, sorte sesamfr\u00f8, bl\u00e5b\u00e6r, bromb\u00e6r og m\u00f8rke druer. Knoglesuppe er dybt n\u00e6rende. Gr\u00f8d med havre, ris eller hirse giver langsom, stabil energi. Varm, kogt mad er lettere at optage end r\u00e5, kold mad.',
      urter: 'Kamille og fennikel beroer og st\u00f8tter ford\u00f8jelsen. Goji-b\u00e6r kan tils\u00e6ttes gr\u00f8d som mild st\u00f8tte til nyrerne. Salt smag i moderation st\u00f8tter vand-elementet. Tang, miso og kvalitets-havsalt i sm\u00e5 m\u00e6ngder.',
      undgaa: 'Kolde drikkevarer og is belaster ford\u00f8jelsen \u2014 kroppen skal bruge energi p\u00e5 at varme dem op i stedet for at bygge op. Hold maden varm og let at ford\u00f8je, og beskyt nyre-energien mod kulde.'
    },
    ekstraRefleksioner: [
      'Hvad havde du brug for i dine allerf\u00f8rste \u00e5r, som du ikke fik?',
      'Hvorn\u00e5r m\u00e6rker du stadig den lille pige i dig, der har brug for tryghed?',
      'Er der et sted i din krop, hvor du b\u00e6rer en gammel utryghed?',
      'Hvem gav dig den f\u00f8lelse af at h\u00f8re til, da du var barn?',
      'Hvis du kunne sige \u00e9n ting til det barn, du var \u2014 hvad ville det v\u00e6re?',
      'Hvad betyder det for dig at f\u00f8le dig tryg i dag?'
    ],
    overgangTekst: 'Omkring syv-\u00e5rsalderen begynder barnet at vende blikket udad. De blivende t\u00e6nder bryder frem, hjernen modnes, og kammeraterne f\u00e5r ny betydning. Vand-elementet er stadig til stede som fundament, men tr\u00e6-elementets fremadrettede energi begynder at vokse frem.',
    oevelser: [
      { type: 'krop', title: 'B\u00e6kkenvuggen', desc: 'L\u00e6g dig p\u00e5 ryggen med b\u00f8jede kn\u00e6. Lad b\u00e6kkenet vugge langsomt fra side til side som en b\u00e5d p\u00e5 stille vand. L\u00f8sner sp\u00e6ndinger i l\u00e6nden, hvor nyrerne sidder, og aktiverer vand-elementets dybe ro.' },
      { type: 'aandedraet', title: 'Varmt vand', desc: 'L\u00e6g h\u00e6nderne p\u00e5 l\u00e6nden over nyrerne. Forestil dig at \u00e5ndedr\u00e6ttet str\u00f8mmer som varmt vand ned gennem kroppen og samler sig i b\u00e6kkenet. Sender varme til nyrerne og n\u00e6rer vand-elementet.' },
      { type: 'meridian', title: 'Fodmassage for nyrerne', desc: 'Pres langsomt p\u00e5 Kidney 1-punktet under foden, i fordybningen bag fodballen. Hold 10\u201320 sekunder p\u00e5 hver fod. Varmer nyrerne, roer nervesystemet og hj\u00e6lper kroppen med at finde hvile.' },
      { type: 'yinyoga', title: 'Barnets stilling', desc: 'Sid p\u00e5 h\u00e6lene og lad overkroppen synke frem med panden mod gulvet. Bliv her 3\u20135 minutter. Giver nyre-meridianen plads og stilhed \u2014 vand-elementets stilling.' },
      { type: 'sind', title: 'Et brev til din indre barndom', desc: 'Skriv et brev til dig selv som barn i de allerf\u00f8rste \u00e5r. Fort\u00e6l barnet, at det er trygt, at dets f\u00f8lelser var rigtige. R\u00e6k en h\u00e5nd tilbage til den del af dig, der blev formet dengang.' }
    ],
    relationerIFasen: 'Er du for\u00e6lder til et barn i Fase 1, er du formentlig i Fase 4 eller 5 \u2014 ild m\u00f8der vand. Kunsten er at s\u00e6nke tempoet og m\u00f8de barnet i vandets rytme. Bedstefor\u00e6ldre bringer ofte pr\u00e6cis den langsomme tid og t\u00e5lmodighed, som det lille barn har brug for.',
    balanceTekst: 'Et barn i balance har en naturlig nysgerrighed, der er parret med evnen til at finde ro. Det leger intenst og falder dybt i søvn, ofte midt i det hele – og det er faktisk et rigtig fint tegn på, at energien strømmer frit mellem aktivitet og hvile. Der er klare øjne, god appetit og en robusthed, der gør barnet i stand til at komme sig hurtigt efter sygdom. Og der er en grundlæggende tillid til verden, der viser sig som viljen til at udforske, fordi barnet ved, at der er nogen at vende tilbage til.',
    ubalanceTegn: {
      fysiske: [
      'Tilbagevendende øreinfektioner og øreproblemer',
      'Sengevædning, der fortsætter længe efter det er alderssvarende',
      'Forsinkede motoriske milepæle – sent at kravle, gå eller tale',
      'Tendens til at fryse let, kolde hænder og fødder',
      'Svagt immunforsvar og hyppig sygdom',
      'Ømhed og stivhed i ryg og nakke, selv hos små børn',
      'Dårlig søvn, urolige nætter og mareridt der vender tilbage'
      ],
      mentale: [
      'Ængstelse og klyngen – barnet kan ikke slappe af, selv i trygge omgivelser',
      'Eller det modsatte: et barn, der tilsyneladende aldrig har brug for nogen, som lukkede af for sine behov for tidligt',
      'Natskræk og tilbagevendende mareridt',
      'Manglende tillid til nye mennesker og situationer',
      'En generel uro, der ikke har en tydelig årsag'
      ],
      aarsag: 'Kulde er en af de store belastninger for vand-elementet, og det gælder allerede fra de tidligste år. Kolde gulve, utilstrækkelig påklædning og is-kolde drikkevarer kan trænge ind i blære-nyre-systemet og skabe uro. Ørerne er særligt sårbare – de er en åben indgang, som kulden nemt finder vej igennem.\n\nKronisk stress i hjemmet tærer dybt på barnets vand-element. Børn mærker uro i kroppen, længe før de forstår den med hovedet. De absorberer de voksnes følelser og bærer dem, ofte uden at nogen opdager det. Det handler aldrig om skyld, og jeg kan slet ikke understrege det nok – det handler om at vide, at vores egen ro er en gave til de børn, vi har omkring os.\n\nFor lidt søvn er en anden stor belastning. Når børn konstant mangler hvile, tærer det på deres grundlæggende energi, den Jing, der skal vare hele livet. Og en kost med for meget sukker og forarbejdet mad giver hurtig energi, men styrker ikke den dybe næring, som nyrerne har brug for.'
    },
    centralFoelelse: { title: 'Frygt og Tillid', tekst: 'Frygt er vand-elementets følelse, og i de tidlige år er den overalt. Et barn, der møder verden for første gang, lever med frygt som en konstant baggrundslyd – frygten for det ukendte, for mørket, for adskillelse, for de store lyde og de nye ansigter. Det er en frygt, der har en vigtig funktion, for den holder barnet tæt på de voksne, der kan beskytte det.\n\nOg på den anden side af frygten ligger tilliden. Den vokser, når frygten bliver mødt med tryghed, når barnet græder og nogen kommer, når det falder og nogen løfter det op. Hver gang frygten bliver mødt, lægges en ny sten i det fundament, der senere skal bære alt det, der kommer. Tilknytningsteorien, som psykologen John Bowlby udviklede, bekræfter præcis det, som den kinesiske medicin har vidst i årtusinder: at de tidlige relationer former os for livet.\n\nJeg har arbejdet med kvinder i halvtredserne, der stadig kunne mærke den frygt, der blev plantet i dem som små. Den sad i kroppen – i lænden, i maven, i den uro, der kom om natten, når huset var stille. Og jeg har set, hvordan det at forstå, hvor frygten kommer fra, kan åbne for en medfølelse med sig selv, der gør det muligt endelig at slippe den.\n\nBarnets frygt er aldrig overdrevet. Den er altid proportional med barnets oplevelse, også selvom vi voksne kan se, at der ikke er nogen fare. At tage frygten alvorligt – at sige "jeg kan godt forstå, du er bange" i stedet for "der er jo ingenting at være bange for" – er en af de vigtigste ting, vi kan gøre. Det lærer barnet, at dets følelser er gyldige. Og det er den slags læring, der bærer hele livet.\n\nTillid er i bund og grund kroppens hukommelse for tryghed. Den bygges langsomt, gentagelse for gentagelse, aften efter aften. Godnatlyset, der tændes. Stemmen, der synger den samme sang. Favnen, der er der, når det gør ondt. Den stille gentagelse af en hverdag, der holder. Det er ikke store dramatiske gestus, der skaber tillid – det er den stille, kedelige, pålidelige gentagelse af omsorg.\n\nI den vediske tradition taler man om dharma som det at leve i overensstemmelse med sin natur. For et lille barn er dharma noget dybt enkelt: at være trygt, at blive set, at have lov til at vokse i sit eget tempo. Og de voksnes dharma i denne fase er at sørge for, at det kan lade sig gøre.\n\nTillid handler også om at tåle, at barnet har det svært. At sidde med et barn, der er ked af det, uden at forsøge at fikse det – bare at være der og lade følelserne passere – det kræver noget af os. Det aktiverer vores egen frygt for smerte, vores eget behov for at alt skal være godt. Men nogle gange er den vigtigste ting, vi kan gøre, simpelthen at blive.' },
    temaerNarrativer: [
      { title: 'Fundamentet', tekst: 'Alt det, der sker i de første syv år, bliver til et fundament, som resten af livet bygger på. Det lyder voldsomt, og det er det måske også – men det er samtidig befriende, fordi det giver en forklaring på så mange ting, vi ellers ikke forstår ved os selv.\n\nHjerneforskningen bekræfter det, den kinesiske medicin har vidst i årtusinder: at de neurale forbindelser, der dannes i de tidlige år, former den måde, vi oplever verden på resten af livet. Det handler om tilknytning – den måde, vi lærer at knytte os til andre mennesker. Et barn, der oplever tryg tilknytning, får en indre model for, at relationer er sikre, og at det er værd at stole på andre. Et barn, der ikke får den tryghed, udvikler andre strategier – måske undgåelse, måske klyngen – som kan følge det langt ind i voksenlivet.\n\nOg her er det vigtige: fundamentet kan altid repareres. Måske ikke fuldstændigt, måske ikke smertefrit, men de neurale forbindelser er plastiske hele livet. Nye erfaringer kan skabe nye veje. Det er aldrig for sent at begynde, selvom det bliver lettere, jo tidligere det sker.' },
      { title: 'Stilhedens sprog', tekst: 'Børn i denne fase kommunikerer mere med kroppen end med ord. Et spædbarn fortæller dig alt, du har brug for at vide, gennem gråd, smil, spænding og afslapning. Og selv når ordene kommer, er kroppens sprog stadig det primære – det er her, sandheden sidder.\n\nDet er en evne, vi alle har haft, og som de fleste af os langsomt har mistet. Vi er blevet så gode til at tænke, at vi har glemt at mærke. Men kroppen sender stadig de signaler – vi har bare slukket for lyden. En del af det at forstå denne fase handler om at genoptage den lytning. At mærke, hvad maven fortæller dig, hvad spændingen i skuldrene siger, hvad træthed virkelig er et tegn på.' },
      { title: 'At give slip på skyld', tekst: 'Enhver, der har med børn at gøre, kender skyldfølelsen. Var jeg til stede nok? Sagde jeg det rigtige? Burde jeg have gjort noget anderledes? Den skyldfølelse er enormt udbredt, og den er næsten altid mere streng end nødvendigt.\n\nDet vigtigste, vi kan give et barn, er tilstrækkelighed. Ikke perfektion. Den britiske psykiater Donald Winnicott kaldte det "den gode nok forælder" – og det begreb er måske et af de mest befriende i hele udviklings-psykologien. Du behøver ikke gøre alt rigtigt. Du behøver bare at være der, nogenlunde pålideligt, nogenlunde kærligt, nogenlunde opmærksomt. Det er godt nok. Og godt nok er faktisk rigtig godt.\n\nHvis du kigger tilbage på din egen barndom med skyld eller sorg – over det, du ikke fik, eller det, du ikke kunne give – så prøv at møde den følelse med den samme mildhed, du ville vise et barn. Du gjorde det, du kunne. De gjorde det, de kunne. Det er udgangspunktet, og det er nok til at begynde.' }
    ],
    denneFaseIDig: 'Uanset om du har børn i dit liv eller ej, kan du bruge dette kapitel til at kigge indad. For den Fase 1, du selv gennemlevede, lever stadig i dig. Dine tidligste erfaringer med frygt og tillid har formet den måde, du er i verden på – den måde, du reagerer på usikkerhed, den måde, du forholder dig til nærhed, den måde, du trøster dig selv på, når det bliver svært.\n\nDet kan være en gavmild øvelse at spørge: hvad havde jeg brug for dengang? Og fik jeg det? Mange kvinder opdager, at der er huller i fundamentet, som de aldrig har set, fordi de bare har levet med dem. Og selve det at se dem – uden dom, uden bitterhed, bare med mildhed – kan åbne for en heling, der har ventet længe.',
    aaretsRytme: 'Vinteren har en særlig klang i denne fase, fordi årstiden og livsfasen deler element. Den stille, indadvendte energi i de mørke måneder passer til det lille barns behov for ro og opbygning. Hvis du har læst De 5 Årstiders Energi, kender du allerede blære-nyrer fra vinterkapitlet, og du vil genkende mange af de samme temaer her – bare udfoldet over syv år i stedet for nogle måneder.\n\nForåret bringer ny energi, og mange forældre mærker, at deres barn bliver mere udadvendt, når dagene bliver længere. Sommeren inviterer til udeliv og leg. Efteråret kalder på indadvendthed, og barnet kan have brug for mere nærhed.\n\nAt følge årets rytme med et lille barn er egentlig ganske enkelt: mere inde-tid om vinteren, mere ude-tid om sommeren. Tidligere sengetid, når mørket falder, senere sengetid, når lyset varer ved. Det kræver, at vi som voksne lader os påvirke af årets gang i stedet for at kæmpe imod den – og det kan faktisk være en gave i sig selv.\n\nNyrernes tid i organuret er kl. 17-19, og mange forældre genkender, at sen eftermiddag er et tidspunkt, hvor småbørn bliver urolige eller overtrætte. Det er vand-elementets tid, og barnet kan have brug for ekstra nærhed og en rolig overgang til aftenen.',
    elementEssay: 'Vand er livets begyndelse – bogstaveligt. Vi tilbringer ni måneder omgivet af fostervand, og vores krop består for størstedelen af vand. Det giver jo god mening, at den kinesiske medicin knytter de første leveår til netop dette element. Vand er det, der bærer os, før vi overhovedet ved, at vi bliver båret.\n\nNyrerne betragtes som roden til vores energi, og det er her, vores Jing opbevares – den livsessens, vi arver fra vores forældre. Tænk på det som en krukke, der fyldes i de tidlige år og langsomt tappes resten af livet. Hvad der lægges i krukken, og hvor godt den beskyttes, har betydning for hele den rejse, der venter.\n\nNyre-Qi\'en styrer vores vækst og udvikling. Den bestemmer, hvornår barnet begynder at kravle og gå, hvornår tænderne bryder frem, og hvornår knoglerne er stærke nok til at bære. Alt det sker i barnets egen takt, og den takt gør vi klogt i at lytte til. Lad barnet folde sig ud, når det er klar – det er en af de smukkeste ting, vi som voksne kan tilbyde.'
  },
  2: {
    introText: 'Verden \u00e5bner sig. Barnet udforsker med hele kroppen, hele sindet. Vandets flow har nu f\u00e5et retning \u2014 nysgerrigheden driver fremad, og leg er det vigtigste arbejde der findes.',
    organPar: 'Nyrer og Bl\u00e6re', smag: 'Salt', aarstid: 'Vinter',
    folelser: { balance: 'Nysgerrighed, mod, gl\u00e6de', ubalance: 'Frygt, usikkerhed, uro' },
    vediskKobling: 'Brahmacharya \u2014 den legende l\u00e6ringsperiode',
    livstemaer: ['Udforskning', 'Fantasi og leg', 'Social forst\u00e5else'],
    psykOpgaver: ['Udvikle selvst\u00e6ndighed', 'L\u00e6re at navigere i verden', 'Opbygge mod'],
    kropTekst: 'Kroppen vokser hurtigt nu. Muskler og koordination udvikles gennem leg og bev\u00e6gelse. Nyrernes energi driver stadig \u2014 vitaliteten er enorm. Immunforsvaret modnes. Kroppen l\u00e6rer gr\u00e6nser gennem fald, skrammer og genrejsning.',
    sindTekst: 'Sindet er en eksplosion af fantasi. Barnet begynder at forst\u00e5 forskellen mellem sig selv og andre. Leg er ikke tidsfordriv \u2014 det er den vigtigste m\u00e5de at forst\u00e5 verden p\u00e5. Emotionelt vokser evnen til empati, men ogs\u00e5 frustrationen over begr\u00e6nsninger.',
    oevelse: { title: 'Caterpillar (Yin Yoga)', desc: 'Dyb foroverb\u00f8jning der beroer nervesystemet og n\u00e6rer nyrerne.' },
    kost: { title: 'Varme supper med tang', desc: 'Tang er rig p\u00e5 mineraler der st\u00f8tter nyrernes udvikling. Sorte b\u00f8nner og ris.' },
    meridianStrygning: { title: 'Leverens meridian', desc: 'Fra storet\u00e5en op ad benets inderside til ribbenene. Som saft der stiger i et tr\u00e6.' },
    refleksioner: ['Hvad g\u00f8r dig nysgerrig i dit liv lige nu?', 'Hvor i dit liv kunne du tillade dig at lege mere?', 'Hvad ville du udforske, hvis du ikke var bange?'],
    elementInfo: { energi: 'Fra opbygning til v\u00e6kst', sanseorgan: '\u00d8rer \u2192 \u00d8jne', kropsvaev: 'Knogler \u2192 Sener', farve: 'M\u00f8rkebl\u00e5 \u2192 Gr\u00f8n' },
    fasensRaad: [
      'Giv plads til bev\u00e6gelse. Tr\u00e6-elementet har brug for fysisk udfoldelse hver dag \u2014 lad dem l\u00f8be, klatre, danse og tumle.',
      'Lad dem v\u00e6lge. Giv barnet flere sm\u00e5 valg i hverdagen \u2014 t\u00f8j, mad, aktiviteter. Det tr\u00e6ner selvst\u00e6ndigheden.',
      'V\u00e6r interesseret uden at kontrollere. Sp\u00f8rg nysgerrigt ind til deres verden \u2014 vennerne, skolen, spillene. Lyt mere end du r\u00e5dgiver.',
      'Anerkend f\u00f8lelserne. Frustration og usikkerhed h\u00f8rer til denne alder. Hj\u00e6lp dem med at s\u00e6tte ord p\u00e5 det, der sker.',
      'Beskyt s\u00f8vnen. Voksende kroppe har brug for meget s\u00f8vn. Leverens regenerering sker kl. 01\u201303, og uden dyb s\u00f8vn g\u00e5r v\u00e6ksten langsommere.',
      'Sk\u00e6rme med m\u00e5de. For mange stillesiddende timer skaber stagnation. Find en balance der passer til jeres familie.',
      'V\u00e6r den trygge base. De har brug for at vide, at du er der \u2014 ogs\u00e5 n\u00e5r de skubber dig v\u00e6k. At skubbe fra er et tegn p\u00e5, at fundamentet holder.'
    ],
    kostDetaljer: {
      fodevarer: 'Gr\u00f8nne f\u00f8devarer er tr\u00e6-elementets farve og n\u00e6ring \u2014 bladgr\u00f8ntsager, broccoli, spinat, gr\u00f8nk\u00e5l og spirende for\u00e5rsgr\u00f8ntsager st\u00f8tter leveren. Sur smag f\u00e5r st\u00f8rre betydning: citrusfrugter, \u00e6bler, fermenterede gr\u00f8ntsager. Let ford\u00f8jelig mad er stadig vigtig.',
      urter: 'Citronmelisse og kamille kan berolige et nerv\u00f8st barn. M\u00e6lkeb\u00f8tte som te st\u00f8tter leveren. Pebermynte hj\u00e6lper ford\u00f8jelsen. Gurkemeje i sm\u00e5 m\u00e6ngder st\u00f8tter leverens rensende arbejde.',
      undgaa: 'Energidrikke og koffein b\u00f8r undg\u00e5s helt i denne alder \u2014 de presser et nervesystem der allerede har masser at h\u00e5ndtere. Sukker kan forst\u00e6rke hum\u00f8rsvingningerne.'
    },
    ekstraRefleksioner: [
      'Hvad husker du bedst fra \u00e5rene mellem syv og fjorten?',
      'Fik du plads til at udforske verden p\u00e5 dine egne betingelser?',
      'Hvorn\u00e5r holdt du op med at lege \u2014 og savner du det?',
      'Er der en nysgerrighed i dig, du har glemt at f\u00f8lge?',
      'Hvem var den voksne, der s\u00e5 dig tydeligt i de \u00e5r?',
      'Hvad ville du g\u00f8re i morgen, hvis ingen kiggede?',
      'Hvad l\u00e6rte du om dig selv, da du for f\u00f8rste gang gjorde noget helt alene?'
    ],
    overgangTekst: 'Omkring fjorten-\u00e5rsalderen s\u00e6tter puberteten for alvor ind. Tr\u00e6-elementet tr\u00e6der i forgrunden med fuld styrke \u2014 den spirende trang bliver til en kraftfuld drift mod selvst\u00e6ndighed og identitet. Barnet skal nu for alvor finde ud af, hvem det er i verden.',
    oevelser: [
      { type: 'krop', title: 'Tr\u00e6ets str\u00e6k', desc: 'St\u00e5 med f\u00f8dderne solidt p\u00e5 gulvet. L\u00f8ft armene langsomt op over hovedet p\u00e5 ind\u00e5ndingen, lad dem synke p\u00e5 ud\u00e5ndingen. \u00c5bner lever-meridianen langs kroppens sider, hvor energien ofte sidder fast hos b\u00f8rn i v\u00e6kst.' },
      { type: 'aandedraet', title: 'For\u00e5rsvinden', desc: 'L\u00e6g h\u00e6nderne p\u00e5 ribbenene. \u00c5nd ind i fire t\u00e6l ud til siderne, hold to, \u00e5nd ud i seks. M\u00e6rk ribbenene udvide sig som grene. Giver leveren plads til at v\u00e5gne bl\u00f8dt.' },
      { type: 'meridian', title: 'Leverens meridian', desc: 'Stryg med flad h\u00e5nd fra fodens inderside op ad benet, langs indersiden af l\u00e5ret og op til de nederste ribben. 5\u20137 gange p\u00e5 hver side. St\u00f8tter det frie flow af Qi som leveren styrer.' },
      { type: 'yinyoga', title: 'Sadlen', desc: 'Kn\u00e6l ned, l\u00e6n dig langsomt bagud til albuerne eller gulvet. Bliv her 3\u20135 minutter. \u00c5bner hele forsiden af kroppen langs lever-meridianen. Har stadig vand-elementets kvalitet af overgivelse.' },
      { type: 'sind', title: 'En samtale med den du var', desc: 'Skriv til dig selv mellem syv og fjorten. Hvad ville du sp\u00f8rge hende om? Hvad var du optaget af, hvad dr\u00f8mte du om? Fort\u00e6l barnet at usikkerhed er okay, og at vrede er en sund energi.' }
    ],
    relationerIFasen: 'Har du et barn i Fase 2, er du selv formentlig i Fase 4, 5 eller 6. Barnet har brug for opmærksomhed og interesse \u2014 selv ti minutters \u00e6gte n\u00e6rv\u00e6r er mere v\u00e6rd end en hel eftermiddag, hvor du er der men egentlig et andet sted. Barnet foretr\u00e6kker m\u00e5ske nu vennerne, og det er et tegn p\u00e5, at du har gjort dit arbejde godt.',
    balanceTekst: 'Et barn i balance i denne fase er nysgerrigt og modigt, men stadig forbundet til sin trygge base. Det tør prøve nye ting og lave fejl uden at gå i stykker af det. Der er en naturlig vitalitet, en fremadrettet energi, men også evnen til at finde ro, når det er nødvendigt – og den vekslen mellem aktivitet og hvile er faktisk et rigtig fint tegn på, at elementerne samarbejder.\n\nFysisk ser vi ofte en vækstspurt, især mod slutningen af denne fase. Koordinationen udvikles, og kroppen bliver mere kapabel. Det barn, der var klodset for et år siden, bevæger sig pludselig med en ny sikkerhed. God appetit, dyb søvn og energi til alt det, de gerne vil – det er træ-elementet i sin bedste form.',
    ubalanceTegn: {
      fysiske: [
      'Tilbagevendende hovedpine, især spændingshovedpine i tindingerne',
      'Ondt i maven før skole – den uro, der sætter sig i fordøjelsen',
      'Spændte muskler, især i nakke og skuldre',
      'Problemer med øjnene – træ-elementets sanseorgan. Måske hyppigere behov for briller',
      'Søvnproblemer med livlige drømme eller svært ved at falde i søvn',
      'Hudreaktioner som eksem eller allergier, der blæsser op',
      'Vokse-smerter i ben og led, især om natten'
      ],
      mentale: [
      'Frustration og vrede, der virker ude af proportioner med årsagen',
      'Fastlåsthed – barnet tør ikke kaste sig ud i noget nyt og holder sig til det kendte',
      'Ængstelse ved adskillelse, selvom det er ved at være for gammelt til det',
      'Humørsvingninger, der kan overraske både barnet selv og de voksne omkring det',
      'Social usikkerhed og svært ved at finde fodfæste i venskaber'
      ],
      aarsag: 'Bevægelse er afgørende i denne fase, og det kan næsten ikke siges tydeligt nok. Træ-elementet trives med fysisk aktivitet, og børn, der får lov at bruge deres krop, har langt lettere ved at lade energien flyde frit. Stillesiddende timer foran skærme kan skabe stagnation – fordi kroppen simpelthen har brug for at bevæge sig for at holde lever-energien i gang.\n\nFor meget kontrol og for mange regler kan kvæle træ-elementet. Børn i denne fase har brug for en vis frihed til at udforske og træffe deres egne valg, inden for trygge rammer. Balance mellem at beskytte og at give slip ser forskellig ud for hvert barn, og den kan ændre sig fra uge til uge.\n\nKonflikter i hjemmet er særligt belastende i denne fase, fordi de skaber en utryghed, der trækker barnet tilbage i vand-elementets frygt, netop når det har brug for at vokse fremad. Et barn kan ikke udforske verden, hvis det er optaget af at bekymre sig om, hvad der sker derhjemme.'
    },
    centralFoelelse: { title: 'Mod og Frygt', tekst: 'Frygt er stadig til stede i denne fase – den fulgte jo med fra de første år. Men nu får den selskab af noget nyt: mod. Og de to følelser lever side om side på en måde, der kan være forvirrende for både barnet og de voksne. Det samme barn, der kastede sig ud fra tremeteren i svømmehallen, kan ligge i sengen om aftenen og være bange for mørket. Begge dele er ægte.\n\nModet kommer med træ-elementets energi – den fremadrettede kraft, der driver barnet mod verden. Det er det mod, der får en otteårig til at række hånden op i klassen, selvom hjertet banker. Der får en tiårig til at gå hen til de andre børn i frikvarteret og spørge, om hun må være med. Der får en tolvårig til at melde sig til skolens musical, selvom stemmen ryster.\n\nFrygten, der var vand-elementets følelse, ændrer karakter i denne fase. Den er ikke længere så kropslig og rå som hos det lille barn. Nu bliver den mere social – frygten for at blive afvist, for at være anderledes, for at fejle foran andre. Den frygt kan være lige så intens som spædbarnets frygt for mørket, selvom den ser helt anderledes ud udefra.\n\nJeg kan huske en pige på ti, der nægtede at gå til svømning, fordi hun var bange for, at de andre ville grine af hende i omklædningsrummet. Ingen havde grinet. Det var frygten for, at de kunne finde på det, der holdt hende fast. Og den frygt var lige så virkelig som en forkølelse – den sad i kroppen og gjorde det umuligt at tage afsted.\n\nDet vigtigste, vi kan gøre, er at tage begge følelser alvorligt. At fejre modet, når det viser sig, uden at gøre det til et krav. Og at møde frygten med forståelse, uden at afvise den. "Jeg kan godt forstå, det er svært" rækker længere end "der er jo ingenting at være bange for".\n\nVreden vågner. Træ-elementets følelse er vrede, og den dukker op med stigende styrke i denne fase. Det kan overraske forældre, der er vant til et mere fredeligt barn – pludselig er der diskussioner, døre der smækker, reaktioner der virker alt for store i forhold til årsagen.\n\nMen vreden vil jo noget – den vil forandring. Den er et tegn på, at barnet oplever begrænsninger, det gerne vil sprænge. At det har en vilje, der rækker længere, end de nuværende rammer tillader. Det er sund energi, også når den føles ubehagelig, og den har brug for et sted at gå hen – et udløb, der er konstruktivt.\n\nFysisk aktivitet er et af de bedste udløb. Løb, klatring, svømning, boldspil – alt, der lader kroppen bruge den energi, der ellers kan stagnere og blive til eksplosioner. Kreativ udfoldelse virker på samme måde: at tegne, bygge, spille musik eller skrive giver den fremadrettede energi et sted at lande.' },
    temaerNarrativer: [
      { title: 'Verden udvides', tekst: 'De første syv år var verden relativt lille – hjemmet, familien, måske en børnehave med de samme ansigter dag efter dag. Nu eksploderer verden pludselig i omfang. Skolen bringer nye voksne, nye børn, nye regler. Fritidsaktiviteter åbner endnu flere døre. Barnet opdager, at der er mange måder at være i verden på, og begynder at lede efter sin egen.\n\nDen udvidelse kan være både rus og overvældelse. Nogle børn kaster sig ud i alt det nye med en appetit, der næsten ikke kan stilles. Andre har brug for længere tid og mere støtte til at vove sig frem. Begge dele er helt naturligt – det er blot træ-elementet, der finder sit eget tempo.' },
      { title: 'Identitet formes', tekst: 'Spørgsmålet "hvem er jeg?" begynder at dukke op i denne fase, selvom det endnu stilles indirekte. Barnet sammenligner sig med andre, finder ud af hvad det er godt til, og danner langsomt et billede af sig selv. Er jeg en, der er god til sport? En, der har mange venner? En, der er klog i skolen? I den vediske tradition ville man sige, at barnet er ved at opdage sit dharma – sin egen unikke natur og de talenter, der peger i en bestemt retning.\n\nVenskaber spiller en central rolle. Gennem vennerne spejler barnet sig og lærer, hvem det er i relation til andre. At høre til i en gruppe, og at blive holdt udenfor, former selvopfattelsen på dybtgående måder. Jeg tror, mange af os kan huske begge dele og hvor enormt det fyldte.\n\nInteresser og talenter træder også frem. Det barn, der elsker at læse og drømmer sig væk, er ved at opdage noget om sig selv. Det barn, der trives på fodboldbanen, ligeså. De tidlige interesser er sjældent tilfældige – de fortæller noget om, hvem barnet er ved at blive. At se og anerkende det, uden at presse det i en bestemt retning, er en af de fineste ting, vi kan gøre.' },
      { title: 'Venskabernes kraft', tekst: 'I denne fase får venskaberne en ny dybde. Det er ikke længere bare nogen at lege med – det er mennesker, man deler hemmeligheder med, holder med og imod, elsker og skændes med. Venskaberne bliver en prøveklud for alt det, der skal læres om relationer: hvordan løser man konflikter, hvordan håndterer man jalousi, hvordan er man en god ven – og hvordan ved man, om andre er gode venner for en?\n\nDe lektioner læres af erfaring, og nogle af dem gør ondt. Som voksen kan det være svært at se sit barn kæmpe socialt. Instinktet siger, at vi skal gribe ind, ordne det, beskytte dem. Men ofte er det bedste, vi kan gøre, at lytte, rumme følelserne og lade dem finde deres egen vej – mens vi holder øje fra sidelinjen og er klar, når det virkelig gælder.\n\nYoga-filosofien taler om ahimsa – venlighed og omsorg for andre, også når det er svært. Børn lærer ahimsa gennem venskaber, gennem de gange de sårer nogen og mærker det i kroppen bagefter, og de gange de bliver såret og lærer at komme videre. Det er på mange måder livets mest grundlæggende pensum.' }
    ],
    denneFaseIDig: 'Denne fase lever i dig som dine tidligste erfaringer med at udforske verden på egen hånd. Den pige, du var mellem syv og fjorten, opdagede hvem hun var i mødet med andre – gennem venskaber, interesser og de første erfaringer med at høre til og stå udenfor. De oplevelser har formet din måde at være i grupper på, din tillid til dine egne evner og den måde, du møder nye situationer.',
    aaretsRytme: 'Denne fase bevæger sig fra vand til træ – fra vinter mod forår. Det betyder, at barnet måske mærker en særlig energi, når foråret kommer. Lever-galdens kvaliteter fra foråret i De 5 Årstiders Energi dukker op her i en ny form – den fremadrettede energi, trangen til udfoldelse, vreden som vækstkraft, bare set over syv år i stedet for nogle måneder.\n\nSkoleåret følger også en rytme, der påvirker barnet dybt. Den spændte start i august, den lange vinter med mørke morgener, forårets forløsning når dagene bliver længere. At være opmærksom på de skift kan hjælpe med at forstå barnets energi og behov gennem året. Sommerferierne er en særlig tid, en lang pause fra skolens krav, hvor barnet kan finde sin egen rytme. Nogle børn blomstrer i den frihed, andre bliver rastløse – begge reaktioner fortæller noget om barnets natur.\n\nFor mange piger begynder menstruationen i denne fase, ofte omkring tolv-tretten års alderen. Det er en af livets store overgange, og den fortjener at blive mødt med viden og omsorg. Når blødningen kommer, træder du ind i en rytme, der vil følge dig i årtier – fire uger, fire indre årstider. Det kan tage tid, før cyklussen finder sin regelmæssighed, og det er helt naturligt. Kroppen øver sig.\n\nLeverens tid i organuret er kl. 01-03, midt om natten. Mange børn i denne fase har svært ved at falde i søvn, fordi kroppen er i gang med at vokse og forarbejde alt det, dagen har bragt. En rolig aftenrutine uden skærme den sidste time kan hjælpe leveren med at gøre sit arbejde i fred.',
    elementEssay: 'Denne fase er en overgang mellem to elementer, og det giver god mening, at det føles sådan. Vand-elementet, der dominerede de første syv år, giver gradvist plads til træ-elementet. Det er som vinteren, der langsomt viger for foråret – en bevægelse, der sker af sig selv, når tiden er moden.\n\nVand-energien er stadig til stede og vigtig. Nyrerne fortsætter med at opbygge den grundlæggende livskraft – den Jing, vi talte om i forrige kapitel. Men nu begynder lever- og galdeenergien at vågne, den kraft, der driver vækst, bevægelse og udfoldelse.\n\nTræ-elementet handler om retning. Om at bevæge sig mod noget. Hos et barn i denne fase ser vi det som en voksende selvstændighed og en stigende evne til at tænke fremad. "Når jeg bliver stor, vil jeg..." begynder at betyde noget mere konkret end blot en børnefantasi.\n\nLeveren styrer det frie flow af Qi i kroppen – den måde, energien bevæger sig på. Når energien flyder uhindret, oplever barnet kreativitet, fleksibilitet og et naturligt mod. Når den stagnerer, kan det vise sig som frustration eller en fastlåst følelse. Kender du det barn, der pludselig eksploderer over noget tilsyneladende ubetydeligt? Det kan være et tegn på, at energien har siddet fast og endelig finder vej ud.'
  },
  3: {
    introText: 'Forvandlingens tid. Tr\u00e6ets energi skyder op med en kraft der ikke kan stoppes. Kroppen \u00e6ndrer sig, identiteten s\u00f8ger form \u2014 alt det gamle d\u00f8r langsomt, mens noget nyt bryder igennem.',
    organPar: 'Lever og Galdebl\u00e6re', smag: 'Sur', aarstid: 'For\u00e5r',
    folelser: { balance: 'Kreativitet, handlekraft, mod', ubalance: 'Vrede, frustration, rastl\u00f8shed' },
    vediskKobling: 'Brahmacharya \u2014 den transformative overgang',
    livstemaer: ['Pubertet og forvandling', 'Identitetss\u00f8gen', 'L\u00f8srivelse'],
    psykOpgaver: ['Forme egen identitet', 'Navigere kroppens forandring', 'Etablere indre kompas'],
    kropTekst: 'Puberteten er tr\u00e6ets fulde kraft. Hormoner eksploderer, kroppen \u00e6ndrer form. Menstruationen begynder \u2014 den f\u00f8rste kontakt med den cykliske kvindekrop. Leveren arbejder intenst for at processere alle de nye hormoner. Energien er enorm men ofte kaotisk.',
    sindTekst: 'Sindet s\u00f8ger desperat efter svar p\u00e5 sp\u00f8rgsm\u00e5let: hvem er jeg? F\u00f8lelserne er intense og skiftende. Vrede er en naturlig del \u2014 den er tr\u00e6ets kraft der s\u00f8ger retning. Den unge kvinde begynder at se verden med egne \u00f8jne, og det kan v\u00e6re b\u00e5de befriende og skr\u00e6mmende.',
    oevelse: { title: 'Dragefly (Yin Yoga)', desc: '\u00c5bner inderl\u00e5r og stimulerer levermeridianen. Frig\u00f8r stagneret energi.' },
    kost: { title: 'Gr\u00f8nne bladgr\u00f8ntsager', desc: 'Lever elsker gr\u00f8nt. Spirende korn, artiskokker, citronsaft om morgenen.' },
    meridianStrygning: { title: 'Galdebl\u00e6rens meridian', desc: 'Fra tindingerne ned langs kroppens sider til f\u00f8dderne. L\u00f8sner fastl\u00e5sthed og skaber handlekraft.' },
    refleksioner: ['Hvilke dele af dig selv opdagede du i teenage\u00e5rene?', 'Hvad \u00f8nsker du stadig at forvandle i dit liv?', 'Hvor m\u00e6rker du tr\u00e6ets drivkraft \u2014 behovet for at vokse \u2014 lige nu?'],
    elementInfo: { energi: 'V\u00e6kst, gennembrud, retning', sanseorgan: '\u00d8jne', kropsvaev: 'Sener', farve: 'Gr\u00f8n' },
    fasensRaad: [
      'Giv plads til stormen. F\u00f8lelserne er intense \u2014 det er meningen. Hj\u00e6lp med at rumme, aldrig med at undertrykke.',
      'V\u00e6lg dine kampe. Alt er ikke lige vigtigt. Gem energien til sikkerhed, sundhed og grundl\u00e6ggende respekt. Resten kan forhandles.',
      'Bevar forbindelsen. Ogs\u00e5 n\u00e5r den unge skubber v\u00e6k. V\u00e6r der uden at tr\u00e6nge dig p\u00e5 \u2014 lad d\u00f8ren st\u00e5 p\u00e5 klem.',
      'Lad dem fejle. Egne erfaringer l\u00e6rer mere end gode r\u00e5d. V\u00e6r der til at samle op bagefter uden at sige "hvad sagde jeg".',
      'Bev\u00e6gelse er afg\u00f8rende. Tr\u00e6-energien skal have et sted at g\u00e5 hen \u2014 sport, dans, g\u00e5ture, havearbejde.',
      'Beskyt s\u00f8vnen. Teenagehjerner har brug for ni til ti timers s\u00f8vn. Sk\u00e6rme v\u00e6k den sidste time kan g\u00f8re en m\u00e6rkbar forskel.',
      'Hold fast i h\u00e5bet. Stormene l\u00e6gger sig. Det barn du savner kommer tilbage i en ny form \u2014 som et voksent menneske du aldrig havde kunnet forestille dig.'
    ],
    kostDetaljer: {
      fodevarer: 'Friske, gr\u00f8nne f\u00f8devarer st\u00f8tter leveren \u2014 asparges, artiskok, broccoli, spinat og alt der spirer om for\u00e5ret. Avocado og edamameb\u00f8nner giver god n\u00e6ring til hurtig v\u00e6kst. Sur smag st\u00f8tter leveren: citrusfrugter, \u00e6bler, surk\u00e5l og kimchi. Protein er vigtigt \u2014 \u00e6g, fisk, b\u00f8nner og k\u00f8d.',
      urter: 'M\u00e6lkeb\u00f8tte og artiskok st\u00f8tter leveren direkte. Pebermynte bev\u00e6ger stagneret energi. Kamille og citronmelisse beroer nervesystemet. Gurkemeje st\u00f8tter leverens rensende funktion.',
      undgaa: 'Alkohol belaster leveren direkte \u2014 og i denne alder er leveren s\u00e6rligt s\u00e5rbar. Koffein og energidrikke presser nervesystemet og forstyrrer den s\u00f8vn der er afg\u00f8rende for v\u00e6ksten.'
    },
    ekstraRefleksioner: [
      'Hvorn\u00e5r f\u00f8lte du dig mest alene som teenager?',
      'Var der nogen, der sagde til dig, at din vrede var i orden?',
      'Hvad ville du \u00f8nske, at en voksen havde sagt til dig dengang?',
      'B\u00e6rer du stadig p\u00e5 en skam fra ungdoms\u00e5rene, som du aldrig har sat ord p\u00e5?',
      'Hvorn\u00e5r m\u00e6rkede du f\u00f8rste gang din egen styrke?',
      'Hvad var det modigste, du gjorde mellem fjorten og enogtyve?'
    ],
    overgangTekst: 'Omkring enogtyvende \u00e5r begynder den unge at rette blikket mod, hvad hun vil skabe i verden. Tr\u00e6-elementets s\u00f8gende energi blander sig med ild-elementets passion og handlekraft. For\u00e5rsstormene l\u00e6gger sig langsomt, og sommeren venter med sin varme.',
    oevelser: [
      { type: 'krop', title: 'Bev\u00e6gelse som udl\u00f8b', desc: 'N\u00e5r f\u00f8lelserne er for store til ord, brug kroppen. L\u00f8b, dans, sv\u00f8m \u2014 ti minutter med fuld intensitet kan \u00e6ndre et helt hum\u00f8r. Lever-energien stagnerer n\u00e5r kroppen sidder stille for l\u00e6nge.' },
      { type: 'aandedraet', title: 'Leverens lyd', desc: 'Plant f\u00f8dderne solidt. \u00c5nd ind i fire t\u00e6l, hold to, \u00e5nd kraftigt ud med en "haaaa"-lyd i seks t\u00e6l. L\u00f8sner sp\u00e6nding fra undertrykt vrede og frustration. Gentag 5\u20138 gange.' },
      { type: 'meridian', title: 'Galdebl\u00e6rens meridian', desc: 'Stryg med begge h\u00e6nder fra tindingerne ned over skuldrene, langs kroppens sider og helt ned til f\u00f8dderne. 5\u20137 gange. L\u00f8sner fastl\u00e5sthed og st\u00f8tter beslutningstagning og handlekraft.' },
      { type: 'yinyoga', title: 'Dragefluen', desc: 'Sid med benene spredt bredt til siderne. Lad overkroppen synke langsomt frem. Bliv her 3\u20135 minutter. \u00c5bner lever-meridianen og giver et dybt str\u00e6k i hofter og lyske.' },
      { type: 'sind', title: 'Hvem er jeg i dag?', desc: 'Skriv alt der falder dig ind om hvem du er lige nu \u2014 det du br\u00e6nder for, hader, dr\u00f8mmer om, frygter. G\u00f8r det m\u00e5nedligt og se hvordan svarene \u00e6ndrer sig. Svadhyaya i praksis.' }
    ],
    relationerIFasen: 'Den unge er midt i en l\u00f8srivelsesproces der p\u00e5virker alle relationer. For\u00e6ldre er typisk i Fase 5, 6 eller 7 og m\u00e5ske selv begyndt at stille sp\u00f8rgsm\u00e5l til deres eget liv. For kvinder uden egne b\u00f8rn kan relationen til teenagere v\u00e6re s\u00e6rligt v\u00e6rdifuld \u2014 mange unge s\u00f8ger mod voksne der kan lytte uden dagsorden.',
    balanceTekst: 'En ung i balance i denne fase har en retning, selvom den måske ændrer sig undervejs – og det er jo netop det, fasen handler om. Der er energi og drivkraft, men også evnen til fleksibilitet, når livet kræver det. Følelserne er intense, men de bevæger sig igennem uden at sidde fast.\n\nFysisk ser vi en krop i hurtig forandring, der finder sin voksne form. God appetit, sund søvn – om end ofte forskudt, så de sover sent og vågner sent – og masser af energi til det, der føles meningsfuldt. At en teenager har overskud til vennerne, men ingen energi til lektierne, er faktisk et tegn på, at de ved, hvad der betyder noget for dem lige nu.',
    ubalanceTegn: {
      fysiske: [
      'Vedvarende hovedpine og spændinger i nakke, kæbe og skuldre',
      'Hudproblemer – acne, eksem, reaktioner, der blæsser op',
      'Menstruationssmerter, uregelmæssig cyklus, PMS der fylder enormt',
      'Problemer med øjnene – træ-elementets sanseorgan',
      'Søvnproblemer: svært ved at falde i søvn, urolige nætter, tung søvn der aldrig føles genoprettende',
      'Fordøjelsesproblemer, kvalme, svingende appetit'
      ],
      mentale: [
      'Eksplosiv vrede og irritabilitet – alt bliver en kamp',
      'Eller det modsatte: en fastlåst, apatisk tilstand, hvor al energi er forsvundet',
      'Angst og social frygt, der begrænser hverdagen',
      'Intens selvkritik og følelse af at være forkert',
      'Stemningsskift, der føles ukontrollerbare og skræmmende'
      ],
      aarsag: 'Fysisk bevægelse er afgørende for træ-elementet i denne fase. Den intense energi har brug for et sted at gå hen, og en teenager, der sidder stille hele dagen, er en teenager, hvis energi stagnerer. Sport, dans, løb, bare lange gåture – alt, der lader kroppen bevæge sig frit, forebygger den stagnation, der fører til frustration og udbrud.\n\nStramme rammer og for lidt medbestemmelse kan kvæle den træ-energi, der har brug for at vokse frit. Den unge skal have lov til at fejle – det er sådan, hun lærer at finde sin egen retning. Det betyder jo ikke, at der ingen rammer skal være – men rammerne skal give mening, og der skal være plads til forhandling.\n\nAlkohol og rusmidler er særligt skadelige i denne fase. De belaster leveren direkte og forstyrrer den skrøbelige balance, hjernen er ved at finde. En hjerne, der stadig er under udvikling, er ekstra sårbar over for de påvirkninger, og det er værd at tage alvorligt – også når "alle de andre gør det".'
    },
    centralFoelelse: { title: 'Vrede og Gennembrud', tekst: 'Vrede er træ-elementets følelse, og i denne fase brænder den for alvor. Den kan komme som en eksplosion over noget tilsyneladende ubetydeligt – en dør der smækker, et svar der bider – og den kan ligge som en vedvarende irritation under overfladen, klar til at blusse op når som helst.\n\nMen vreden vil jo noget. Den vil forandring. Den er et tegn på, at den unge oplever begrænsninger, der føles for snævre, at der er en vilje, der rækker længere, end rammerne tillader. I den kinesiske medicin er vrede leverens følelse, og når lever-Qi\'en stagnerer – når den unge føler sig misforstået, kontrolleret, lukket inde – finder energien vej ud som udbrud, irritabilitet eller en indre uro, der ikke finder hvile.\n\nOg på den anden side af vreden ligger kreativiteten. Når lever-energien flyder frit, omdannes den samme intensitet til handlekraft, kunstnerisk udtryk, modet til at gå sin egen vej. Mange af historiens største kunstnere og tænkere brugte deres ungdoms vrede som brændstof – den rå energi, der også kan ødelægge, kan skabe noget ekstraordinært, hvis den får retning.\n\nJeg har arbejdet med unge, der var fulde af vrede, og det mest overraskende for dem var altid, når jeg sagde: din vrede giver mening. Den fortæller mig, at du vil noget. Det spørgsmål er bare, hvad du vil bruge den til. Den sætning ændrede noget i rummet. Pludselig var vreden ikke et problem, der skulle løses, men en energi, der kunne bruges.\n\nNeurovidenskaben bekræfter det, den kinesiske medicin har vidst længe: hjernen gennemgår en massiv ombygning i disse år. Det limbiske system – hjernens følelsescenter – kører på højtryk, mens præfrontal cortex, der styrer impulskontrol og risikovurdering, først er færdigudviklet omkring femogtyveårsalderen. Det betyder, at den unge oplever følelser med voksen intensitet, men med et barns evne til at regulere dem. De er hverken dumme eller uansvarlige – de har en hjerne, der endnu ikke er færdig.\n\nHormoner spiller også ind. Den hormonelle storm, der sætter ind med puberteten, påvirker alt fra humør til søvnmønstre. Melatonin-produktionen forskydes, så teenagere biologisk set bliver natteravne – de er anderledes programmeret end voksne, og det er værd at vide, før man skælder ud over, at de ikke kan stå op om morgenen.' },
    temaerNarrativer: [
      { title: 'Løsrivelse', tekst: 'En af de vigtigste opgaver i denne fase er at løsrive sig fra forældrene – at bevæge sig fra at være et barn i en familie til at blive et selvstændigt menneske. Den proces er nødvendig og naturlig, men den er sjældent smertefri for nogen.\n\nLøsrivelsen kan tage mange former. Nogle unge gør oprør åbenlyst: skændes, bryder regler, tester grænser igen og igen. Andre trækker sig stille tilbage: lukker døren, deler mindre af deres liv, svarer i enstavelsesord. Begge strategier tjener samme formål – at skabe afstand, så et selvstændigt selv kan vokse frem.\n\nFor forældre kan dette være en sorgfuld tid. Det barn, der engang delte alt, virker nu fjernt og ukendt. Den beundring, de engang mødte, er afløst af kritik eller ligegyldighed. Det er let at tage det personligt, men det handler sjældent om forældrene som personer – det handler om en udvikling, der må ske.\n\nDen gode nyhed er, at løsrivelsen sjældent er endelig. De fleste unge finder tilbage til et nyt, mere ligeværdigt forhold til deres forældre, når de selv er blevet voksne. Men først skal de væk. Og jo mere vi som voksne kan give dem lov til det, jo lettere bliver vejen tilbage.' },
      { title: 'Identitet', tekst: 'Spørgsmålet "hvem er jeg?" bliver for alvor presserende. Den unge prøver forskellige identiteter af som tøj – denne stil, denne musik, denne holdning, denne gruppe. Noget passer, andet gør det aldrig. Det kan se forvirrende ud udefra, men det er et nødvendigt eksperiment. Yoga-filosofien kalder denne proces svadhyaya – selvstudium, den vedvarende udforskning af, hvem man egentlig er under alle de roller, man prøver af.\n\nUnder overfladen foregår der et vigtigt arbejde. Den unge er ved at finde ud af, hvad der føles ægte, og hvad der bare var noget, de overtog fra andre. Det kræver mod at stille spørgsmål ved alt det, man troede, var sandt om sig selv. Hvem er jeg, hvis jeg ikke er den, mine forældre ser? Hvem er jeg, når jeg selv får lov at vælge?' },
      { title: 'Kærlighed og de første forhold', tekst: 'Forelskelse i denne fase er noget ganske særligt, og de fleste af os kan huske det med en blanding af ømhed og lettelse over, at det er overstået. Det er ofte første gang, hjertet åbner sig på den måde, og intensiteten kan være overvældende. Træ-elementets passion i sin reneste form.\n\nFor den unge er de første forhold en vigtig del af at lære, hvem man er. I mødet med en anden opdager man sider af sig selv, man ikke kendte. Man lærer om intimitet, om at være sårbar, om at finde vej mellem sine egne behov og en andens.\n\nHjertesorg hører også med. Når det første forhold slutter, kan det føles som verdens undergang – og for den unge er det på en måde også det, for de har aldrig prøvet det før. Som voksen kan det være svært at se så stor smerte og vide, at man ikke kan tage den væk. Det eneste, der hjælper, er at være der. Lytte, holde, lade dem græde så længe de har brug for det. De tidlige erfaringer med kærlighed og tab former den måde, vi går ind i relationer på resten af livet.' },
      { title: 'Drømme om fremtiden', tekst: 'Tankerne om fremtiden tager form på en ny måde. Hvad vil jeg være? Hvor vil jeg bo? Hvordan vil mit liv se ud? For nogle unge inkluderer de drømme tanker om at få børn en dag, som en selvfølgelig del af det, der venter. For andre er børn slet ikke en del af billedet – de drømmer om rejser, karriere, frihed. Og for mange er det hele stadig fjernt og uvirkeligt.\n\nAlle de positioner er helt gyldige. Denne fase handler om at begynde at stille de store spørgsmål, og det kræver satya – ærlighed over for sig selv om, hvad man egentlig drømmer om, uden at lade andres forventninger forme svaret. De store valg kommer senere, og du vil vide mere, når du når dertil.' }
    ],
    denneFaseIDig: 'Denne fase lever i dig som de år, hvor du for alvor begyndte at forme dig selv. Den teenager, du var, kæmpede med spørgsmål om identitet, tilhørsforhold og retning – og de svar, du fandt dengang, bærer du stadig med dig. Vreden, modet, forelskelsen, løsrivelsen – alt det formede den voksne, du blev.',
    aaretsRytme: 'Træ-elementet dominerer denne fase, og foråret har en særlig klang. Når naturen vågner og alt bryder frem, mærker den unge måske en ekstra energi, en trang til at komme ud og starte noget nyt. Forårets temaer fra De 5 Årstiders Energi – den fremadrettede kraft, trangen til at bryde igennem – er i denne fase skruet op til fuld styrke. Ungdommens forår er mere stormfuldt end årets.\n\nSommeren bringer frihed fra skole, lange aftener og ofte de første store forelskelser. Efteråret kan føles som en nedtur, når hverdagen vender tilbage med sine krav. Og vinteren kan være udfordrende for en energi, der vil ud og frem – mørket og kulden kan forstærke følelsen af at sidde fast.\n\nMenstruationen har i denne fase ofte fundet sin regelmæssighed, og den unge kvinde lærer at genkende mønstre i sin energi og sit humør gennem måneden. Den første uge, den indre vinter, kan føles frustrerende i en alder, hvor alt handler om at være på. Men kroppen har brug for den pause. At lære at værdsætte alle fire uger er at lære at værdsætte hele sig selv – også de stille dele.\n\nLeverens tid i organuret er kl. 01-03, og galdeblærens tid er kl. 23-01. Mange teenagere ligger og vender sig i netop disse timer, mens tankerne kører. At skabe en rolig overgang til søvn – skærme væk, let aftensmad, en rolig rutine – kan hjælpe leveren med at gøre sit arbejde i fred.',
    elementEssay: 'Træ-elementet er nu i sin fulde udfoldelse. Den spirende energi, der begyndte at vokse i Fase 2, er blevet til en kraftfuld drivkraft, der vil frem, uanset hvad der står i vejen. Det er foråret i sin mest eksplosive form, når alt bryder igennem på én gang.\n\nLeveren har en helt central rolle. Den styrer det frie flow af Qi i kroppen, og når energien flyder uhindret, oplever den unge kreativitet, handlekraft og evnen til at sætte en retning. Der er noget ved en teenager, der brænder for noget – den intensitet og dedikation, som mange voksne har mistet forbindelsen til.\n\nGaldeblæren arbejder sammen med leveren og handler om beslutningstagning. I denne fase skal den unge træffe mange afgørende valg: hvem vil jeg være? Hvad vil jeg med mit liv? Hvem vil jeg være sammen med? En sund galde-energi giver modet til at vælge og handlekraften til at følge valget, også når andre er uenige.\n\nI den vediske tradition svarer denne fase stadig til brahmacharya – elevens livsfase, hvor den unge endnu ikke har ansvar for andre, men bruger al sin energi på at lære og finde sig selv. Det er en beskyttet tid, selvom den sjældent føles sådan for den, der er midt i den.'
  },
  4: {
    introText: 'Blomstringens tid. Den unge kvinde tr\u00e6der frem med sin egen kraft og sine egne dr\u00f8mme. Uddannelse, de f\u00f8rste store valg, k\u00e6rlighed. Energien er ekspansiv \u2014 alt synes muligt.',
    organPar: 'Lever og Galdebl\u00e6re', smag: 'Sur', aarstid: 'For\u00e5r',
    folelser: { balance: 'Selvtillid, passion, retning', ubalance: 'Ut\u00e5lmodighed, perfektionisme, overambitiøsitet' },
    vediskKobling: 'Grihastha \u2014 den unge voksnes indtr\u00e6den',
    livstemaer: ['Blomstring', 'Karriere og dr\u00f8mme', 'Partnerskab'],
    psykOpgaver: ['Realisere potentiale', 'Navigere voksenlivets valg', 'Opbygge fundamenter'],
    kropTekst: 'Kroppen er i sin fulde kraft. Fertiliteten er h\u00f8j, musklerne st\u00e6rke, restitutionen hurtig. Leveren arbejder stabilt. Det er en tid hvor kroppen sj\u00e6ldent klager \u2014 den b\u00e6rer, bygger, blomstrer. Men det er ogs\u00e5 her, de m\u00f8nstre grundl\u00e6gges som viser sig senere.',
    sindTekst: 'Sindet er fokuseret og ambiti\u00f8st. Der er mod til at tage chancer, starte uddannelser, flytte, forelske sig. Identiteten tager form \u2014 ikke l\u00e6ngere s\u00f8gende men handlende. Skyggesiden er stress og f\u00f8lelsen af aldrig at v\u00e6re nok. Tr\u00e6ets energi kan blive til pres.',
    oevelse: { title: 'Twisted Roots (Yin Yoga)', desc: 'Drejning der stimulerer lever og galdebl\u00e6re. Skaber flow og l\u00f8sner stagnation.' },
    kost: { title: 'Spirende korn og artiskokker', desc: 'For\u00e5rets mad der matcher tr\u00e6ets energi. Fermenterede gr\u00f8ntsager, eddike, citronsaft.' },
    meridianStrygning: { title: 'Hjertets meridian', desc: 'Fra armhulen ned ad armens inderside til lillefingeren. \u00c5bner evnen til gl\u00e6de og forbindelse.' },
    refleksioner: ['Hvilke dr\u00f8mme fra din ungdom lever stadig i dig?', 'Hvor blomstrer du i dit liv lige nu?', 'Hvad ville du g\u00f8re anderledes, hvis du vidste det var godt nok?'],
    elementInfo: { energi: 'Fra v\u00e6kst til udfoldelse', sanseorgan: '\u00d8jne \u2192 tunge', kropsvaev: 'Sener \u2192 blodkar', farve: 'Gr\u00f8n \u2192 r\u00f8d' },
    fasensRaad: [
      'F\u00f8lg ilden, men vogt p\u00e5 udbr\u00e6ndthed. Din energi er h\u00f8j men ikke uendelig \u2014 l\u00e6r at hvile f\u00f8r du er udmattet.',
      'Lad hjertet guide. M\u00e6rk efter hvad der f\u00f8les rigtigt, ogs\u00e5 n\u00e5r det ikke giver logisk mening endnu.',
      'Byg relationer der n\u00e6rer. V\u00e6lg mennesker der l\u00f8fter dig, og v\u00e6r den slags ven du selv har brug for.',
      'Tr\u00e6f valg \u2014 ogs\u00e5 ufuldkomne. Bedre at v\u00e6lge og justere undervejs end at vente p\u00e5 det perfekte.',
      'Nyd processen. M\u00e5let er vigtigt, men glem ikke at leve undervejs. Der er \u00e5r i denne fase du aldrig f\u00e5r igen.',
      'Lyt til dig selv om b\u00f8rn. Uanset hvad andre mener, er det din krop og dit liv.',
      'Der er tid. Selvom det f\u00f8les presserende, har du flere \u00e5rtier foran dig. L\u00e6g planer, men hold dem l\u00f8st.'
    ],
    kostDetaljer: {
      fodevarer: 'Bitter smag st\u00f8tter hjertet: gr\u00f8n te, rucola, radicchio og m\u00f8rk chokolade. R\u00f8de f\u00f8devarer n\u00e6rer hjertet \u2014 granat\u00e6ble, kirseb\u00e6r, hindb\u00e6r og tomater. Linser og kik\u00e6rter giver stabil energi. Vandmelon og agurk k\u00f8ler naturligt. Fede fisk med omega-3 n\u00e6rer hjertet og hjernen.',
      urter: 'Hibiscus og tj\u00f8rn st\u00f8tter hjertet direkte og kan nydes som te. Rose \u00e5bner hjertet f\u00f8lelsesm\u00e6ssigt. Lavendel beroligende hjertet og hj\u00e6lper med s\u00f8vn.',
      undgaa: 'St\u00e6rkt krydret mad kan forv\u00e6rre varmen i et system der allerede k\u00f8rer h\u00f8jt. Spis regelm\u00e6ssigt \u2014 et hjerte i denne fase har brug for stabilt br\u00e6ndstof, ikke kaffe til frokost og takeaway klokken ni.'
    },
    ekstraRefleksioner: [
      'Hvad s\u00e6tter ild i dig lige nu \u2014 hvorn\u00e5r br\u00e6nder du virkelig for noget?',
      'Er der en dr\u00f8m du har lagt til side, fordi den ikke var realistisk nok?',
      'Hvem er du, n\u00e5r ingen forventer noget af dig?',
      'Hvorn\u00e5r valgte du sidst med hjertet frem for med hovedet?',
      'Hvad ville du g\u00f8re anderledes, hvis du vidste at du ikke kunne fejle?',
      'F\u00f8ler du at din vej er din egen \u2014 eller f\u00f8lger du et spor nogen andre har lagt?',
      'Hvad er det sv\u00e6reste ved at have s\u00e5 mange muligheder?',
      'Hvorn\u00e5r f\u00f8ler du dig mest levende?'
    ],
    overgangTekst: 'Omkring otteogtyve \u00e5r begynder ilden at kr\u00e6ve mere br\u00e6ndstof. Valgene fra tyverne f\u00e5r konsekvenser, og man kan ikke br\u00e6nde for alt p\u00e5 \u00e9n gang. Fase 5 er ildens h\u00f8jdepunkt, men ogs\u00e5 begyndelsen p\u00e5 forst\u00e5elsen af at energi har en gr\u00e6nse.',
    oevelser: [
      { type: 'krop', title: 'Rystningen', desc: 'Ryst kroppen l\u00f8s i to-tre minutter \u2014 h\u00e6nder, arme, skuldre, hofter, ben. St\u00e5 derefter helt stille og m\u00e6rk varmen under huden. L\u00f8sner stagneret Qi og er s\u00e6rlig god mod rastl\u00f8shed.' },
      { type: 'aandedraet', title: 'Hjertets varme', desc: 'L\u00e6g h\u00e5nden p\u00e5 brystet. \u00c5nd ind i fire t\u00e6l og tr\u00e6k varme ind i hjertet, hold i to, \u00e5nd ud i seks og m\u00e6rk varmen brede sig. Tilf\u00f8j hjertets helbredende lyd \u201chaaaa\u201d p\u00e5 ud\u00e5ndingen.' },
      { type: 'meridian', title: 'Hjertets meridian', desc: 'Stryg fra armhulen ned ad armens inderside til lillefingerens spids. Langsomt og med let tryk, fem til syv gange p\u00e5 hver arm. \u00c5bner hjertemeridianen og styrker forbindelsen.' },
      { type: 'yinyoga', title: '\u00c5ben vinge', desc: 'L\u00e6g dig p\u00e5 maven, str\u00e6k \u00e9n arm ud til siden i skulderh\u00f8jde og rul over p\u00e5 den side s\u00e5 brystet \u00e5bner. Bliv i tre-fem minutter per side. Giver dybt str\u00e6k i bryst og hjertemeridian.' },
      { type: 'sind', title: 'Sorteringens \u00f8velse', desc: 'Del et papir i to kolonner: \u201cdet der n\u00e6rer mig\u201d og \u201cdet der dr\u00e6ner mig\u201d. Skriv \u00e6rligt mennesker, aktiviteter, vaner. Tyndtarmens funktion er at sortere \u2014 kunsten er at se klart p\u00e5 hvad der giver og hvad der tager.' }
    ],
    relationerIFasen: 'En kvinde i Fase 4 er midt i at etablere sit eget liv. Forholdet til for\u00e6ldrene finder en ny form med k\u00e6rlige men tydelige gr\u00e6nser. Venskaber forandrer sig n\u00e5r livsveje g\u00e5r i forskellige retninger, og for par der m\u00f8des nu er udfordringen at prioritere forbindelsen midt i alt det der skal bygges.',
    balanceTekst: 'En kvinde i balance i denne fase mærker en naturlig entusiasme og livslyst. Der er energi til at forfølge drømme, skabe relationer og bygge noget op. Glæden kommer let. Forbindelsen til andre føles ubesværet. Det er som om livet siger ja, og du siger ja tilbage.\n\nFysisk er dette ofte en tid med god sundhed, stabil menstruation og en krop, der samarbejder. Søvnen er dyb, appetitten sund, og der er overskud til det meste. Hjernen er færdigudviklet – præfrontal cortex, som vi talte om i Fase 3, er endelig på plads – og for første gang har den unge voksne alle redskaberne til rådighed. Den vediske tradition kalder den indre ild for tapas – den kraft og disciplin, der driver os mod det, vi brænder for.',
    ubalanceTegn: {
      fysiske: [
      'Hjertebanken, svedeture og en uro, der ikke finder hvile',
      'Søvn forstyrret af livlige drømme eller svært ved at falde til ro',
      'Mundtørhed, tørste, tendens til inflammation',
      'Huden tilbøjelig til rødme og varme – som om ilden brænder under overfladen',
      'Uregelmæssig menstruation eller PMS med følelsesmæssige udsving',
      'Spændinger i bryst, skuldre og kæbe'
      ],
      mentale: [
      'Rastløshed og en følelse af, at man aldrig når nok – alt for mange bolde i luften',
      'Udbrændthed: ilden har brændt for længe uden brændstof',
      'Social overbelastning – for mange mennesker, for lidt alenetid',
      'Eller det modsatte: tilbagetrækning, mangel på glæde, en følelse af at være afkoblet',
      'Sammenligning med andre, der fører til utilstrækkelighed – især forstærket af sociale medier'
      ],
      aarsag: 'Glæde og forbindelse er hjertets næring – det lyder måske banalt, men det er dybt sandt. Tid med mennesker, vi elsker, aktiviteter, der begejstrer, og øjeblikke af ægte nærvær styrker ild-elementet. Latter er faktisk medicin for hjertet, og det er mere end en talemåde.\n\nRo og hvile er afgørende, selvom det kan føles som spildtid i en fase, hvor ambitionerne er høje. Ilden har brug for at hvile for at brænde klart, og uden tilstrækkelig søvn og afslapning brænder vi ud. Jeg har mødt mange kvinder i slutningen af tyverne, der pludselig ramte en mur, fordi de havde kørt for hårdt i for mange år. Kroppen sagde stop, også når viljen ville videre.\n\nKonstant stress og pres dræner hjertets energi over tid. At jagte mål uden at stoppe op, at give uden at modtage, at præstere uden at hvile – det er en opskrift på udbrændthed. Og stimulanser som koffein og alkohol kan føles som hjælp på kort sigt, men de belaster hjertet og forstyrrer den søvn, der er så nødvendig.'
    },
    centralFoelelse: { title: 'Passion og Rastløshed', tekst: 'Glæde er ild-elementets følelse, og i denne fase er den så tæt på overfladen, at den næsten lyser ud af folk. Den første kærlighed, der holder. Det første job, der giver mening. Den første lejlighed, der er helt din egen. De øjeblikke, hvor du står stille og tænker: mit liv er begyndt.\n\nMen glædens skyggeside er rastløsheden. Når ilden brænder for højt, bliver glæde til uro, begejstring til overvældelse, passion til udmattelse. Det er den kvalitet, der får en syvogtyveårig til at sige ja til alt – til jobbet, til vennerne, til festen, til rejsen, til det hele – og så ligge søvnløs klokken tre og undre sig over, hvorfor hjertet banker.\n\nHjertet rummer også sårbarheden. At åbne sig for kærlighed, for karriere, for drømme er altid en risiko. Og når det går galt – når forholdet ender, når jobbet skuffer, når drømmen viser sig at være anderledes, end man troede – kan smerten føles overvældende, netop fordi hjertet var så åbent.\n\nEn ung kvinde sagde engang til mig: "Jeg troede, at når jeg blev voksen, ville alting falde på plads. Men det føles bare som om, der er flere brikker, og ingen af dem passer helt." Den følelse kender mange i denne fase. Presset for at have styr på det hele – karriere, kærlighed, økonomi, sundhed, venner – kan føles knusende, især når alle andre tilsyneladende har løst puslespillet.\n\nForskning i voksenudvikling viser, at tyverne er en af de mest formende perioder i livet. De valg, vi træffer om uddannelse, karriere og relationer, har langvarig betydning, og det er godt at vide. Samtidig viser forskningen, at mange oplever betydelig usikkerhed i netop disse år – og at den usikkerhed er normal, også selvom den føles ensom.\n\nSociale medier forstærker sammenligningen. Andre menneskers højdepunkter – forlovelser, forfremmelser, rejser, fødsler – passerer i en strøm, og det er svært at huske, at det er et udvalg, ikke et helt liv. Din vej behøver ikke ligne andres for at være rigtig.' },
    temaerNarrativer: [
      { title: 'Karriere og retning', tekst: 'I denne fase bliver spørgsmålet "hvad vil jeg med mit liv?" for alvor presserende. Uddannelsen er typisk afsluttet, og nu skal der vælges en retning. For nogle er svaret klart – de har vidst det i årevis og går bare i gang. For andre er det en tid med usikkerhed og eksperimenteren, hvor man prøver forskellige veje for at mærke, hvad der passer.\n\nTræ-elementets evne til at sætte en retning er stadig aktiv, men nu tilføjer ilden passion og begejstring. Den unge voksne vil have et arbejde, der føles meningsfuldt, der giver mulighed for at udtrykke, hvem hun er. Det er en idealistisk tilgang, som kan være både styrke og udfordring – den driver os mod liv, der faktisk føles værd at leve, men den kan også skabe frustration, når virkeligheden ikke matcher drømmene. Og det gør den sjældent helt.\n\nAt finde en balance mellem ambition og accept er en af de store opgaver her. At stræbe efter noget meningsfuldt, samtidig med at man finder fred med der, hvor man er lige nu. I yoga-filosofien taler man om svadhyaya – selvstudium, den vedvarende praksis at undersøge, hvem man er, og hvad ens sande kald rummer.' },
      { title: 'Partnerskab og intimitet', tekst: 'Kærligheden får en ny dybde i denne fase. Hvor teenageforelskelser var intense men kortvarige, begynder relationerne nu at handle om noget mere – om at bygge et liv sammen, om ægte intimitet, om at blive set og kendt i sin helhed, også de dele, man ikke er så stolt af.\n\nHjertet, som er denne fases centrale organ, handler netop om forbindelse. At åbne sig for et andet menneske, at turde være sårbar, at lade sig berøre – alt det kræver mod, for kærlighed er altid en risiko. For mange er dette tiden, hvor de langvarige partnerskaber dannes, og spørgsmålene fra omgivelserne kommer, hvis de ikke allerede er der.\n\nUanset om du er i et parforhold eller ej, handler denne fase om at lære at skabe ægte intimitet – med en partner, med venner, med dig selv. At lære at åbne hjertet og holde det åbent, også når det gør ondt.' },
      { title: 'Spørgsmålet om børn', tekst: 'For kvinder er denne fase uløseligt forbundet med spørgsmålet om børn, og det er værd at tale åbent om. Kroppen er på sit mest fertile, og den biologiske rytme – uanset hvor meget vi måtte ønske at ignorere den – gør sig gældende. Det er en realitet, og den fortjener respekt.\n\nNogen ved med sikkerhed, at de vil have børn. Måske har de fundet partneren, måske leder de stadig, men retningen er klar. Andre er usikre og kæmper med presset fra både biologi og omgivelser – de ved ikke, hvad de vil, og det kan føles forvirrende, når alle andre tilsyneladende har styr på det. Og nogle ved, at de ikke ønsker børn, og må finde vej i en verden, der ofte antager noget andet.\n\nDer er ingen rigtige svar her. Men at være bevidst om den biologiske virkelighed – at fertiliteten topper nu og gradvist vil falde i de kommende år – kan hjælpe med at træffe informerede valg, uanset hvad de måtte være. Yoga-filosofien kalder det satya – ærlighed, sandhed over for sig selv. At turde mærke, hvad du faktisk ønsker, uden at lade andres forventninger forme svaret. Din vej er din egen, og der er mange måder at blomstre på.' }
    ],
    denneFaseIDig: 'En kvinde i Fase 4 er ofte midt i at etablere sit eget liv, og det påvirker relationerne på nye måder. Forholdet til forældrene er ved at finde en ny form – du er ikke længere den oprørske teenager, men heller ikke helt voksen i deres øjne. Der kan opstå nye spændinger, når forældre har meninger om uddannelse, karriere og partnere. Den balance mellem at lytte og at holde fast i sin egen retning kræver en ny slags grænser – kærlige, men tydelige.\n\nForældre til en kvinde i Fase 4 er typisk i Fase 6, 7 eller 8. De er forbi deres travleste år og har måske mere tid og overskud til at være til stede på en ny måde. Den relation, der måske var anstrengt i teenagerårene, kan begynde at hele – der er plads til at lære hinanden at kende på ny, som voksne mennesker.\n\nVenskaberne forandrer sig også, efterhånden som livene tager forskellige retninger. For kvinder uden børn kan relationerne til jævnaldrende, der begynder at få børn, skifte karakter. Pludselig er der et skel, som ingen har bedt om. Venskaber, der før var selvfølgelige, kræver nu mere bevidst pleje. Det er ingen skyld – det er bare forskellige livsveje, der trækker i forskellige retninger. At anerkende det, i stedet for at lade det blive til afstand, er måske det vigtigste, I kan gøre for hinanden.\n\nFor par, der mødes i denne fase, er der ofte en dejlig synkronicitet. I er begge i en opbyggende energi, begge fokuserede på at etablere jer. Udfordringen kan være, at I er så travle med at bygge – karriere, hjem, økonomi – at I glemmer at passe på forbindelsen mellem jer. At prioritere tid til hinanden midt i alt det, der skal nås, er måske den vigtigste investering, I kan gøre i disse år.',
    aaretsRytme: 'Denne fase bevæger sig fra træ til ild – fra forår til sommer. Du mærker måske en særlig resonans med netop disse årstider: foråret vækker din vækstenergi og din trang til at sætte nye projekter i gang, mens sommeren giver rum til at udfolde dig fuldt ud. Sommerens temaer – den udadvendte, forbindende energi – finder du beskrevet i De 5 Årstiders Energi, og de får en ny dybde i denne livsfase, hvor ilden brænder i alt, du foretager dig.\n\nMen pas på at ignorere de andre årstider. Efterårets invitation til refleksion og vinterens kald om hvile er stadig vigtige, måske endnu vigtigere i en fase, hvor energien er så udadvendt. At følge årets rytme kan hjælpe dig med at undgå den udbrændthed, der lurer, når man kører på højtryk hele året rundt.\n\nDin månedlige cyklus kan føles som en forstyrrelse midt i alt det, du gerne vil nå. Menstruationen kommer, og du har ikke tid til at være træt. Men hvad hvis du vendte perspektivet? Din indre vinter fortæller dig, hvad du har brug for at slippe. Din indre forår viser, hvad der vil vokse. Din indre sommer giver kraft til at handle. Og din indre efterår inviterer dig til at sortere. At arbejde med din cyklus, i stedet for imod den, kan faktisk give dig mere energi.\n\nHjertets tid i organuret er kl. 11-13, og tyndtarmens tid er kl. 13-15. Det gør middagstimerne til et godt tidspunkt for sociale aktiviteter, vigtige møder og arbejde, der kræver engagement. Aftentimerne kalder på ro – at være "på" midt på dagen og koble af om aftenen er en rytme, der bærer ilden længere.',
    elementEssay: 'I den kinesiske medicin markerer Fase 4 overgangen fra træ til ild, og den forandring kan virkelig mærkes. Den fremadrettede energi, der drev ungdommens søgen og oprør, antændes nu af noget nyt – passionen, begejstringen og evnen til at brænde for det, man tror på.\n\nHjertet træder frem som det centrale organ, og det rummer mere end blot en pumpe. I den kinesiske medicin er hjertet sædet for vores bevidsthed, vores evne til at føle glæde og vores forbindelse til andre mennesker. Når hjertet er i balance, oplever vi en naturlig varme og åbenhed over for livet – en følelse af at være forbundet med det, der betyder noget.\n\nIfølge de klassiske tekster er kvinders energi på sit absolutte højdepunkt omkring otteogtyveårsalderen. Det er her, Qi\'en er stærkest, kroppen mest vital og fertiliteten på sit højeste. Det er den kinesiske medicins måde at sige: dette er din blomstringstid. I den vediske tradition markerer denne fase begyndelsen på grihastha – husholderens livsfase, hvor vi træder ud af lærlingens rolle og begynder at bygge vores eget liv i verden.\n\nTyndtarmen arbejder sammen med hjertet og handler om at sortere: at skelne mellem det, der nærer os, og det, der skal udskilles. I en fase med mange valg er den evne uvurderlig. Alt glæder, men alt glæder ikke lige meget – og kunsten er at finde det, der virkelig varmer.'
  },
  5: {
    introText: 'Ildens fase. Ansvar for karriere, m\u00e5ske b\u00f8rn, m\u00e5ske parforhold. Energien er intens og handlingsorienteret \u2014 kvinden br\u00e6nder for det hun tror p\u00e5, men flammen kr\u00e6ver br\u00e6ndstof.',
    organPar: 'Hjerte og Tyndtarm', smag: 'Bitter', aarstid: 'Sommer',
    folelser: { balance: 'Gl\u00e6de, forbindelse, passion', ubalance: 'Rastl\u00f8shed, angst, udbr\u00e6ndthed' },
    vediskKobling: 'Grihastha \u2014 husholderfasen',
    livstemaer: ['Ansvar og moderskab', 'Karrierens intensitet', 'Parforholdets pr\u00f8velser'],
    psykOpgaver: ['Balancere ild og hvile', 'Navigere andres behov', 'Bevare kontakt med sig selv'],
    kropTekst: 'Hjertet og kredsl\u00f8bet er i centrum. Mange kvinder f\u00f8der i denne fase \u2014 kroppen gennemg\u00e5r en af sine mest transformerende oplevelser. Energien er h\u00f8j men kan br\u00e6nde ud. Hjertet arbejder h\u00e5rdt, b\u00e5de fysisk og emotionelt. S\u00f8vnmangel og stress kan t\u00e6re.',
    sindTekst: 'Sindet jonglerer mange bolde. Karriere, b\u00f8rn, parforhold, identitet \u2014 alt kr\u00e6ver opm\u00e6rksomhed. Gl\u00e6den er stor men ogs\u00e5 s\u00e5rbar. Ildens f\u00e6lde er at br\u00e6nde for alt og glemme sig selv. Mange kvinder opdager her, at de har mistet kontakten til deres egne behov.',
    oevelse: { title: 'Melting Heart (Yin Yoga)', desc: '\u00c5bner bryst og hjertemeridian. En position der minder om at give slip og modtage.' },
    kost: { title: 'Bitter salat og gr\u00f8n te', desc: 'Bitter smag k\u00f8ler hjertet. Vandmelon, hibiscuste, r\u00f8de b\u00e6r der n\u00e6rer blodet.' },
    meridianStrygning: { title: 'Pericardium', desc: 'Fra brystet ned langs armens midte til langfingeren. Beskytter hjertet mod overv\u00e6ldelse.' },
    refleksioner: ['Hvilke m\u00f8nstre gentager du fra din mor?', 'Hvad ville du g\u00f8re anderledes, hvis du kun havde ansvar for dig selv?', 'Hvorn\u00e5r br\u00e6ndte du sidst for noget uden at br\u00e6nde ud?'],
    elementInfo: { energi: 'Udfoldelse, varme, forbindelse', sanseorgan: 'Tunge', kropsvaev: 'Blodkar', farve: 'R\u00f8d' },
    fasensRaad: [
      'Du kan ikke h\u00e6lde fra en tom kande. Din egen omsorg er fundamentet for al den omsorg du giver andre \u2014 det er ikke egoisme, det er n\u00f8dvendighed.',
      'Bed om hj\u00e6lp, aktivt og konkret. De fleste vil gerne hj\u00e6lpe, de ved bare ikke hvorn\u00e5r.',
      'S\u00e6nk standarden. En dag med h\u00f8jt hum\u00f8r og pizza er bedre end en dag med hjemmelavet mad og gr\u00e5d.',
      'Beskyt din s\u00f8vn. S\u00f8vnmangel forv\u00e6rrer alt \u2014 hum\u00f8ret, t\u00e5lmodigheden, immunforsvaret, parforholdet.',
      'V\u00e6lg dine kampe. Alt er ikke lige vigtigt. Gem energien til det der virkelig g\u00e6lder.',
      'Find \u00f8jeblikke. Fem minutter med en kop te, en g\u00e5tur alene, en sang i bilen \u2014 de sm\u00e5 \u00f8jeblikke t\u00e6ller mere end du tror.',
      'Husk: dette er en fase. Intensiteten er midlertidig, ogs\u00e5 n\u00e5r den f\u00f8les evig.'
    ],
    kostDetaljer: {
      fodevarer: 'Bitter smag k\u00f8ler hjertet: gr\u00f8n te, l\u00f8vetand og m\u00f8rke bladgr\u00f8ntsager. K\u00f8lende f\u00f8devarer balancerer den intense ild-energi: p\u00e6re, mynte og kokosvand. R\u00f8dbeder styrker blodet. Valn\u00f8dder og sesamfr\u00f8 n\u00e6rer hjertet. H\u00f8rfr\u00f8 st\u00f8tter hormoner og ford\u00f8jelse.',
      urter: 'Tj\u00f8rneb\u00e6r st\u00f8tter hjertet direkte og kan hj\u00e6lpe med hjertebanken. Lavendel og passionsblomst bringer ro til nervesystemet. Ashwagandha hj\u00e6lper kroppen med at h\u00e5ndtere stress. Rose som te bringer blid varme til hjertet.',
      undgaa: 'St\u00e6rkt krydret mad \u00f8ger varmen i et system der allerede er varmt. Koffein belaster hjertet og forstyrrer s\u00f8vnen. Spis regelm\u00e6ssigt og k\u00f8ligt \u2014 en krop under pres har brug for stabilt br\u00e6ndstof.'
    },
    ekstraRefleksioner: [
      'Hvad ville der ske, hvis du sagde nej til \u00e9n ting i morgen?',
      'Hvorn\u00e5r f\u00f8lte du sidst at du virkelig havde tid nok?',
      'Hvem tager sig af dig, n\u00e5r du tager dig af alle andre?',
      'Er der noget du g\u00f8r af pligt, som du egentlig har lyst til at stoppe med?',
      'Hvad har du brug for lige nu, som du ikke beder om?',
      'Hvorn\u00e5r blev god nok ikke l\u00e6ngere godt nok for dig?',
      'Hvad dr\u00f8mte du om da du var femogtyve, som du har glemt?',
      'Hvis din krop kunne tale \u2014 hvad ville den bede dig om?'
    ],
    overgangTekst: 'Omkring femogtredive \u00e5r begynder ilden at s\u00f8ge et andet udtryk. Sp\u00f8rgsm\u00e5lene handler mindre om at pr\u00e6stere og mere om at finde mening. Fase 6 er overgangen fra ild til jord \u2014 fra sommerens intensitet til sensommerens modning og refleksion.',
    oevelser: [
      { type: 'krop', title: 'Skuldercirkler og bryst\u00e5bner', desc: 'L\u00e6g fingerspidserne p\u00e5 skuldrene. Tr\u00e6k albuerne i store langsomme cirkler \u2014 ti gange hver vej. \u00c5bner brystet og hjertemeridianen og l\u00f8sner sp\u00e6ndinger fra at b\u00e6re for meget.' },
      { type: 'aandedraet', title: 'Kom ned', desc: 'L\u00e6g dig ned. H\u00e5nd p\u00e5 hjerte og mave. \u00c5nd ind i fire t\u00e6l, hold i fire, ud i otte. N\u00e6se\u00e5nding k\u00f8ler, og den lange ud\u00e5nding aktiverer det parasympatiske nervesystem. Pericardiums beskyttende funktion i praksis.' },
      { type: 'meridian', title: 'Pericardium-meridian', desc: 'Stryg fra midt p\u00e5 brystet ud over skulderen, ned langs midten af armen til langfingerens spids. Tre til fem gange per arm. Minder kroppen om at du har lov til at beskytte dit eget hjerte.' },
      { type: 'yinyoga', title: 'Smeltende hjerte', desc: 'P\u00e5 alle fire, lad armene glide frem mens hofterne bliver over kn\u00e6ene. Brystet synker mod gulvet, tre-fem minutter. Giver hjertet lov til at \u00e5bne sig nedad mod st\u00f8tte.' },
      { type: 'sind', title: '\u00c9t nej', desc: 'Sig nej til \u00e9n ting i morgen. Bare \u00e9n forpligtelse du ikke har overskud til. M\u00e6rk hvordan det f\u00f8les. Pericardium beskytter hjertet, og hvert nej er et lille stykke beskyttelse.' }
    ],
    relationerIFasen: 'En kvinde i Fase 5 er ofte i centrum af et netv\u00e6rk af relationer der alle kr\u00e6ver noget af hende. B\u00f8rn i Fase 1-2 har brug for alt, parforholdet s\u00e6ttes p\u00e5 pr\u00f8ve af travlheden, og venskaber forandrer sig. Det der holder par sammen er evnen til at v\u00e6re et team under sv\u00e6re vilk\u00e5r.',
    udenBorn: 'For kvinder uden b\u00f8rn har denne fase sin egen intensitet. Sp\u00f8rgsm\u00e5lene fra omgivelserne kan v\u00e6re utr\u00e6ttelige, og det er udmattende at forholde sig til andres antagelser. Ild-energien kan rette sig mod mange former for skabelse \u2014 karriere, kunst, f\u00e6llesskab. Der er mange m\u00e5der at bruge sin livskraft p\u00e5.',
    balanceTekst: 'En kvinde i balance i denne fase formår at brænde klart uden at brænde ud. Der er energi til det vigtige, og der er visdom til at vælge, hvad det vigtige er. Glæden er tilgængelig, også midt i travlheden, og forbindelsen til de mennesker, der betyder mest, føles levende og nærende.\n\nFysisk viser balance sig som god søvn, stabil energi gennem dagen og en krop, der samarbejder, også når den bliver presset. Menstruationen er regelmæssig, immunforsvaret holder, og der er øjeblikke af overskud, som dukker op når man mindst venter det.',
    ubalanceTegn: {
      fysiske: [
      'Vedvarende træthed, der ikke forsvinder med søvn – som om batteriet aldrig bliver ladet helt op',
      'Hjertebanken, svedeture, en uro i kroppen, der ikke finder hvile',
      'Søvnproblemer – særligt at vågne mellem kl. 01 og 03, leverens tid',
      'Hovedpine, spændinger i kæbe og nakke',
      'Tendens til at blive syg, så snart man holder pause – kroppen venter på lov til at falde sammen',
      'Uregelmæssig eller smertefuld menstruation'
      ],
      mentale: [
      'Følelse af at være "på" hele tiden uden mulighed for at koble af',
      'Irritabilitet og kort lunte – følelsen af at næste krav vælter det hele',
      'Tab af glæde ved ting, der plejede at give energi',
      'En tomhed bag facaden – at gøre alt det rigtige, men ikke mærke noget',
      'Skyldfølelse, uanset hvad man gør: aldrig nok på jobbet, aldrig nok derhjemme'
      ],
      aarsag: 'Udbrændthed er denne fases største fare, og den sker gradvist – som en ild, der langsomt får mindre brændstof, indtil den kun ulmer. Forskning i stress bekræfter, at kvinder i trediverne ofte rapporterer højere stressniveauer end mænd i samme alder, delvist på grund af det usynlige arbejde med at holde styr på hjem og relationer.\n\nNeurovidenskaben viser, at kronisk stress ændrer hjernens funktion: amygdala, hjernens alarmsystem, bliver overaktiv, mens præfrontal cortex svækkes. Det forklarer, hvorfor stressede mennesker reagerer mere impulsivt og har sværere ved at tænke langsigtet. Det er altså ikke din skyld, at du reagerer, som du gør – det er biologi under pres.\n\nAt lære at modtage er måske det vigtigste i denne fase. Ild-energien vil give og give, men uden at modtage brænder den ud. At bede om hjælp, at acceptere støtte, at lade andre gøre noget for dig er overlevelse – aldrig svaghed.'
    },
    centralFoelelse: { title: 'Glæde og Udmattelse', tekst: 'Glæde er stadig ild-elementets følelse, og den er til stede i denne fase – selv når den er svær at få øje på. Det er glæden i barnets latter, i det øjeblik hvor alt fungerer på arbejdet, i den stille halve time med en veninde, i den aften hvor parforholdet pludselig er levende igen. Glæden er der, men den gemmer sig måske under lag af træthed.\n\nSkyggefølelsen i denne fase er udmattelse – og den skyldfølelse, der følger med. For når ilden er brugt op, kan der komme en tomhed, der føles skamfuld. Jeg burde være glad. Jeg har jo alt det, jeg ønskede. Hvorfor føles det så tungt? Den indre dialog kan være nådesløs, og den bliver værre af, at sociale medier viser andre kvinder, der tilsyneladende klarer det hele med overskud og et smil.\n\nEn kvinde i min praksis sagde: "Jeg elsker mine børn så meget, at det gør ondt. Og jeg er så træt, at det også gør ondt. Og jeg ved ikke, hvornår der er plads til mig selv i det." Den sætning rummer så meget af det, denne fase handler om. At give alt og mærke, at der måske ikke er nok til en selv.\n\nForskning viser, at denne fase er en tid med øget risiko for depression og angst – hvad enten det hænger sammen med moderskab, karrierepres, fertilitetsudfordringer eller andre livsomstændigheder. Det er vigtig viden, fordi den minder os om, at det ikke er et personligt svigt at have det svært. Det er en fase, der er svær – strukturelt, biologisk, kulturelt.\n\nPericardium, hjertesækken, har en særlig funktion her. Den beskytter hjertet mod overvældelse. At lære at sætte grænser – mod krav, mod forventninger, mod sin egen perfektionisme – er pericardiums arbejde i praksis. Du behøver ikke give alt til alle. Du har lov til at beskytte din ild.' },
    temaerNarrativer: [
      { title: 'Moderskab', tekst: 'For mange kvinder er denne fase forbundet med moderskabet. Børnene er ofte små og krævende, og selv den mest ønskede og elskede baby forandrer livet på måder, man ikke kunne forestille sig på forhånd.\n\nModerskabet er en kærlighedseksplosion og et identitetsjordskælv på samme tid. Den kvinde, du var før, eksisterer ikke længere på samme måde, og den nye version er stadig ved at tage form. Det kan føles som et tab, selv midt i glæden – og det er okay at mærke begge dele.\n\nDe fysiske krav er enorme: graviditet, fødsel, amning, søvnmangel, at bære og løfte og trøste døgnet rundt. Kroppen giver og giver, og den har brug for tid og næring for at komme sig – tid og næring, som ofte er svær at finde. De følelsesmæssige krav er lige så store: at rumme et barns følelser oven i sine egne, at være den voksne, også når man selv har lyst til at græde, at elske så voldsomt, at det nogle gange gør ondt.' },
      { title: 'Et liv uden børn i denne fase', tekst: 'For kvinder uden børn har denne fase sin egen intensitet. Spørgsmålene fra omgivelserne kan være utrættelige: "Hvornår skal du have børn?" "Har du ikke travlt?" "Du fortryder, når du bliver ældre." Det er udmattende at skulle forholde sig til andres antagelser om ens liv, især når svaret måske ikke er så enkelt.\n\nNogen kvinder ved med sikkerhed, at de ikke ønsker børn, og må bruge energi på at forsvare et valg, der for dem føles helt naturligt. Andre kæmper med fertilitetsbehandlinger, med håb og skuffelse, med en sorg, som få omkring dem forstår omfanget af. Og andre står midt i usikkerheden – ikke sikre på, hvad de vil, mens den biologiske rytme gør sig gældende.\n\nUanset hvor du befinder dig, er din oplevelse gyldig. Ild-energien kan rette sig mod mange former for skabelse. Karrieren, kunsten, fællesskabet, relationerne – der er mange måder at bruge sin livskraft på, og moderskabet er kun én af dem.' },
      { title: 'Karriereintensitet', tekst: 'Parallelt med moderskabet – eller i stedet for det – er denne fase ofte præget af karriereintensitet. Det er nu, de afgørende forfremmelser kommer, de vigtige projekter, der kan definere en karriere. Presset for at bevise sit værd er højt, og det kommer fra flere sider på én gang.\n\nFor kvinder med børn opstår det velkendte dilemma: hvordan balancerer man ambitioner på arbejdet med ansvar derhjemme? Skyldfølelsen rammer fra begge sider – aldrig nok til stede på jobbet, aldrig nok til stede for børnene. For kvinder uden børn kan karrieren fylde på en anden måde, måske med en forventning fra omgivelserne om, at man så burde præstere endnu mere. Uanset konstellation er dette en fase, hvor mange kvinder oplever, at der simpelthen ikke er timer nok i døgnet.' },
      { title: 'Sandwich-positionen begynder', tekst: 'I denne fase begynder mange at mærke presset fra flere sider. Forældre bliver ældre og har måske brug for hjælp. Sandwich-generationen – klemt mellem flere generationers behov – er et moderne fænomen, der rammer kvinder hårdest. Det er ofte døtrene, der holder øje med aldrende forældre, koordinerer lægebesøg, bekymrer sig.\n\nI Fase 5 er det måske kun en begyndende fornemmelse – en erkendelse af, at forældrene ikke længere er de stærke, uafhængige mennesker, de engang var. Men det lægger et ekstra lag af bekymring oven i alt det andet, og det kan føles som den dråbe, der får glasset til at løbe over.' }
    ],
    denneFaseIDig: 'En kvinde i Fase 5 er ofte i centrum af et netværk af relationer, der alle kræver noget af hende. Partner, mor, datter, kollega, veninde – hver rolle har sine forventninger, og tilsammen kan de føles som mere, end ét menneske kan bære.\n\nHvis du har børn, er de sandsynligvis i Fase 1 eller 2 – små børn, der har brug for alt: tryghed, nærvær, tålmodighed og kærlighed døgnet rundt. Mødet mellem en udmattet mor i Fase 5 og et lille barn i Fase 1 kan være både det smukkeste og det sværeste i verden. Barnet mærker din stress og kan blive mere krævende, og en ond cirkel kan opstå. Husk: dit barn har mere brug for en nogenlunde glad mor end en perfekt udmattet en.\n\nVenskaberne forandrer sig også. Kvinder uden børn kan opleve, at relationerne til veninder med børn skifter – samtalerne handler om noget andet, tidspunkterne passer ikke længere, og der kan opstå en distance, som ingen har ønsket. At finde fællesskaber med andre kvinder i lignende situation, eller veninder, der rummer forskellen, kan være vigtigt.\n\nHvis der er et parforhold, sættes det ofte på prøve her. Travlheden sniger sig ind og tager pladsen fra intimiteten. Hvem tager sig af hvad? Hvem har ret til at være træt? De forhandlinger kan blive til magtkampe, hvis I ikke passer på. Det, der holder par sammen gennem denne tid, er evnen til at være et team – at anerkende, at I begge gør jeres bedste under svære vilkår. Og at huske, at denne intense fase går over. Spørgsmålet er, hvad der er tilbage af jeres forbindelse på den anden side.',
    aaretsRytme: 'Ild-elementet dominerer denne fase, og sommeren har en særlig resonans – den udadvendte, aktive energi, der blomstrer i varmen. Hjertets kvaliteter fra sommerkapitlet i De 5 Årstiders Energi kender du måske allerede – her møder du dem igen, bare i en mere intens udgave, fordi livets ild brænder på højtryk.\n\nMen pas på at ignorere de andre årstider. Efterårets invitation til at slippe og vinterens kald om hvile er særligt vigtige i en fase, hvor der altid er mere at gøre. Ferier og pauser føles måske umulige, men de er nødvendige – ild, der aldrig får hvile, brænder ud.\n\nDin månedlige cyklus kan føles som endnu et krav midt i alt det andet. Menstruationen kommer, og du har ikke tid til at være træt. Men kroppen insisterer – og den har ret. I ayurvedisk tradition kalder man dette pitta-fasen af livet, hvor den indre ild er stærkest og let bliver for varm. Køling og ro er medicin, også når kalenderen siger noget andet.\n\nHjertets tid i organuret er kl. 11-13. Midt på dagen er din forbindelsesenergi højest – brug den tid til de samtaler og møder, der virkelig betyder noget. Aftentimerne kalder på afkobling. Og når du vågner mellem kl. 01 og 03 – leverens tid – så er det et tegn på, at noget sidder fast, der har brug for opmærksomhed.',
    elementEssay: 'I den kinesiske medicin er Fase 5 domineret af ild-elementet i sin fulde styrke. Det er sommerens energi – udadvendt, varm, generøs og aktiv. Ilden vil oplyse, forbinde og skabe, og i denne fase er der rigeligt at bruge den på.\n\nEn kvinde i denne fase giver ofte af sig selv på mange fronter: til arbejdet og partneren, til børnene hvis hun har nogen, til venner, familie og de projekter, hun brænder for. Det er som en ild, der lyser op i alle retninger – og netop derfor er risikoen for at brænde ud så reel.\n\nDen vediske tradition ville kalde denne fase den mest intense del af grihastha – husholderens livsfase, hvor ansvaret for andre er på sit højeste. Det er den tid, hvor vi bygger og opretholder, giver og bærer. Men traditionen minder også om, at selv husholdersken har brug for sit eget indre rum.'
  },
  6: {
    introText: 'Klarhedens tid. Noget skifter i kvinden \u2014 en ny evne til at skelne mellem det v\u00e6sentlige og det overfl\u00f8dige. Ildens intensitet fra forrige fase giver langsomt plads til en sk\u00e6rpet sans for hvad der virkelig betyder noget.',
    organPar: 'Lunger og Tyktarm', smag: 'Skarp', aarstid: 'Efter\u00e5r',
    folelser: { balance: 'Klarhed, skelneevne, begyndende lethed', ubalance: 'Sorg, distance, perfektionisme' },
    vediskKobling: 'Vanaprastha \u2014 den reflektive overgang',
    livstemaer: ['Klarhed', 'Forenkling', 'At finde det v\u00e6sentlige'],
    psykOpgaver: ['Skelne det \u00e6gte fra det overtagne', 'Give slip p\u00e5 det overfl\u00f8dige', 'Finde sin egen stemme'],
    kropTekst: 'Lungerne og tyktarmen tr\u00e6der frem som centrale organer. Vejrtr\u00e6kningen bliver vigtigere \u2014 mange kvinder opdager at de har tr\u00e6kket vejret overfladisk i \u00e5revis. Huden begynder at \u00e6ndre sig, bliver mere f\u00f8lsom. Kroppen beder om renhed og enkelhed: frisk luft, god s\u00f8vn, enklere mad. De f\u00f8rste tegn p\u00e5 perimenopause kan melde sig.',
    sindTekst: 'Sindet sk\u00e6rpes. Den travle ild-energi fra trediverne giver plads til en roligere opm\u00e6rksomhed. Du begynder at se klart p\u00e5 hvad der n\u00e6rer dig, og hvad der bare fylder. Metallets gave er den evne til at sk\u00e6re igennem \u2014 men dens skygge er sorg over det der m\u00e5 slippes.',
    oevelse: { title: 'Open Wings (Yin Yoga)', desc: '\u00c5bner brystkassen og lungemeridianerne. En position for at give plads til vejrtr\u00e6kningen og slippe sp\u00e6ndinger.' },
    kost: { title: 'Hvide f\u00f8devarer og p\u00e6rer', desc: 'Lungerne elsker hvidt: blomk\u00e5l, p\u00e6rer, radiser, ris. Befugtende mad der st\u00f8tter det nye element.' },
    meridianStrygning: { title: 'Lungernes meridian', desc: 'Fra kravebenet ned ad armens yderside til tommelfingeren. St\u00f8tter evnen til at give slip og tr\u00e6kke vejret dybt.' },
    refleksioner: ['Hvad har du b\u00e5ret l\u00e6nge nok?', 'Hvad ser du klarere nu end for ti \u00e5r siden?', 'Hvad ville der ske, hvis du sagde nej til det der t\u00e6rer?'],
    elementInfo: { energi: 'T\u00f8rhed, klarhed, udskillelse', sanseorgan: 'N\u00e6se', kropsvaev: 'Hud', farve: 'Hvid' },
    fasensRaad: [
      'Tr\u00e6k vejret bevidst. Selv fem dybe \u00e5ndedr\u00e6t om morgenen g\u00f8r en forskel. Lungerne har v\u00e6ret forsømte i de travle \u00e5r.',
      'Ryd ud i det konkrete. Skuffer, skabe, forpligtelser. Giv v\u00e6k det der ikke l\u00e6ngere giver dig noget.',
      'G\u00e5 i frisk luft dagligt. Lungerne elsker bevægelse og ren luft \u2014 is\u00e6r i de k\u00f8lige \u00e5rstider.',
      'Spis befugtende mad \u2014 supper, p\u00e6rer med honning, dampede gr\u00f8ntsager. Lungerne har brug for fugt.',
      'Pas p\u00e5 din hud. Den h\u00f8rer til metal-elementet og fort\u00e6ller dig noget om din indre tilstand.',
      'Sig det du m\u00e6rker. Metallets element er knyttet til stemmen \u2014 det us\u00e6gelige t\u00e6rer p\u00e5 lungerne.',
      '\u00d8v dig i at slippe. Bare \u00e9n ting om ugen. En vane, en forventning, en forestilling om hvem du burde v\u00e6re.',
      'M\u00e6rk hvad der letter dig. Klarhed kommer ikke af at t\u00e6nke mere, men af at give slip p\u00e5 det der slører.'
    ],
    kostDetaljer: {
      fodevarer: 'Hvide f\u00f8devarer n\u00e6rer lungerne \u2014 blomk\u00e5l, selleri, p\u00e6rer, ris og mandler. Supper og gr\u00f8d befugter indefra. Fermenterede f\u00f8devarer som sauerkraut og miso st\u00f8tter tyktarmen.',
      urter: 'Ingef\u00e6r varmer og \u00e5bner luftvejene. Timian og salvie er klassiske lungeurter. Lakridsrod befugter bl\u00f8dt. Hvid peber og peberrod i sm\u00e5 m\u00e6ngder sk\u00e6rper metallets energi.',
      undgaa: 'For t\u00f8r mad uden fugt belaster lungerne. Mejeriprodukter i store m\u00e6ngder kan skabe slim. Befugt indefra med supper og dampet mad, og undg\u00e5 det der udt\u00f8rrer.'
    },
    ekstraRefleksioner: [
      'Hvad ville du \u00e6ndre, hvis du vidste at ingen ville blive skuffede?',
      'Er der noget i dit liv der engang gav mening, men ikke g\u00f8r det l\u00e6ngere?',
      'Hvorn\u00e5r m\u00e6rkede du f\u00f8rste gang at noget var ved at skifte i dig?',
      'Hvad ser du nu, som du ikke kunne se for fem \u00e5r siden?',
      'Er den kvinde du er i dag, den kvinde du dr\u00f8mte om at blive?',
      'Hvad har du l\u00e6rt om at give slip?',
      'Hvorn\u00e5r f\u00f8ler du den st\u00f8rste klarhed?',
      'Hvad er forskellen p\u00e5 det du vil, og det du burde?'
    ],
    overgangTekst: 'Omkring toogfyrre sender kroppen de f\u00f8rste tydelige signaler om den st\u00f8rre overgang. Menstruationen \u00e6ndrer sig, der kan komme hum\u00f8rskift, og huden bliver mere f\u00f8lsom. Fase 7 bringer metallets fulde kraft \u2014 den store frig\u00f8relse begynder.',
    oevelser: [
      { type: 'krop', title: '\u00c5ben brystkasse', desc: 'St\u00e5 med f\u00f8dderne i skulderbredde, fold h\u00e6nderne bag ryggen og tr\u00e6k skuldrene bl\u00f8dt tilbage. Hold i fem til ti \u00e5ndedr\u00e6t, gentag tre gange. \u00c5bner lungerne og giver vejrtr\u00e6kningen mere plads.' },
      { type: 'aandedraet', title: 'Lungernes lyd', desc: '\u00c5nd ind i fire t\u00e6l, hold i to, ud i seks t\u00e6l med en bl\u00f8d \u201essss\u201d-lyd. L\u00e6ngere ud\u00e5nding end ind\u00e5nding. Otte gentagelser. Sender metallets rensende energi gennem kroppen.' },
      { type: 'meridian', title: 'Lungernes meridian', desc: 'Stryg fra lige under kravebenet ned ad armens yderside til tommelfingerens spids. Langsomt, med let tryk. Fem til syv gange p\u00e5 hver arm. St\u00f8tter evnen til at slippe.' },
      { type: 'yinyoga', title: 'Bananen', desc: 'L\u00e6g dig p\u00e5 ryggen og flyt b\u00e5de f\u00f8dder og overkrop mod samme side, s\u00e5 kroppen danner en bananform. Tre til fem minutter p\u00e5 hver side \u2014 \u00e5bner ribbenene og giver lungerne plads.' },
      { type: 'sind', title: 'Hvad kan du slippe?', desc: 'Skriv alt du b\u00e6rer \u2014 roller, ansvar, forventninger, vaner. Sp\u00f8rg ved hvert punkt: er dette mit? Har jeg valgt det? Giv dig selv lov til at strege \u00e9t punkt ud.' }
    ],
    relationerIFasen: 'Alle relationer er i bev\u00e6gelse p\u00e5 samme tid. B\u00f8rn i Fase 2-3 presser mod gr\u00e6nser lige n\u00e5r du selv s\u00f8ger mere stilhed. For\u00e6ldre i Fase 8-9 begynder at have brug for omsorg, og rollerne bytter langsomt om. Den klarhed metallets energi bringer, kan hj\u00e6lpe dig med at se hvilke relationer der n\u00e6rer dig, og hvilke der t\u00e6rer.',
    udenBorn: 'Det biologiske vindue er ved at lukke, og det kan kr\u00e6ve bearbejdning uanset om fravalget var bevidst eller ej. Metallets sorg har plads til det tab. Nogle finder en uventet lettelse og retter energien mod kreativitet og relationer. Andre m\u00e6rker en sorg der tr\u00e6nger til luft \u2014 den sorg er reel og fortjener at blive \u00e5ndet igennem.',
    balanceTekst: 'En kvinde i balance i denne fase har fundet en ny klarhed. Der er stadig travlhed \u2014 livet stopper jo ikke, bare fordi du fylder femogtredive \u2014 men der er en sk\u00e6rpet evne til at se hvad der er vigtigt og hvad der bare fylder. Vejrtr\u00e6kningen er fri og dyb, huden har en klarhed der afspejler det indre, og der er en begyndende lethed i at slippe det der ikke l\u00e6ngere passer.',
    ubalanceTegn: {
      fysiske: [
      'Udbr\u00e6ndthed \u2014 den ild-energi du k\u00f8rte p\u00e5 i trediverne er opbrugt, og kroppen f\u00f8les t\u00f8mt',
      'Overfladisk vejrtr\u00e6kning og en tendens til at holde vejret uden at m\u00e6rke det',
      'Hyppigere fork\u00f8lelser og infektioner \u2014 lungerne er s\u00e5rbare i overgangen',
      'Huden \u00e6ndrer sig \u2014 t\u00f8rrere, mere f\u00f8lsom, tyndere',
      'Ur\u00e6gelm\u00e6ssig menstruation, de f\u00f8rste tegn p\u00e5 perimenopause',
      'Sp\u00e6ndinger i nakke og skuldre, en tendens til at falde sammen i overkroppen'
      ],
      mentale: [
      'En vedvarende undren der kan ligne uro \u2014 sp\u00f8rgsm\u00e5l uden svar der dukker op i stille \u00f8jeblikke',
      'Sorg over noget du ikke helt kan navngive \u2014 m\u00e5ske over den ungdom der er forbi',
      'Perfektionisme der t\u00e6rer \u2014 metallets skygge er at sk\u00e6re for h\u00e5rdt',
      'F\u00f8lelse af distance til mennesker du f\u00f8r var t\u00e6t p\u00e5',
      'Mental tr\u00e6thed og en l\u00e6ngsel efter stilhed og enkelhed'
      ],
      aarsag: 'Mange kvinder i denne fase har k\u00f8rt p\u00e5 ild-energi i ti-femten \u00e5r uden at hvile ordentligt. Lungerne har v\u00e6ret fors\u00f8mte \u2014 vejrtr\u00e6kningen overfladisk, brystkassen lukket. N\u00e5r metal-elementet tr\u00e6der ind, beder kroppen om noget helt andet: renhed, frisk luft, enkelhed. Kvinder der forts\u00e6tter i det gamle tempo uden at lytte, m\u00e6rker det p\u00e5 huden, i luftvejene og i en tr\u00e6thed der sidder dybere end f\u00f8r.'
    },
    centralFoelelse: { title: 'Klarhed og Sorg', tekst: 'Den f\u00f8lelse der definerer denne fase, er en ny klarhed \u2014 og t\u00e6t ved den, en sorg man sjældent taler om. For klarhed har en pris. N\u00e5r du pludselig ser tydeligt, hvad der virker i dit liv og hvad der ikke g\u00f8r, s\u00e5 melder sorgen sig over alt det der m\u00e5 \u00e6ndres.\n\nDet er metallets paradoks. Lungerne tager det rene ind og slipper det urene ud \u2014 og i denne fase begynder sindet at g\u00f8re det samme. Du ser klarere p\u00e5 dine relationer, dit arbejde, dine vaner. Noget af det der f\u00f8r f\u00f8ltes naturligt, begynder at f\u00f8les tungt. Og den erkendelse kan v\u00e6re ensom.\n\nJeg m\u00e6rkede det selv en helt almindelig eftermiddag. Jeg havde undervist hele dagen, og p\u00e5 vej hjem standsede jeg pludselig bilen og blev bare siddende. Ikke fordi der var noget galt. Men fordi der var en stilhed i mig der insisterede p\u00e5 at blive h\u00f8rt. Og da jeg lyttede efter, sagde den noget i retning af: hvad er det egentlig du bruger dit liv p\u00e5? Ikke for andre. For dig.\n\nDer er en s\u00e5rbarhed i den undren, som mange kvinder ikke taler om. Fordi den kommer p\u00e5 et tidspunkt hvor du burde have styr p\u00e5 det. Hvor andre ser en kvinde med karriere og relationer og hverdag \u2014 og ikke aner at hun om natten ligger v\u00e5gen og m\u00e6rker at noget skal \u00e6ndre sig.\n\nAt tillade sig den klarhed er m\u00e5ske det modigste man kan g\u00f8re. At tr\u00e6kke vejret dybt og se det der er, uden at pynte. Metallets gave er netop den \u00e6rlighed \u2014 og dens skygge er den sorg der f\u00f8lger, n\u00e5r vi ser klart.' },
    temaerNarrativer: [
      { title: 'Vejrtr\u00e6kningens kraft', tekst: 'Vi tr\u00e6kker vejret tyve tusind gange om dagen uden at t\u00e6nke over det. Men \u00e5ndedr\u00e6ttet er det eneste i kroppen der b\u00e5de k\u00f8rer automatisk og kan styres bevidst \u2014 og det g\u00f8r det til et unikt redskab.\n\nN\u00e5r vi er stressede, bliver vejrtr\u00e6kningen overfladisk og sidder i den \u00f8verste del af brystkassen. N\u00e5r vi bevidst tr\u00e6kker vejret ned i maven, sender vi et signal til nervesystemet om at faren er drevet over. Det er s\u00e5 enkelt, og det er s\u00e5 kraftfuldt.\n\nI denne fase tr\u00e6der lungerne frem som et centralt organ. Mange kvinder opdager at de har tr\u00e6kket vejret overfladisk i \u00e5revis \u2014 fordi der altid var noget der skulle n\u00e5s, nogen der skulle passes, en liste der skulle overholdes. Nu beder kroppen om dybere \u00e5ndedr\u00e6t. Og med hvert dybt \u00e5ndedr\u00e6t slipper du lidt af det der har vejet.' },
      { title: 'Den stille sortering', tekst: 'Omkring de femogtredive begynder mange kvinder en stille sortering af deres liv. Det er sj\u00e6ldent dramatisk \u2014 det er mere som en langsom opv\u00e5gning, en stigende klarhed om hvad der fungerer og hvad der bare er vane.\n\nParforholdet er ofte en del af den sortering. Ting der f\u00f8r blev accepteret, kan pludselig f\u00f8les uholdbare \u2014 fordi du simpelthen ser dem klarere nu. Det er metallets gave: evnen til at sk\u00e6re igennem og sp\u00f8rge \u2014 er det her \u00e6gte?\n\nKarrieren er en anden del. Du har m\u00e5ske brugt femten \u00e5r p\u00e5 at bygge noget op, og nu sp\u00f8rger du: var det det rigtige? Er det her jeg vil hen? De sp\u00f8rgsm\u00e5l kr\u00e6ver mod, fordi svarene kan betyde forandring.' },
      { title: 'At slippe det overfl\u00f8dige', tekst: 'Metal-elementet handler om at sortere og slippe. Lungerne tager det rene ind og giver det urene ud. Tyktarmen udskiller det kroppen ikke l\u00e6ngere har brug for. Og i denne fase begynder sindet at g\u00f8re pr\u00e6cis det samme med livet.\n\nDet kan starte sm\u00e5t. Du rydder ud i garderoben og m\u00e6rker en lettelse. Du siger nej til en forpligtelse og f\u00f8ler dig friere end du har gjort i \u00e5r. Du oph\u00f8rer med at undskylde for ting der ikke kr\u00e6ver undskyldning.\n\nDen vediske filosofi kalder det aparigraha \u2014 evnen til at modtage uden at gribe, at have uden at samle. I denne fase drejer det sig m\u00e5ske om at skifte gear: fra at opbygge til at forenkle. Fra at presse p\u00e5 til at m\u00e6rke efter.' },
      { title: 'Moderskabet modnes', tekst: 'For kvinder med b\u00f8rn bringer denne fase et skifte. B\u00f8rnene er ikke l\u00e6ngere helt sm\u00e5 og afh\u00e6ngige \u2014 de begynder at have deres eget liv, egne hemmeligheder, egne meninger. Den lille der engang klyngede sig til dit ben, lukker nu d\u00f8ren til sit v\u00e6relse.\n\nDet kan v\u00e6re en lettelse at slippe den konstante opm\u00e6rksomhed som sm\u00e5b\u00f8rn kr\u00e6ver. Pludselig er der tid til en kop kaffe der faktisk er varm. Og samtidig kan det m\u00e6rkes som et tab \u2014 tabet af at v\u00e6re uundv\u00e6rlig. Begge f\u00f8lelser kan v\u00e6re der p\u00e5 samme tid.\n\nForholdet til b\u00f8rnene m\u00e5 genforhandles. Metallets klarhed kan hj\u00e6lpe: den sk\u00e6rer igennem din angst for at miste kontrollen og viser dig at det at give slip faktisk er en form for tillid.' },
      { title: 'Et liv uden b\u00f8rn i denne fase', tekst: 'For kvinder uden b\u00f8rn kan denne fase bringe en afklaring \u2014 eller en fornyet konfrontation med sp\u00f8rgsm\u00e5let. Det biologiske vindue er ved at lukke, og metallets \u00e6rlighed g\u00f8r det sv\u00e6rt at undvige.\n\nNogen kvinder finder fred. Beslutningen er truffet af dem selv eller af tiden, og der er en lettelse i at slippe usikkerheden. Andre m\u00e6rker en sorg der tr\u00e6nger til plads. Den sorg er reel og beh\u00f8ver ingen forklaring.\n\nUanset din historie er denne fase en invitation til at sp\u00f8rge: hvad giver mit liv mening nu? Der er mange m\u00e5der at v\u00e6re frugtbar p\u00e5, og de handler slet ikke alle sammen om at f\u00f8de.' },
      { title: 'Huden som spejl', tekst: 'I den kinesiske medicin h\u00f8rer huden til metal-elementet. Og i denne fase begynder huden at tale tydeligere. Den bliver m\u00e5ske t\u00f8rrere, mere f\u00f8lsom, mere gennemsigtig.\n\nDet er let at se det som et tab \u2014 og i en kultur der forgudg\u00f8r ungdommelighed, kan det f\u00f8les som et. Men i den kinesiske tradition er hudens \u00e6ndring et tegn p\u00e5 at noget indre kommer til syne. Det ydre bliver tyndere, og det der er under begynder at skinne igennem.\n\nAt pleje huden i denne fase er ikke f\u00e5fangethed \u2014 det er at lytte til metallets sprog. Befugtning indefra med supper og p\u00e6rer, udefra med milde olier. Og m\u00e5ske vigtigst: at se dig selv i spejlet med den samme mildhed du ville give en veninde.' }
    ],
    denneFaseIDig: 'En kvinde i denne fase oplever ofte at alle relationerne er i bev\u00e6gelse p\u00e5 samme tid. B\u00f8rnene, hvis du har nogen, er typisk i Fase 2 eller 3 \u2014 den udforskende alder eller teenager\u00e5renes storme. Det kan skabe en m\u00e6rkelig dynamik: lige n\u00e5r du selv begynder at s\u00f8ge enkelhed og klarhed, har du b\u00f8rn der er i fuld gang med at spr\u00e6nge alle rammer.\n\nDin metalenergi kan faktisk v\u00e6re pr\u00e6cis det dine b\u00f8rn har brug for. De har brug for en voksen der ser klart, holder fast i det v\u00e6sentlige og ikke lader sig rive med af dramaet. Din rolige skelneevne er ikke kedsommelighed \u2014 den er den klare luft de kan tr\u00e6kke vejret i.\n\nDine for\u00e6ldre er typisk i Fase 8 eller 9, og rollerne begynder langsomt at bytte om. Du m\u00e6rker m\u00e5ske at du ser dem med nye \u00f8jne \u2014 metallets klarhed giver en ny forst\u00e5else for de valg de traf, de kompromiser de indgik.\n\nVenskaberne \u00e6ndrer sig. Metallets evne til at skelne g\u00f8r at nogle venskaber fordybes, mens andre stille falder v\u00e6k. De veninder der virkelig ser dig, bliver mere dyrebare end nogensinde.',
    aaretsRytme: 'Efter\u00e5ret begynder at tale til dig p\u00e5 en ny m\u00e5de. N\u00e5r bladene skifter farve og luften bliver klarere, kan du m\u00e6rke en genklang \u2014 fordi \u00e5rstiden og din livsfase taler samme sprog. Metallets kvaliteter fra efter\u00e5rskapitlet i De 5 \u00c5rstiders Energi f\u00e5r en ny dybde nu, fordi du lever dem indefra.\n\nFor\u00e5ret bringer stadig energi og v\u00e6kst, men du m\u00e6rker m\u00e5ske at den skal doseres anderledes. Sommeren kan f\u00f8les intens \u2014 ildens energi resonerer med den fase du lige har forladt, og det kan b\u00e5de v\u00e6re gl\u00e6deligt og udt\u00f8mmende. Vinteren inviterer til dybde, og der er en visdom i at tr\u00e6kke sig tilbage i de m\u00f8rke m\u00e5neder.\n\nHvis du stadig menstruerer, kan cyklussen begynde at \u00e6ndre sig. M\u00e5ske bliver den kortere eller mere ur\u00e6gelm\u00e6ssig. Det er de f\u00f8rste tegn p\u00e5 den st\u00f8rre overgang der venter \u2014 og jo bedre du kender din krop nu, jo lettere bliver den overgang.\n\nLungernes tid i organuret er kl. 03-05. Hvis du v\u00e5gner tidligt, s\u00e5 brug de stille minutter til bevidst vejrtr\u00e6kning i stedet for at k\u00e6mpe imod.',
    elementEssay: 'I den kinesiske medicin bev\u00e6ger vi os i denne fase fra ild-elementet mod metal-elementet. Det er et skift du kan m\u00e6rke i kroppen f\u00f8r du forst\u00e5r det med hovedet. Den rastl\u00f8se energi fra tyverne og de tidlige tredivere \u2014 den der drev dig fremad, fik dig til at tage chancer, holdt dig oppe til sent \u2014 den begynder at give plads til noget sk\u00e6rpere og mere stille.\n\nMetal-elementet handler om at skelne og slippe. Lungerne tager det rene ind og udskiller det urene. Tyktarmen g\u00f8r det samme med det kroppen har fordøjet. Og i denne fase begynder sindet at g\u00f8re pr\u00e6cis den bev\u00e6gelse med livet selv \u2014 hvad er v\u00e6sentligt, hvad er overfl\u00f8digt?\n\nDet er efter\u00e5rets energi i den kinesiske kalender. N\u00e5r tr\u00e6erne slipper deres blade, er det ikke tab \u2014 det er visdom. Tr\u00e6et ved at det der skal falde, m\u00e5 falde, for at r\u00f8dderne kan samle kr\u00e6fter til for\u00e5ret. Og i denne fase begynder kvinden den samme bev\u00e6gelse: at give slip p\u00e5 det ydre for at finde det indre.'
  },  7: {
    introText: 'Frig\u00f8relsens tid. Metallets fulde kraft. Overgangsalderen bringer en forvandling der r\u00e6kker langt ud over kroppen. Roller falder, det overfl\u00f8dige slipper sit greb, og en ny \u00e6rlighed viser sig \u2014 sk\u00e6rp og klar som efter\u00e5rsluft.',
    organPar: 'Lunger og Tyktarm', smag: 'Skarp', aarstid: 'Efter\u00e5r',
    folelser: { balance: 'Dyb klarhed, accept, frig\u00f8relse', ubalance: 'Sorg, tab, isolation' },
    vediskKobling: 'Vanaprastha \u2014 den modne tilbagetr\u00e6kning',
    livstemaer: ['Overgangsalder', 'Frig\u00f8relse fra roller', 'Essens'],
    psykOpgaver: ['Give slip med k\u00e6rlighed', 'Finde hvem du er under rollerne', 'Omfavne forandringen'],
    kropTekst: 'Overgangsalderen er metallets store forvandling. Hormonerne \u00e6ndrer sig markant \u2014 hedeture, s\u00f8vnforstyrrelser, hum\u00f8rsvingninger. Lungerne og tyktarmen er n\u00f8gler til at navigere overgangen. Vejrtr\u00e6kningen bliver central praksis. Huden t\u00f8rrer, h\u00e5ret \u00e6ndrer sig, kroppen beder om renhed og enkelhed.',
    sindTekst: 'Sindet oplever en frihed der kan v\u00e6re b\u00e5de skr\u00e6mmende og befriende. Roller falder \u2014 mor, karrierekvinde, partner \u2014 og sp\u00f8rgsm\u00e5let melder sig: hvem er jeg n\u00e5r rollerne er v\u00e6k? Metallets klarhed sk\u00e6rer igennem forvirringen og bringer glimt af en vished der hviler i kroppen.',
    oevelse: { title: 'Open Wings (Yin Yoga)', desc: '\u00c5bner brystkassen og lungemeridianerne. En position for at give slip og modtage luft.' },
    kost: { title: 'Hvide f\u00f8devarer og befugtende supper', desc: 'Lunger elsker hvidt: p\u00e6rer, blomk\u00e5l, ris. Salvie mod hedeture. Kogt p\u00e6re med honning.' },
    meridianStrygning: { title: 'Lungernes meridian', desc: 'Fra kravebenet ned ad armens yderside til tommelfingeren. St\u00f8tter evnen til at give slip.' },
    refleksioner: ['Hvad kan du give slip p\u00e5 med k\u00e6rlighed?', 'Hvem er du, n\u00e5r rollerne falder v\u00e6k?', 'Hvorn\u00e5r f\u00f8ler du dig mest fri?'],
    elementInfo: { energi: 'Klarhed, udskillelse, essens', sanseorgan: 'N\u00e6se', kropsvaev: 'Hud', farve: 'Hvid' },
    fasensRaad: [
      'Omfavn forandringen. Din krop er midt i noget stort \u2014 giv den tid og t\u00e5lmodighed.',
      'Find din stamme. Andre kvinder i overgangsalderen forst\u00e5r hvad du gennemg\u00e5r. Del erfaringer.',
      'Bev\u00e6g dig dagligt. Motion hj\u00e6lper p\u00e5 n\u00e6sten alle overgangssymptomer og styrker knoglerne.',
      'Tr\u00e6k vejret dybt. Lungerne er dine vigtigste allierede nu. Bevidst vejrtr\u00e6kning regulerer nervesystemet.',
      'Tal om det. Overgangsalderen beh\u00f8ver ikke v\u00e6re et tabu. Jo mere vi taler, jo lettere bliver det.',
      'Priorit\u00e9r s\u00f8vn. N\u00e6tterne kan v\u00e6re urolige \u2014 beskyt hvilen endnu mere bevidst.',
      'Fejr din klarhed. Du ser ting nu som du aldrig kunne se f\u00f8r. Den evne er metallets gave.',
      '\u00d8v dig i at slippe. T\u00f8j, vaner, forpligtelser, forestillinger \u2014 lad dem falde som blade fra et tr\u00e6.'
    ],
    kostDetaljer: {
      fodevarer: 'Hvide f\u00f8devarer n\u00e6rer lungerne \u2014 blomk\u00e5l, p\u00e6rer, selleri, ris, mandler. Fyt\u00f8strogener fra tofu, tempeh, miso og h\u00f8rfr\u00f8 kan mildne overgangssymptomerne. Fermenterede f\u00f8devarer st\u00f8tter tyktarmen.',
      urter: 'Salvie hj\u00e6lper mod hedeture og nattesved. R\u00f8dkl\u00f8ver indeholder fyt\u00f8strogener. Dong quai er en klassisk kinesisk urt til kvinder i overgangsalderen. P\u00e6rer kogt med ingef\u00e6r og honning n\u00e6rer lungerne.',
      undgaa: 'Koffein kan trigge hedeture \u2014 eksperimenter og m\u00e6rk efter. For t\u00f8r mad belaster lungerne. Lyt til kroppen der fort\u00e6ller tydeligt hvad den ikke l\u00e6ngere vil have.'
    },
    ekstraRefleksioner: [
      'Hvad har du h\u00f8stet i dit liv som du er mest taknemlig for?',
      'Hvad ved du nu som du ville \u00f8nske du vidste for tyve \u00e5r siden?',
      'Er der noget du stadig holder fast i som du egentlig godt ved du b\u00f8r give slip p\u00e5?',
      'Hvorn\u00e5r f\u00f8ler du den dybe ro der kommer af at kende sig selv?',
      'Hvem har du brug for at tilgive \u2014 m\u00e5ske dig selv?',
      'Hvad ville du sige til en yngre kvinde der st\u00e5r hvor du stod engang?',
      'Hvad er tilbage n\u00e5r du fjerner alt det andre forventer af dig?',
      'Er der en frihed i at blive \u00e6ldre som du ikke havde forventet?'
    ],
    overgangTekst: 'Omkring niogfyrre er overgangsalderen for de fleste overstået. Metal-elementet har sorteret og sluppet, og nu venter vandets tilbagevenden \u2014 Fase 8 bringer dybde, stilhed og begyndende visdom. Cirklen begynder at lukke sig.',
    oevelser: [
      { type: 'krop', title: '\u00c5ben brystkasse', desc: 'St\u00e5 med f\u00f8dderne i skulderbredde, fold h\u00e6nderne bag ryggen og tr\u00e6k skuldrene bl\u00f8dt tilbage. Hold i fem til ti rolige \u00e5ndedr\u00e6t, gentag tre gange.' },
      { type: 'aandedraet', title: 'Lungernes lyd', desc: '\u00c5nd ind i fire t\u00e6l, hold i to, ud i otte t\u00e6l med en bl\u00f8d \u201essss\u201d-lyd. Dobbelt s\u00e5 lang ud\u00e5nding som ind\u00e5nding. St\u00f8tter lungerne og beroliget nervesystemet.' },
      { type: 'meridian', title: 'Lungernes meridian', desc: 'Stryg fra lige under kravebenet ned ad armens yderside til tommelfingerens spids. Langsomt, med let tryk. Fem til syv gange p\u00e5 hver arm.' },
      { type: 'yinyoga', title: 'Bananen', desc: 'L\u00e6g dig p\u00e5 ryggen og flyt b\u00e5de f\u00f8dder og overkrop mod samme side. Tre til fem minutter p\u00e5 hver side \u2014 \u00e5bner ribbenene og giver lungerne mere plads.' },
      { type: 'sind', title: 'Det du b\u00e6rer', desc: 'Skriv alt du b\u00e6rer \u2014 roller, ansvar, bekymringer, forventninger. Sp\u00f8rg ved hvert punkt: er dette mit at b\u00e6re? Har jeg valgt det, eller har det valgt mig?' }
    ],
    relationerIFasen: 'Kvinden st\u00e5r midt mellem generationerne. B\u00f8rnene er typisk i Fase 3 eller 4, for\u00e6ldrene i Fase 8 eller 9. Metallets klarhed hj\u00e6lper med at se relationerne som de er \u2014 og den \u00e6rlighed kan v\u00e6re b\u00e5de befriende og smertefuld.',
    udenBorn: 'For kvinder uden b\u00f8rn bringer denne fase sin endelige afklaring. Metallets \u00e6rlighed tillader en dyb accept \u2014 og med den accept kan der komme en uventet fred. Mange kvinder beskriver en frihed der \u00e5bner for nye former for kreativitet og forbindelse.',
    balanceTekst: 'En kvinde i balance i denne fase udstr\u00e5ler en rolig autoritet som er sv\u00e6r at definere, men let at genkende. Hun kender sin egen v\u00e6rdi, og andres bekr\u00e6ftelse fylder mindre end f\u00f8r. Vejrtr\u00e6kningen er fri og dyb, huden har en klarhed der afspejler det indre, og der er en evne til at skelne mellem det afg\u00f8rende og det uv\u00e6sentlige som kun erfaring kan give.',
    ubalanceTegn: {
      fysiske: [
      'Overgangsalder-symptomer: hedeture, nattesved, s\u00f8vnforstyrrelser',
      'Hum\u00f8rsvingninger der f\u00f8les uforudsigelige og fremmede',
      'Huden \u00e6ndrer sig \u2014 t\u00f8rrere, tyndere, mindre elastisk',
      'H\u00e5ret tyndes, leddene g\u00f8r mere ondt om morgenen',
      'Vejrtr\u00e6kningen f\u00f8les kortere, mere overfladisk',
      'Hyppige fork\u00f8lelser og infektioner i luftvejene',
      '\u00d8mhed i nakke og skuldre, en tendens til at falde sammen i overkroppen'
      ],
      mentale: [
      'En f\u00f8lelse af at rollerne er ved at \u00e6ndre sig, og at du ikke helt ved hvem du er uden dem',
      'Sorg over ungdommens krop og de muligheder den bar',
      'Irritabilitet og kort lunte \u2014 f\u00f8lelser du ikke genkender hos dig selv',
      'Frygt for at miste dem du holder af',
      'Men ogs\u00e5 glimt af en ny klarhed der sk\u00e6rer igennem forvirringen'
      ],
      aarsag: 'Overgangsalderen er den store udfordring i denne fase. Hormoner svinger, s\u00f8vnen forstyrres, og kroppen opf\u00f8rer sig p\u00e5 m\u00e5der der kan f\u00f8les helt fremmede. Uforl\u00f8st sorg t\u00e6rer p\u00e5 lungerne \u2014 den s\u00e6tter sig fast som hoste, hudproblemer eller den tr\u00e6thed der sidder helt ind i knoglerne. Overfladisk vejrtr\u00e6kning og for lidt frisk luft forst\u00e6rker ubalancen. Lungerne elsker bev\u00e6gelse og ren luft \u2014 de visner i stilstand og lukket rum.'
    },
    centralFoelelse: { title: 'Sorg og Lettelse', tekst: 'Den f\u00f8lelse der b\u00e6rer denne fase, er sorg. Og t\u00e6t ved sorgen, n\u00e6sten gemt bag den, en lettelse man sj\u00e6ldent t\u00f8r indr\u00f8mme. For hvordan kan man s\u00f8rge over noget og samtidig f\u00f8le sig fri?\n\nDet er metallets paradoks, og det er m\u00e5ske det mest \u00e6rlige man kan sige om denne tid: at sorg og lettelse kan bo i samme \u00e5ndedr\u00e6t.\n\nSorgen kan komme i b\u00f8lger. En sang i radioen. En lugt af det parfume du bar da b\u00f8rnene var sm\u00e5. Et foto der falder ud af en bog. Sorgen gemmer sig i det konkrete \u2014 i sanserne, i kroppens hukommelse. Og den kan overraske ved sin styrke selv \u00e5r efter.\n\nJeg m\u00e6rkede det selv en aften. Jeg sad med en kop te og t\u00e6nkte p\u00e5 alle de valg jeg har truffet. Og s\u00e5 m\u00e6rkede jeg pludselig noget der lignede fred. En fornemmelse af at alle de valg tilsammen har gjort mig til den jeg er. Og at den jeg er, er god nok. Det \u00f8jeblik kommer oftere nu.\n\nOg s\u00e5 er der den lettelse som mange kvinder oplever men sj\u00e6ldent taler om. Lettelsen over at menstruationen er slut. Lettelsen over at b\u00f8rnene klarer sig selv. Lettelsen over at roller og forventninger langsomt falder bort. Den lettelse er ingen ligegyldighed \u2014 den er et tegn p\u00e5 at du har b\u00e5ret tungt i mange \u00e5r, og at kroppen endelig kan tr\u00e6kke vejret friere.' },
    temaerNarrativer: [
      { title: '\u00c5ndedr\u00e6ttet som praksis', tekst: 'Vi tr\u00e6kker vejret tyve tusind gange om dagen uden at t\u00e6nke over det. Men \u00e5ndedr\u00e6ttet er den eneste funktion i kroppen der b\u00e5de k\u00f8rer automatisk og kan styres bevidst. Hele vores vejrtr\u00e6kningsmuskel, diafragma, masserer organerne for hver ind\u00e5nding.\n\nI yoga-filosofien taler man om pranayama \u2014 bevidst vejrtr\u00e6kning som en vej til at styre livskraften. Og ishvara pranidhana \u2014 overgivelse. Vejrtr\u00e6kningen er en m\u00e5de at \u00f8ve den overgivelse med hver eneste ud\u00e5nding.' },
      { title: 'Essensen under rollerne', tekst: 'Mange kvinder opdager i denne fase at de har defineret sig selv gennem roller: mor, hustru, leder, veninde, datter. Og n\u00e5r rollerne falder v\u00e6k eller \u00e6ndrer sig, rejser sp\u00f8rgsm\u00e5let sig: hvem er jeg under alt det?\n\nM\u00e5ske er svaret stille. M\u00e5ske er svaret bare: mig. Uden titler, uden forventninger. Bare dig som du er, med alt det du har levet som en del af din krop og din hukommelse.\n\nAt finde sin essens \u2014 det der bliver n\u00e5r alt det ydre er skr\u00e6llet af \u2014 er denne fases dybeste gave. Den kinesiske medicin ville sige at det er metallets natur: at sk\u00e6re igennem til det rene. Den vediske filosofi kalder det vairagya \u2014 en sund l\u00f8srivelse der g\u00f8r det muligt at elske frit.' },
      { title: 'Kroppen efter overgangsalderen', tekst: 'De hormonelle storme er ved at aftage, og kroppen finder en ny ligevægt. Det kan faktisk m\u00e6rkes som en lettelse \u2014 stabiliteten efter mange \u00e5rs cykliske svingninger. Den frihed mange kvinder beskriver, er reel.\n\nMen kroppen beder ogs\u00e5 om opm\u00e6rksomhed p\u00e5 en ny m\u00e5de. Huden er tyndere, knoglerne kr\u00e6ver omsorg. Det der virkede i trediverne virker m\u00e5ske ikke l\u00e6ngere.\n\nI yoga-filosofien kalder man det ahimsa \u2014 venlighed. At oph\u00f8re med at k\u00e6mpe imod det kroppen er, og i stedet finde en ny k\u00e6rlighed til den. Din krop har b\u00e5ret dig gennem et helt liv. Den fortjener din taknemmelighed.' }
    ],
    denneFaseIDig: 'Jeg er selv midt i denne fase, og det m\u00e6rker jeg hver dag. Der er morgener hvor jeg v\u00e5gner med hedeture og en uro jeg ikke helt kan forklare \u2014 og der er morgener hvor jeg \u00e5bner \u00f8jnene med en ro der er ny for mig. En stille vished om at jeg ved hvem jeg er. At jeg ikke beh\u00f8ver bevise noget for nogen. Den f\u00f8lelse kendte jeg ikke i trediverne.\n\nEfter\u00e5ret er kommet. Bladene skifter farve, luften er klarere, og der er en sk\u00e6rpet enkelhed over landskabet der taler til noget i mig. Det overfl\u00f8dige falder. Ikke med smerte, men med en lethed der overrasker.\n\nOg samtidig er kroppen i forandring p\u00e5 en m\u00e5de der fylder mere end forventet. Overgangsalderen banker p\u00e5 med sine signaler. Det kan f\u00f8les forvirrende at miste fodf\u00e6stet i sin egen krop. Men det er ogs\u00e5 begyndelsen p\u00e5 noget andet: en frihed fra den m\u00e5nedlige cyklus der har styret kroppen i \u00e5rtier.',
    aaretsRytme: 'Efter\u00e5ret er din \u00e5rstid nu. N\u00e5r bladene skifter farve og luften bliver skarp, kan du m\u00e6rke en genkendelse \u2014 fordi \u00e5rstiden og din livsfase spejler hinanden. After\u00e5rets temaer om at slippe og g\u00f8re plads rummer en helt anden dybde i denne livsfase end de gjorde da du f\u00f8rst m\u00f8dte dem.\n\nFor\u00e5ret kan f\u00f8les overraskende energisk \u2014 som en p\u00e5mindelse om at der stadig er v\u00e6kst i dig. Sommeren bringer varme og lethed, og mange kvinder fort\u00e6ller at de nyder den p\u00e5 en anden m\u00e5de end f\u00f8r, frigjort fra det pres de bar i de yngre \u00e5r.\n\nOvergangsalderen er i fuld gang eller ved at afslutte sig. Cyklussen der har fulgt dig siden teen\u00e5rene, tager sin afsked. M\u00e6rk efter: hvad forsvinder n\u00e5r cyklussen g\u00e5r? Og hvad kommer i stedet? Mange kvinder opdager en frihed de aldrig havde forventet.\n\nLungernes tid i organuret er kl. 03-05, og mange kvinder i denne fase v\u00e5gner tidligt. Brug de stille minutter til bevidst vejrtr\u00e6kning \u2014 lad ud\u00e5ndingen b\u00e6re det du ikke l\u00e6ngere har brug for.',
    elementEssay: 'I den kinesiske medicin er Fase 7 metal-elementets h\u00f8jdepunkt. T\u00e6nk p\u00e5 det som efter\u00e5ret i sin fulde kraft \u2014 bladene falder, luften er klar, og alt det overfl\u00f8dige giver plads til det v\u00e6sentlige.\n\nLungerne er det centrale organ. De handler om at tage imod det rene og slippe det urene, og den bev\u00e6gelse \u2014 ind og ud, modtage og frigive \u2014 er selve denne fases rytme. Tyktarmen arbejder sammen med lungerne om at udskille det kroppen ikke l\u00e6ngere har brug for. B\u00e5de fysisk og f\u00f8lelsesm\u00e6ssigt.\n\nI de klassiske kinesiske tekster beskrives det hvordan kvinders Qi begynder at \u00e6ndre karakter omkring 49-\u00e5rsalderen. Den energi der f\u00f8r gik til reproduktion, bliver frigivet til andre form\u00e5l. Noget slutter, og noget nyt begynder. Det er metallets dybeste l\u00e6re: at tab og frigørelse er to sider af samme \u00e5ndedr\u00e6t.'
  },
  8: {
    introText: 'Dybdens tid. Vandet vender tilbage. Efter metallets sortering og frig\u00f8relse synker kvinden ned i en ny stilhed \u2014 ikke tomhedens, men dybdens. Noget i hende husker dette element fra livets allerf\u00f8rste \u00e5r.',
    organPar: 'Nyrer og Bl\u00e6re', smag: 'Salt', aarstid: 'Vinter',
    folelser: { balance: 'Dybde, begyndende visdom, indre ro', ubalance: 'Frygt, tilbagetr\u00e6kning, usikkerhed' },
    vediskKobling: 'Vanaprastha \u2014 tilbagetr\u00e6kningen begynder',
    livstemaer: ['Dybde', 'Tilbagevenden til vand', 'Intuition v\u00e5gner'],
    psykOpgaver: ['Lytte indad igen', 'Finde ny styrke i stilheden', 'Integrere det levede'],
    kropTekst: 'Nyrerne tr\u00e6der i forgrunden. De opbevarer Jing \u2014 livskraften \u2014 og i denne fase begynder kroppen at forvalte den med st\u00f8rre omhu. Knoglerne beder om opm\u00e6rksomhed, leddene om bl\u00f8d bev\u00e6gelse. Bl\u00e6ren arbejder med at rense og regulere. Det er en tid, hvor kroppen bel\u00f8nner varme, regelm\u00e6ssighed og langsomme rytmer.',
    sindTekst: 'Sindet begynder at synke. Ikke ned i tunghed, men ned i dybde. Der er en ny stilhed efter metallets sortering \u2014 som vandoverfladen efter en storm. Intuition melder sig st\u00e6rkere, og mange kvinder oplever en indsigt, der ikke kommer fra tanken men fra kroppen. Noget i dig husker denne kvalitet fra lang tid siden.',
    oevelse: { title: 'Sleeping Swan (Yin Yoga)', desc: 'Dyb hofte\u00e5bner der stimulerer nyremeridianerne. En stilling for at synke ned og lytte indad.' },
    kost: { title: 'Varme supper og m\u00f8rke f\u00f8devarer', desc: 'Nyrer elsker varme: supper, gryderetter, sort sesam, valn\u00f8dder. Salt smag i balance n\u00e6rer dybden.' },
    meridianStrygning: { title: 'Nyrernes meridian', desc: 'Fra fodens underside opad langs indersiden af benet. Samler energi op fra jorden og n\u00e6rer nyrerne \u2014 kroppen husker denne bev\u00e6gelse fra Fase 1.' },
    refleksioner: ['Hvad viser sig, n\u00e5r du bliver helt stille?', 'Hvorn\u00e5r m\u00e6rker du dybde i dit liv lige nu?', 'Hvad husker din krop, som dit sind har glemt?'],
    elementInfo: { energi: 'Stilhed, dybde, essens', sanseorgan: '\u00d8rer', kropsvaev: 'Knogler', farve: 'Sort/m\u00f8rkebl\u00e5' },
    fasensRaad: [
      'Hold dig varm. Nyrerne er f\u00f8lsomme over for kulde, og efter overgangsalderen m\u00e6rker mange kvinder det tydeligere. Varme f\u00f8dder, varm l\u00e6nd, varme h\u00e6nder.',
      'Drik varmt vand eller urte-te gennem dagen. Nyrerne elsker varme v\u00e6sker, og det underst\u00f8tter bl\u00e6rens funktion.',
      'Bev\u00e6g dig bl\u00f8dt og regelm\u00e6ssigt. G\u00e5ture, sv\u00f8mning, tai chi \u2014 bev\u00e6gelse der n\u00e6rer knoglerne uden at belaste dem.',
      'Spis m\u00f8rke f\u00f8devarer. Sorte b\u00f8nner, sort sesam, bl\u00e5b\u00e6r, valn\u00f8dder og tang n\u00e6rer nyre-energien direkte.',
      'Lyt til stilheden. \u00d8rerne h\u00f8rer til vand-elementet, og din h\u00f8relse \u2014 b\u00e5de den ydre og den indre \u2014 fortjener opm\u00e6rksomhed.',
      'Pas p\u00e5 dine knogler. Knoglerne er vandets kropsv\u00e6v. Styrketr\u00e6ning, calcium og D-vitamin g\u00f8r en forskel nu.',
      'Sov godt. Nyrerne regenererer mellem kl. 17 og 19, bl\u00e6ren kl. 15-17. Rolige aftener st\u00f8tter den dybe hvile.',
      'Stol p\u00e5 din intuition. Den viden, der melder sig uden ord, er vand-elementets gave. Den er blevet st\u00e6rkere med \u00e5rene.',
      'S\u00f8g forbindelse. Vand-elementet kan tr\u00e6kke sig indad, men isolation t\u00e6rer p\u00e5 livskraften. Bliv i f\u00e6llesskabet.'
    ],
    kostDetaljer: {
      fodevarer: 'M\u00f8rke og varme f\u00f8devarer n\u00e6rer nyrerne \u2014 sorte b\u00f8nner, sorte sesamfr\u00f8, valn\u00f8dder, kastanjer, tang og alger. Knogle-st\u00f8ttende mad som sardiner, gr\u00f8nne bladgr\u00f8ntsager og mandler. Supper og gryderetter er ideelle, langtidskogt og varmende.',
      urter: 'Ingef\u00e6r og kanel giver varme indefra. Goji-b\u00e6r er klassiske nyre-n\u00e6rende b\u00e6r i kinesisk tradition. Lakridsrod befugter og st\u00f8tter. Reishi-svamp n\u00e6rer roen og immunforsvaret. Astragalus styrker den grundl\u00e6ggende energi.',
      undgaa: 'Kold, r\u00e5 mad er sv\u00e6rere at ford\u00f8je nu og k\u00f8ler et system der har brug for varme. For meget kaffe t\u00e6rer p\u00e5 nyre-energien. Store m\u00e6ngder salt belaster nyrerne \u2014 salt i balance n\u00e6rer, i overm\u00e5l udt\u00f8mmer.'
    },
    ekstraRefleksioner: [
      'Hvad har du opdaget om dig selv efter overgangsalderen?',
      'Er der en stilhed i dig, der har ventet p\u00e5 at blive h\u00f8rt?',
      'Hvad betyder dybde for dig \u2014 i relationer, i tanker, i hverdagen?',
      'Hvorn\u00e5r m\u00e6rker du din intuition tydeligst?',
      'Hvad har din krop l\u00e6rt dig, som du ikke kunne have l\u00e6rt p\u00e5 andre m\u00e5der?',
      'Er der noget i dig, der minder om den pige du engang var?',
      'Hvad giver dig varme \u2014 helt bogstaveligt og helt overf\u00f8rt?',
      'Hvad vil det sige at v\u00e6re st\u00e6rk p\u00e5 en ny m\u00e5de?',
      'Hvorn\u00e5r f\u00f8ler du dig mest forbundet med noget st\u00f8rre end dig selv?'
    ],
    overgangTekst: 'Omkring seksoghalvtreds fordybes vandet yderligere. Den f\u00f8rste ber\u00f8ring med vandets tilbagevenden er nu blevet til et hjem. Fase 9 bringer den fulde visdom \u2014 integrationen af alle ni faser, overdragelsen og den stille vished, der kun kommer af at have levet hele vejen rundt.',
    oevelser: [
      { type: 'krop', title: 'H\u00e6ndernes varme p\u00e5 nyrerne', desc: 'Gnid h\u00e6nderne mod hinanden til de er varme. L\u00e6g dem p\u00e5 l\u00e6nden over nyrerne og lad varmen sive ind. Bliv der i to til tre minutter, m\u00e6rk hvordan varmen spreder sig.' },
      { type: 'aandedraet', title: 'Vandets lyd', desc: '\u00c5nd ind i fire t\u00e6l helt ned i b\u00e6kkenet, hold i to, ud i seks t\u00e6l med en dyb \u201echuuu\u201d-lyd. Nyrernes helende lyd. Otte til ti gentagelser, gerne om aftenen kl. 17-19.' },
      { type: 'meridian', title: 'Nyrernes meridian', desc: 'Stryg med flad h\u00e5nd fra fodens underside opad langs indersiden af benet, op over kn\u00e6et og s\u00e5 langt op som det f\u00f8les naturligt. Fem til syv gange p\u00e5 hver side, langsomt.' },
      { type: 'yinyoga', title: 'Sommerfugl', desc: 'Sid med fods\u00e5lerne mod hinanden, lad kn\u00e6ene falde ud til siderne. Fold bl\u00f8dt forover og bliv i tre til fem minutter. Stimulerer nyremeridianerne og giver dyb ro i b\u00e6kkenet.' },
      { type: 'sind', title: 'Vandets brev', desc: 'Skriv et brev til det vand, du engang var \u2014 den lille pige i Fase 1, der endnu ikke vidste noget om verden. Hvad vil du fort\u00e6lle hende om den rejse, der ligger imellem?' }
    ],
    relationerIFasen: 'B\u00f8rnene er typisk i Fase 4 eller 5 og bygger deres egne liv. Din rolle er nu at st\u00e5 bag som den, de kan vende tilbage til \u2014 og mange kvinder finder en ny dybde i den forbindelse, nu hvor presset er v\u00e6k. Parforholdet kan finde en stilhed, der enten n\u00e6rer eller afsl\u00f8rer. Det er en tid for \u00e6rlighed.',
    udenBorn: 'Sp\u00f8rgsm\u00e5let om b\u00f8rn hviler nu. Mange kvinder oplever, at accepten er kommet \u2014 ikke som resignation, men som en dyb anerkendelse af den vej, livet tog. Vand-elementet handler om essens, og din essens er hel, uanset om den har formet sig som moderskab eller ej.',
    balanceTekst: 'En kvinde i balance i denne fase har fundet en dybde, der overrasker hende selv. Der er en ro, der ikke er stilstand men tilstedev\u00e6relse. Knoglerne er st\u00e6rke, nyrerne fungerer godt, og der er en varme i kroppen, der vidner om, at livskraften forvaltes med omhu. S\u00f8vnen er dyb, og de tidlige morgentimer f\u00f8les som en gave snarere end en byrde. Der er noget i hendes blik, der vidner om, at hun er begyndt at se tingene fra en anden vinkel \u2014 dybere, roligere, mere nuanceret.',
    ubalanceTegn: {
      fysiske: [
      'Tr\u00e6thed der sidder dybt \u2014 ikke den almindelige, men en udmattelse der m\u00e6rkes helt ind i knoglerne',
      'Kuldef\u00f8lsomhed, kolde f\u00f8dder og h\u00e6nder, en kulde der ikke helt vil slippe',
      'Problemer med nyrer og bl\u00e6re \u2014 hyppig vandladning, infektioner',
      'Svage knogler og led, \u00f8mhed i l\u00e6nden og kn\u00e6ene',
      'Tyndere h\u00e5r, sk\u00f8rere negle, t\u00f8r hud',
      'Svimmelhed og problemer med balancen',
      'Nedsat h\u00f8relse eller ringen for \u00f8rerne'
      ],
      mentale: [
      'Frygt der kommer snigende \u2014 for alderdommen, for sygdom, for at miste sig selv',
      'Tilbagetr\u00e6kning fra verden, en tendens til at isolere sig',
      'En f\u00f8lelse af at energien er ved at slippe op, at det meste er forbi',
      'Usikkerhed om hvem man er nu, efter alle rollerne har \u00e6ndret sig',
      'Mangel p\u00e5 motivation og en f\u00f8lelse af meningsl\u00f8shed',
      'S\u00f8vnproblemer \u2014 enten for lidt eller for urolig s\u00f8vn'
      ],
      aarsag: 'Frygt er vand-elementets skygge, og den kan snige sig ind, n\u00e5r nyre-energien sv\u00e6kkes. Frygt for alderdommen, frygt for sygdom, frygt for at miste dem man elsker \u2014 de tanker kan fylde meget i de stille timer, hvis de ikke m\u00f8des med opm\u00e6rksomhed.\n\nKulde er en vigtig faktor. Nyrerne er f\u00f8lsomme over for kulde, og med alderen mister kroppen noget af sin evne til at holde p\u00e5 varmen. For lidt varme \u2014 fysisk og f\u00f8lelsesm\u00e6ssigt \u2014 kan forv\u00e6rre nyresymptomerne og g\u00f8re frygten st\u00e6rkere.\n\nIsolation er farlig i denne fase. Vand-elementet har en naturlig tendens til at tr\u00e6kke sig indad, og det kan v\u00e6re sundt i doser \u2014 men n\u00e5r tilbagetr\u00e6kningen bliver permanent, t\u00e6rer den p\u00e5 livskraften. Forbindelse til andre mennesker, til mening, til noget der r\u00e6kker ud over en selv, er nyrernes bedste medicin.'
    },
    centralFoelelse: { title: 'Dybde og Frygt', tekst: 'Den f\u00f8lelse, der b\u00e6rer denne fase, er dybde. En fornemmelse af at synke ned \u2014 ikke i depression, men i forst\u00e5else. Som at se ned i en s\u00f8 og for f\u00f8rste gang ane bunden. Der er noget dernede, du ikke vidste var der, og det er dig selv.\n\nOg t\u00e6t ved dybden, som dens uadskillelige skygge, bor frygten. For vand-elementet rummer begge dele: den dybe visdom og den dybe frygt. De er ikke mods\u00e6tninger \u2014 de er to sider af det samme.\n\nFrygten i denne fase er sj\u00e6ldent den akutte angst, du m\u00e5ske kender fra tidligere. Den er stille, langsom, n\u00e6sten um\u00e6rkelig. Den kan komme om natten, n\u00e5r huset er stille, som en uro der ikke helt vil give sig. Frygten for at kroppen svigter. Frygten for at blive glemt. Frygten for den tid, der er g\u00e5et, og den der er tilbage.\n\nJeg tror, frygten fortjener en plads ved bordet. Ikke for at styre \u2014 men for at blive h\u00f8rt. For bag frygten gemmer sig ofte en dyb k\u00e6rlighed til livet. Vi frygter jo, fordi det hele betyder noget. Fordi vi har noget at miste. Og den erkendelse kan faktisk \u00e5bne for den dybde, som denne fase rummer.\n\nDybden melder sig i stille \u00f8jeblikke. I en samtale, der pludselig g\u00e5r et andet sted hen. I en dr\u00f8m, der efterlader et spor. I kroppen, der ved ting, sindet endnu ikke har formuleret. Mange kvinder fort\u00e6ller, at de i denne fase begynder at stole p\u00e5 en viden, der ikke har ord \u2014 en intuitiv sikkerhed, der er kommet med \u00e5rene.\n\nDen kinesiske medicin kalder vand-elementets dybeste kvalitet zhi \u2014 viljestyrkens rod. Ikke den h\u00e5rde, pressede vilje, men den stille udholdenhed, der b\u00e6rer dig videre dag efter dag. Det er den vilje, der f\u00e5r dig til at st\u00e5 op om morgenen, ikke fordi du skal, men fordi noget i dig stadig vil. Den vilje er dyb og stille som grundvand.' },
    temaerNarrativer: [
      { title: 'Vandets tilbagevenden', tekst: 'Det er en af livets mest bev\u00e6gende symmetrier: at vi vender tilbage til det element, vi startede i. Vand-elementet dominerede de f\u00f8rste leve\u00e5r \u2014 Fase 1 og 2, de \u00e5r, hvor alt var nyt og \u00e5bent, og kroppen var ren potentiale. Nu, i Fase 8, vender vandet tilbage, men med et helt livs erfaring i sig.\n\nDen tilbagevenden kan m\u00e6rkes fysisk. Mange kvinder beskriver en fornemmelse af at \u201esynke ned\u201d \u2014 ikke i tristhed, men i en dybere version af sig selv. Tempoet \u00e6ndrer sig. Behovet for stilhed vokser. Intuition og dr\u00f8mme bliver tydeligere, som om kroppen husker noget fra lang tid siden.\n\nDet er ikke det samme vand. Barnet i Fase 1 var \u00e5ben s\u00f8 \u2014 alt kunne ske, alt var muligt. Kvinden i Fase 8 er dyb br\u00f8nd \u2014 hun rummer erfaring, indsigt, levede \u00e5r. Vandet er det samme element, men det har en helt anden kvalitet nu. Tyngre, rigere, mere stille.' },
      { title: 'Kroppen som visdomsb\u00e6rer', tekst: 'I denne fase begynder noget at skifte i forholdet mellem krop og sind. Kroppen, der m\u00e5ske har f\u00f8lt sig som en modstander de seneste \u00e5r \u2014 med overgangsalderens forandringer, den \u00e6ndrede energi, de nye begr\u00e6nsninger \u2014 begynder nu at vise sig som noget andet: en b\u00e6rer af visdom.\n\nDin krop har levet hele dit liv. Den har menstrueret, m\u00e5ske f\u00f8dt, har elsket, danset, v\u00e6ret syg og rask igen. Den husker alt det, sindet har glemt. Og i denne fase, hvor tempoet s\u00e6nkes og stilheden vokser, kan du begynde at lytte til det, kroppen ved.\n\nI den kinesiske medicin opbevarer nyrerne Jing \u2014 livskraften, essensen. Det er ikke en abstrakt id\u00e9. Det er noget, der kan m\u00e6rkes: den grundl\u00e6ggende energi, der b\u00e6rer dig. I denne fase forvalter kroppen sin Jing med st\u00f8rre omhu, og det kr\u00e6ver, at du lytter til dens signaler. Hvorn\u00e5r har du brug for hvile? Hvorn\u00e5r for bev\u00e6gelse? Hvorn\u00e5r for varme?' },
      { title: 'Den nye stilhed', tekst: 'Efter metallets sortering og frig\u00f8relse i de foreg\u00e5ende \u00e5r opst\u00e5r der et rum. Et rum, der ikke beh\u00f8ver at blive fyldt. Mange kvinder beskriver det som den f\u00f8rste virkelige stilhed i \u00e5rtier \u2014 en stilhed, der ikke er frav\u00e6r af noget, men tilstedev\u00e6relse af noget andet.\n\nI den stilhed kan nye ting ske. Dr\u00f8mme, der har ligget i dvale, kan melde sig igen. Interesser, der blev lagt til side for karriere og familie, kan blomstre. Og den indre stemme, der m\u00e5ske har v\u00e6ret overd\u00f8vet i mange \u00e5r, bliver pludselig h\u00f8rbar.\n\nDen vediske tradition taler om pratyahara \u2014 tilbagetr\u00e6kningen af sanserne, det \u00f8jeblik hvor opm\u00e6rksomheden vender indad. Det er ikke en flugt fra verden, men en tilbagevenden til sig selv. Og i denne fase sker det n\u00e6sten af sig selv \u2014 kroppen og sindet finder deres vej til stilheden, som vand finder sit niveau.' }
    ],
    denneFaseIDig: 'En kvinde sagde til mig: det var som at komme hjem til et hus, jeg ikke vidste var mit. Hun havde levet et helt liv \u2014 b\u00f8rn, karriere, overgangsalder, metallets store oprydning \u2014 og pludselig var der en stilhed, hun ikke genkendte. Ikke tomhed. Bare stilhed. Og i den stilhed m\u00e6rkede hun noget, hun ikke havde m\u00e6rket siden hun var helt ung: en fornemmelse af at alt var muligt. Ikke p\u00e5 den ambiti\u00f8se, fremadstormende m\u00e5de. Men p\u00e5 den dybe, stille m\u00e5de \u2014 som grundvand, der ved, at det b\u00e6rer alt det, der vokser ovenover.\n\nVinteren er ikke tom. Under sneen arbejder r\u00f8dderne. Og denne fase \u2014 vand-elementets tilbagevenden \u2014 er som den f\u00f8rste ber\u00f8ring af vinterlandskabet: stille, men fuld af noget, der endnu ikke har vist sig helt.\n\nDer er noget ved at vende tilbage til vand, der r\u00f8rer mig dybt. At cirklen b\u00f8jer sig. At den lille pige, der sv\u00f8mmede i Fase 1, nu genfinder sit element \u2014 men med et helt livs erfaring i kroppen.',
    aaretsRytme: 'Vinteren begynder at tale til dig p\u00e5 en ny m\u00e5de i denne fase. Dens stilhed, dens m\u00f8rke, dens invitation til at g\u00e5 indad \u2014 alt det, der m\u00e5ske f\u00f8ltes tungt i de yngre \u00e5r, kan nu f\u00f8les som en lettelse. Du har lov til at v\u00e6re stille. Du har lov til at hvile. Vinteren giver dig den tilladelse.\n\nFor\u00e5ret bringer fornyet energi, og mange kvinder overraskes over, hvor levende for\u00e5ret kan f\u00f8les, selv nu. Sommeren inviterer til at v\u00e6re ude, og den varme kan m\u00e6rkes helt ind i knoglerne. Efter\u00e5ret minder om metallets tid \u2014 og den klarhed, du fandt der, b\u00e6rer du med dig ind i vandets dybde.\n\nNyrernes tid i organuret er kl. 17-19, og bl\u00e6ren er aktiv kl. 15-17. Sene eftermiddage kan v\u00e6re en god tid for stille aktiviteter \u2014 en g\u00e5tur, en kop te, en samtale. Mange kvinder i denne fase m\u00e6rker, at energien daler om aftenen, og det er nyrernes signal om at s\u00f8ge varme og ro.',
    elementEssay: 'I den kinesiske medicin vender vi i denne fase tilbage til vand-elementet. Det er den samme energi, der bar os i livets allerf\u00f8rste \u00e5r \u2014 men nu med en helt anden dybde. Barnet var \u00e5ben s\u00f8. Kvinden i Fase 8 er dyb br\u00f8nd.\n\nNyrerne tr\u00e6der frem som de centrale organer. De opbevarer Jing \u2014 livskraften, den essens vi blev f\u00f8dt med, og den vi har opbygget gennem livet. I denne fase begynder kroppen at forvalte sin Jing med st\u00f8rre omhu, og det m\u00e6rkes som et \u00e6ndret tempo, et behov for mere hvile, en langsomhed, der ikke er svaghed men visdom.\n\nVand-elementet rummer to store kvaliteter: dybde og frygt. De h\u00e6nger ul\u00f8seligt sammen. Dybden kr\u00e6ver mod \u2014 at synke ned, at miste fodf\u00e6stet, at stole p\u00e5 det man ikke kan se. Og frygten er kroppens naturlige reaktion p\u00e5 dybden. At l\u00e6re at v\u00e6re i begge dele \u2014 at m\u00e6rke frygten og synke ned alligevel \u2014 det er denne fases store arbejde.\n\nOvergangen fra metal til vand er som overgangen fra efter\u00e5r til vinter. Metallets klarhed og sortering har gjort sit arbejde, og nu l\u00e6gger stilheden sig som sne over landskabet. Under den stilhed samler livet sine kr\u00e6fter.'
  },
  9: {
    introText: 'Andet For\u00e5r. Tr\u00e6ets tilbagevenden. Cirklen b\u00f8jer sig opad som en spiral \u2014 den vise kvinde vender tilbage til tr\u00e6-elementet, men nu blomstrer hun med r\u00f8dder, der r\u00e6kker helt ned til kilden. Den energi, der engang gik til at skabe liv, er nu fri til at skabe alt andet.',
    organPar: 'Lever og Galdebl\u00e6re', smag: 'Sur', aarstid: 'For\u00e5r',
    folelser: { balance: 'Fornyet kreativitet, visdom, frihed, ny v\u00e6kst', ubalance: 'Bitterhed, frustration, stagnation, vrede over det tabte' },
    vediskKobling: 'Sannyasa \u2014 den vise kvinde',
    livstemaer: ['Genf\u00f8dsel og nyt for\u00e5r', 'Kreativ frihed', 'Visdomstr\u00e6ets blomstring'],
    psykOpgaver: ['Omfavne den nye frihed', 'Give plads til kreativitet og visioner', 'Lade vreden forvandle sig til klarhed'],
    kropTekst: 'Leveren v\u00e5gner til et nyt for\u00e5r. Den energi, der i \u00e5rtier blev kanaliseret til menstruation og reproduktion, er nu frigivet \u2014 og leveren, der styrer den frie str\u00f8m af Qi i kroppen, har pludselig mere at arbejde med. Senerne og leddene beder om bev\u00e6gelse, om at blive str\u00e6kt og b\u00f8jet. Galdebl\u00e6ren st\u00f8tter leverens arbejde med at fordeje og sortere \u2014 ikke bare mad, men ogs\u00e5 indtryk og f\u00f8lelser. Kroppen bel\u00f8nner fleksibilitet, gr\u00f8nne f\u00f8devarer og bev\u00e6gelse, der \u00e5bner siderne af kroppen.',
    sindTekst: 'Sindet er som et tr\u00e6, der blomstrer for anden gang. Hun \u2014 den \u00e6teriske sj\u00e6l, der bor i leveren if\u00f8lge den kinesiske medicin \u2014 tr\u00e6der tydeligere frem end nogensinde. Dr\u00f8mme bliver levende, visioner melder sig, og der er en kreativ energi, der kan overraske efter vandets stilhed. Den vrede, der h\u00f8rer til tr\u00e6-elementet, har \u00e6ndret karakter: den er ikke l\u00e6ngere den unge kvindes frustration, men den modne kvindes fierce klarhed \u2014 modet til at sige sandheden, sk\u00e6re igennem og handle ud fra en livstids erfaring.',
    oevelse: { title: 'Liggende sommerfugl (Yin Yoga)', desc: 'Dyb hofte\u00e5bner der stimulerer levermeridianerne. Lad kn\u00e6ene falde ud til siderne og bliv i fem til otte minutter \u2014 en stilling for at \u00e5bne det nye for\u00e5r i kroppen.' },
    kost: { title: 'Gr\u00f8nne f\u00f8devarer og sur smag', desc: 'Spirende gr\u00f8ntsager, fermenterede f\u00f8devarer, friske urter. Leverens mad er gr\u00f8n, frisk og let sur \u2014 som for\u00e5ret selv.' },
    meridianStrygning: { title: 'Leverens meridian', desc: 'Stryg med flad h\u00e5nd fra storet\u00e5ens inderside opad langs indersiden af benet, op over kn\u00e6et og videre op langs inderl\u00e5ret \u2014 som om du inviterer for\u00e5ret op gennem kroppen. Fem til syv gange p\u00e5 hver side.' },
    refleksioner: ['Hvad blomstrer i dig nu, som ikke kunne blomstre f\u00f8r?', 'Hvad ville du skabe, hvis ingen begr\u00e6nsninger fandtes?', 'Hvilken sandhed har du modet til at sige nu, som du ikke turde sige f\u00f8r?'],
    elementInfo: { energi: 'Genf\u00f8dsel, ny v\u00e6kst, Second Spring', sanseorgan: '\u00d8jne', kropsvaev: 'Sener', farve: 'Gr\u00f8n' },
    fasensRaad: [
      'Bev\u00e6g dig. Tr\u00e6-elementet elsker bev\u00e6gelse \u2014 g\u00e5ture, dans, yoga, tai chi. Senerne har brug for at blive str\u00e6kt og brugt. Stivhed er tr\u00e6ets fjende.',
      'Spis gr\u00f8nt. Gr\u00f8nne bladgr\u00f8ntsager, spirende gr\u00f8ntsager, friske urter \u2014 alt det, der ligner for\u00e5r, n\u00e6rer leveren direkte.',
      'Giv din kreativitet plads. Den energi, der nu er frigivet, s\u00f8ger et udtryk. Mal, skriv, syng, plant en have \u2014 det handler ikke om resultat, men om str\u00f8m.',
      'Lad vreden tale. Ikke som destruktion, men som klarhed. Hvis der er noget, du har holdt inde i \u00e5rtier, er det nu, det kan siges \u2014 med visdommens pr\u00e6cision.',
      'Dr\u00f8m stort. Hun, den \u00e6teriske sj\u00e6l i leveren, giver dig adgang til visioner og dr\u00f8mme. Skriv dem ned. De rummer noget vigtigt.',
      'Undg\u00e5 stagnation. Tr\u00e6-energien m\u00e5 flyde \u2014 fysisk, f\u00f8lelsesm\u00e6ssigt, kreativt. N\u00e5r den blokeres, bliver den til frustration og bitterhed.',
      'Find dit f\u00e6llesskab. Det nye for\u00e5r blomstrer bedst i forbindelse med andre. Del din visdom, l\u00e6r af yngre kvinder, v\u00e6r synlig.',
      'Stol p\u00e5 dit nye blik. \u00d8jnene h\u00f8rer til tr\u00e6-elementet, og i denne fase ser du tydeligere end nogensinde \u2014 ikke n\u00f8dvendigvis med synet, men med indsigten.'
    ],
    kostDetaljer: {
      fodevarer: 'Gr\u00f8nne f\u00f8devarer er leverens bedste venner: broccoli, spinat, gr\u00f8nk\u00e5l, persille, rucola, spirende gr\u00f8ntsager. Fermenterede f\u00f8devarer som sauerkraut, kimchi og miso st\u00f8tter galdebl\u00e6ren og ford\u00f8jelsen. Sure frugter som citron, grapefrugt og \u00e6bleeddike stimulerer leverens Qi. Friske urter som koriander, mynte og basilikum bringer for\u00e5rsenergien ind i maden.',
      urter: 'M\u00e6lkeb\u00f8tte er leverens klassiske urt \u2014 b\u00e5de roden og bladene renser og st\u00f8tter. Artiskok stimulerer galdeproduktionen. Gurkemeje er antiinflammatorisk og st\u00f8tter leverens afgiftning. Pebermynte \u00e5bner og letter Qi-str\u00f8mmen. Marietidsel beskytter levercellerne.',
      undgaa: 'For meget fedt og alkohol belaster leveren direkte. St\u00e6rkt forarbejdet mad blokerer den frie str\u00f8m af Qi. Sent, tungt aftensmad giver leveren overarbejde \u2014 spis let om aftenen, da leveren regenererer mellem kl. 01 og 03. For meget kaffe kan overstimulere en lever, der allerede har rigeligt med energi.'
    },
    ekstraRefleksioner: [
      'Hvad er det nye for\u00e5r i dit liv \u2014 hvad spirer lige nu, som du ikke havde forventet?',
      'Hvilken kreativitet har ventet i dig, mens du levede de andre faser?',
      'Hvad ser du nu, som du ikke kunne se, da du var yngre?',
      'Er der en vrede i dig, der egentlig er en sandhed, der vil ud?',
      'Hvad ville du g\u00f8re, hvis du vidste, at du ikke kunne fejle?',
      'Hvordan har din frihed \u00e6ndret sig \u2014 fra tyverne til nu?',
      'Hvad vil det sige at blomstre i denne alder?',
      'Er der noget, du har givet slip p\u00e5, som har gjort plads til noget nyt?',
      'Hvem ser du, n\u00e5r du lukker \u00f8jnene og forestiller dig dit visdomstr\u00e6?',
      'Hvad er den vigtigste sandhed, du b\u00e6rer med dig fra alle ni faser?'
    ],
    overgangTekst: 'Cirklen er ikke lukket \u2014 den er spiralet opad. Tr\u00e6-elementet vender tilbage, men p\u00e5 et h\u00f8jere niveau, beriget af alle de faser, der ligger imellem. Den energi, der begyndte som sp\u00e6d v\u00e6kst i Fase 1, er nu blevet til visdomstr\u00e6ets blomstring. Og det for\u00e5r, der venter, er ikke en gentagelse \u2014 det er en genf\u00f8dsel.',
    oevelser: [
      { type: 'krop', title: 'Sidestr\u00e6k for leveren', desc: 'St\u00e5 med f\u00f8dderne hoftebredde. L\u00f8ft den ene arm over hovedet og b\u00f8j til den modsatte side. Bliv i fem til otte \u00e5ndedrag p\u00e5 hver side. \u00c5bner galdebl\u00e6rens meridian langs kroppens sider og giver leveren plads.' },
      { type: 'aandedraet', title: 'Tr\u00e6ets lyd', desc: '\u00c5nd ind i fire t\u00e6l, hold i to, ud i seks t\u00e6l med en lang \u201cshuuu\u201d-lyd \u2014 leverens helende lyd i den kinesiske tradition. Otte til ti gentagelser, gerne om aftenen mellem kl. 23 og 01, galdebl\u00e6rens tid.' },
      { type: 'meridian', title: 'Leverens meridian', desc: 'Stryg med flad h\u00e5nd fra storet\u00e5ens inderside opad langs indersiden af benet, op over kn\u00e6et og videre langs inderl\u00e5ret s\u00e5 langt op som det f\u00f8les naturligt. Fem til syv gange p\u00e5 hver side, langsomt og med opm\u00e6rksomhed.' },
      { type: 'yinyoga', title: 'Dragen (Dragon Pose)', desc: 'Et dybt udfald med det ene kn\u00e6 b\u00f8jet foran og det andet str\u00e6kt bagud. Bliv i tre til fem minutter p\u00e5 hver side. \u00c5bner hofterne og str\u00e6kker senerne \u2014 tr\u00e6-elementets kropsv\u00e6rv. Stimulerer levermeridianerne og frig\u00f8r stagneret energi.' },
      { type: 'sind', title: 'Brevet til det nye for\u00e5r', desc: 'Skriv et brev til den kvinde, du er ved at blive. Ikke den, du var \u2014 men den, der venter forude. Hvad ser du, n\u00e5r du forestiller dig dit n\u00e6ste kapitel? Hvad vil du skabe med den frihed, du nu har?' }
    ],
    relationerIFasen: 'Mange relationer har forandret sig dramatisk \u2014 og der er en ny frihed i dem. B\u00f8rnene lever deres egne liv, og i bedstefor\u00e6ldrerollen kan k\u00e6rligheden str\u00f8mme uden pligt. Parforholdet kan genopfinde sig selv nu, hvor begge har mere energi at give. Og venskaber f\u00e5r en ny dybde \u2014 kvinder i denne fase finder ofte hinanden med en gensidig anerkendelse, der ikke beh\u00f8ver mange ord.',
    udenBorn: 'Det nye for\u00e5r blomstrer uanset om du har b\u00f8rn. Den frigjorte energi er din \u2014 til kreativitet, til f\u00e6llesskab, til alt det, du endnu ikke har udforsket. Mange kvinder uden b\u00f8rn oplever, at denne fase bringer en dyb tilfredshed: visdomstr\u00e6et har mange grene, og hver eneste af dem b\u00e6rer frugt p\u00e5 sin m\u00e5de.',
    balanceTekst: 'En kvinde i balance i denne fase udstråler en levende kraft, der kan overraske omgivelserne. Hun har gennemgået vandets dybe stilhed og er kommet ud på den anden side med noget nyt: en kreativ energi, en klarhed i blikket, en vilje til at vokse videre. Der er en fleksibilitet i hende — ikke bare fysisk, men i tanke og følelse — der vidner om, at træ-elementet har fundet sin modne form.\n\nFysisk viser balance sig som en krop, der stadig bevæger sig med glæde. Senerne er smidige, leveren fungerer godt, og der er en grøn friskhed over hende — selv om årene har sat deres spor. Søvnen er god, drømmene er levende, og der er en energi om morgenen, der minder om noget hun kendte i ungdommen — men nu bærer den en dybde, som kun erfaring kan give.\n\nDen vediske tradition kalder denne tilstand moksha — frigørelse. Ikke fra livet, men til livet. Friheden til at leve på sine egne vilkår, med sin egen visdom som kompas.',
    ubalanceTegn: {
      fysiske: [
      'Stivhed i sener og led — kroppen føles låst, ufleksibel, som et træ der ikke kan bøje sig',
      'Problemer med øjnene — tørre øjne, sløret syn, øget lysfølsomhed',
      'Hovedpine og migræne — særligt i tindingerne langs galdeblærens meridian',
      'Fordøjelsesproblemer — oppustethed, kvalme, besvær med at fordøje fedt',
      'Spændinger i skuldrene og nakken, følelse af at bære verden',
      'Uro i kroppen, rastløshed, en energi der ikke finder sit udtryk'
      ],
      mentale: [
      'Frustration og bitterhed — en vrede over det tabte, over de år der gik, over de ting der aldrig blev sagt',
      'Stagnation — følelsen af at sidde fast, at intet nyt kan vokse, at foråret aldrig kommer',
      'Irritabilitet over småting — en kort lunte, der egentlig handler om noget større',
      'Undertrykt kreativitet — en længsel efter at skabe, der ikke finder sit udtryk',
      'Jalousi mod yngre kvinder eller bitterhed over det, andre har opnået',
      'Vanskelighed ved at tilgive — både sig selv og andre'
      ],
      aarsag: 'Stagnation er træ-elementets største fjende i denne fase. Når den nyligt frigjorte energi — al den kraft, der før gik til reproduktion — ikke finder nye kanaler, blokeres leverens Qi. Og blokeret lever-Qi skaber frustration, vrede og fysisk stivhed.\n\nBitterhed kan snige sig ind, hvis overgangen fra vand til det nye forår ikke får plads. Hvis kvinden stadig sørger over det, der er slut, uden at åbne sig for det, der begynder, kan træ-energien stagnere. Vreden, der hører til træ-elementet, er ikke i sig selv destruktiv — den er en kraft, der vil forandring. Men hvis den undertrykkes eller rettes indad, bliver den til bitterhed og depression.\n\nFleksibilitet er nøglen — både fysisk og mentalt. Senerne er træ-elementets kropsværv, og stive sener afspejler en stiv livsholdning. Bevægelse, stræk, nye oplevelser og villighed til at vokse i uventede retninger holder lever-energien i strøm.\n\nIsolation og passivitet forværrer træ-ubalancen. Træet vokser mod lyset, mod fællesskabet, mod verden. En kvinde i denne fase, der trækker sig helt tilbage, mister den vækstimpuls, der er hendes fases gave.'
    },
    centralFoelelse: { title: 'Frihed og Fornyet Kraft', tekst: 'Den følelse, der definerer denne fase, er frihed. En frihed, der er anderledes end alle de friheder, du har kendt — fordi den er vundet, ikke givet. Du har levet dig igennem otte faser, du har båret, skabt, elsket, mistet og fundet dig selv igen. Og nu, i det niende kapitel, opdager du noget uventet: at der er et forår til. At den energi, der gik til menstruation og reproduktion i årtier, nu er din. Helt din. Til hvad som helst.\n\nDen kinesiske medicin kalder dette "Andet Forår" — og navnet rummer en dyb sandhed. Det er ikke ungdommens forår, med dets uro og hunger. Det er et modent forår, hvor træet blomstrer med dybe rødder og brede grene. Visdomstræet kender sine årstider. Det har overlevet stormen.\n\nJeg tror, denne frihed overrasker mange kvinder. Der er noget ved den, der kan føles næsten ulovligt — en kreativ kraft, en lyst til at begynde nyt, en energi, der ikke passer til det billede, verden har af kvinder over halvtreds. Men den er reel. Forskning bekræfter, at mange kvinder oplever en kreativ opblomstring efter overgangsalderen — og den kinesiske medicin har vidst det i tusindvis af år.\n\nHun — den æteriske sjæl, der ifølge TCM bor i leveren — bliver mere tilgængelig nu. Hun er sædet for drømme, visioner og den dybe intuition, der rækker ud over det rationelle. I de yngre år var Hun optaget af at forme og skabe nyt liv. Nu er den fri til at drømme for dig selv. Mange kvinder beskriver en ny klarhed i deres visioner — de ser tydeligere, hvad de vil, og de har modet til at handle på det.\n\nVreden hører også til dette forår. Men det er en forvandlet vrede — ikke den unge kvindes frustrerede kamp mod begrænsninger, men den modne kvindes fierce klarhed. Modet til at sige sandheden, skære igennem illusionerne og stå fast i det, hun ved. Den vrede er en gave, når den bruges rigtigt. Den er det brændstof, der får visdomstræet til at blomstre.\n\nFriheden rummer også sorg. For du har betalt for den — med år, med tab, med alt det, der ikke kan gøres om. Og den sorg gør friheden dybere, ikke lettere. Det er en frihed, der kender sin pris, og netop derfor er den ægte.\n\nDet nye forår kan komme stille eller dramatisk. Nogle kvinder vågner en morgen og mærker det som en uro i kroppen, en lyst til at røre sig, en idé der insisterer. Andre opdager det gradvist — et nyt projekt, en ny retning, en samtale der åbner en dør, de ikke vidste var der. Foråret kommer, når det er klar. Og du er klar nu.' },
    temaerNarrativer: [
      { title: 'Visdomstr\u00e6ets blomstring', tekst: 'I den kinesiske medicin er livets gang ikke en lige linje fra f\u00f8dsel til d\u00f8d \u2014 den er en spiral. Og i den spiral vender tr\u00e6-elementet tilbage i denne fase, beriget af alt det, der ligger imellem. Det er ikke det samme tr\u00e6 som i Fase 1, hvor den lille spire rakte mod lyset med blind tillid. Det er visdomstr\u00e6et \u2014 med r\u00f8dder, der har gravet sig dybt ned gennem \u00e5rtiers erfaring, og grene, der r\u00e6kker i retninger, den unge kvinde aldrig kunne have forestillet sig.\n\nDet kinesiske udtryk for dette er "Di Er Ge Chun Tian" \u2014 Andet For\u00e5r. Det er et veletableret koncept i den kinesiske medicin: id\u00e9en om at kvinder efter overgangsalderen oplever en genf\u00f8dsel af lever-energien. Den Qi, der i \u00e5rtier blev kanaliseret til menstruation og fertilitet, frig\u00f8res nu til kreativ og spirituel v\u00e6kst. Det er ikke en tr\u00f8stepr\u00e6mie \u2014 det er en transformation.\n\nEn \u00e6ldre kvinde fortalte mig engang, at hun begyndte at male i en alder af tres. Hun havde aldrig r\u00f8rt en pensel. Men pludselig var der noget i hende, der insisterede \u2014 en kraft, en farve, en bev\u00e6gelse, der ville ud. Det er tr\u00e6-elementets natur: v\u00e6kst, retning, skaberkraft. Og i denne fase er den kraft frigjort fra alle de roller og forpligtelser, der har defineret de foreg\u00e5ende \u00e5rtier.' },
      { title: 'Hun \u2014 den \u00e6teriske sj\u00e6l', tekst: 'I den kinesiske medicin bor Hun \u2014 den \u00e6teriske sj\u00e6l \u2014 i leveren. Hun er s\u00e6det for dr\u00f8mme, visioner, fantasi og den intuition, der r\u00e6kker ud over det logiske. I de fertile \u00e5r er Hun travlt optaget af at st\u00f8tte reproduktionen og den konstante cykliske bev\u00e6gelse. Men i denne fase, efter overgangsalderen, bliver Hun fri.\n\nDet kan m\u00e6rkes p\u00e5 flere m\u00e5der. Dr\u00f8mmene bliver mere levende og meningsfulde. Der er en kreativ uro, der ikke vil ignoreres \u2014 en lyst til at skabe, forme, udtrykke. Mange kvinder beskriver en ny klarhed i deres indre syn \u2014 som om \u00f8jnene (der h\u00f8rer til tr\u00e6-elementet) ser ting for f\u00f8rste gang, ikke fordi de er nye, men fordi blikket er nyt.\n\nDen vediske tradition ville kalde dette tredje \u00f8jes \u00e5bning \u2014 ajna chakra, s\u00e6det for visdom og indsigt. Det er ikke mystik i luften. Det er en reel oplevelse af at se tydeligere, m\u00e6rke dybere og forst\u00e5 mere \u2014 ikke fordi du har studeret mere, men fordi du har levet mere.\n\nAt pleje Hun i denne fase handler om at give plads til det ufornuftige, det kreative, det dr\u00f8mte. At skrive dr\u00f8mmene ned. At f\u00f8lge de impulser, der ikke har en rationel forklaring. At stole p\u00e5 den indre vision, ogs\u00e5 n\u00e5r den peger i uventede retninger.' },
      { title: 'Vreden som visdom', tekst: 'Vrede er tr\u00e6-elementets f\u00f8lelse \u2014 og den har et d\u00e5rligt rygte, s\u00e6rligt for kvinder. Vi har l\u00e6rt at undertrykke den, undskylde den, gemme den v\u00e6k. Men i denne fase kan vreden forvandle sig til noget helt andet: en fierce klarhed, en vilje til sandhed, modet til at tale.\n\nDen kinesiske medicin ser vreden som leverens bev\u00e6gelse opad og udad \u2014 en ekspansiv kraft, der vil forandring. I de yngre \u00e5r kan den kraft f\u00f8les kaotisk og destruktiv, fordi den kolliderer med alle de roller og forventninger, der begr\u00e6nser den. Men i denne fase, hvor rollerne er faldet v\u00e6k, og friheden er vundet, kan vreden finde sin modne form.\n\nDen modne vrede siger: dette er ikke godt nok. Denne modne vrede ser uretf\u00e6rdighed og handler. Den taler sandheder, der har ventet i \u00e5rtier. Den er ikke eksplosiv \u2014 den er pr\u00e6cis. Som et sv\u00e6rd, der er blevet slebet af et langt livs erfaring.\n\nMange kvinder i denne fase opdager, at de ikke l\u00e6ngere kan tie om ting, der generer dem. Det er ikke irritabilitet \u2014 det er integritet. Det er tr\u00e6-elementet, der kr\u00e6ver, at livet leves i overensstemmelse med det, du ved er sandt. Og det kr\u00e6ver mod, som kun et visdomstr\u00e6 med dybe r\u00f8dder kan have.' }
    ],
    denneFaseIDig: 'Jeg t\u00e6nker p\u00e5 de kvinder, jeg har m\u00f8dt i denne fase, og de overrasker mig hver gang. Der er noget ved dem \u2014 en gnist, en retning, en frihed \u2014 der ikke passer til historien om den aldrende kvinde. De starter virksomheder, de rejser alene, de maler, de taler offentligt for f\u00f8rste gang, de forlader \u00e6gteskaber, der har v\u00e6ret tomme i \u00e5rtier, de finder nye k\u00e6rligheder, de griner h\u00f8jere.\n\nFor\u00e5ret er kommet igen. Men det er et andet for\u00e5r end det f\u00f8rste. Landskabet er ikke nyt og ukendt \u2014 det er velkendt og alligevel forvandlet. Som at vende tilbage til et sted, du har elsket, og se det med nye \u00f8jne. Tr\u00e6erne blomstrer, men nu ved du, hvad der kom f\u00f8r blomsterne: vintrene, stormene, de n\u00f8gne grene. Og den viden g\u00f8r blomstringen dyrebar p\u00e5 en m\u00e5de, den unge kvinde aldrig kunne forst\u00e5.\n\nCirklen b\u00f8jer sig opad. Vi vender tilbage til tr\u00e6-elementet, hvor vi begyndte som sm\u00e5 b\u00f8rn \u2014 men nu p\u00e5 et helt andet niveau af spiralen. Den lille spire er blevet til et visdomstr\u00e6 med dybe r\u00f8dder og nye grene. Der er noget dybt bev\u00e6gende ved den symmetri, synes jeg. At vi ender i det element, hvor vi begyndte, og dog er s\u00e5 forandrede af alt det, der ligger imellem.\n\nDenne fase kan vare mange \u00e5r, og den rummer sine egne kapitler og overgange. Der er en forskel p\u00e5 at v\u00e6re syvoghalvtreds og tresogtres \u2014 og dog h\u00f8rer det hele til den samme store bev\u00e6gelse mod frihed og genf\u00f8dsel. For mange kvinder bringer den en kreativ kraft, der kan overraske: friheden til at skabe uden form\u00e5l, dr\u00f8mme uden gr\u00e6nser og vokse i retninger, ingen havde forventet \u2014 mindst af alle dem selv.',
    aaretsRytme: 'For\u00e5ret er din naturlige allierede i denne fase \u2014 den \u00e5rstid, der spejler tr\u00e6-elementets voksende, ekspansive energi. N\u00e5r naturen springer ud, kan du m\u00e6rke en genkendelse i kroppen: noget i dig springer ogs\u00e5 ud. For\u00e5rets kvaliteter \u2014 v\u00e6kst, retning, ny begyndelse \u2014 taler nu til dig p\u00e5 en anden m\u00e5de, end de gjorde f\u00f8rste gang. Du har levet dem. For\u00e5ret inviterer til bev\u00e6gelse, til at komme ud, til at begynde nyt.\n\nSommeren bringer modning og gl\u00e6de \u2014 den varme kan m\u00e6rkes helt ind i kroppen. Efter\u00e5ret minder om det, du har l\u00e6rt om at slippe, og den klarhed kan bruges kreativt. Vinteren inviterer til ro og refleksion \u2014 og du ved nu, at selv den dybeste vinter rummer et for\u00e5r.\n\nDen m\u00e5nedlige cyklus er for l\u00e6ngst afsluttet, men kroppen f\u00f8lger stadig sine egne rytmer. M\u00e5nens faser kan m\u00e6rkes subtilt, og mange kvinder i denne fase finder en ny forbindelse til m\u00e5nens cyklus \u2014 ikke gennem menstruation, men gennem dr\u00f8mme, energi og kreative b\u00f8lger.\n\nLeverens tid i organuret er kl. 01-03, og galdebl\u00e6ren er aktiv kl. 23-01. Hvis du v\u00e5gner mellem \u00e9t og tre om natten, kan det v\u00e6re leveren, der arbejder \u2014 b\u00e5de fysisk og f\u00f8lelsesm\u00e6ssigt. De tidlige morgentimer kan bruges til stille kreativt arbejde, journalskrivning eller dr\u00f8mmedagbog. Faste ugentlige aftaler \u2014 en g\u00e5tur med en veninde, en kreativ workshop, en meditationsgruppe \u2014 giver ugen en struktur, der st\u00f8tter tr\u00e6-elementets behov for retning og v\u00e6kst.',
    elementEssay: 'I den kinesiske medicin vender vi i denne fase tilbage til tr\u00e6-elementet \u2014 det samme element, der dominerede livets allerf\u00f8rste faser. Men spiralen har drejet, og det er ikke det samme tr\u00e6. Barnet var spire \u2014 ren potentiale, rettet mod lyset uden at vide hvorfor. Kvinden i Fase 9 er visdomstr\u00e6 \u2014 med dybe r\u00f8dder, brede grene og en blomstring, der b\u00e6rer alle \u00e5rstiders erfaring i sig.\n\nLeveren tr\u00e6der frem som det centrale organ. I den kinesiske medicin styrer leveren den frie str\u00f8m af Qi \u2014 livsenergien \u2014 gennem hele kroppen. I de fertile \u00e5r var en stor del af leverens arbejde forbundet med menstruationscyklussen. Nu, efter overgangsalderen, er den energi frigivet, og leveren har et overskud af Qi til r\u00e5dighed. Det er dette overskud, der driver det Andet For\u00e5rs kreative kraft.\n\nGaldebl\u00e6ren arbejder som leverens partner \u2014 den tr\u00e6ffer beslutninger, sorterer og handler. I denne fase kan galdebl\u00e6rens energi m\u00e6rkes som en ny beslutsomhed: modet til at v\u00e6lge, frav\u00e6lge og handle uden t\u00f8ven.\n\nTr\u00e6-elementet rummer to store kvaliteter: v\u00e6kst og vrede. De h\u00e6nger ul\u00f8seligt sammen. V\u00e6ksten kr\u00e6ver kraft \u2014 kraften til at bryde igennem, til at insistere, til at tage plads. Og vreden er netop den kraft. I sin modne form er vreden ikke destruktiv \u2014 den er den vilje, der f\u00e5r tr\u00e6et til at vokse mod lyset, selv n\u00e5r det bl\u00e6ser. At l\u00e6re at bruge den kraft \u2014 at lade vreden blive til klarhed og kreativitet \u2014 det er denne fases store arbejde.\n\nDet kinesiske begreb for dette f\u00e6nomen er dybt forankret i traditionen. Kvinder efter overgangsalderen blev i det gamle Kina betragtet som s\u00e6rligt vise, netop fordi den energi, der f\u00f8r gik til reproduktion, nu n\u00e6rede sindet og \u00e5nden. De blev healere, r\u00e5dgivere, vism\u00e6nd. Ikke trods deres alder, men p\u00e5 grund af den.\n\nForbindelsen til de fem elementer er nu komplet. Du har levet dem alle \u2014 tr\u00e6, ild, jord, metal, vand \u2014 og nu vender du tilbage til tr\u00e6et med hele rejsen i kroppen. Det er ikke en gentagelse. Det er en genf\u00f8dsel. Spiralen drejer opad, og det for\u00e5r, der venter, er dit.'
  }};

// ---- De Fire Uger: Menstrual cycle data ----

const MENSTRUAL_WEEK_DATA = {
  1: { name: 'Uge 1 \u2014 Menstruation', element: 'VAND', dagRange: 'Dag 1\u20137', kvalitet: 'Indadvendt energi',
    bodyText: 'Kroppen renser og fornyer sig. Livmoderen frigiver det gamle slimhinde. Energien er lav, og kroppen beder om hvile. Nyrerne og bl\u00e6ren er aktive \u2014 vand-elementet dominerer.',
    feelingsText: 'F\u00f8lelserne tr\u00e6kker indad. Det er en naturlig tid for refleksion og stilhed. Intuition er st\u00e6rk, men socialt overskud kan v\u00e6re lavt. Lyt til behovet for at tr\u00e6kke dig tilbage.',
    recommendations: ['Hvile og varme', 'Yin yoga med hofte\u00e5bnere', 'Varme supper og te', 'Journalskrivning og refleksion'] },
  2: { name: 'Uge 2 \u2014 Opbygning', element: 'TR\u00c6', dagRange: 'Dag 8\u201314', kvalitet: 'Stigende energi',
    bodyText: 'Follikelfasen begynder. En ny \u00e6g modnes, \u00f8strogen stiger. Energien vokser gradvist \u2014 kroppen f\u00f8ler sig st\u00e6rkere dag for dag. Leveren arbejder aktivt med at processere hormoner.',
    feelingsText: 'Optimisme og kreativitet vokser. Det er en god tid for nye projekter, planl\u00e6gning og social aktivitet. Selvtilliden stiger, og der er mod til at tage initiativer.',
    recommendations: ['Dynamisk bev\u00e6gelse', 'Kreative projekter', 'Gr\u00f8nne gr\u00f8ntsager og spirende mad', 'Nye initiativer og planl\u00e6gning'] },
  3: { name: 'Uge 3 \u2014 \u00c6gl\u00f8sning', element: 'ILD', dagRange: 'Dag 15\u201321', kvalitet: 'Udadvendt energi',
    bodyText: '\u00c6gl\u00f8sning sker, og \u00f8strogen er p\u00e5 sit h\u00f8jeste. Kroppen str\u00e5ler \u2014 huden lyser, energien er p\u00e5 toppen. Hjertet og kredsl\u00f8bet er i flow. Det er kroppens sommer.',
    feelingsText: 'F\u00f8lelserne er varme og \u00e5bne. Social energi er h\u00f8j, kommunikation flyder. Det er en tid for forbindelse, intimitet og gl\u00e6de. Pas p\u00e5 rastl\u00f8shed og overaktivitet.',
    recommendations: ['Intens bev\u00e6gelse og social aktivitet', 'R\u00e5 salater og frisk frugt', 'Forbindelse og samtaler', 'Kreativt udtryk'] },
  4: { name: 'Uge 4 \u2014 Luteal', element: 'JORD', dagRange: 'Dag 22\u201328', kvalitet: 'Faldende energi',
    bodyText: 'Progesteron dominerer. Kroppen forbereder sig p\u00e5 menstruation. Ford\u00f8jelsen kan v\u00e6re f\u00f8lsom, kroppen beder om n\u00e6ring og regelm\u00e6ssighed. Milten og maven er aktive.',
    feelingsText: 'F\u00f8lelserne kan svinge \u2014 bekymring, irritation eller s\u00e5rbarhed. Det er kroppens m\u00e5de at sige: s\u00e6nk tempoet. Det er en tid for at runde af, rydde op og forberede sig.',
    recommendations: ['Rolige aktiviteter og tidlig sengetid', 'Varm, n\u00e6rende mad', 'Undg\u00e5 store beslutninger', 'Selvomsorgsritualer'] }
};

// ---- Månecyklus (for kvinder uden menstruation) ----

const MOON_CYCLE_DATA = {
  1: { name: 'Nym\u00e5ne', element: 'VAND', kvalitet: 'Indadvendt energi',
    text: 'Nym\u00e5nen er vandets tid \u2014 stille, m\u00f8rk, reflekterende. En tid for nye intentioner, indre lytning og hvile. Energien er p\u00e5 sit laveste, og det er en gave.' },
  2: { name: 'Tiltagende m\u00e5ne', element: 'TR\u00c6', kvalitet: 'Stigende energi',
    text: 'M\u00e5nen vokser, og med den din energi. Tr\u00e6ets fase \u2014 v\u00e6kst, planl\u00e6gning, handling. En god tid for at s\u00e6tte ting i gang og f\u00f8lge dine intentioner.' },
  3: { name: 'Fuldm\u00e5ne', element: 'ILD', kvalitet: 'Udadvendt energi',
    text: 'Alt er i fuld blomst. Ildens kulminationspunkt \u2014 f\u00f8lelser, dr\u00f8mme og energi er p\u00e5 sit h\u00f8jeste. En tid for forbindelse, fejring og kulminationer.' },
  4: { name: 'Aftagende m\u00e5ne', element: 'JORD', kvalitet: 'Faldende energi',
    text: 'M\u00e5nen mindskes, og vi samler ind. Jordens fase \u2014 sortering, eftertanke, taknemmelighed. Slip det der ikke tjener dig, og forbered en ny cyklus.' }
};

// ---- Refleksion: Fasespecifikke spørgsmål ----

const REFLEKSION_DATA = {
  1: ['Hvad f\u00f8ler du dig tryg ved i dit liv lige nu?', 'Hvor i kroppen m\u00e6rker du stilhed \u2014 og hvor m\u00e6rker du uro?', 'Hvis du kunne give slip p\u00e5 \u00e9n frygt, hvad ville det v\u00e6re?'],
  2: ['Hvad g\u00f8r dig nysgerrig i dit liv lige nu?', 'Hvor kunne du tillade dig at lege mere?', 'Hvad ville du udforske, hvis ingen s\u00e5 p\u00e5?'],
  3: ['Hvad forvandler sig i dit liv lige nu?', 'Hvilken del af dig selv er ved at bryde igennem?', 'Hvad er du vred over \u2014 og hvad gemmer sig bag vreden?'],
  4: ['Hvilke dr\u00f8mme lever stadig i dig?', 'Hvor blomstrer du allerede \u2014 uden at bem\u00e6rke det?', 'Hvad ville du g\u00f8re, hvis du vidste det var godt nok?'],
  5: ['Hvilke m\u00f8nstre gentager du fra din mor?', 'Hvad ville du g\u00f8re anderledes, hvis du kun havde ansvar for dig selv?', 'Hvorn\u00e5r br\u00e6ndte du sidst for noget uden at br\u00e6nde ud?'],
  6: ['Hvad har du l\u00e6rt om dig selv de sidste ti \u00e5r?', 'Hvad er du klar til at slippe?', 'Hvor finder du dit fundament, n\u00e5r alt andet vakler?'],
  7: ['Hvad er du mest taknemlig for?', 'Hvad holder du fast i af vane \u2014 og hvad holder du fast i af k\u00e6rlighed?', 'Hvem er du, n\u00e5r rollerne er v\u00e6k?'],
  8: ['Hvad kan du give slip p\u00e5 med k\u00e6rlighed?', 'Hvad er det essentielle i dit liv lige nu?', 'Hvorn\u00e5r f\u00f8ler du dig mest fri?'],
  9: ['Hvad er den vigtigste ting du har l\u00e6rt om dig selv?', 'Hvad vil du videregive?', 'Hvis du kunne sige \u00e9n ting til din yngre jeg, hvad ville det v\u00e6re?']
};

// ---- Kontrolcyklus: TCM element tekster ----

const KONTROL_TEKST = {
  'VAND': { naerer: 'Dit Vand n\u00e6rer Tr\u00e6 \u2014 din dybde og intuition giver v\u00e6kst og retning til ny energi.', kontrollerer: 'Vand kontrollerer Ild \u2014 din ro kan d\u00e6mpe overaktivitet og bringe balance til flammerne.', naeret_af: 'Metal n\u00e6rer dit Vand \u2014 klarhed og evnen til at slippe beriger din dybde.', kontrolleret_af: 'Jord kontrollerer dit Vand \u2014 omsorgens fundament giver dit flow retning og gr\u00e6nser.' },
  'TR\u00c6': { naerer: 'Dit Tr\u00e6 n\u00e6rer Ild \u2014 din v\u00e6kst og kreativitet t\u00e6nder gl\u00e6de og forbindelse.', kontrollerer: 'Tr\u00e6 kontrollerer Jord \u2014 din fremadrettede energi bryder igennem stagnation.', naeret_af: 'Vand n\u00e6rer dit Tr\u00e6 \u2014 dybde og intuition giver din v\u00e6kst rod og retning.', kontrolleret_af: 'Metal kontrollerer dit Tr\u00e6 \u2014 klarhed besk\u00e6rer overfl\u00f8dige grene og giver form.' },
  'ILD': { naerer: 'Din Ild n\u00e6rer Jord \u2014 din varme og passion skaber fundament og omsorg.', kontrollerer: 'Ild kontrollerer Metal \u2014 din varme smelter stivhed og \u00e5bner for flow.', naeret_af: 'Tr\u00e6 n\u00e6rer din Ild \u2014 v\u00e6kst og retning giver dine flammer br\u00e6ndstof.', kontrolleret_af: 'Vand kontrollerer din Ild \u2014 dybde og ro forhindrer udbr\u00e6ndthed.' },
  'JORD': { naerer: 'Din Jord n\u00e6rer Metal \u2014 din stabilitet og omsorg skaber grundlag for klarhed.', kontrollerer: 'Jord kontrollerer Vand \u2014 dit fundament giver det flydende retning og form.', naeret_af: 'Ild n\u00e6rer din Jord \u2014 passion og varme g\u00f8r dit fundament levende.', kontrolleret_af: 'Tr\u00e6 kontrollerer din Jord \u2014 v\u00e6kst og forandring forhindrer stagnation.' },
  'METAL': { naerer: 'Dit Metal n\u00e6rer Vand \u2014 din klarhed og evne til at slippe beriger dybden.', kontrollerer: 'Metal kontrollerer Tr\u00e6 \u2014 din pr\u00e6cision giver ukontrolleret v\u00e6kst form.', naeret_af: 'Jord n\u00e6rer dit Metal \u2014 stabilitet og omsorg giver din klarhed varme.', kontrolleret_af: 'Ild kontrollerer dit Metal \u2014 varme og forbindelse forhindrer isolation.' }
};

// ---- Forløb: Sæsonbaserede eksterne links ----

const FORLOB_DATA = {
  'Vinter': { title: 'Vinterforl\u00f8bet', subtitle: 'F\u00f8lg \u00e5rets energi sammen med andre kvinder. Yin yoga, vejrtr\u00e6kning, refleksion \u2014 og et f\u00e6llesskab tilpasset vinterens stille energi.', url: 'https://isabelleeita.dk' },
  'For\u00e5r': { title: 'For\u00e5rsforl\u00f8bet', subtitle: 'Ny energi bryder frem. \u00d8velser, kost og f\u00e6llesskab der matcher for\u00e5rets Tr\u00e6-energi og nye begyndelser.', url: 'https://isabelleeita.dk' },
  'Sommer': { title: 'Sommerforl\u00f8bet', subtitle: 'Ildens \u00e5rstid. Bev\u00e6gelse, forbindelse og gl\u00e6de \u2014 et forl\u00f8b der fejrer sommerens fulde energi.', url: 'https://isabelleeita.dk' },
  'Sensommer': { title: 'Sensommerforl\u00f8bet', subtitle: 'Jordens tid. N\u00e6ring, omsorg og ford\u00f8jelse af sommerens oplevelser \u2014 sammen med andre kvinder.', url: 'https://isabelleeita.dk' },
  'Efter\u00e5r': { title: 'Efter\u00e5rsforl\u00f8bet', subtitle: 'Metallets \u00e5rstid. Slip det overfl\u00f8dige og find det essentielle \u2014 guidet af Isabelle.', url: 'https://isabelleeita.dk' }
};

// ---- Healing Sounds (per element) ----

const MERIDIAN_STRYGNINGER = {
  'VAND': [
    { meridian: 'Nyrernes meridian', organ: 'Nyrer', retning: 'Opad', desc: 'Fra fodens underside opad langs indersiden af benet. Samler livets erfaring op fra jorden.', vejledning: 'Sid ned og stryg med flad h\u00e5nd fra fodens underside opad \u2014 langs indersiden af benet, op over kn\u00e6et, langs l\u00e5rets inderside og s\u00e5 langt op ad kroppen, som det f\u00f8les naturligt. Langsomt, med varme, en fornemmelse af at l\u00f8fte noget op fra dybden. 5\u20137 gange p\u00e5 hver side.' }
  ],
  'TR\u00c6': [
    { meridian: 'Leverens meridian', organ: 'Lever', retning: 'Opad', desc: 'Fra storet\u00e5en op ad benets inderside til ribbenene. Hj\u00e6lper energien med at flyde frit.', vejledning: 'Sid ned og stryg med flad h\u00e5nd fra fodens inderside op ad benet, langs indersiden af l\u00e5ret og op til de nederste ribben. Langsomt, med en fornemmelse af at hj\u00e6lpe noget opad \u2014 som saft, der stiger i et tr\u00e6. 5\u20137 gange p\u00e5 hver side.' },
    { meridian: 'Galdebl\u00e6rens meridian', organ: 'Galdebl\u00e6re', retning: 'Nedad', desc: 'Fra tindingerne ned langs kroppens sider til f\u00f8dderne. L\u00f8sner fastl\u00e5sthed og skaber handlekraft.', vejledning: 'St\u00e5 op og stryg med begge h\u00e6nder fra tindingerne ned over siderne af halsen, ud over skuldrene, ned langs kroppens sider, hofterne, ydersiden af benene helt ned til f\u00f8dderne. Brug hele h\u00e5ndfladen og stryg med en fast, rolig bev\u00e6gelse. 5\u20137 gange.' }
  ],
  'ILD': [
    { meridian: 'Hjertets meridian', organ: 'Hjerte', retning: 'Nedad', desc: 'Fra armhulen ned ad armens inderside til lillefingeren. \u00c5bner evnen til gl\u00e6de og forbindelse.', vejledning: 'L\u00f8ft den ene arm let ud til siden og stryg med den anden h\u00e5nds flade fra armhulen ned ad indersiden af overarmen, underarmen og helt ud til lillefingeren. Langsomt og med let tryk. 5\u20137 gange p\u00e5 hver arm.' },
    { meridian: 'Pericardium', organ: 'Hjertets\u00e6k', retning: 'Nedad', desc: 'Fra brystet ned langs armens midte til langfingeren. Beskytter hjertet mod overv\u00e6ldelse.', vejledning: 'Start midt p\u00e5 brystet. Stryg ud over skulderen, ned langs midten af overarmen og underarmen, over h\u00e5ndfladen og slut ved langfingerens spids. Langsomt og med let tryk. 3\u20135 gange p\u00e5 hver arm.' }
  ],
  'JORD': [
    { meridian: 'Miltens meridian', organ: 'Milt', retning: 'Opad', desc: 'Fra storet\u00e5en opad langs benets inderside til brystsiden. Samler spredt energi og bringer den hjem.', vejledning: 'Sid ned og stryg med flad h\u00e5nd fra storet\u00e5en opad \u2014 langs fodens inderside, op ad benet, op over kn\u00e6et, langs indersiden af l\u00e5ret og s\u00e5 langt op ad kroppen, som det f\u00f8les naturligt. Langsomt, med en fornemmelse af at samle noget op. 5\u20137 gange p\u00e5 hver side.' },
    { meridian: 'Mavens meridian', organ: 'Mave', retning: 'Nedad', desc: 'Fra brystet ned over maven og benenes forside til f\u00f8dderne. Grounding i ren form.', vejledning: 'St\u00e5 op og stryg med begge h\u00e6nder fra brystet ned over maven, ned ad l\u00e5renes forside, langs forsiden af l\u00e6ggen til f\u00f8dderne. Med tyngde og varme, en fornemmelse af at hj\u00e6lpe noget nedefter. 5\u20137 gange.' }
  ],
  'METAL': [
    { meridian: 'Lungernes meridian', organ: 'Lunger', retning: 'Nedad', desc: 'Fra kravebenet ned ad armens yderside til tommelfingeren. St\u00f8tter evnen til at give slip.', vejledning: 'L\u00e6g den ene h\u00e5nds fingre lige under kravebenet p\u00e5 den modsatte side, t\u00e6t ved skulderen. Stryg ned ad armens yderside \u2014 over overarmen, underarmen, h\u00e5ndleddet og helt ud til tommelfingeren. Langsomt, med et let tryk, som om du f\u00f8lger noget p\u00e5 vej ud. 5\u20137 gange p\u00e5 hver arm.' }
  ]
};

// ---- Yin Yoga: Fuld data (5 elementer × 3 stillinger) ----

const YIN_YOGA_FULL = {
  'VAND': [
    { pose: 'Butterfly (Baddha Konasana)', desc: '\u00c5bner hofterne og stimulerer nyremeridianen. Sid med fods\u00e5ler mod hinanden, fold fremover.', tid: '3\u20135 min', meridian: 'Nyre \u00b7 Bl\u00e6re' },
    { pose: 'Liggende Butterfly (Supta Baddha Konasana)', desc: 'Samme position men liggende p\u00e5 ryggen. \u00c5bner bryst og hofte. Dyb afslapning.', tid: '5\u201310 min', meridian: 'Nyre \u00b7 Hjerte' },
    { pose: 'Caterpillar (Paschimottanasana)', desc: 'Foroverb\u00f8jning med strakte ben. Beroer nervesystemet og n\u00e6rer nyrerne.', tid: '3\u20135 min', meridian: 'Bl\u00e6re \u00b7 Nyre' }
  ],
  'TR\u00c6': [
    { pose: 'Dragonfly (Straddle)', desc: 'Bredt spreddede ben med foroverb\u00f8jning. \u00c5bner inderl\u00e5r og lever/galdebl\u00e6re.', tid: '3\u20135 min', meridian: 'Lever \u00b7 Galdebl\u00e6re' },
    { pose: 'Sleeping Swan (Pigeon)', desc: 'Dyb hofte\u00e5bner med \u00e9t ben b\u00f8jet foran. Frig\u00f8r stagneret energi i hoften.', tid: '3\u20135 min pr side', meridian: 'Galdebl\u00e6re \u00b7 Lever' },
    { pose: 'Firben (Lizard)', desc: 'Dybt lungeudstr\u00e6k. Intens hofte\u00e5bner der stimulerer levermeridianen.', tid: '3\u20135 min pr side', meridian: 'Lever \u00b7 Milt' }
  ],
  'ILD': [
    { pose: 'Melting Heart (Anahatasana)', desc: '\u00c5bner bryst og hjertemeridian. Armene strakt frem, brystet synker mod gulvet.', tid: '3\u20135 min', meridian: 'Hjerte \u00b7 Tyndtarm' },
    { pose: '\u00d8rnens Vinger (Eagle Arms)', desc: 'Armene krydset i \u00f8rneposition. \u00c5bner skuldrene og rummet mellem skulderbladene.', tid: '2\u20133 min pr side', meridian: 'Hjerte \u00b7 Perikardium' },
    { pose: 'Sphinx (Salamba Bhujangasana)', desc: 'Mild rygb\u00f8jning p\u00e5 underarmene. \u00c5bner brystet og stimulerer hjertet.', tid: '3\u20135 min', meridian: 'Hjerte \u00b7 Mave' }
  ],
  'JORD': [
    { pose: 'Barnet (Balasana)', desc: 'Hvileposition med panden mod gulvet. N\u00e6rer milten og giver dyb tryghed.', tid: '3\u20135 min', meridian: 'Milt \u00b7 Mave' },
    { pose: 'Square (Firkantet Pigeon)', desc: 'Begge skinneben parallelle i firkant foran kroppen. Dyb hofte\u00e5bner.', tid: '3\u20135 min pr side', meridian: 'Milt \u00b7 Galdebl\u00e6re' },
    { pose: 'Liggende Drejning (Supine Twist)', desc: 'Liggende p\u00e5 ryggen med kn\u00e6ene til siden. Masserer indre organer.', tid: '3\u20135 min pr side', meridian: 'Mave \u00b7 Milt' }
  ],
  'METAL': [
    { pose: '\u00c5ben Vinge (Open Wing)', desc: 'Liggende p\u00e5 maven med \u00e9n arm strakt ud. \u00c5bner brystkassen og lungerne.', tid: '3\u20135 min pr side', meridian: 'Lunger \u00b7 Tyktarm' },
    { pose: 'Bananform (Banana Pose)', desc: 'Liggende p\u00e5 ryggen i en bue. Str\u00e6kker hele siden og \u00e5bner lungemeridianerne.', tid: '3\u20135 min pr side', meridian: 'Lunger \u00b7 Galdebl\u00e6re' },
    { pose: 'Fisk (Matsyasana)', desc: 'Rygb\u00f8jning med \u00e5bent bryst. Stimulerer lungerne og frig\u00f8r sorg.', tid: '2\u20134 min', meridian: 'Lunger \u00b7 Hjerte' }
  ]
};

// ---- Insight: Yoga poses (kort version) ----

const INSIGHT_YOGA = {
  'VAND': [
    { pose: 'Butterfly (Baddha Konasana)', desc: '\u00c5bner hofterne og stimulerer nyremeridianen. Sid 3\u20135 min og lad kroppen synke.' },
    { pose: 'Sleeping Swan', desc: 'Dyb hofte\u00e5bner der arbejder med nyrer og bl\u00e6re. Hold 3 min per side.' },
    { pose: 'Caterpillar (Paschimottanasana)', desc: 'Fold fremad og lad tyngdekraften g\u00f8re arbejdet. Stimulerer bl\u00e6remeridianen langs ryggen.' }
  ],
  'TR\u00c6': [
    { pose: 'Dragonfly (Upavistha Konasana)', desc: '\u00c5bner inderl\u00e5rene og stimulerer levermeridianen. Sid bredt og fold stille frem.' },
    { pose: 'Twisted Roots', desc: 'Lig p\u00e5 ryggen med ben i kryds, lad kn\u00e6ene falde til \u00e9n side. Vrider leveren blidt.' },
    { pose: 'Shoelace (Gomukhasana)', desc: 'Dyb hofte\u00e5bner der rammer galdebl\u00e6remeridianen langs ydersiden af benet.' }
  ],
  'ILD': [
    { pose: 'Melting Heart (Anahatasana)', desc: 'Kn\u00e6l og lad brystkassen synke mod gulvet. \u00c5bner hjerteomr\u00e5det dybt.' },
    { pose: 'Sphinx', desc: 'Blid rygb\u00f8jning der \u00e5bner hjertet og stimulerer hjerte- og tyndtarmsmeridianen.' },
    { pose: 'Open Wings', desc: 'Lig p\u00e5 maven med \u00e9n arm ud til siden. Dyb \u00e5bning af bryst og skuldre.' }
  ],
  'JORD': [
    { pose: 'Child\u2019s Pose (Balasana)', desc: 'Den ultimative yin-stilling for jord. Giver tryghed, ro og stimulerer mave-miltmeridianen.' },
    { pose: 'Sphinx med bolster', desc: 'L\u00e6g en bolster under maven og hvil. Stimulerer maven og milten blidt.' },
    { pose: 'Reclining Twist', desc: 'Lig p\u00e5 ryggen, tr\u00e6k et kn\u00e6 over. Masserer mave og milt og giver dyb afslapning.' }
  ],
  'METAL': [
    { pose: 'Seal Pose', desc: 'Dybere udgave af Sphinx. \u00c5bner brystet og stimulerer lungerne. Hold 3\u20135 min.' },
    { pose: 'Banana Pose', desc: 'Lig p\u00e5 ryggen og kurv kroppen som en banan. \u00c5bner siden af kroppen og lungemeridianen.' },
    { pose: 'Savasana med fokus p\u00e5 \u00e5ndedr\u00e6t', desc: 'Dyb hvile med bevidst ind- og ud\u00e5nding. Lungernes ultimative n\u00e6ring.' }
  ]
};

// ---- Insight: Kost & Urter per element ----

const INSIGHT_FOOD = {
  'VAND': [
    { item: 'Sort sesam & valn\u00f8dder', desc: 'N\u00e6rer nyreessensen og styrker livskraften.' },
    { item: 'Misosuppe', desc: 'Varm, salt og dybt n\u00e6rende for nyrerne.' },
    { item: 'Ingef\u00e6rte med honning', desc: 'Varmer nyreomr\u00e5det og st\u00f8tter ford\u00f8jelsen.' },
    { item: 'Tang og s\u00f8gr\u00e6s', desc: 'Salt smag n\u00e6rer vandelelementet direkte.' }
  ],
  'TR\u00c6': [
    { item: 'Gr\u00f8nne bladgr\u00f8ntsager', desc: 'Spinat, gr\u00f8nk\u00e5l, rucola \u2013 st\u00f8tter leverens rensning.' },
    { item: 'Citron i varmt vand', desc: 'Den sure smag stimulerer leveren og galdebl\u00e6ren.' },
    { item: 'M\u00e6lkeb\u00f8ttete', desc: 'Klassisk leverurt der renser og styrker.' },
    { item: 'Spirer og kimchi', desc: 'Fermenteret mad st\u00f8tter leverens arbejde og ford\u00f8jelsen.' }
  ],
  'ILD': [
    { item: 'R\u00f8de b\u00e6r (hindb\u00e6r, jordb\u00e6r)', desc: 'N\u00e6rer hjertet og blodet. Den bitre smag st\u00f8tter ilden.' },
    { item: 'Kakao (ren)', desc: 'Hjertemedicin i naturlig form. \u00c5bner og varmer.' },
    { item: 'Hibiscuste', desc: 'K\u00f8lende og hjertestyrkende. Perfekt n\u00e5r ilden er intens.' },
    { item: 'Granat\u00e6ble', desc: 'Forbundet med hjertet i mange traditioner. Antioxidantrig.' }
  ],
  'JORD': [
    { item: 'S\u00f8de rodfrugter (s\u00f8de kartofler, guler\u00f8dder)', desc: 'Den s\u00f8de smag n\u00e6rer milten og maven.' },
    { item: 'Havregr\u00f8d', desc: 'Varm, bl\u00f8d, n\u00e6rende \u2013 perfekt jordmad.' },
    { item: 'Kamillte', desc: 'Beroligende for maven og nervesystemet.' },
    { item: 'Supper og gryderetter', desc: 'Langsomt kogt mad n\u00e6rer jordelementet dybt.' }
  ],
  'METAL': [
    { item: 'P\u00e6rer', desc: 'Den klassiske lungefrugt i kinesisk medicin. Fugter og n\u00e6rer.' },
    { item: 'Ris (hvid eller jasmin)', desc: 'Den sk\u00e6rende, hvide energi st\u00f8tter metalelementet.' },
    { item: 'Timian- og salvite', desc: 'Urter der st\u00f8tter lungerne og \u00e5ndedr\u00e6tsystemet.' },
    { item: 'Hvid r\u00e6ddike (daikon)', desc: 'Renser lungerne og tyktarmen. Skarp smag st\u00f8tter metal.' }
  ]
};

// ---- Insight: Fokusområder per element ----

const INSIGHT_FOCUS = {
  'VAND': ['Hvile og regeneration \u2013 priorit\u00e9r s\u00f8vn og stille tid', 'Lyt til din intuition \u2013 den taler tydeligt i dag', 'V\u00e6r t\u00e5lmodig med dig selv \u2013 ikke alt beh\u00f8ver svar nu'],
  'TR\u00c6': ['Handling og retning \u2013 tag det f\u00f8rste skridt', 'Kreativitet \u2013 giv dine id\u00e9er form', 'Bev\u00e6gelse \u2013 din krop har brug for at udtrykke tr\u00e6ets energi'],
  'ILD': ['Forbindelse \u2013 r\u00e6k ud til nogen du holder af', 'Gl\u00e6de \u2013 g\u00f8r noget der t\u00e6nder dig op indeni', 'Kommunikation \u2013 sig det du mener, med varme'],
  'JORD': ['N\u00e6ring \u2013 start med at n\u00e6re dig selv f\u00f8rst', 'Stabilitet \u2013 skab orden i \u00e9t lille omr\u00e5de', 'Omsorg \u2013 din omsorgsevne er din superkraft i dag'],
  'METAL': ['Klarhed \u2013 se p\u00e5 dit liv med \u00e6rlige \u00f8jne', 'Slip \u2013 giv slip p\u00e5 \u00e9n ting der tynger', 'Essens \u2013 hvad er det absolut vigtigste lige nu?']
};

// ---- Element Interactions (25 par-kombinationer) ----

const ELEMENT_INTERACTIONS = {
  'VAND_TR\u00c6':   { type: 'n\u00e6rer',     text: 'Vand n\u00e6rer Tr\u00e6. Din dybde giver plads til {pron} v\u00e6kst.' },
  'TR\u00c6_ILD':    { type: 'n\u00e6rer',     text: 'Tr\u00e6 f\u00f8der Ild. {navn}s energi t\u00e6ndes af din retning.' },
  'ILD_JORD':   { type: 'n\u00e6rer',     text: 'Ild varmer Jord. Din passion modnes i {pron} stabilitet.' },
  'JORD_METAL': { type: 'n\u00e6rer',     text: 'Jord skaber Metal. Din omsorg b\u00e6rer {pron} klarhed.' },
  'METAL_VAND': { type: 'n\u00e6rer',     text: 'Metal beriger Vand. {pron} visdom frig\u00f8r din intuition.' },
  'TR\u00c6_VAND':   { type: 'modtager',  text: 'Tr\u00e6 modtager fra Vand. {pron} dybde n\u00e6rer din v\u00e6kst.' },
  'ILD_TR\u00c6':    { type: 'modtager',  text: 'Ild modtager fra Tr\u00e6. Din varme vokser i {pron} retning.' },
  'JORD_ILD':   { type: 'modtager',  text: 'Jord modtager fra Ild. {pron} passion n\u00e6rer din stabilitet.' },
  'METAL_JORD': { type: 'modtager',  text: 'Metal modtager fra Jord. Din klarhed b\u00e6res af {pron} omsorg.' },
  'VAND_METAL': { type: 'modtager',  text: 'Vand modtager fra Metal. {pron} skarphed frig\u00f8r din intuition.' },
  'VAND_ILD':   { type: 'udfordrer', text: 'Vand m\u00f8der Ild. Din ro kan d\u00e6mpe {pron} flamme \u2014 men ogs\u00e5 beskytte den.' },
  'TR\u00c6_JORD':   { type: 'udfordrer', text: 'Tr\u00e6 m\u00f8der Jord. Din v\u00e6kst kan ryste {pron} fundament \u2014 men ogs\u00e5 berige det.' },
  'ILD_METAL':  { type: 'udfordrer', text: 'Ild m\u00f8der Metal. Din varme kan smelte {pron} struktur \u2014 men ogs\u00e5 forl\u00f8se den.' },
  'JORD_VAND':  { type: 'udfordrer', text: 'Jord m\u00f8der Vand. Din omsorg kan blokere {pron} flow \u2014 men ogs\u00e5 give det retning.' },
  'METAL_TR\u00c6':  { type: 'udfordrer', text: 'Metal m\u00f8der Tr\u00e6. Din klarhed kan besk\u00e6re {pron} v\u00e6kst \u2014 men ogs\u00e5 forme den.' },
  'ILD_VAND':   { type: 'udfordres', text: 'Ild m\u00f8der Vand. {pron} dybde udfordrer din flamme \u2014 men kan ogs\u00e5 beskytte den.' },
  'JORD_TR\u00c6':   { type: 'udfordres', text: 'Jord m\u00f8der Tr\u00e6. {pron} v\u00e6kst udfordrer dit fundament \u2014 men beriger det.' },
  'METAL_ILD':  { type: 'udfordres', text: 'Metal m\u00f8der Ild. {pron} varme udfordrer din struktur \u2014 men forl\u00f8ser den.' },
  'VAND_JORD':  { type: 'udfordres', text: 'Vand m\u00f8der Jord. {pron} omsorg udfordrer dit flow \u2014 men giver det retning.' },
  'TR\u00c6_METAL':  { type: 'udfordres', text: 'Tr\u00e6 m\u00f8der Metal. {pron} klarhed udfordrer din v\u00e6kst \u2014 men former den.' },
  'VAND_VAND':  { type: 'spejler',   text: 'Vand m\u00f8der Vand. I deler den samme dybde \u2014 en stille forst\u00e5else uden ord.' },
  'TR\u00c6_TR\u00c6':   { type: 'spejler',   text: 'Tr\u00e6 m\u00f8der Tr\u00e6. I vokser side om side \u2014 to kr\u00e6fter med samme retning.' },
  'ILD_ILD':    { type: 'spejler',   text: 'Ild m\u00f8der Ild. Dobbelt flamme \u2014 dobbelt varme, men pas p\u00e5 udbr\u00e6ndthed.' },
  'JORD_JORD':  { type: 'spejler',   text: 'Jord m\u00f8der Jord. Dobbelt fundament \u2014 dyb tryghed, men husk bev\u00e6gelse.' },
  'METAL_METAL':{ type: 'spejler',   text: 'Metal m\u00f8der Metal. Dobbelt klarhed \u2014 essentielt, men husk varmen.' }
};

// ---- Cyklusser i Cyklusser: Cyklus-par tekster ----

const CYCLE_PAIR_TEXTS = {
  naerer: {
    'VAND_TR\u00c6': 'Dit indre vand n\u00e6rer v\u00e6ksten stille. Der er en str\u00f8m under overfladen der g\u00f8r det muligt for noget nyt at spire.',
    'TR\u00c6_ILD': 'V\u00e6ksten t\u00e6nder en flamme. Din fremadrettede kraft g\u00f8r det muligt at forbinde dig med gl\u00e6de og varme.',
    'ILD_JORD': 'Ildens varme modner jorden i dig. Din passion skaber substans, og det flygtige bliver til noget der kan b\u00e6re.',
    'JORD_METAL': 'Fra dit fundament kan du se klart. Jordens omsorg giver dig modet til at slippe det der ikke l\u00e6ngere tjener dig.',
    'METAL_VAND': 'N\u00e5r klarheden siver ned i dybden, finder du ro. Det du har sluppet g\u00f8r plads til stille visdom.'
  },
  udfordrer: {
    'VAND_ILD': 'Dybden m\u00f8der flammen. En del af dig s\u00f8ger stilhed mens en anden vil str\u00e5le. Begge har ret.',
    'TR\u00c6_JORD': 'V\u00e6ksten rusker i dit fundament. Noget nyt vil frem, men noget andet vil holde fast. Lyt til begge.',
    'ILD_METAL': 'Din varme udfordrer din klarhed. Passionen vil mere end strukturen kan rumme \u2014 men m\u00e5ske er det netop det der skal til.',
    'JORD_VAND': 'Din omsorg vil holde fast, men str\u00f8mmen vil videre. Sp\u00e6ndingen mellem tryghed og flow er din l\u00e6ring i dag.',
    'METAL_TR\u00c6': 'Klarheden besk\u00e6rer det nye. Du kan se hvad der er vigtigt \u2014 men m\u00e5ske ogs\u00e5 hvad der m\u00e5 gives slip p\u00e5 for at vokse.'
  },
  spejler: {
    'VAND': 'Dobbelt dybde. Intuitionen er st\u00e6rk, dr\u00f8mme og fornemmelser flyder frit. Giv dig selv lov til at v\u00e6re i det uden retning.',
    'TR\u00c6': 'Dobbelt v\u00e6kst. En kraftig fremadrettet energi \u2014 grib den, men find ogs\u00e5 \u00f8jeblikke af stilhed.',
    'ILD': 'Dobbelt flamme. Du str\u00e5ler og varmer alt omkring dig. M\u00e6rk hvorn\u00e5r det er nok \u2014 ogs\u00e5 ild har brug for br\u00e6ndstof.',
    'JORD': 'Dobbelt fundament. Dyb tryghed og n\u00e6ring. M\u00e6rk f\u00f8dderne. Men husk at ogs\u00e5 jord har brug for vand og lys.',
    'METAL': 'Dobbelt klarhed. Alt det uesssentielle falder v\u00e6k. Det kan f\u00f8les ensomt, men det er ogs\u00e5 en gave at se s\u00e5 klart.'
  }
};

// ---- Indre Klima: 5 klimakategorier ----

const INNER_CLIMATE = {
  fuld_resonans: {
    label: 'Fuld resonans',
    text: 'Tre eller flere af dine cyklusser deler samme element. Det er som en dyb akkord der klinger \u2014 alt i dig peger i samme retning.'
  },
  naerende_flow: {
    label: 'N\u00e6rende flow',
    text: 'Dine cyklusser n\u00e6rer hinanden i en naturlig str\u00f8m. Energien flyder let mellem dine lag. En god dag at f\u00f8lge impulsen.'
  },
  stille_balance: {
    label: 'Stille balance',
    text: 'Dine cyklusser holder hinanden i en rolig ligev\u00e6gt. Ingen kraft dominerer. Brug det til at m\u00e6rke efter hvad der virkelig kalder.'
  },
  kreativ_spaending: {
    label: 'Kreativ sp\u00e6nding',
    text: 'Der er sp\u00e6nding mellem dine cyklusser. Det er ikke konflikt \u2014 det er kreativ friktion. Noget i dig tr\u00e6kker i forskellige retninger, og netop det kan skabe noget nyt.'
  },
  indre_storm: {
    label: 'Indre storm',
    text: 'Flere af dine cyklusser udfordrer hinanden i dag. Det kan f\u00f8les uroligt indeni. M\u00e6rk det uden at d\u00f8mme det \u2014 stormen b\u00e6rer altid en gave med sig.'
  }
};

// ---- Dynamisk Tekst: Templates per element ----

const DYNAMISK_TEKST = {
  'VAND': {
    dominant: 'Vandet kalder dybt i dig lige nu. Det er måske derfor du mærker en trang til at trække dig. Det er ikke svaghed \u2014 det er {cyklusser} der taler med én stemme.',
    strong: 'Vandet er tydeligt i dig lige nu. {konkret} M\u00e6rk det \u2014 det er din intuition der har noget at sige.',
    present: 'Vandet flyder stille med dig i dag. {konkret} En invitation til at lytte indad.'
  },
  'TR\u00c6': {
    dominant: 'Tr\u00e6ets kraft fylder i dig lige nu. {cyklusser} peger alle mod v\u00e6kst. F\u00f8lg den retning \u2014 noget vil frem.',
    strong: 'Der er v\u00e6kstenergi i dig i dag. {konkret} Din krop og dine cyklusser vil fremad.',
    present: 'Tr\u00e6et spirer stille i baggrunden. {konkret} Selv en lille impuls mod noget nyt er v\u00e6rd at f\u00f8lge.'
  },
  'ILD': {
    dominant: 'Ilden br\u00e6nder! {cyklusser} peger mod forbindelse og varme. Din udstr\u00e5ling er st\u00e6rk \u2014 brug den.',
    strong: 'Ildens varme er tydelig i dag. {konkret} En god dag for vigtige samtaler og kreativt arbejde.',
    present: 'En stille varme ulmer i dig. {konkret} Nok til at minde dig om at gl\u00e6de er tilg\u00e6ngelig.'
  },
  'JORD': {
    dominant: 'Jorden b\u00e6rer dig dybt i dag. {cyklusser} samler sig om n\u00e6ring og fundament. Brug det til at skabe orden.',
    strong: 'Jordens stabilitet er tydelig. {konkret} Din omsorg r\u00e6kker langt i dag \u2014 start med dig selv.',
    present: 'Jorden er med dig som et stille fundament. {konkret} Du st\u00e5r mere solidt end du tror.'
  },
  'METAL': {
    dominant: 'Metallets klarhed gennemsyrer dig. {cyklusser} peger mod essens. Du ser tingene som de er \u2014 skarpt og rent.',
    strong: 'Klarheden er tilg\u00e6ngelig i dag. {konkret} En god dag for at give slip p\u00e5 det overfl\u00f8dige.',
    present: 'Metallet minder dig stille om det essentielle. {konkret} Hvad er det egentlig der betyder noget?'
  }
};

// ---- Relation Recommendations (per element) ----

const RELATION_RECOMMENDATIONS = {
  'VAND': {
    forDig: 'Vand-energien inviterer til stilhed og lytning. Giv dig selv lov til at tr\u00e6kke dig lidt tilbage \u2014 det er ikke afvisning, det er opladning.',
    forAnden: '{navn}s krop kalder p\u00e5 stilhed og ro lige nu. Giv {pron} plads til at tr\u00e6kke sig \u2014 det er ikke afvisning, men opladning. Vand-energien har brug for hvile.',
    sammen: 'M\u00e5ske kan I m\u00f8des i ro. En g\u00e5tur ved vandet, en stille aften. Vand har ikke brug for ord, men for tilstedev\u00e6relse.'
  },
  'TR\u00c6': {
    forDig: 'Tr\u00e6-energien giver dig drivkraft og retning. Pas p\u00e5 ikke at lade ut\u00e5lmodighed styre. Din v\u00e6kst beh\u00f8ver ikke andres tempo.',
    forAnden: '{navn} er i Tr\u00e6-energi \u2014 alt i {pron_obj} vil vokse og bev\u00e6ge sig fremad. Det er ikke ut\u00e5lmodighed, det er biologi. M\u00f8d {pron_obj} med bev\u00e6gelse, ikke modstand.',
    sammen: 'I kan dele visioner og planer. Tr\u00e6 trives med bev\u00e6gelse \u2014 g\u00f8r noget aktivt sammen, m\u00e5ske en udflugt eller et nyt projekt.'
  },
  'ILD': {
    forDig: 'Ild-energien g\u00f8r dig varm og n\u00e6rv\u00e6rende. Nyd forbindelsen, men husk at gl\u00e6den ikke afh\u00e6nger af andres bekr\u00e6ftelse.',
    forAnden: '{navn} br\u00e6nder med Ild-energi lige nu \u2014 {pron} er varm, n\u00e6rv\u00e6rende og s\u00f8ger forbindelse. M\u00f8d {pron_obj} der. Det kr\u00e6ver ikke store ord, bare tilstedev\u00e6relse.',
    sammen: 'Det er tid til fest, latter og n\u00e6rv\u00e6r. Ild elsker samv\u00e6r \u2014 invit\u00e9r til noget spontant, lad hjertet lede.'
  },
  'JORD': {
    forDig: 'Jord-energien n\u00e6rer din omsorg. Du m\u00e6rker m\u00e5ske en trang til at tage vare p\u00e5 andre. Husk ogs\u00e5 at n\u00e6re dig selv.',
    forAnden: '{navn} er i Jord-energi \u2014 {pron} har brug for tryghed og stabilitet. M\u00f8d {pron_obj} med omsorg, og lad {pron_obj} n\u00e6re dig tilbage. Jord giver mest, n\u00e5r den selv f\u00e5r ro.',
    sammen: 'I kan m\u00f8des over mad, samtale og tryghed. Jord finder hvile i det kendte \u2014 lav noget hjemme sammen.'
  },
  'METAL': {
    forDig: 'Metal-energien sk\u00e6rper din skelneevne. Du ser klarere hvad der tjener dig. Slip det overfl\u00f8dige med k\u00e6rlighed, ikke dom.',
    forAnden: '{navn} er i Metal-energi \u2014 {pron} ser klarere og sorterer i det overfl\u00f8dige. Det kan f\u00f8les som afstand, men det er klarhed. Giv {pron_obj} rum til det.',
    sammen: 'I kan m\u00f8des i \u00e6rlighed og klarhed. Metal t\u00e5ler sandhed \u2014 m\u00e5ske er det tid til en oprigtig samtale om det der betyder noget.'
  }
};

// ---- Share Templates (per relationstype) ----

const SHARE_TEMPLATES = {
  'partner': { tone: 'direkte, k\u00e6rlig', intro: 'Jeg har kigget p\u00e5 noget sp\u00e6ndende om vores livscyklusser.' },
  'datter': { tone: 'varm, anerkendende', intro: 'Der er noget, jeg gerne vil dele med dig om livets faser.' },
  's\u00f8n': { tone: 'varm, respektfuld', intro: 'Jeg faldt over noget om livsfaser, som jeg t\u00e6nkte, du m\u00e5ske ville finde interessant.' },
  'mor': { tone: 'respektfuld, reflekterende', intro: 'Mor, jeg har opdaget noget om vores livsfaser, som s\u00e6tter vores relation i et nyt lys.' },
  'veninde': { tone: '\u00e5ben, nysgerrig', intro: 'Jeg fandt noget om livsfaser, som fik mig til at t\u00e6nke p\u00e5 os.' },
  'anden': { tone: 'neutral, im\u00f8dekommende', intro: 'Jeg vil gerne dele noget med dig om livsfaser og vores energier.' }
};

// ---- To Rytmer: Samtaleåbnere ----

const TO_RYTMER_SAMTALE = {
  VAND: {
    spoerg: 'Hvad fylder mest for dig lige nu \u2014 og er der noget der presser, som du ikke har sagt h\u00f8jt?',
    sig: 'Jeg har v\u00e6ret der, hvor du er nu. Ikke pr\u00e6cis det samme sted, men i den slags sp\u00f8rgsm\u00e5l. Vil du h\u00f8re, hvad der hjalp mig?',
    sammen: 'Hvor er vi forskellige lige nu \u2014 og hvad kan vi l\u00e6re af det, i stedet for at k\u00e6mpe mod det?'
  },
  'TR\u00c6': {
    spoerg: 'Hvad dr\u00f8mmer du om at bygge lige nu \u2014 og f\u00f8ler du, at der er plads til det?',
    sig: 'Jeg kan m\u00e6rke, at du har brug for at bev\u00e6ge dig. Lad os finde ud af, hvordan vi giver plads til det sammen.',
    sammen: 'Hvad ville vi skabe, hvis vi turde dr\u00f8mme h\u00f8jt sammen \u2014 uden at v\u00e6re praktiske?'
  },
  ILD: {
    spoerg: 'Hvorn\u00e5r f\u00f8lte du dig sidst virkelig levende \u2014 og hvad holdt dig v\u00e5gen?',
    sig: 'Din energi smitter. Jeg kan m\u00e6rke den, ogs\u00e5 n\u00e5r du ikke siger noget. Hvad kan vi t\u00e6nde sammen?',
    sammen: 'Hvad ville vi g\u00f8re, hvis vi havde al den energi i verden \u2014 bare for en weekend?'
  },
  JORD: {
    spoerg: 'Hvad f\u00e5r dig til at f\u00f8le dig tryg lige nu \u2014 og er der noget du savner?',
    sig: 'Jeg ved godt, at du holder mange ting sammen. Lad mig holde noget af det for dig en stund.',
    sammen: 'Hvad ville det betyde for os, hvis vi holdt pause fra det hele \u2014 bare \u00e9n dag?'
  },
  METAL: {
    spoerg: 'Hvad har du sagt farvel til for nylig \u2014 og savner du det, eller er det en befrielse?',
    sig: 'Jeg kan se, at du sorterer. Det er modigt. Og det er okay, at det g\u00f8r lidt ondt.',
    sammen: 'Hvad er vi blevet enige om at beholde, som m\u00e5ske ikke l\u00e6ngere tjener os?'
  }
};

// ---- Tre Generationer: Forbindelsestekster ----

const TRE_GEN_FORBINDELSE_TEKST = {
  'default_arv': 'Der er en forbindelse mellem jer, som g\u00e5r dybere end ord. M\u00e6rk efter \u2014 hvad har du arvet, og hvad har du valgt selv?',
  'default_frihed': 'De to har en forbindelse, du ikke altid kan se. Lad dem m\u00f8des i deres eget tempo.',
  'default_fornyelse': 'Noget nyt vokser mellem jer. Det er hverken dit eller hendes \u2014 det er jeres.'
};

// ---- Cyklus Labels ----

const CYCLE_LABELS = {
  livsfase: 'Livsfase',
  aarstid: '\u00c5rstid',
  maaned: 'M\u00e5nedscyklus',
  ugedag: 'Ugedag',
  organur: 'Organur'
};

// ---- Hj\u00e6lp mig nu: Tags + Empati + Krop ----

const HJAELP_TAGS = [
  { id: 'stress',      label: 'Jeg er stresset',       element: 'VAND'  },
  { id: 'traet',       label: 'Jeg er tr\u00e6t',              element: 'VAND'  },
  { id: 'urolig',      label: 'Jeg er urolig',          element: 'JORD'  },
  { id: 'vred',        label: 'Jeg er vred',            element: 'TR\u00c6'  },
  { id: 'ked',         label: 'Jeg er ked af det',      element: 'METAL' },
  { id: 'ondt',        label: 'Jeg har ondt i kroppen', element: null    },
  { id: 'soevnloes',   label: 'Jeg kan ikke sove',      element: 'VAND'  },
  { id: 'overvaeldet', label: 'Jeg er overv\u00e6ldet',        element: 'JORD'  },
  { id: 'ensom',       label: 'Jeg f\u00f8ler mig alene',  element: 'ILD'   }
];

const HJAELP_EMPATI = {
  'stress':      'Det du m\u00e6rker giver mening. Stress er kroppen der r\u00e5ber p\u00e5 noget helt basalt \u2014 hvile, vand, stilhed. M\u00e5ske beh\u00f8ver du ikke l\u00f8se noget lige nu. M\u00e5ske beh\u00f8ver du bare at lande.',
  'traet':       'Tr\u00e6thed er ikke dovenskab \u2014 det er kroppens \u00e6rlige sprog. N\u00e5r nyrerne kalder p\u00e5 hvile, er det fordi din livsenergi har brug for at samle sig. Giv dig selv lov.',
  'urolig':      'Uro er jordelementets m\u00e5de at sige: du b\u00e6rer for meget. Ikke fordi du er svag, men fordi du rummer s\u00e5 meget. Tag \u00e9n ting ad gangen.',
  'vred':        'Vrede er tr\u00e6ets kraft \u2014 den vil noget. Den peger p\u00e5 en gr\u00e6nse der er overskredet, en retning der mangler. Lyt til den f\u00f8r du handler.',
  'ked':         'Sorg h\u00f8rer til i livet. Metalelementet l\u00e6rer os at give slip \u2014 ikke glemme, men \u00e5bne h\u00e6nderne. Det du har mistet, har ogs\u00e5 givet dig noget.',
  'ondt':        'Kroppen taler altid sandt. Smerter er ikke en fejl \u2014 de er et signal. Lyt til hvor det g\u00f8r ondt, og sp\u00f8rg blidt: hvad har du brug for?',
  'soevnloes':   'N\u00e5r s\u00f8vnen flygter, er nervesystemet i alarmberedskab. Vandenergi handler om at synke ned, give slip, lade kroppen b\u00e6re dig. Start med \u00e5ndedr\u00e6ttet.',
  'overvaeldet': 'At v\u00e6re overv\u00e6ldet er ikke et tegn p\u00e5 svaghed \u2014 det er et tegn p\u00e5 at du m\u00e6rker alt det der sker. Jordelementet inviterer dig til at forankre dig i \u00e9t eneste \u00f8jeblik.',
  'ensom':       'Ensomhed er hjertets l\u00e6ngsel efter forbindelse. Ildelementet minder os om at vi er skabt til at v\u00e6re sammen \u2014 men ogs\u00e5 at forbindelsen til dig selv t\u00e6ller.'
};

const HJAELP_KROP = {
  'stress':      { 'VAND': 'N\u00e5r vand-elementet er presset, reagerer nyrerne og binyrer foerst. Din krop beder om ro, varme og langsom \u00e5nding.',                       'TR\u00c6': 'Stress presser leverens energi opad \u2014 det m\u00e6rkes som sp\u00e6nding i nakke og skuldre. Tr\u00e6et har brug for bev\u00e6gelse og udsyn.',                       'ILD': 'N\u00e5r ilden er stresset, sl\u00e5r hjertet hurtigere. Du m\u00e6rker det som uro i brystet. Hjertet beder om at du s\u00e6tter farten ned.',                       'JORD': 'Stress rammer milten og ford\u00f8jelsen. Maven knuger sig sammen. Jordelementet har brug for regul\u00e6r rytme og varme.',                       'METAL': 'Lungerne strammer til n\u00e5r metal er presset. Du tr\u00e6kker vejret kort og overfladisk. Start med en lang, langsom ud\u00e5nding.' },
  'traet':       { 'VAND': 'Tr\u00e6thed fra vand-elementet sidder dybt \u2014 i knoglerne, i l\u00e6nden. Det er din grundenergi der beder om p\u00e5fyldning.',                       'TR\u00c6': 'Tr\u00e6ets tr\u00e6thed f\u00f8les som mangel p\u00e5 retning. Leveren er overbelastet. Gr\u00f8nt, luft og bev\u00e6gelse hj\u00e6lper.',                       'ILD': 'Ildens tr\u00e6thed er udmattelse efter at have givet for meget. Hjertet er t\u00f8mt. Hvile og stille gl\u00e6de genopbygger.',                       'JORD': 'Jordens tr\u00e6thed er tung og klam. Milten kan ikke l\u00f8fte energien. Let, varm mad og frisk luft er medicinen.',                       'METAL': 'Metals tr\u00e6thed f\u00f8les som en matteret graa. Lungerne mangler frisk qi. En lang gaaetur og bevidst \u00e5nding vender det.' },
  'urolig':      { 'VAND': 'Uro fra vand viser sig som dyb angst eller utryghed. Nyrerne opbevarer frygt. Varme, tryghed og jordforbindelse er svarene.',                       'TR\u00c6': 'Tr\u00e6ets uro er rastl\u00f8shed \u2014 kroppen vil handle men ved ikke hvorhen. Leveren har brug for en kanal. Skriv, g\u00e5, dans.',                       'ILD': 'Ildens uro er hjertebanken og tanker der l\u00f8ber. Hjertet overopheder. K\u00f8lende te og stille v\u00e6ren bringer ro.',                       'JORD': 'Jordens uro er bekymring der cirkler. Milten grubler. Afbryd tankerne med noget konkret \u2014 r\u00f8r ved jorden, lav mad, g\u00e5 barfodet.',                       'METAL': 'Metals uro er en f\u00f8lelse af at noget mangler. Lungerne sukker. Slip \u00e9n ting du holder fast i \u2014 s\u00e5 er der mere plads.' },
  'vred':        { 'VAND': 'Vrede fra vand er sj\u00e6lden men dyb \u2014 det er frygt forklaedt. Nyrerne beder dig om at finde trygheden f\u00f8r du handler.',                       'TR\u00c6': 'Vrede er tr\u00e6ets naturlige kraft. Leveren oplagrer frustrationer. Frig\u00f8r med bev\u00e6gelse, r\u00e5b, eller skriv det ud.',                       'ILD': 'Ildens vrede er intens men kort. Hjertet flammer op. Lad den passere som en b\u00f8lge \u2014 den vil noget vigtigt.',                       'JORD': 'N\u00e5r jorden er vred, handler det om uretf\u00e6rdighed. Milten f\u00f8ler sig overset. Anerkend f\u00f8lelsen \u2014 den er gyldig.',                       'METAL': 'Metals vrede er stille og sk\u00e6rende. Lungerne holder igen. Giv den luft \u2014 bogstaveligt. \u00c5bn vinduet og traek vejret.' },
  'ked':         { 'VAND': 'Sorg fra vand er tavs og bundl\u00f8s. Nyrerne b\u00e6rer gammel smerte. Gr\u00e6d hvis du kan \u2014 t\u00e5rer er vandets rensning.',                       'TR\u00c6': 'N\u00e5r tr\u00e6et s\u00f8rger, stopper v\u00e6ksten. Leveren stagnerer. Bev\u00e6gelse er vejen ud \u2014 selv en kort g\u00e5tur.',                       'ILD': 'Ildens sorg er ensomhedens smerte. Hjertet f\u00f8ler sig afsk\u00e5ret. Raek ud \u2014 \u00e9t opkald, \u00e9n besked, \u00e9n forbindelse.',                       'JORD': 'Jordens sorg handler om tab af tryghed. Milten f\u00f8ler sig rodl\u00f8s. Find et sted du f\u00f8ler dig hjemme \u2014 ogs\u00e5 indeni.',                       'METAL': 'Metal kender sorgen intimt. Lungerne b\u00e6rer tabet. Det er naturligt at give slip \u2014 og det g\u00f8r ondt. Begge dele er sandt.' },
  'ondt':        { 'VAND': 'Smerter i l\u00e6nd, kn\u00e6 eller led peger p\u00e5 nyrerne. Vand-elementet beder om varme, hvile og blid bev\u00e6gelse.',                       'TR\u00c6': 'Smerter i sider, skuldre eller hovedet peger p\u00e5 leveren. Tr\u00e6et er sp\u00e6ndt. Strak, drej, giv plads.',                       'ILD': 'Smerter i bryst eller overarme peger p\u00e5 hjertet. Ilden er overbelastet. S\u00e6t farten ned og m\u00e6rk efter.',                       'JORD': 'Smerter i mave eller l\u00e5r peger p\u00e5 milten. Jorden er tung. Let og varm kost \u2014 og pauser.',                       'METAL': 'Smerter i lunger, hud eller tyktarm peger p\u00e5 metalelementet. \u00c5ndedr\u00e6t og frisk luft er medicinen.' },
  'soevnloes':   { 'VAND': 'S\u00f8vnl\u00f8shed fra vand er nyrernes udmattelse. Binyrer k\u00f8rer p\u00e5 overarbejde. Varme f\u00f8dder, m\u00f8rkt rum, langsom \u00e5nding.',                       'TR\u00c6': 'Leverens energi stiger om natten og vekker dig. Tr\u00e6et k\u00e6mper med frustrationer. Skriv det ud f\u00f8r sengetid.',                       'ILD': 'Hjertet kan ikke finde ro. Tankerne korer. Ilden er for intens. K\u00f8lende te og stille musik d\u00e6mper flammen.',                       'JORD': 'Bekymringer holder milten v\u00e5gen. Tankerne grubler i cirkler. Skriv tre ting du er taknemmelig for.',                       'METAL': 'Lungerne holder fast i dagens sp\u00e6ndinger. En lang, stille ud\u00e5nding er n\u00f8glen. T\u00e6l ud\u00e5ndingen til otte.' },
  'overvaeldet': { 'VAND': 'Overv\u00e6ldelse fra vand er f\u00f8lelsen af at drukne. Nyrerne kan ikke filtrere mere. Stop \u2014 bare \u00e9t minut af stilhed.',                       'TR\u00c6': 'Tr\u00e6ets overv\u00e6ldelse er for mange retninger p\u00e5 \u00e9n gang. Leveren er overbelastet. V\u00e6lg \u00e9n ting. Kun \u00e9n.',                       'ILD': 'Ildens overv\u00e6ldelse er f\u00f8lelsesm\u00e6ssigt overl\u00f8b. Hjertet har taget for meget ind. Tr\u00e6k dig tilbage til noget stille.',                       'JORD': 'Jordens overv\u00e6ldelse er omsorgens byrde. Du b\u00e6rer andres behov. S\u00e6t dine egne f\u00f8rst \u2014 bare i dag.',                       'METAL': 'Metals overv\u00e6ldelse er kaos mod struktur. Lungerne tr\u00e6kker sig sammen. Ryd \u00e9t bord, \u00e9n bunke, \u00e9n ting.' },
  'ensom':       { 'VAND': 'Ensomhed fra vand er dyb og ordl\u00f8s. Nyrerne b\u00e6rer en urmenneskelig laengsel. Du er ikke alene i at f\u00f8le dig alene.',                       'TR\u00c6': 'Tr\u00e6ets ensomhed er f\u00f8lelsen af at v\u00e6re p\u00e5 vej alene. Leveren soeger en makker. G\u00e5 ud i naturen \u2014 tr\u00e6erne forstaar.',                       'ILD': 'Ildens ensomhed er hjertets l\u00e6ngsel. Du savner at blive set. Raek ud til \u00e9n du stoler p\u00e5 \u2014 bare et kort "hej".',                       'JORD': 'Jordens ensomhed er at give uden at modtage. Milten toemmes. Lad nogen n\u00e6re dig i dag \u2014 sig ja til hj\u00e6lp.',                       'METAL': 'Metals ensomhed er det essentielle tab. Du m\u00e6rker fraværet af noget vigtigt. Giv dig selv lov til at savne.' }
};

// ---- Export all data to window ----

window.LIVSFASE_DETAIL = LIVSFASE_DETAIL;
window.MENSTRUAL_WEEK_DATA = MENSTRUAL_WEEK_DATA;
window.MOON_CYCLE_DATA = MOON_CYCLE_DATA;
window.REFLEKSION_DATA = REFLEKSION_DATA;
window.KONTROL_TEKST = KONTROL_TEKST;
window.FORLOB_DATA = FORLOB_DATA;
window.MERIDIAN_STRYGNINGER = MERIDIAN_STRYGNINGER;
window.YIN_YOGA_FULL = YIN_YOGA_FULL;
window.INSIGHT_YOGA = INSIGHT_YOGA;
window.INSIGHT_FOOD = INSIGHT_FOOD;
window.INSIGHT_FOCUS = INSIGHT_FOCUS;
window.ELEMENT_INTERACTIONS = ELEMENT_INTERACTIONS;
window.CYCLE_PAIR_TEXTS = CYCLE_PAIR_TEXTS;
window.INNER_CLIMATE = INNER_CLIMATE;
window.DYNAMISK_TEKST = DYNAMISK_TEKST;
window.RELATION_RECOMMENDATIONS = RELATION_RECOMMENDATIONS;
window.SHARE_TEMPLATES = SHARE_TEMPLATES;
window.TO_RYTMER_SAMTALE = TO_RYTMER_SAMTALE;
window.TRE_GEN_FORBINDELSE_TEKST = TRE_GEN_FORBINDELSE_TEKST;
window.CYCLE_LABELS = CYCLE_LABELS;
window.HJAELP_TAGS = HJAELP_TAGS;
window.HJAELP_EMPATI = HJAELP_EMPATI;
window.HJAELP_KROP = HJAELP_KROP;
