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
    relationerIFasen: 'Er du for\u00e6lder til et barn i Fase 1, er du formentlig i Fase 4 eller 5 \u2014 ild m\u00f8der vand. Kunsten er at s\u00e6nke tempoet og m\u00f8de barnet i vandets rytme. Bedstefor\u00e6ldre bringer ofte pr\u00e6cis den langsomme tid og t\u00e5lmodighed, som det lille barn har brug for.'
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
    relationerIFasen: 'Har du et barn i Fase 2, er du selv formentlig i Fase 4, 5 eller 6. Barnet har brug for opmærksomhed og interesse \u2014 selv ti minutters \u00e6gte n\u00e6rv\u00e6r er mere v\u00e6rd end en hel eftermiddag, hvor du er der men egentlig et andet sted. Barnet foretr\u00e6kker m\u00e5ske nu vennerne, og det er et tegn p\u00e5, at du har gjort dit arbejde godt.'
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
    relationerIFasen: 'Den unge er midt i en l\u00f8srivelsesproces der p\u00e5virker alle relationer. For\u00e6ldre er typisk i Fase 5, 6 eller 7 og m\u00e5ske selv begyndt at stille sp\u00f8rgsm\u00e5l til deres eget liv. For kvinder uden egne b\u00f8rn kan relationen til teenagere v\u00e6re s\u00e6rligt v\u00e6rdifuld \u2014 mange unge s\u00f8ger mod voksne der kan lytte uden dagsorden.'
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
    relationerIFasen: 'En kvinde i Fase 4 er midt i at etablere sit eget liv. Forholdet til for\u00e6ldrene finder en ny form med k\u00e6rlige men tydelige gr\u00e6nser. Venskaber forandrer sig n\u00e5r livsveje g\u00e5r i forskellige retninger, og for par der m\u00f8des nu er udfordringen at prioritere forbindelsen midt i alt det der skal bygges.'
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
    udenBorn: 'For kvinder uden b\u00f8rn har denne fase sin egen intensitet. Sp\u00f8rgsm\u00e5lene fra omgivelserne kan v\u00e6re utr\u00e6ttelige, og det er udmattende at forholde sig til andres antagelser. Ild-energien kan rette sig mod mange former for skabelse \u2014 karriere, kunst, f\u00e6llesskab. Der er mange m\u00e5der at bruge sin livskraft p\u00e5.'
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
    udenBorn: 'Det biologiske vindue er ved at lukke, og det kan kr\u00e6ve bearbejdning uanset om fravalget var bevidst eller ej. Nogle finder fred og retter energien mod kreativitet og relationer. Andre m\u00e6rker en sorg der tr\u00e6nger til plads \u2014 den sorg er reel og beh\u00f8ver ingen retf\u00e6rdigg\u00f8relse.'
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
    udenBorn: 'For kvinder uden b\u00f8rn bringer denne fase sin egen overgang \u2014 sp\u00f8rgsm\u00e5let om b\u00f8rn finder sin endelige afklaring, og sorgen kan vende tilbage med fornyet styrke. Men fasen rummer ogs\u00e5 muligheden for at integrere det hele og finde fred med den vej, livet tog.'
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
    udenBorn: 'Sp\u00f8rgsm\u00e5let om b\u00f8rn finder sin endelige afklaring, og mange kvinder oplever en dyb accept og fred med den vej livet tog. At slippe handler om at l\u00f8srive sig fra andres forventninger og identiteten som \u201ekvinden uden b\u00f8rn\u201d.'
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
    udenBorn: 'Sp\u00f8rgsm\u00e5let om arv og overdragelse kan f\u00f8les p\u00e5tr\u00e6ngende, men overdragelse rummer langt mere end biologi. Din visdom kan gives videre til niecer, nev\u00f8er, yngre kolleger og f\u00e6llesskaber \u2014 din erfaring har v\u00e6rdi, pr\u00e6cis lige s\u00e5 meget som enhver mors.'
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
