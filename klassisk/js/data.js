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
    healingLyd: { title: 'Nyrelyd: Chuiii', desc: 'En lang, bl\u00f8d ud\u00e5nding med lyden "chuiii" \u2014 frig\u00f8r frygt og n\u00e6rer vandets energi.' },
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
    healingLyd: { title: 'Nyrelyd: Chuiii', desc: 'Samme vandlyd som fase 1 \u2014 styrker den grundl\u00e6ggende livskraft.' },
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
    healingLyd: { title: 'Leverlyd: Shhhhh', desc: 'En lang "shhh"-ud\u00e5nding med let \u00e5ben mund \u2014 frig\u00f8r vrede og giver plads til kreativitet.' },
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
    healingLyd: { title: 'Leverlyd: Shhhhh', desc: 'Samme befriende lyd som fase 3 \u2014 slip frustration og find retning.' },
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
    healingLyd: { title: 'Hjertelyd: Haaaa', desc: 'En \u00e5ben, varm "haaaa"-ud\u00e5nding \u2014 \u00e5bner hjertet og frig\u00f8r rastl\u00f8shed.' },
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
    introText: 'Modningens tid. Kvinden finder dybde og substans. Det der ikke l\u00e6ngere tjener hende, begynder at falde v\u00e6k. Erfaring bliver til visdom, og r\u00f8dder vokser dybere end nogensinde.',
    organPar: 'Milt og Mave', smag: 'S\u00f8d', aarstid: 'Sensommer',
    folelser: { balance: 'Omsorg, stabilitet, medf\u00f8lelse', ubalance: 'Bekymring, overt\u00e6nkning, kontrol' },
    vediskKobling: 'Vanaprastha \u2014 den reflektive overgang',
    livstemaer: ['Modning', 'Selvindsigt', 'At finde sin plads'],
    psykOpgaver: ['Acceptere det levede', 'Slippe det overfl\u00f8dige', 'Finde indre fundament'],
    kropTekst: 'Kroppens stofskifte begynder at \u00e6ndre sig. Ford\u00f8jelsen bliver vigtigere \u2014 milten og maven kr\u00e6ver mere opm\u00e6rksomhed. Hormonniveauer begynder langsomt at skifte. Kroppen taler tydeligere nu: den bel\u00f8nner god n\u00e6ring og hvile, og den protesterer mod det der ikke passer.',
    sindTekst: 'Sindet begynder den store sortering. Hvad er \u00e6gte, hvad er overtaget? Mange kvinder oplever en identitetskrise \u2014 ikke destruktiv men transformativ. Bekymring er jordens skygge, men dens gave er \u00e6gte omsorg. Der er en stille styrke i at vide hvad man vil.',
    oevelse: { title: 'Childs Pose (Yin Yoga)', desc: 'Barnets stilling n\u00e6rer milten og giver dyb tryghed. En position for tilbagevenden til det enkle.' },
    kost: { title: 'Rodfrugter og varme gryder', desc: 'Jord elsker s\u00f8dt fra naturen: s\u00f8de kartofler, gr\u00e6skar, hirse. Varm, n\u00e6rende mad.' },
    healingLyd: { title: 'Miltlyd: Huuuuu', desc: 'En dyb "huuuu" fra maven \u2014 forankrer bekymring og n\u00e6rer jordens stabilitet.' },
    refleksioner: ['Hvad har du l\u00e6rt om dig selv de sidste ti \u00e5r?', 'Hvad er du klar til at slippe?', 'Hvor finder du dit fundament, n\u00e5r alt andet vakler?'],
    elementInfo: { energi: 'Fugt, samling, stabilitet', sanseorgan: 'Mund', kropsvaev: 'Muskler', farve: 'Gul' },
    fasensRaad: [
      'Spis varmt og kogt mad \u2014 milten elsker det. Supper, gryderetter og dampede gr\u00f8ntsager n\u00e6rer dybere end r\u00e5, kold mad.',
      'Spis regelm\u00e6ssigt og p\u00e5 faste tidspunkter. Rytme er jordens sprog, og maven trives med forudsigelighed.',
      'Find dit centrum dagligt, bare fem minutter. Yoga, tai chi, meditation \u2014 eller bare st\u00e5 med bare f\u00f8dder p\u00e5 gulvet.',
      '\u00d8v dig i at sige ja tak, n\u00e5r nogen tilbyder hj\u00e6lp. Det er en praksis der kr\u00e6ver \u00f8velse.',
      'G\u00e5 ture i naturen, is\u00e6r i sensommeren \u2014 det er din \u00e5rstid nu. M\u00e6rk jorden under f\u00f8dderne.',
      'G\u00e5 i seng p\u00e5 nogenlunde samme tidspunkt hver aften. Milten elsker regelm\u00e6ssighed.',
      'D\u00e6mp ilden n\u00e5r den blusser. Hvis du m\u00e6rker rastl\u00f8shed \u2014 g\u00e5 ud, tr\u00e6k vejret, find jord under f\u00f8dderne. Ild-rester fra forrige fase kan blusse op.',
      'M\u00e6rk efter: hvad n\u00e6rer dig, hvad t\u00e6rer? Du ved det allerede et sted i kroppen, selvom hovedet ikke har indhentet det endnu.'
    ],
    kostDetaljer: {
      fodevarer: 'Rodfrugter som s\u00f8de kartofler, guler\u00f8dder, pastinak og persillerod. Korn som ris, havre og hirse. B\u00e6lgfrugter som linser og kik\u00e6rter. Gr\u00e6skar og squash. Den milde naturlige s\u00f8dme er pr\u00e6cis det milten trives med.',
      urter: 'Ingef\u00e6r varmer og st\u00f8tter ford\u00f8jelsen. Kanel og kardemomme hj\u00e6lper med at omdanne. Lakridsrod n\u00e6rer milten i moderate m\u00e6ngder. Kurkuma st\u00f8tter ford\u00f8jelsen og virker antiinflammatorisk.',
      undgaa: 'For meget r\u00e5, kold mad belaster milten. Mejeriprodukter i overdrevne m\u00e6ngder kan skabe fugt i systemet. Sent aftensmad giver maven overarbejde n\u00e5r den burde hvile. Hold maden varm, kogt og let at omdanne.'
    },
    ekstraRefleksioner: [
      'Hvad ville du \u00e6ndre, hvis du kun havde fem \u00e5r tilbage?',
      'Er der noget i dit liv der engang gav mening, men ikke g\u00f8r det l\u00e6ngere?',
      'Hvorn\u00e5r m\u00e6rkede du f\u00f8rste gang at noget var ved at skifte i dig?',
      'Hvad ville du g\u00f8re, hvis du ikke var bange for at skuffe nogen?',
      'Er den kvinde du er i dag, den kvinde du dr\u00f8mte om at blive?',
      'Hvad har du l\u00e6rt om dig selv i de sidste fem \u00e5r, som overraskede dig?',
      'Hvorn\u00e5r f\u00f8ler du dig mest som dig selv?',
      'Hvad er forskellen p\u00e5 det du vil, og det du burde?'
    ],
    overgangTekst: 'Omkring toogfyrre sender kroppen de f\u00f8rste tydelige signaler om den kommende overgang. Menstruationen \u00e6ndrer sig, der kan komme pludselige hum\u00f8rskift, og en ny f\u00f8lsomhed melder sig. Fase 7 bringer metallets klarhed \u2014 en skarpere evne til at skelne mellem det v\u00e6sentlige og det overfl\u00f8dige.',
    oevelser: [
      { type: 'krop', title: 'Bare f\u00f8dder p\u00e5 jorden', desc: 'Tag skoene af og st\u00e5 p\u00e5 gulvet eller gr\u00e6sset. Pres alle ti t\u00e6er ned, vug fra h\u00e6l til t\u00e5 og find dit stille midtpunkt. To-fem minutter. Aktiverer de dybe muskler der forbinder dig til jorden.' },
      { type: 'aandedraet', title: 'Ned i maven', desc: 'L\u00e6g begge h\u00e6nder under navlen. \u00c5nd ind i fire t\u00e6l s\u00e5 maven presses ud, hold i to, ud i seks t\u00e6l. Tilf\u00f8j miltens helbredende lyd \u201chuuu\u201d p\u00e5 ud\u00e5ndingen. Sender \u00e5ndedr\u00e6ttet derhen hvor jord-elementet bor.' },
      { type: 'meridian', title: 'Miltens meridian', desc: 'Stryg fra storet\u00e5ens yderside op ad fodens inderside, langs skinnebenet og l\u00e5rets inderside. Fem-syv gange per side. Som at samle spredt energi og bringe den hjem til centrum.' },
      { type: 'yinyoga', title: 'Sfinx', desc: 'L\u00e6g dig p\u00e5 maven og l\u00f8ft overkroppen p\u00e5 underarmene. Hofter og ben hviler tungt mod gulvet, fire-fem minutter. Stimulerer milt- og mavemeridian og giver en dyb fornemmelse af at v\u00e6re b\u00e5ret.' },
      { type: 'sind', title: 'De to cirkler', desc: 'Tegn en cirkel opdelt efter hvad der reelt fylder i dit liv. Tegn en ny cirkel efter hvad du \u00f8nsker fyldte. Forskellen er dit kompas \u2014 den viser hvor du kan begynde at justere.' }
    ],
    relationerIFasen: 'Alle relationer er i bev\u00e6gelse p\u00e5 samme tid. B\u00f8rn i Fase 2-3 presser mod gr\u00e6nser lige n\u00e5r du selv s\u00f8ger ro. For\u00e6ldre i Fase 8-9 begynder at have brug for omsorg, og rollerne bytter langsomt om. Venskaberne fordybes eller glider ud \u2014 de veninder der virkelig ser dig, bliver mere dyrebare end nogensinde.',
    udenBorn: 'Det biologiske vindue er ved at lukke, og det kan kr\u00e6ve bearbejdning uanset om fravalget var bevidst eller ej. Nogle finder fred og retter energien mod kreativitet og relationer. Andre m\u00e6rker en sorg der tr\u00e6nger til plads \u2014 den sorg er reel og beh\u00f8ver ingen retf\u00e6rdigg\u00f8relse.',
    balanceTekst: 'En kvinde i balance i denne fase har fundet en begyndende ro midt i livets fortsatte krav. Der er stadig travlhed – det er jo ikke sådan, at alt falder til ro, bare fordi du fylder femogtredive – men der er øjeblikke af tilfredshed, en fornemmelse af at vide, hvem du er, og hvad der betyder noget for dig. Beslutninger træffes med en sikkerhed, der hviler på erfaring, og kroppen er måske langsommere end i tyverne, men den er pålidelig og stærk på en anden måde.',
    ubalanceTegn: {
      fysiske: [
      'Udbrændthed – den ild-energi, du kørte på, er opbrugt, og kroppen føles tømt på en måde, der er ny',
      'Fordøjelsesproblemer, især oppustethed og en følelse af tyngde efter måltider',
      'Sukkertrang og trøstespisning – kroppen søger hurtig energi, fordi den dybe næring mangler',
      'Uregelmæssig menstruation, måske kraftigere blødninger end før',
      'Muskelsvaghed og en generel følelse af at kroppen er tungere',
      'Svagt immunforsvar – du bliver oftere forkølet end tidligere'
      ],
      mentale: [
      'En vedvarende undren, der kan ligne uro – spørgsmål uden svar, der dukker op i stille øjeblikke',
      'Følelse af utilstrækkelighed, uanset hvor meget du gør',
      'Sammenligning med andre – deres liv, deres karrierer, deres tilsyneladende perfekte hverdag',
      'Svært ved at modtage hjælp og komplimenter',
      'Mental træthed og koncentrationsbesvær, især sent på dagen'
      ],
      aarsag: 'Mange kvinder i denne fase har kørt på ild-energi i ti-femten år og påtaget sig mere, end de reelt kan bære. Det er sket så langsomt, at de knap mærkede det, før kroppen begyndte at sige fra. Uregelmæssige spisevaner, for meget sukker, for lidt søvn og for mange timer bag en skærm tærer på jord-energien. Og milten er enormt mental – den svækkes af bekymring, af den evige planlægning og af at holde styr på alle andres behov, mens ens egne står bagerst i køen.'
    },
    centralFoelelse: { title: 'Undren og Omvurdering', tekst: 'Den følelse, der definerer denne fase, er en stille undren. Den melder sig, når du en aften sidder og tænker: hvordan havnede jeg her? Den dukker op, når du ser et gammelt foto af dig selv fra tyverne og mærker en afstand til den kvinde, du var dengang. Og den gemmer sig i de øjeblikke, hvor du fanges af en pludselig længsel efter noget, du ikke helt kan sætte navn på.\n\nDet er sjældent utilfredshed. Det er mere nuanceret end det. Du kan elske dit liv og alligevel mærke, at noget mangler. Du kan være taknemmelig for det, du har, og stadig spørge: er det nok? Er det det rigtige? Kender du det – den der fornemmelse af at stå midt i et liv, der fungerer, og alligevel undre dig over, om det er dit?\n\nI den kinesiske medicin er det miltens arbejde, det her. At sortere, hvad der nærer, og hvad der bare fylder op uden at give energi. Kroppen gør det med mad – den tager det brugbare og udskiller resten. Og i denne fase begynder sindet at gøre præcis det samme med livet.\n\nJeg mærkede det selv en helt almindelig eftermiddag. Jeg havde undervist hele dagen, og på vej hjem standsede jeg pludselig bilen ved en rapsmark og blev bare siddende. Ikke fordi der var noget galt. Men fordi der var en stilhed i mig, der insisterede på at blive hørt. Og da jeg lyttede efter, sagde den noget i retning af: hvad er det egentlig, du bruger dit liv på? Ikke for andre. For dig.\n\nDer er en sårbarhed i denne undren, som mange kvinder ikke taler om. Fordi den kommer på et tidspunkt, hvor du burde have styr på det. Hvor du burde vide, hvad du vil. Hvor andre ser en kvinde med karriere og relationer og hverdag – og ikke aner, at hun om natten ligger vågen og spekulerer på, om det er det rigtige.\n\nAt tillade sig den tvivl er måske det modigste, man kan gøre. At stoppe op midt i et liv, der fungerer, og mærke efter. Det kræver mod, fordi svaret måske betyder forandring – og forandring i denne alder føles anderledes end i tyverne. Der er mere på spil, flere mennesker involveret, mere at miste.' },
    temaerNarrativer: [
      { title: 'At finde centrum', tekst: 'Vi lever i en tid, hvor det meste trækker os opad – op i hovedet, op i tankerne, op i planlægningen og bekymringerne. Milten og jord-elementet inviterer os i den modsatte retning: nedad, ind i kroppen, ned i fødderne, ned i den jord, vi står på.\n\nGrounding er et ord, der bruges meget i disse år, og det kan lyde lidt luftigt, men det er faktisk enormt konkret. Det handler om at mærke din krop. At lægge mærke til dine fødder mod gulvet. At trække vejret ned i maven i stedet for at holde det oppe i brystet. Det handler om at komme ned fra hovedet og hjem til kroppen – fordi kroppen ved ting, som hovedet endnu ikke har fanget.\n\nKender du det, at du har lavet en lang liste med ting, du skal nå, og så mærker du pludselig, at du er helt udmattet, selvom du ikke har lavet noget fysisk krævende? Det er milten, der fortæller dig, at du har brugt for meget mental energi. Og det bedste, du kan gøre, er at rejse dig, gå udenfor, mærke luften mod ansigtet og sætte fødderne i græsset. Det lyder simpelt, fordi det er simpelt. Men det virker.' },
      { title: 'Den stille evaluering', tekst: 'Omkring de femogtredive begynder mange kvinder en stille evaluering af deres liv, som kan strække sig over flere år. Det er sjældent dramatisk – der er ingen eksplosion, ingen pludselig beslutning. Det er mere som en langsom opvågning, en stigende klarhed om, hvad der fungerer, og hvad der bare er vane.\n\nParforholdet er ofte en del af den evaluering. Er vi stadig de rigtige for hinanden? Har vi vokset sammen eller fra hinanden? Ting, der før blev accepteret, kan pludselig føles uholdbare, fordi du simpelthen ikke længere har energi til at bære mønstre, der gør ondt. Der er en nyfunden klarhed i det, som kan være frigørende for begge parter – hvis I tør tale om det.\n\nKarrieren er en anden del. Du har måske brugt ti-femten år på at bygge noget op, og nu spørger du: var det det rigtige? Er det her, jeg vil hen? Eller har jeg fulgt en vej, nogen lagde for mig, uden at mærke efter, om den var min? De spørgsmål kræver mod, fordi svarene kan være ubekvemme.\n\nJeg tror, den stille evaluering er en gave, selvom den kan føles truende. Den tvinger os til at være ærlige – med os selv og med de mennesker, vi deler livet med. Og ærlighed er jo jord-elementets fundament. Når vi kan stå stille og se klart på det, der er, uden at pynte eller undskylde, så finder vi det centrum, vi leder efter.' },
      { title: 'Nok', tekst: 'Der er et ord, der fylder i denne fase, og det er "nok". Er jeg nok? Har jeg nok? Gør jeg nok? De spørgsmål kan nage, især i en kultur, der hele tiden fortæller os, at vi burde være mere, gøre mere, nå mere.\n\nI den vediske filosofi taler man om santosha – tilfredshed, eller rettere evnen til at finde fred med det, der er. Santosha handler ikke om at stoppe med at ønske sig noget. Det handler om at kunne mærke, at det, du har, er tilstrækkeligt, mens du stadig bevæger dig fremad.\n\nMange af os er vokset op med den overbevisning, at tilfredshed er det samme som stilstand. At vi skal blive ved med at presse på, optimere, forbedre. Men jord-elementet lærer os noget andet: at der er en styrke i at sige "det her er godt nok". At mæthed er en gave, og at fylde er en tilstand, man kan øve sig i at genkende, hvis man er vant til altid at lede efter det næste.' },
      { title: 'Moderskabet modnes', tekst: 'For kvinder med børn bringer denne fase et skifte i moderskabets karakter. Børnene er ikke længere helt små og afhængige – de begynder at have deres eget liv, deres egne hemmeligheder, deres egne meninger om tingene. Den lille, der engang klyngede sig til dit ben, lukker nu døren til sit værelse og vil helst være i fred.\n\nDet kan være en lettelse at slippe den konstante opmærksomhed, som småbørn kræver. Pludselig er der tid til en kop kaffe, der faktisk er varm, når du drikker den. Og samtidig kan det mærkes som et tab – tabet af at være uundværlig, af at være centrum i en lille persons univers. Begge følelser kan sagtens være der på samme tid, og det er helt menneskeligt.\n\nForholdet til børnene må genforhandles. Den autoritet, der fungerede, da de var fem, virker ikke på en tiårig. Nu gælder det mere om at lytte end at belære, mere om at vejlede end at kontrollere. Og du opdager måske, at du lærer lige så meget af dine børn, som de lærer af dig – og det er faktisk en ret ydmygende opdagelse.' },
      { title: 'Et liv uden børn i denne fase', tekst: 'For kvinder uden børn kan denne fase bringe en afklaring – eller en fornyet konfrontation med spørgsmålet. Det biologiske vindue er ved at lukke, og det kan kræve en bearbejdning, uanset om fraværet af børn var et bevidst valg eller noget, livet bragte.\n\nNogen kvinder finder fred i denne fase. Beslutningen er truffet – af dem selv eller af tiden – og der er en lettelse i at slippe usikkerheden. Nu kan energien rettes mod andre ting: kreativiteten, relationerne, de projekter, der giver livet mening på andre måder.\n\nAndre mærker en sorg, der trænger til plads. Sorgen over det barn, der aldrig kom. Den sorg er reel og behøver ingen forklaring eller retfærdiggørelse. "Du kan jo bare adoptere" eller "du har jo mere frihed" er sjældent trøstende ord, og jeg ved det, fordi jeg selv har hørt dem. Uanset din historie er denne fase en invitation til at spørge: hvad giver mit liv mening nu? Der er mange måder at være frugtbar på, og de handler slet ikke alle sammen om at føde.' },
      { title: 'At give og modtage', tekst: 'Mange kvinder har givet så meget i så mange år – til børn, til partner, til arbejde, til forældre, til veninder – at de har glemt, hvordan det føles at tage imod. Eller de har aldrig rigtig lært det, fordi de fra barndommen har fået at vide, at det er finere at give end at få.\n\nJord-elementet minder os om, at vi ikke kan give fra en tom kilde. Ligesom jorden har brug for at ligge brak ind imellem for at kunne give afgrøder igen, har vi brug for at blive fyldt op. Det er ikke egoisme – det er den måde, livet fungerer, når det skal holde over tid.\n\nLæg mærke til det næste gang, nogen tilbyder dig noget. Hvad er din første impuls? De fleste af os siger automatisk "nej tak, det behøves ikke" – og måske er det værd at øve sig i at sige ja. For at modtage er jo faktisk også en gave til den, der giver. Når du tager imod en kompliment med et simpelt "tak" i stedet for at undskylde eller nedtone, lader du den anden vide, at hendes ord betød noget.\n\nJeg har set kvinder, der ikke kunne modtage en kompliment uden straks at afvise den. "Pyh, den her gamle kjole?" "Det var nu ikke noget særligt." Som om selve det at blive set krævede en undskyldning. Det sidder dybt i os, den der fornemmelse af, at vi først er værdifulde, når vi giver. At vende den bevægelse om kan faktisk føles næsten fysisk ubehageligt i starten.' }
    ],
    denneFaseIDig: 'En kvinde i denne fase oplever ofte, at alle relationerne er i bevægelse på samme tid. Børnene, hvis du har nogen, er typisk i Fase 2 eller 3 – den udforskende alder eller teenagerårenes storme. Det kan skabe en mærkelig dynamik: lige når du selv begynder at søge ro, har du børn, der er i fuld gang med at sprænge alle rammer.\n\nDet kan hjælpe at vide, at din langsommere energi faktisk er præcis det, dine børn har brug for at presse imod. De har brug for en voksen, der holder fast, mens de eksperimenterer med at slippe. Din ro er ikke kedsommelighed – den er fundamentet, de kan lege på.\n\nDine forældre er typisk i Fase 8 eller 9, og rollerne begynder langsomt at bytte om. Du er ikke længere kun barnet, der modtager – du er også den voksne, der giver omsorg. Det sker så gradvist, at du knap mærker det, indtil du en dag indser, at det er dig, der ringer for at tjekke, om de har det godt.\n\nVenskaberne ændrer sig også. Nogle fordybes, andre glider ud. De veninder, der virkelig ser dig, bliver mere dyrebare end nogensinde. Nye venskaber kan opstå med kvinder, der er i samme fase – og der er noget helt særligt ved at sidde med en veninde, der forstår, hvad du mener, når du siger: "Jeg ved ikke, hvad der sker med mig. Alting er fint, og alligevel er der noget, der mangler."\n\nFor kvinder uden børn kan venskaberne fylde endnu mere i denne fase, og relationen til niecer, nevøer eller venners børn kan få en ny dybde. Du kan være den voksne, der har tid og overskud til bare at være til stede – og det er en gave, der rækker længere, end du måske tror.',
    aaretsRytme: 'Sensommeren er din årstid nu. Når august kommer med sin gyldne varme og sine modne frugter, mærker du måske en ro, der føles genkendelig – fordi årstiden og din livsfase taler samme sprog. Hvis du har læst De 5 Årstiders Energi, kender du allerede jord-elementets kvaliteter fra sensommerkapitlet, og du vil opdage, at de ting, der gælder for årstiden, også gælder for din livsfase, bare i en større skala.\n\nVinteren kan føles tungere i denne fase end i tyverne. Kroppen søger mere hvile, og den fortjener at blive lyttet til. Foråret bringer stadig energi, men du mærker måske, at den skal doseres anderledes – du kan ikke længere køre på i samme tempo som før, og det er helt naturligt.\n\nHvis du stadig menstruerer, kan cyklussen begynde at ændre sig i denne fase. Måske bliver den kortere eller mere uregelmæssig, og du mærker hormonelle skift, du ikke kendte før. Det er de første tegn på den større overgang, der venter i næste fase – og jo bedre du kender din krop nu, jo lettere bliver den overgang.',
    elementEssay: 'I den kinesiske medicin bevæger vi os i denne fase fra ild-elementet mod jord-elementet. Det er et skift, du kan mærke i kroppen, før du forstår det med hovedet. Den rastløse energi fra tyverne og de tidlige tredivere – den der drev dig fremad, fik dig til at tage chancer, holdt dig oppe til sent – den begynder at søge et roligere leje. Hjertet er stadig aktivt, men milten træder frem som et centralt organ, og med den kommer en anden måde at være i verden på.\n\nJord-elementet handler om omdannelse. Milten tager det, vi indtager – mad, oplevelser, indtryk – og omsætter det til næring, vi kan bruge. I denne fase begynder vi for alvor at fordøje alt det, vi har oplevet i de foregående år, og det kan tage tid. Kroppen beder om langsommere tempo, mere regelmæssighed, mere ro. Og mange kvinder opdager, at den ild-energi, de har kørt på i årevis, ikke længere er tilgængelig på samme måde – den er der stadig, men den kræver andet brændstof nu.'
  },  7: {
    introText: 'H\u00f8stens tid. Alt det levede b\u00e6rer nu frugt. Kvinden ved hvad hun vil og hvad hun ikke vil. En stille styrke vokser \u2014 ikke af ambition, men af erfaring og accept.',
    organPar: 'Milt og Mave', smag: 'S\u00f8d', aarstid: 'Sensommer',
    folelser: { balance: 'Vished, taknemmelighed, ro', ubalance: 'Tab, tomhed, bekymring for fremtiden' },
    vediskKobling: 'Vanaprastha \u2014 den modne tilbagetr\u00e6kning',
    livstemaer: ['Overgangsalder', 'H\u00f8st af livserfaring', 'Ny frihed'],
    psykOpgaver: ['Omfavne forandring', 'Transformere tab til visdom', 'Genfinde sig selv'],
    kropTekst: 'Overgangsalderen er jordens store omv\u00e6ltning. Hormonerne \u00e6ndrer sig markant \u2014 hedeture, s\u00f8vnforstyrrelser, hum\u00f8rsvingninger. Kroppen beder om at blive lyttet til. Milten og maven er n\u00f8gler til stabilitet. Den kvinde der n\u00e6rer sin jord-energi, navigerer overgangen med mere ro.',
    sindTekst: 'Sindet oplever en frihed der kan v\u00e6re b\u00e5de skr\u00e6mmende og befriende. Roller falder \u2014 mor, karrierekvinde, partner \u2014 og sp\u00f8rgsm\u00e5let melder sig: hvem er jeg, n\u00e5r rollerne er v\u00e6k? Det er et vendepunkt. De kvinder der t\u00f8r se indad, finder en visdom de ikke vidste de havde.',
    oevelse: { title: 'Reclining Twist (Yin Yoga)', desc: 'Liggende drejning der masserer indre organer og st\u00f8tter ford\u00f8jelsen.' },
    kost: { title: 'Varm hirse og gr\u00e6skar', desc: 'Miltn\u00e6rende kost. Undg\u00e5 r\u00e5, kold mad. Ingef\u00e6r, kanel, kardemomme.' },
    healingLyd: { title: 'Miltlyd: Huuuuu', desc: 'Samme jordlyd som fase 6 \u2014 rodf\u00e6ster og giver tryghed i overgangen.' },
    refleksioner: ['Hvad er du mest taknemlig for i dit liv?', 'Hvad er du klar til at slippe \u2014 og hvad holder du fast i af vane?', 'Hvis du ikke skulle leve op til nogens forventninger, hvad ville du s\u00e5 g\u00f8re?'],
    elementInfo: { energi: 'Fylde, omdannelse, begyndende klarhed', sanseorgan: 'Mund (n\u00e6sen v\u00e5gner)', kropsvaev: 'Muskler (huden begynder at \u00e6ndre sig)', farve: 'Gul (med hvide strejf)' },
    fasensRaad: [
      'Omfavn forandringen. Din krop er midt i noget stort \u2014 giv den tid og t\u00e5lmodighed.',
      'Find din stamme. Andre kvinder i samme fase forst\u00e5r, hvad du gennemg\u00e5r. Del erfaringer og lad dig st\u00f8tte.',
      'Bev\u00e6g dig. Motion hj\u00e6lper p\u00e5 n\u00e6sten alle overgangsalder-symptomer og styrker knoglerne.',
      'Priorit\u00e9r s\u00f8vn. N\u00e6tterne kan v\u00e6re urolige, s\u00e5 beskyt hvilen endnu mere bevidst.',
      'Tal om det. Overgangsalderen beh\u00f8ver ikke v\u00e6re et tabu. Jo mere vi taler, jo lettere bliver det.',
      'Tr\u00e6k vejret dybt. Lungerne begynder at spille en st\u00f8rre rolle nu, og bevidst vejrtr\u00e6kning st\u00f8tter b\u00e5de kroppen og sindet.',
      'Fejr din visdom. Du ved ting nu, som du aldrig kunne have vidst for tyve \u00e5r siden.',
      '\u00d8v dig i at slippe det, der ikke l\u00e6ngere passer. T\u00f8j, vaner, forpligtelser, forestillinger \u2014 giv det videre eller l\u00e6g det fra dig.'
    ],
    kostDetaljer: {
      fodevarer: 'Naturlig s\u00f8d smag styrker milten \u2014 gr\u00e6skar, guler\u00f8dder, s\u00f8de kartofler, kik\u00e6rter, dadler og figner. Korn som ris, havre og hirse giver langsom, stabil energi. Hvide f\u00f8devarer som blomk\u00e5l, p\u00e6rer og l\u00f8g st\u00f8tter lungerne. Fyt\u00f8strogener fra tofu, tempeh, miso og h\u00f8rfr\u00f8 kan mildne overgangssymptomerne.',
      urter: 'Salvie hj\u00e6lper mod hedeture og nattesved. R\u00f8dkl\u00f8ver indeholder fyt\u00f8strogener. Dong quai er en klassisk kinesisk urt til kvinder i overgangsalderen. Ingef\u00e6r og kanel varmer og st\u00f8tter ford\u00f8jelsen. P\u00e6rer kogt med ingef\u00e6r og honning n\u00e6rer lungerne.',
      undgaa: 'Koffein kan trigge hedeture \u2014 eksperimenter og m\u00e6rk efter. For kold og r\u00e5 mad kr\u00e6ver ekstra energi at ford\u00f8je. Lyt til kroppen, der fort\u00e6ller tydeligt, hvad den ikke l\u00e6ngere vil have.'
    },
    ekstraRefleksioner: [
      'Hvad har du h\u00f8stet i dit liv, som du er mest taknemlig for?',
      'Hvad ved du nu, som du ville \u00f8nske du vidste for tyve \u00e5r siden?',
      'Er der noget, du stadig holder fast i, som du egentlig godt ved du b\u00f8r give slip p\u00e5?',
      'Hvorn\u00e5r f\u00f8ler du den dybe ro, der kommer af at kende sig selv?',
      'Hvad er din st\u00f8rste styrke \u2014 og hvorn\u00e5r opdagede du den?',
      'Hvem har du brug for at tilgive \u2014 m\u00e5ske dig selv?',
      'Hvad ville du sige til en yngre kvinde, der st\u00e5r, hvor du stod engang?',
      'Hvad fylder mest i dig lige nu \u2014 taknemmelighed eller l\u00e6ngsel?'
    ],
    overgangTekst: 'Omkring niogfyrre er overgangsalderen for de fleste i fuld gang eller overstået. Jord-elementet giver langsomt plads til metal \u2014 fra fylde mod essens, fra samling mod klarhed. Fase 8 bringer temaer om frig\u00f8relse og tab, men ogs\u00e5 den lethed der kan komme, n\u00e5r vi giver slip p\u00e5 det der har udspillet sin rolle.',
    oevelser: [
      { type: 'krop', title: 'Langsom g\u00e5tur', desc: 'Halv\u00e9r dit tempo. M\u00e6rk hver fod der r\u00f8rer jorden \u2014 h\u00e6len, fods\u00e5len, t\u00e6erne. Ti til femten minutter regulerer nervesystemet og styrker ford\u00f8jelsen.' },
      { type: 'aandedraet', title: 'Varme i midten', desc: 'H\u00e6nderne p\u00e5 maven. \u00c5nd ind i fire t\u00e6l ned i maven, hold i to, ud i seks t\u00e6l. Forestil dig et b\u00e5l i kroppens midte. Otte til ti gentagelser.' },
      { type: 'meridian', title: 'Mavens meridian', desc: 'Stryg med begge h\u00e6nder fra brystet ned over maven, ned ad l\u00e5renes forside til f\u00f8dderne. Med tyngde og varme, fem til syv gange. Grounding i ren form.' },
      { type: 'yinyoga', title: 'Sfinksen med vrid', desc: 'L\u00e6g dig p\u00e5 maven i sfinksen. Drej langsomt overkroppen mod den ene side. To til tre minutter p\u00e5 hver side \u2014 \u00e5bner milt-meridianen og stimulerer ford\u00f8jelsen.' },
      { type: 'sind', title: 'Hvad har du h\u00f8stet?', desc: 'Skriv alt du har skabt, dyrket, l\u00e6rt og oplevet. M\u00e6rk hvor lang listen bliver. Skriv derefter tre ting du gerne vil s\u00e5 nu \u2014 fr\u00f8 til de n\u00e6ste \u00e5r.' }
    ],
    relationerIFasen: 'Kvinden st\u00e5r midt mellem generationerne med ansvar i begge retninger. B\u00f8rnene er typisk i Fase 3 eller 4, for\u00e6ldrene i Fase 8 eller 9. Parforholdet gennemg\u00e5r en pr\u00f8ve, mens kroppen \u00e6ndrer sig og rollerne skifter.',
    udenBorn: 'For kvinder uden b\u00f8rn bringer denne fase sin egen overgang \u2014 sp\u00f8rgsm\u00e5let om b\u00f8rn finder sin endelige afklaring, og sorgen kan vende tilbage med fornyet styrke. Men fasen rummer ogs\u00e5 muligheden for at integrere det hele og finde fred med den vej, livet tog.',
    balanceTekst: 'En kvinde i balance i denne fase udstråler en rolig autoritet, som er svær at definere, men let at genkende. Hun kender sin egen værdi, og andres bekræftelse fylder mindre end før. Der er en tilfredshed, der kommer indefra, og en evne til at skelne mellem det afgørende og det uvæsentlige, som kun erfaring kan give. Den skelneevne er metallets gave – den begynder at dukke op her, og den bliver stærkere med årene.\n\nFysisk viser balance sig som stabil energi og en krop, der måske bevæger sig langsommere end før, men som er pålidelig og stærk på sin egen måde. Overgangsalderens symptomer er til stede, men de føles håndterbare – ubehagelige, ja, men ikke overvældende.',
    ubalanceTegn: {
      fysiske: [
      'Overgangsalder-symptomer: hedeture, nattesved, søvnforstyrrelser – kroppens mest synlige forandring i denne fase',
      'Humørsvingninger, der føles uforudsigelige og fremmedartede',
      'Fordøjelsen arbejder tungere end før, og maven er mere følsom',
      'Huden ændrer sig – tørrere, tyndere, mindre elastisk. Det er metallets kropsvæv, og det begynder at mærkes',
      'Håret tyndes, leddene gør mere ondt om morgenen',
      'Vejrtrækningen kan føles kortere, mere overfladisk – lungernes begyndende indflydelse',
      'Vægtøgning, der samler sig anderledes end i trediverne'
      ],
      mentale: [
      'Tanker, der kredser – har jeg gjort det rigtigt? Var der en anden vej? Det er miltens overtænkning, men nu med en dybde, der rummer hele livet',
      'En følelse af at rollerne er ved at ændre sig, og at du ikke helt ved, hvem du er uden dem',
      'Sorg over ungdommens krop og de muligheder, den bar',
      'Irritabilitet og kort lunte – følelser, du ikke genkender hos dig selv',
      'Men også glimt af en ny klarhed, der skærer igennem forvirringen – øjeblikke, hvor du pludselig ved præcis, hvad der er vigtigt'
      ],
      aarsag: 'Overgangsalderen er den store udfordring i denne fase, og den påvirker alt. Hormoner svinger, søvnen forstyrres, og kroppen opfører sig på måder, der kan føles helt fremmede. Mange kvinder beskriver en følelse af at miste kontrollen over noget, de troede, de kendte – og det er en reel oplevelse, der fortjener at blive taget alvorligt.\n\nStress tærer på milten, som i forvejen arbejder hårdt med at omdanne alt det, livet har bragt. Og følelsen af at være overflødig kan ramme hårdt i denne fase. Når børnene begynder at klare sig selv, når arbejdet mister noget af sin glød, når fornemmelsen af at bidrage med noget meningsfuldt bliver uklar – det dræner jord-energien dybt. Men det skaber også rum, og det rum er metallets mulighed.'
    },
    centralFoelelse: { title: 'Overtænkning og Klarhed', tekst: 'Overtænkning er jord-elementets skygge, og den kan fylde meget i denne fase. Spørgsmålene kredser: har jeg gjort det rigtigt? Var der en anden vej, jeg burde have taget? Hvad nu? Den kinesiske medicin forbinder overtænkningen med milten – når milten er overbelastet, kører tankerne i ring uden at finde hvile.\n\nDen overtænkning er et udtryk for, at sindet prøver at fordøje noget enormt. Årtierne bag dig har været fulde af valg, kompromiser, glæder og tab. Nu, hvor tempoet langsomt daler, kommer alt det op til overfladen og beder om at blive set.\n\nMen her sker noget, der adskiller denne fase fra den forrige. Metallets begyndende indflydelse bringer en klarhed med sig, der langsomt skærer igennem grubleriet. Hvor Fase 6 handlede om at stille spørgsmål, begynder Fase 7 at bringe svar – ikke som store åbenbaringer, men som en stille viden, der sætter sig i kroppen. Du begynder at kunne skelne mellem de tanker, der fører et sted hen, og dem, der bare kører i ring. Og den skelneevne er i sig selv en form for visdom.\n\nModpolen til overtænkningen er nemlig visdom. Hele denne fase inviterer til den bevægelse – fra endeløs grublen mod en roligere viden om, hvad der virkelig betyder noget. Den viden kommer fra at have levet. Fra at have fejlet og rejst sig igen. Fra at have elsket og mistet. Den slags klogskab kan man ikke læse sig til – den kan kun modnes.\n\nJeg mærkede det selv en aften for et par år siden. Jeg sad i stolen med en kop te og tænkte på alle de valg, jeg har truffet – de rigtige og de forkerte, dem der bragte mig herhen og dem, jeg stadig spekulerer over. Og så mærkede jeg pludselig noget, der lignede fred. En fornemmelse af at alle de valg, tilsammen, har gjort mig til den, jeg er. Og at den, jeg er, er god nok. Den aften varede det kun et øjeblik. Men øjeblikket kommer oftere nu.' },
    temaerNarrativer: [
      { title: 'At høste det, der er sået', tekst: 'Denne fase inviterer til at stoppe op og se tilbage – med anerkendelse, ikke kritik. Hvad har du skabt i dit liv? Hvad har du bygget, næret, dyrket frem? Det er tid til at anerkende, at du har gjort en forskel – måske på andre måder, end du havde forestillet dig, men de er gyldige.\n\nHøsten handler om at samle ind og værdsætte. At se de relationer, du har plejet gennem årene. At se den viden og erfaring, du har samlet. For mange kvinder er dette en tid, hvor de endelig kan finde ro i det, de har opnået, i stedet for konstant at lede efter det næste.' },
      { title: 'Rollerne skifter', tekst: 'I denne fase begynder rollerne omkring dig at ændre sig på måder, der kan føles desorienterende. Børnene, hvis du har nogen, er måske ved at blive voksne. Forældrene er blevet ældre og har måske brug for mere af dig. Du står midt imellem generationerne og mærker skiftet i din egen krop.\n\nForholdet til børnene må finde en ny form. Den autoritet, du havde, da de var små, virker ikke længere – og det skal den heller ikke. Nu gælder det mere om at være til rådighed end at styre, mere om at lytte end at vejlede. Den overgang kræver ydmyghed og en vis evne til at slippe kontrollen. Metallets klarhed kan hjælpe her: den skærer igennem din angst for at miste dem og viser dig, at det at give slip på kontrollen faktisk er at give dem din tillid.\n\nOg forholdet til dine egne forældre gennemgår også en forandring. Langsomt bytter rollerne plads, og du begynder at tage dig af dem, der engang tog sig af dig. Det kan være meningsfuldt at kunne give tilbage – og det kan gøre ondt at se dem blive skrøbelige.' },
      { title: 'Fylde', tekst: 'Der er et paradoks i denne fase: du har aldrig haft mere erfaring, mere klogskab, mere overblik – og alligevel kan det føles, som om noget mangler. Måske er det her, forskellen mellem at have og at mærke bliver tydelig. Du kan have et helt liv bag dig og stadig føle dig tom, hvis du aldrig stopper op og lader det hele synke ind.\n\nYoga-filosofien kalder det aparigraha – evnen til at modtage uden at gribe, at have uden at samle. I denne fase drejer det sig måske om at skifte gear: fra at opbygge til at anerkende. Fra at lede efter det næste til at lægge mærke til det, du allerede holder i hænderne. Fylde er jo aldrig noget, man når frem til – det er noget, man opdager, at man allerede har.' }
    ],
    denneFaseIDig: 'Jeg er selv midt i denne fase, og det mærker jeg hver dag. Der er morgener, hvor jeg vågner med hedeture og en uro, jeg ikke helt kan forklare – og der er morgener, hvor jeg åbner øjnene med en ro, der er ny for mig. En stille vished om, at jeg ved, hvem jeg er. At jeg ikke behøver bevise noget for nogen. Den følelse kendte jeg ikke i trediverne, og den overrasker mig stadig.\n\nSensommeren er kommet. Markerne står tunge af korn, og træerne bugner af frugt, der er modnet langsomt gennem sommeren. Der er en fylde i luften nu, en sødme, som kun denne tid kan bringe. Det er tid til at høste – at samle ind, se sig omkring og anerkende alt det, der er vokset op i løbet af de år, der er gået.\n\nOg samtidig er kroppen i forandring på en måde, der fylder mere end forventet. Overgangsalderen banker på med sine signaler, og mange kvinder mærker de første hedeture, den uregelmæssige menstruation, humørsvingninger, der dukker op af ingenting. Det kan føles forvirrende at miste fodfæstet i sin egen krop. Men det er også begyndelsen på noget andet: en frihed fra den månedlige cyklus, der har styret kroppen i årtier.',
    aaretsRytme: 'Sensommeren er din årstid nu, men du kan allerede ane efteråret. Når august og september kommer med deres gyldne lys, mærker du en genklang – fordi årstiden og din livsfase taler samme sprog. Men de første kølige morgener, de første gule blade, lugten af jord efter regn – det taler også til dig, for metallets årstid venter lige rundt om hjørnet.\n\nForåret kan føles mere krævende nu end før – den eksplosive vækstenergi matcher ikke altid din egen rytme. Sommeren bringer stadig glæde, men du har måske brug for mere skygge og ro. Efteråret lærer dig at give slip, og den lektie bliver mere central for hvert år. Vinteren inviterer til indre arbejde, og der er en visdom i at trække sig tilbage i de mørke måneder og integrere alt det, året har bragt.\n\nPerimenopausen kan begynde i denne fase, eller den kan allerede være i fuld gang. Cyklussen, der har fulgt dig siden teenagerårene, begynder sin lange afsked. Det kan komme med overraskelser – oversvømmelser eller næsten ingenting, cyklusser der springer over, humørsvingninger du slet ikke genkender. Mærk efter: hvad forsvinder, når cyklussen går? Og hvad kommer i stedet? Mange kvinder opdager en frihed, de aldrig havde forventet.\n\nMorgenen mellem syv og elleve er miltens og mavens tid, og i denne fase er de timer kostbare. Start dagen med noget varmt og nærende. Giv dig selv tid til at lande, før du kaster dig ud i dagens krav. Eftermiddagens dyk kan føles mere markant nu – og i stedet for at kæmpe imod det, så respektér det. En kort pause, en stille kop te, et øjeblik i stilhed. Din krop arbejder hårdt, og den fortjener at blive lyttet til.',
    elementEssay: 'I den kinesiske medicin er Fase 7 jord-elementets højdepunkt, men også det sted, hvor metallets indflydelse begynder at mærkes. Tænk på det som sensommerens allersidste uger, hvor luften stadig er varm, men nætterne er blevet køligere, og der er en klarhed i lyset, der ikke var der i juli.\n\nMilten er stadig det centrale organ og arbejder nu på at omdanne livserfaringer til klogskab. En sund milt i denne fase giver evnen til at se mening i det, man har oplevet, og at finde tilfredshed med den vej, man har gået – det handler aldrig om, at vejen var perfekt, men om at den var din. Miltens opgave er at fordøje, både mad og livet selv.\n\nMen lungerne begynder også at gøre sig gældende. Metallets organ. De handler om at tage imod det rene og slippe det urene, og den bevægelse – ind og ud, modtage og frigive – bliver mere og mere central i denne fase. Mange kvinder mærker, at vejrtrækningen ændrer sig, at huden bliver tørrere, at noget begynder at skærpes og skæres til. Det er metallets begyndende arbejde.\n\nI de klassiske kinesiske tekster beskrives det, hvordan kvinders Qi begynder at aftage omkring 49-årsalderen. Det er her, den store overgang placeres. Den energi, der før gik til reproduktion, bliver frigivet til andre formål. Noget slutter, og noget nyt begynder.'
  },
  8: {
    introText: 'Frig\u00f8relsens tid. Det essentielle viser sig med klar tydelighed. Kvinden frig\u00f8r sig fra det overfl\u00f8dige \u2014 roller, forventninger, ting \u2014 og en ny lethed opst\u00e5r.',
    organPar: 'Lunger og Tyktarm', smag: 'Skarp', aarstid: 'Efter\u00e5r',
    folelser: { balance: 'Klarhed, lethed, accept', ubalance: 'Sorg, tomhed, isolation' },
    vediskKobling: 'Sannyasa \u2014 den frie fase',
    livstemaer: ['Frig\u00f8relse', 'Essens', 'Ny begyndelse'],
    psykOpgaver: ['Give slip med k\u00e6rlighed', 'Finde det essentielle', 'Definere frihed'],
    kropTekst: 'Lungerne og tyktarmen er i fokus. \u00c5ndedr\u00e6ttet bliver en n\u00f8gle \u2014 dyb vejrtr\u00e6kning n\u00e6rer kroppen og sindet. Kroppen beder om renhed: ren luft, enkel mad, gode vaner. Immunforsvaret kr\u00e6ver opm\u00e6rksomhed. Det er en tid for at rydde ud \u2014 fysisk og energetisk.',
    sindTekst: 'Sindet finder klarhed. Det overfl\u00f8dige falder som blade fra et tr\u00e6 \u2014 ikke med smerte, men med lethed. Sorg kan melde sig, men den er metallets gave: evnen til at slippe det der var, og se det der er. Mange kvinder oplever en ny skarphed og \u00e6rlighed.',
    oevelse: { title: 'Open Wings (Yin Yoga)', desc: '\u00c5bner brystkassen og lungemeridianerne. En position for at give slip og modtage luft.' },
    kost: { title: 'Hvide f\u00f8devarer og ingef\u00e6r', desc: 'Lunger elsker hvidt: p\u00e6rer, radiser, ris. Skarp smag der \u00e5bner luftvejene.' },
    healingLyd: { title: 'Lungelyd: Sssss', desc: 'En lang, kontrolleret "sssss" \u2014 frig\u00f8r sorg og \u00e5bner brystet.' },
    refleksioner: ['Hvad kan du give slip p\u00e5 med k\u00e6rlighed?', 'Hvad er det essentielle i dit liv lige nu?', 'Hvorn\u00e5r f\u00f8ler du dig mest fri?'],
    elementInfo: { energi: 'T\u00f8rhed, klarhed, udskillelse', sanseorgan: 'N\u00e6se', kropsvaev: 'Hud', farve: 'Hvid' },
    fasensRaad: [
      'Tr\u00e6k vejret bevidst. Ti dybe ind- og ud\u00e5ndinger om dagen g\u00f8r en m\u00e6rkbar forskel. Lad ud\u00e5ndingen v\u00e6re l\u00e6ngere end ind\u00e5ndingen.',
      'Ryd ud. Bogstaveligt. Skuffer, skabe, garderobe. Giv v\u00e6k det der ikke l\u00e6ngere giver dig gl\u00e6de.',
      'G\u00e5 i frisk luft hver dag. Lungerne elsker ren, kold luft, og efter\u00e5rets landskaber taler til metal-elementets sans for enkelhed.',
      'Spis befugtende mad \u2014 supper, gr\u00f8d, p\u00e6rer med honning. Lungerne har brug for fugt.',
      'Beskyt din hud. Huden h\u00f8rer til metal-elementet og kan blive tynd og f\u00f8lsom i denne fase.',
      'Giv dig selv lov til at s\u00f8rge. Sorgen er naturlig, den har brug for plads og tid.',
      'Lav vejrtr\u00e6knings\u00f8velser der underst\u00f8tter lungerne. Det er den perfekte tid til pranayama og \u00f8velser der \u00e5bner brystkassen.',
      'Pas p\u00e5 din stemme. Metal-elementet er knyttet til stemmen \u2014 sig det du har brug for at sige.',
      'Sov dybt i de tidlige timer. Lungerne regenererer kl. 03\u201305, tyktarmen er aktiv kl. 05\u201307.'
    ],
    kostDetaljer: {
      fodevarer: 'Hvide f\u00f8devarer n\u00e6rer lungerne \u2014 blomk\u00e5l, selleri, p\u00e6rer, ris og mandler. Fermenterede f\u00f8devarer som sauerkraut og kimchi st\u00f8tter tyktarmen og tarmfloraen. Supper og gr\u00f8d befugter og varmer.',
      urter: 'Skarpe krydderier i moderate m\u00e6ngder \u2014 ingef\u00e6r, hvidl\u00f8g, l\u00f8g, peberrod. Timian og salvie er klassiske lungeurter. Lakridsrod n\u00e6rer og befugter. Ingef\u00e6rte om morgenen v\u00e6kker metallets energi bl\u00f8dt.',
      undgaa: 'For meget t\u00f8r mad uden fugt belaster lungerne. M\u00e6lkeprodukter i store m\u00e6ngder kan skabe slim. Befugt indefra med supper, gr\u00f8d og p\u00e6rer, og undg\u00e5 det der udt\u00f8rrer.'
    },
    ekstraRefleksioner: [
      'Hvad holder du fast i, som ikke l\u00e6ngere tjener dig?',
      'Hvad ville der ske, hvis du gav dig selv lov til at s\u00f8rge over det du har mistet?',
      'Er der en rolle du har spillet s\u00e5 l\u00e6nge, at du har glemt hvem du er uden den?',
      'Hvad har overgangsalderen l\u00e6rt dig om din krop?',
      'Hvorn\u00e5r f\u00f8lte du sidst en lettelse ved at give noget fra dig?',
      'Hvad er tilbage, n\u00e5r du fjerner alt det andre forventer af dig?',
      'Hvad vil du gerne give videre til den n\u00e6ste generation?',
      'Er der en frihed i at blive \u00e6ldre, som du ikke havde forventet?',
      'Hvad betyder det for dig at v\u00e6re nok, pr\u00e6cis som du er?'
    ],
    overgangTekst: 'Omkring seksoghalvtreds begynder den sidste store bev\u00e6gelse. Metal-elementet har sorteret og sluppet, og nu venter vand-elementet igen \u2014 cirklen er ved at slutte sig. Fase 9 rummer visdom, overdragelse og en stilhed der minder om den allerf\u00f8rste.',
    oevelser: [
      { type: 'krop', title: '\u00c5ben brystkasse', desc: 'St\u00e5 med f\u00f8dderne i skulderbredde, fold h\u00e6nderne bag ryggen og tr\u00e6k skuldrene bl\u00f8dt tilbage. Hold i fem til ti rolige \u00e5ndedr\u00e6t, gentag tre gange.' },
      { type: 'aandedraet', title: 'Lungernes lyd', desc: '\u00c5nd ind i fire t\u00e6l, hold i to, ud i otte t\u00e6l med en bl\u00f8d \u201essss\u201d-lyd. Dobbelt s\u00e5 lang ud\u00e5nding som ind\u00e5nding. Otte til ti gentagelser.' },
      { type: 'meridian', title: 'Lungernes meridian', desc: 'Stryg fra lige under kravebenet ned ad armens yderside til tommelfingerens spids. Langsomt, med let tryk. Fem til syv gange p\u00e5 hver arm.' },
      { type: 'yinyoga', title: 'Bananen', desc: 'L\u00e6g dig p\u00e5 ryggen og flyt b\u00e5de f\u00f8dder og overkrop mod samme side, s\u00e5 kroppen danner en bananform. Tre til fem minutter p\u00e5 hver side \u2014 \u00e5bner ribbenene og giver lungerne mere plads.' },
      { type: 'sind', title: 'Det du b\u00e6rer', desc: 'Skriv alt du b\u00e6rer p\u00e5 \u2014 roller, ansvar, bekymringer, forventninger. Sp\u00f8rg ved hvert punkt: er dette mit at b\u00e6re? Har jeg valgt det, eller har det valgt mig?' }
    ],
    relationerIFasen: 'B\u00f8rnene er typisk i Fase 4 eller 5 og bygger deres egne liv. Din rolle er nu at st\u00e5 i baggrunden som den, de kan vende tilbage til. Parforholdet gennemg\u00e5r endnu en forvandling \u2014 nogle par finder ny intimitet, andre opdager at de m\u00e5 genfinde hinanden.',
    udenBorn: 'Sp\u00f8rgsm\u00e5let om b\u00f8rn finder sin endelige afklaring, og mange kvinder oplever en dyb accept og fred med den vej livet tog. At slippe handler om at l\u00f8srive sig fra andres forventninger og identiteten som \u201ekvinden uden b\u00f8rn\u201d.',
    balanceTekst: 'En kvinde i balance i denne fase har fundet en lethed, der overrasker hende selv. Der er sorg over det, der er forbi, men også en accept, der gør det muligt at være til stede i nuet. Vejrtrækningen er fri og dyb, fordøjelsen fungerer, og huden – metallets kropsvæv – har en klarhed, der afspejler det indre. Kroppen er langsommere end før, men den føles renere, enklere, mere gennemsigtig.',
    ubalanceTegn: {
      fysiske: [
      'Vejrtrækningsproblemer – hurtig, overfladisk vejrtrækning eller hoste',
      'Hyppige forkølelser og infektioner i luftvejene',
      'Tør hud, tør mund, tørst der føles uudslukkelig',
      'Hæshed og svag stemme',
      'Forstoppelse eller urolig mave',
      'Hudproblemer og øget følsomhed',
      'Ømhed i nakke og skuldre, en tendens til at falde sammen i overkroppen'
      ],
      mentale: [
      'Sorg, der sætter sig fast og farver hverdagen grå',
      'Melankoli og en vedvarende tunghed, der ikke helt vil slippe',
      'En følelse af tab – over ungdommen, over roller, over muligheder der ikke blev grebet',
      'Fastholden i gamle mønstre, ting og vaner, der har mistet deres mening',
      'Frygt for at miste dem, man holder af',
      'Mangel på livsglæde, en følelse af at farverne er dæmpede'
      ],
      aarsag: 'Uforløst sorg er nok den dybeste årsag til ubalance i denne fase. Sorg, der ikke får plads til at bevæge sig igennem kroppen, sætter sig fast i lungerne og tyktarmen – og den finder altid en vej ud, om det så er som hoste, forstoppelse, hudproblemer eller den træthed, der sidder helt ind i knoglerne.\n\nKropsholdning spiller en overraskende stor rolle. Mange af os falder sammen i skuldrene uden at mærke det – især når vi er triste. Det presser lungerne sammen og gør vejrtrækningen overfladisk, og den overfladiske vejrtrækning sender signaler til nervesystemet om, at noget er galt. En ond cirkel, der starter i kroppen og forstærker sig selv.\n\nFor lidt frisk luft og for meget tid indendørs tærer på metal-elementet. Lungerne elsker bevægelse og ren, kold luft. Og en kost, der er for tør og mangler befugtning, kan forværre de tørre symptomer, som mange kvinder oplever efter overgangsalderen.'
    },
    centralFoelelse: { title: 'Sorg og Lettelse', tekst: 'Den følelse, der bærer denne fase, er sorg. Og tæt ved sorgen, næsten gemt bag den, en lettelse, man sjældent tør indrømme. For hvordan kan man sørge over noget og samtidig føle sig fri? Hvordan kan tabet af det, man holdt af, rumme en befrielse?\n\nDet er metallets paradoks, og det er måske det mest ærlige, man kan sige om denne tid: at sorg og lettelse kan bo i samme åndedrag.\n\nSorgen kan komme i bølger. En sang i radioen, der minder om noget. En lugt af det parfume, du bar, da børnene var små. Et gammelt foto, der falder ud af en bog. Sorgen gemmer sig ofte i det helt konkrete – i sanserne, i kroppens hukommelse, i ting, man kan røre ved. Og den kan overraske ved sin styrke, selv år efter at det, man sørger over, er forbi.\n\nJeg tror, sorgen er hellig. Ikke fordi den er smuk – det er den sjældent – men fordi den er sand. At lade den bevæge sig igennem os, uden at forsøge at dæmpe den eller skynde den på vej, er måske den mest respektfulde ting, vi kan gøre for vores eget liv. Vi sørger jo over det, vi har elsket. Og det fortjener at blive æret.\n\nOg så er der den lettelse, som mange kvinder oplever, men sjældent taler om, fordi den føles forkert. Lettelsen over at menstruationen er slut. Lettelsen over at børnene klarer sig selv. Lettelsen over at de roller og forventninger, der har vejet på skuldrene i årtier, langsomt falder bort. Den lettelse er jo ingen ligegyldighed – den er et tegn på, at du har båret tungt i mange år, og at kroppen endelig kan trække vejret lidt friere.' },
    temaerNarrativer: [
      { title: 'Åndedrættet som praksis', tekst: 'Vi trækker vejret omkring tyve tusind gange om dagen, og næsten hele tiden uden at skænke det en tanke. Men åndedrættet er den eneste funktion i kroppen, der både kører automatisk og kan styres bevidst – og det gør det til et unikt redskab for selvregulering.\n\nNår vi er stressede, bliver vejrtrækningen overfladisk og sidder i den øverste del af brystkassen. Når vi bevidst trækker vejret ned i maven, sender vi et signal til nervesystemet om, at faren er drevet over. Det er så enkelt, og det er så kraftfuldt. Hele vores vejrtrækningsmuskel, diafragma, masserer organerne for hver indånding – og det er i bunden af lungerne, at den største udveksling af ilt og kuldioxid sker.\n\nI yoga-filosofien taler man om pranayama – bevidst vejrtrækning som en vej til at styre livskraften. Og ishvara pranidhana – overgivelse, tillid til at det, der skal ske, sker. Vejrtrækningen er en måde at øve den overgivelse med hver eneste udånding.' },
      { title: 'Essensen under rollerne', tekst: 'Mange kvinder opdager i denne fase, at de har defineret sig selv gennem roller: mor, hustru, leder, veninde, datter. Og når rollerne falder væk eller ændrer sig, rejser spørgsmålet sig: hvem er jeg under alt det?\n\nDet kan føles skræmmende at stille det spørgsmål, fordi svaret måske er stille. Stille og helt simpelt. Måske er svaret bare: mig. Uden titler, uden forventninger, uden alle de forestillinger om, hvem du burde være. Bare dig, som du er, med alt det, du har levet, som en del af din krop og din hukommelse.\n\nOg der er noget dybt befriende i at lade det svar være nok. At finde sin essens – det, der bliver, når alt det ydre er skrællet af – er denne fases dybeste gave. Den kinesiske medicin ville sige, at det er metallets natur: at skære igennem til det rene. Den vediske filosofi kalder det vairagya – en sund løsrivelse, der gør det muligt at elske frit.' },
      { title: 'Kroppen efter overgangsalderen', tekst: 'De hormonelle storme er overstået, og kroppen finder en ny ligevægt. Det kan faktisk mærkes som en lettelse – stabiliteten efter mange års cykliske svingninger. Mange kvinder oplever øget velvære, og den frihed, de beskriver, er reel og dokumenteret af forskning.\n\nMen kroppen beder også om opmærksomhed på en ny måde. Huden er tyndere, knoglerne kræver omsorg, og stofskiftet har fundet et andet tempo. Det, der virkede i trediverne, virker måske ikke længere, og det kan kræve tålmodighed at finde nye veje.\n\nI yoga-filosofien kalder man det ahimsa – venlighed, ikkekonflikt. At ophøre med at kæmpe imod det, kroppen er, og i stedet finde en ny kærlighed til den. Din krop har båret dig gennem et helt liv. Den fortjener din taknemmelighed.' },
      { title: 'Det tomme rum', tekst: 'For kvinder med børn bringer denne fase ofte det øjeblik, hvor huset bliver stille. Børnene er flyttet, og den rolle, der har fyldt så enormt i så mange år, ændrer sig. Du er stadig mor, men på en anden måde. Den daglige omsorg er ikke længere nødvendig, og det rum, der opstår, kan føles overvældende.\n\nDe første uger kan stilheden føles øredøvende. Men langsomt begynder du måske at høre noget i den – din egen stemme, der har ventet tålmodigt i årevis. Dine egne ønsker, der har ligget under alle andres behov. Hvad vil du fylde den plads med? Hvad har du drømt om, som der aldrig var tid til?\n\nAt tabet også rummer mulighed, er svært at rumme i starten. Begge dele er sande. Du savner larmen og de efterladte sko i entréen, og du nyder at drikke din kaffe i fred. Du kan godt sørge og nyde stilheden på samme tid – det er faktisk det sundeste, du kan gøre.' },
      { title: 'At give slip', tekst: 'At give slip er denne fases centrale tema. Vi mennesker er skabt til at holde fast – i mennesker, i ting, i roller, i forestillinger om, hvem vi er. At slippe kan føles som at miste noget af sig selv. Den vediske tradition kalder denne evne aparigraha – at modtage uden at gribe, at elske uden at eje.\n\nEfteråret lærer os, at det er naturligt og nødvendigt. Træet holder ikke fast i bladene, når det er tid. Det stoler på, at nye blade vil komme. Og i mellemtiden står det lettere.\n\nSpørgsmålet er: hvad holder du fast i, som ikke længere tjener dig? Det kan være fysiske ting, der fylder uden at give glæde. Gamle skuffelser og vrede, der kun tynger dig selv. Forestillinger om, hvordan dit liv burde se ud. At slippe drejer sig aldrig om at glemme – det handler om at stole på, at det væsentlige bliver tilbage, når det overflødige er faldet.' }
    ],
    denneFaseIDig: 'En kvinde fortalte mig engang, at hun en lørdag eftermiddag havde ryddet ud i sin garderobe og pludselig sad på gulvet og græd. Ikke over tøjet. Over alle de kvinder, hun havde været – den unge mor i de praktiske bukser, karrierekvinden i de skarpe blazere, den usikre pige i de kjoler, hun aldrig rigtig turde bære. Hun sagde: da jeg gav det hele væk, mærkede jeg for første gang, hvem der var tilbage. Og den, der var tilbage, var nok.\n\nDer er noget ved denne fase, der minder om efteråret. Bladene skifter farve – fra grønt til guld til rust – og så slipper de. Træet holder ikke fast. Det stoler på, at nye blade vil komme, og i mellemtiden står det lettere, frigjort fra det, det ikke længere har brug for.\n\nDenne fase handler om at slippe. Og det er måske den sværeste og mest befriende ting, vi kan gøre.',
    aaretsRytme: 'Efteråret er din årstid nu. Når bladene skifter farve og luften bliver skarp, kan du mærke en genkendelse – fordi årstiden og din livsfase spejler hinanden. Efterårets temaer om at slippe og gøre plads – som du måske kender fra De 5 Årstiders Energi – rummer en helt anden dybde i denne livsfase, end de gjorde, da du først mødte dem.\n\nForåret kan føles overraskende energisk i denne fase – som en påmindelse om, at der stadig er vækst i dig. Sommeren bringer varme og lethed, og mange kvinder fortæller, at de nyder den på en anden måde end før, frigjort fra det pres, de bar i de yngre år. Vinteren kalder på introspektion, og den stilhed kan nu føles som en ven snarere end en fjende.\n\nLungernes tid i organuret er kl. 03-05, og mange kvinder i denne fase oplever, at de vågner tidligt, ofte med tunge tanker. Det er metallets tid, og i stedet for at kæmpe imod kan du bruge de stille minutter til bevidst vejrtrækning – lad udåndingen bære det, du ikke længere har brug for.',
    elementEssay: 'Metal-elementet har en skarp klarhed, der kan føles ubehagelig, men som også er befriende. Det skærer igennem til det væsentlige og spørger: hvad er virkelig vigtigt her? Hvad kan jeg slippe, så det vigtige træder tydeligere frem?\n\nLungerne handler i den kinesiske medicin om mere end vejrtrækning. De handler om at tage imod det rene og slippe det urene – hver indånding er en modtagelse, hver udånding en frigørelse. Og tyktarmen arbejder sammen med lungerne om at udskille det, kroppen ikke længere har brug for. Både fysisk og følelsesmæssigt.\n\nI denne fase bevæger vi os fra jord-elementets fylde mod metallets klarhed. Fra at samle og rumme til at sortere og slippe. Den bevægelse kan gøre ondt, fordi den kræver, at vi giver slip på ting, vi har holdt fast i i årtier. Men den bærer sin egen lettelse.'
  },
  9: {
    introText: 'Visdommens tid. Vandets tilbagevenden. Cirklen sluttes \u2014 den vise kvinde b\u00e6rer alle fasers erfaring i sig. Hun flyder igen, men nu med en dybde der kun kommer af at have levet fuldt.',
    organPar: 'Nyrer og Bl\u00e6re', smag: 'Salt', aarstid: 'Vinter',
    folelser: { balance: 'Visdom, accept, dyb ro', ubalance: 'Frygt for afslutning, isolation, stivhed' },
    vediskKobling: 'Sannyasa \u2014 den vise kvinde',
    livstemaer: ['Visdom og integration', 'Arv og videregivelse', 'Tilbagevenden til essensen'],
    psykOpgaver: ['Integrere alle faser', 'Videregive erfaring', 'Finde fred med helheden'],
    kropTekst: 'Nyrerne lukker cirklen. Livskraften er roligere men dybere. Knoglerne kr\u00e6ver omsorg, leddene beder om bl\u00f8d bev\u00e6gelse. Vand-energien er nu visdomsvand \u2014 ikke barnets \u00e5bne s\u00f8, men en dyb br\u00f8nd af erfaring. Kroppen bel\u00f8nner mildhed, varme og regelm\u00e6ssighed.',
    sindTekst: 'Sindet er som en stille flod. Den vise kvinde har v\u00e6ret ild, jord og metal \u2014 og nu vender hun tilbage til vandet med alt det, hun har l\u00e6rt. Der er en frihed i at have gennemlevet det meste. Intuition og indsigt smelter sammen. Hun ser m\u00f8nstre, hun forst\u00e5r cyklusser.',
    oevelse: { title: 'Sleeping Swan (Yin Yoga)', desc: 'Dyb hofte\u00e5bner der stimulerer nyrerne. En stilling for integration og ro.' },
    kost: { title: 'Varme supper med tang og sort sesam', desc: 'Tilbage til vandets mad. Valn\u00f8dder, b\u00f8nner, varm mad der n\u00e6rer essensen.' },
    healingLyd: { title: 'Nyrelyd: Chuiii', desc: 'Cirklen sluttes med den samme lyd som begyndte \u2014 men nu med hele livets resonans.' },
    refleksioner: ['Hvad er den vigtigste ting du har l\u00e6rt om dig selv?', 'Hvad vil du videregive til de kvinder der kommer efter dig?', 'Hvis du kunne sige \u00e9n ting til din yngre jeg, hvad ville det v\u00e6re?'],
    elementInfo: { energi: 'Fra essens til kilde', sanseorgan: 'N\u00e6se \u2192 \u00f8rer', kropsvaev: 'Hud \u2192 knogler', farve: 'Hvid \u2192 sort/m\u00f8rkebl\u00e5' },
    fasensRaad: [
      'Hold dig forbundet. Isolation er farlig. Ops\u00f8g f\u00e6llesskab, plej relationer, sig ja til invitationer.',
      'Find mening. Hvad giver dig en grund til at st\u00e5 op om morgenen? Dyrk det.',
      'Bev\u00e6g dig dagligt. Langsom, blid bev\u00e6gelse \u2014 g\u00e5ture, sv\u00f8mning, tai chi \u2014 holder kroppen og sindet i gang.',
      'Del din visdom. Du har noget at give, som ingen bog kan l\u00e6re. Find dem der vil lytte.',
      'Hold dig varm. Fysisk og f\u00f8lelsesm\u00e6ssigt. Kulde t\u00e6rer p\u00e5 nyre-energien.',
      'Accept\u00e9r hj\u00e6lp. Det er styrke at tage imod, ikke svaghed.',
      'L\u00e6r stadig nyt. Hjernen elsker nye udfordringer, uanset alder.',
      'Find fred. Med livet som det blev. Med dig selv som du er.'
    ],
    kostDetaljer: {
      fodevarer: 'Varm, n\u00e6rende mad g\u00f8r en forskel: supper, gryderetter, langtidskogt mad. Sort og m\u00f8rk mad n\u00e6rer nyrerne \u2014 sorte b\u00f8nner, sorte sesamfr\u00f8, bl\u00e5b\u00e6r, bromb\u00e6r, tang og alger. Knogle-st\u00f8ttende mad som gr\u00f8nne bladgr\u00f8ntsager, sardiner, mandler og sesamfr\u00f8.',
      urter: 'Ginseng og astragalus st\u00f8tter den grundl\u00e6ggende energi. Ingef\u00e6r og kanel giver varme. Goji-b\u00e6r er klassiske nyre-n\u00e6rende b\u00e6r i den kinesiske tradition. Reishi-svamp st\u00f8tter ro og immunforsvar.',
      undgaa: 'Kold, r\u00e5 mad er sv\u00e6r at ford\u00f8je og k\u00f8ler et system der allerede har brug for varme. For meget salt kan belaste nyrerne. Store m\u00e5ltider sent p\u00e5 dagen belaster ford\u00f8jelsen \u2014 spis lettere om aftenen.'
    },
    ekstraRefleksioner: [
      'Hvis du skulle samle dit livs vigtigste l\u00e6rdom i f\u00e5 ord \u2014 hvad ville det v\u00e6re?',
      'Hvad er du mest stolt af, n\u00e5r du ser tilbage?',
      'Er der noget du fortryder, som du stadig kan g\u00f8re noget ved?',
      'Hvem har betydet mest for dig \u2014 og ved de det?',
      'Hvad vil du gerne huskes for?',
      'Hvorn\u00e5r f\u00f8ler du den dybeste fred?',
      'Hvad ville du sige til den unge kvinde du engang var?',
      'Er der en visdom du b\u00e6rer, som verden har brug for at h\u00f8re?',
      'Hvad giver dit liv mening lige nu \u2014 i denne fase, i denne alder?',
      'Hvis cirklen virkelig sluttes \u2014 hvad tager du med dig?'
    ],
    overgangTekst: 'Cirklen er ikke lukket, for livet stopper ikke med os. Det forts\u00e6tter i dem vi har formet og ber\u00f8rt \u2014 b\u00f8rn, b\u00f8rneb\u00f8rn, eller de mange andre mennesker vores liv har krydset. Vand-elementet minder os om at alt er forbundet, og den str\u00f8m af liv der flyder gennem os vil forts\u00e6tte.',
    oevelser: [
      { type: 'krop', title: 'H\u00e6ndernes varme', desc: 'Gnid h\u00e6nderne mod hinanden til de er varme. L\u00e6g dem p\u00e5 l\u00e6nden over nyrerne og lad varmen sive ind. Bliv der i et par minutter.' },
      { type: 'aandedraet', title: 'Vandets dybde', desc: '\u00c5nd ind i fire t\u00e6l helt ned i b\u00e6kkenet, hold i to, ud i seks t\u00e6l med en dyb \u201echuuu\u201d-lyd. Otte til ti gentagelser, gerne om aftenen kl. 17\u201319.' },
      { type: 'meridian', title: 'Nyrernes meridian', desc: 'Stryg med flad h\u00e5nd fra fodens underside opad langs indersiden af benet, op over kn\u00e6et og s\u00e5 langt op som det f\u00f8les naturligt. Fem til syv gange p\u00e5 hver side.' },
      { type: 'yinyoga', title: 'Barnets stilling', desc: 'Kn\u00e6l ned, s\u00e6nk hofterne mod h\u00e6lene, fold overkroppen forover med panden p\u00e5 gulvet. Fem til otte minutter. Komprimerer bl\u00f8dt nyrernes omr\u00e5de og giver dyb ro.' },
      { type: 'sind', title: 'Brevet til dig selv', desc: 'Skriv et brev til den kvinde du var i Fase 4 \u2014 den unge der stod midt i blomstringen. Hvad ville du fort\u00e6lle hende om det der venter?' }
    ],
    relationerIFasen: 'Mange relationer har forandret sig dramatisk \u2014 nogle af de vigtigste mennesker er m\u00e5ske ikke l\u00e6ngere her, mens b\u00f8rneb\u00f8rn og nye forbindelser er kommet til. Der er en s\u00e6rlig frihed i bedstefor\u00e6ldrerollen: at elske uden at skulle opdrage, og bare v\u00e6re til stede.',
    udenBorn: 'Sp\u00f8rgsm\u00e5let om arv og overdragelse kan f\u00f8les p\u00e5tr\u00e6ngende, men overdragelse rummer langt mere end biologi. Din visdom kan gives videre til niecer, nev\u00f8er, yngre kolleger og f\u00e6llesskaber \u2014 din erfaring har v\u00e6rdi, pr\u00e6cis lige s\u00e5 meget som enhver mors.',
    balanceTekst: 'En kvinde i balance i denne fase udstråler en ro, som er umiskendelig. Hun har accepteret livet, som det blev – både det lyse og det mørke – og hun bærer ikke længere på bitterhed eller fortrydelse. Den vediske tradition kalder denne tilstand shanti – en dyb fred, der bor i sig selv, uafhængigt af omstændighederne. Alle rollerne er faldet væk – mor, hustru, medarbejder, den stærke, den der holdt sammen på det hele – og det, der er tilbage, er essensen. Den hun altid har været under alle lagene.\n\nFysisk viser balance sig som en krop, der fungerer inden for sine nye rammer. Der er måske smerter og begrænsninger, men de accepteres som en del af livets gang. Søvnen er måske anderledes end før, men roen findes alligevel.',
    ubalanceTegn: {
      fysiske: [
      'Problemer med nyrer og blære – det, vi sjældent taler om, men som så mange kender til',
      'Svage knogler og led, øget risiko for knoglebrud',
      'Høretab – ørerne hører til vand-elementet i den kinesiske medicin',
      'Svimmelhed og balance-problemer',
      'Generel følelse af kulde og udmattelse',
      'Tyndere hår, tørrere hud, skørere negle'
      ],
      mentale: [
      'Frygt – for døden, for at miste sine kære, for at blive afhængig, for at miste sig selv',
      'Isolation og tilbagetrækning – at lukke sig inde, miste interessen for verden',
      'En følelse af at være overflødig eller glemt',
      'Sorg over dem, der ikke længere er her'
      ],
      aarsag: 'Forbindelse støtter denne fase mere end noget andet. Forbindelse til andre mennesker, til mening og formål, til noget større end én selv. Yoga-filosofien taler om sangha – fællesskab, det at være del af noget, der rækker ud over dig selv. Den forbindelse får mere vægt med årene, og forskning bekræfter det: social isolation er en af de største sundhedsrisici i de sene år, lige så skadelig som rygning, viser nogle studier.\n\nAt føle sig nyttig og værdsat giver energi, også nu. At have en rolle, et bidrag, en grund til at stå op om morgenen – det nærer livslysten. Det behøver ikke være store ting. At være den, børnebørnene ringer til. At være den, der husker.\n\nVarme betyder meget, både fysisk og følelsesmæssigt. Nyre-energien er kold af natur, og med alderen bliver vi mere følsomme over for kulde. Varm mad, varme relationer, varme omgivelser – det er jo ikke tilfældigt, at ældre mennesker søger mod solen.\n\nOmvendt tærer isolation og ensomhed. At være alene uden at have valgt det, at føle sig glemt, at miste forbindelsen til dem, der betyder noget – det dræner livskraften hurtigere end noget andet.'
    },
    centralFoelelse: { title: 'Visdom og Fred', tekst: 'Den følelse, der definerer denne fase, er en dyb, stille vished – en viden, der ikke længere har brug for ord. Du har levet nok til at kende livet indefra, med alle dets lag og modsætninger. Og i den viden bor en fred, der er anderledes end alle de andre former for ro, du har kendt.\n\nDet er ikke den fred, der kommer af at have løst alle problemer. Det er heller ikke resignationens ro. Det er rettere den fred, der opstår, når du holder op med at kæmpe mod livet, som det er – og i stedet lader det hvile i dine hænder, med al dets ufuldkommenhed, præcis som det blev.\n\nJeg tror, denne visdom er kroppens gave til os. Kroppen, der har båret os gennem ni faser, der har menstrueret og måske født, der har elsket og sørget og danset og været syg – den krop kender sandheder, som hovedet aldrig helt forstår. Visdommen bor i hænderne, der har holdt, i fødderne, der har gået, i hjertet, der har slået tro mod tro i alle de år.\n\nFreden rummer også plads til sorg. For visdom uden sorg er overfladisk, og fred uden smerte er tom. Det, der gør denne fases ro så dyb, er netop, at den er formet af alt det, du har gennemlevet – det ønskede og det uønskede. Det hele har plads i visdommens rum.\n\nDen fred kan komme pludseligt – en morgen, hvor du vågner og mærker, at noget har ændret sig. En aften, hvor du sidder ved vinduet og ser solen gå ned, og tænker: dette er nok. Jeg har nok. Jeg er nok. Det er en enkel erkendelse, og dog måske den største, et menneske kan nå frem til.\n\nForskning i visdom viser, at denne kvalitet faktisk kan måles og studeres. Den kendetegnes ved evnen til at se nuancer, rumme modsætninger, tænke langsigtet og handle med medfølelse. De evner fortsætter med at udvikle sig helt ind i den høje alder – vi bliver klogere, ikke dummere. Neurologisk forskning bekræfter, at hjernen bevarer sin evne til at lære og tilpasse sig livet igennem. Selv i de sene år dannes nye forbindelser, særligt når vi udfordrer os selv med nye oplevelser.' },
    temaerNarrativer: [
      { title: 'Visdom og overdragelse', tekst: 'Denne fase bærer en særlig gave: visdommen. Du har set nok af livet til at kende dets mønstre. Du har lavet fejl og lært af dem. Du har elsket og mistet, kæmpet og givet op, fundet vej og gået vild. Alt dette har formet dig til den, du er nu, og det har værdi. Den vediske tradition kalder denne akkumulerede livsindsigt jnana – visdom, der er erhvervet gennem at leve.\n\nOverdragelse er et af denne fases centrale temaer. Hvad vil du give videre? Det behøver ikke være store ting. En opskrift, der har været i familien i generationer. Historier om dem, der kom før – historier, der ellers går tabt. De værdier, du har levet efter, og de lektioner, livet har lært dig. For det, der gives videre, er sjældent det, vi planlægger – det er det, vi er. En ældre kvinde fortalte mig, at hun troede, hun havde lært sine børn om disciplin. Børnene huskede, at hun altid havde tid til at lytte.' },
      { title: 'Livets regnskab', tekst: 'I denne fase kommer de store spørgsmål, og de kan ikke længere skubbes væk. Hvad drejede mit liv sig om? Hvad betød noget? Hvad fortryder jeg, og hvad er jeg taknemmelig for? Det er naturligt at se tilbage og vurdere, og det kan være både smertefuldt og helende. Yoga-filosofien taler om santosha – tilfredshed, evnen til at finde ro i det, der er, uden at ønske det anderledes.\n\nForskning viser noget værd at vide: det er ikke vores succeser, vi husker mest, når vi ser tilbage. Det er relationerne. De mennesker, vi elskede. De øjeblikke af forbindelse. De gange, vi var der for hinanden. Karrieren og præstationerne fylder mindre, end vi troede, de ville. Hvis du kan se tilbage og sige: "Jeg elskede, og jeg blev elsket" – så er det nok. Resten er detaljer.' },
      { title: 'At møde døden', tekst: 'I denne fase bliver døden en realitet, der ikke længere kan skubbes væk. Venner og søskende begynder måske at gå bort. Ens egen død rykker tættere på bevidstheden. Det er ikke morbidt at tænke på det – det er menneskeligt.\n\nFrygten for døden er naturlig. Mange finder også, at konfrontationen med døden bringer en ny klarhed til livet. Når tiden er begrænset, bliver det tydeligere, hvad der virkelig betyder noget. Småting fylder mindre. Kærlighed fylder mere. Den kinesiske medicin ser døden som en naturlig del af livets cyklus – vandet, der vender tilbage til kilden. Yoga-filosofien taler om ishvara pranidhana – overgivelse til livet, tillid til den større strøm, vi alle er del af.\n\nEn ældre kvinde sagde engang til mig: "Jeg er ikke bange for at dø. Jeg er bange for at dø uden at have levet." Måske er det dét, denne fase handler om – at sikre sig, at man har været til stede i sit eget liv. At man har sagt det, der skulle siges. At man har elsket det, der skulle elskes.\n\nDøden har også en praktisk side, som det kan være kærligt at forholde sig til. Testamente, fuldmagter, ønsker for begravelsen – alle de ting, der kan føles ubekvemme at tale om, men som er en gave til dem, der bliver tilbage.' }
    ],
    denneFaseIDig: 'Jeg tænker ofte på min mormor. Hun var en kvinde, der aldrig sagde meget, men som fyldte et rum med sin tilstedeværelse. Der var noget ved hende – en ro, en klarhed, en vished om, hvem hun var – som jeg først forstod værdien af, da hun var borte. Hun behøvede ikke at forklare sit liv. Hun levede det bare, og det var nok.\n\nVinteren er kommet. Landskabet er stille, blåtlagt i sin enkelthed. Der er en ro over verden, en stilhed, der inviterer til at gå indad. Under overfladen samler naturen sine kræfter, og alt det, der skal blive til, venter tålmodigt på sin tid.\n\nCirklen slutter sig. Vi vender tilbage til vand-elementet, hvor vi begyndte som små børn – og nu med et helt livs erfaring i bagagen. Der er noget dybt bevægende ved den symmetri, synes jeg. At vi ender, hvor vi startede, og dog er så forandrede af alt det, der ligger imellem.\n\nDenne fase kan vare mange år, måske årtier, og den rummer sine egne kapitler og overgange. Det er jo ikke én ting at være syvoghalvtreds og en anden at være syvogfirs – og dog hører det hele til den samme store bevægelse mod stilhed og essens. Og for mange kvinder bringer den en frihed, der kan overraske: friheden fra at skulle bevise noget, friheden fra andres forventninger, friheden til bare at være – uden undskyldning, uden forklaring. Der er kvinder, der siger, at de først lærte sig selv at kende efter tres. Og der er en sandhed i det, som vi sjældent taler om.',
    aaretsRytme: 'Vinteren er din naturlige allierede i denne fase – den årstid, der spejler vand-elementets stille, indadvendte energi. Vinterens kvaliteter – stilhed, essens, forbindelse til kilden – taler nu til dig på en anden måde, end de gjorde første gang. Du har levet dem. Vinteren inviterer til ro, til refleksion, til at samle kræfter. Lad dig inspirere af naturens visdom: der er en tid for aktivitet og en tid for stilhed.\n\nForåret bringer fornyet energi, også i de sene år. Sommeren inviterer til at være ude og mødes med andre. Efteråret minder om det, vi har lært om at slippe. Og så kommer vinteren igen – år efter år, pålidelig som tidevandet. Med årene kan du mærke, at årstiderne taler tydeligere til dig end nogensinde, som om kroppen endelig har tid til at lytte til det, naturen altid har sagt.\n\nDen månedlige cyklus er for længst afsluttet, men kroppen følger stadig sine egne rytmer. Månens faser kan mærkes subtilt – mange mennesker sover anderledes omkring fuldmåne, uanset alder. Søvnmønsteret ændrer sig ofte: tidlig opvågning er almindelig, og det er måske kroppens måde at give dig de stille morgentimer, hvor tankerne kan falde til ro. Nogle kvinder finder, at timerne mellem fire og seks bliver deres mest dyrebare – en stille tid, hvor verden endnu sover.\n\nNyrerne er mest aktive kl. 17-19, og blæren kl. 15-17. Sene eftermiddage kan være en god tid for stille aktiviteter og refleksion. Faste ugentlige aftaler – en gåtur med en veninde, en telefonsamtale med et barnebarn, et besøg i svømmehallen – giver ugen en rygrad, der holder dagene fra at flyde sammen.',
    elementEssay: 'I den kinesiske medicin vender vi i denne fase tilbage til vand-elementet – det samme element, der dominerede livets allerførste fase. Cirklen er sluttet, og der er en dyb symmetri i bevægelsen fra kilde til kilde, fra vand til vand.\n\nNyrerne træder igen frem som de centrale organer. De opbevarer vores Jing – den livsessens, vi talte om helt tilbage i Fase 1. I denne fase er det naturligt, at Jing er reduceret, og det viser sig som langsommere bevægelse, skørere knogler, tyndere hår og den generelle aftagen, der følger med alderen. Det er livets gang, og der er en ydmyghed i at acceptere den.\n\nVand-elementet rummer essens og det dybeste i os. Forbindelsen til kilden – både vores egen livskilde og den større strøm af liv, vi alle er del af. Den kinesiske medicin kalder vand-elementets dybeste kvalitet zhi – viljestyrkens rod, den stille udholdenhed, der har båret dig hele vejen hertil. Det er den modne viljes vand, der finder vej uden at forcere, langsomt og tålmodigt, som en flod mod havet.'
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

const HEALING_SOUNDS = {
  'VAND': { lyd: 'Chuiii', organ: 'Nyrer', desc: 'Lad lyden vibrere dybt i l\u00e6nden. Chuiii beroer nyrerne og n\u00e6rer din grundl\u00e6ggende livsenergi.' },
  'TR\u00c6': { lyd: 'Shhhhh', organ: 'Lever', desc: 'En blid ud\u00e5nding som letter leveren. Shhhhh hj\u00e6lper med at frig\u00f8re ophobede frustrationer.' },
  'ILD': { lyd: 'Haaaa', organ: 'Hjerte', desc: '\u00c5bn munden og lad Haaaa str\u00f8mme ud. Lyden k\u00f8ler hjertet og giver indre ro.' },
  'JORD': { lyd: 'Huuuuu', organ: 'Milt', desc: 'Huuuuu masserer milten indefra. Lyden forankrer dig og styrker din evne til at ford\u00f8je \u2014 b\u00e5de mad og oplevelser.' },
  'METAL': { lyd: 'Sssss', organ: 'Lunger', desc: 'Sssss renser lungerne med en hvislende ud\u00e5nding. Giv slip p\u00e5 det der ikke l\u00e6ngere tjener dig.' }
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
window.HEALING_SOUNDS = HEALING_SOUNDS;
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
