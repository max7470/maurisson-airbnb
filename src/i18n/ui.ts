export const languages = {
  fr: 'FR',
  nl: 'NL',
  en: 'EN',
  de: 'DE',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'fr';

export const AIRBNB_URL = 'https://airbnb.be/h/maurisson';
export const AIRBNB_REVIEWS_URL = 'https://www.airbnb.be/rooms/1197119738707249806/reviews';
export const MUSIC_HUB_URL = 'https://musichub.maurisson.com';
export const GREEN_HUB_URL = 'https://greenhub.maurisson.com';
export const IDEES_URL = 'https://idees.maurisson.com';
export const SITES_URL = 'https://sites.maurisson.com';
export const MANUELS_URL = 'https://manuels.maurisson.com';
export const GITHUB_URL = 'https://github.com/max7470';

/** Repli : la valeur servie si l'API du Hub ne repond pas au build.
 *  Tenue a jour a la main, mais elle n'est plus la source — voir fetchMusicCount. */
export const MUSIC_COUNT = 2615;

/** Le vrai compteur, lu sur le Hub lui-meme.
 *
 *  Ne d'un signalement d'Olivier Anthonioz (27/08/2026) : la vitrine affichait
 *  2 334 quand le Hub en portait 2 615. Un nombre recopie a la main dans un site
 *  statique perime en silence, au rythme ou le catalogue grossit.
 *
 *  Appele au BUILD (Astro `output: static`), donc zero requete pour le visiteur
 *  et zero dependance a l'API au chargement de la page. Si le Hub ne repond pas
 *  — deploiement en cours, coupure — on retombe sur MUSIC_COUNT et le site se
 *  construit quand meme : une vitrine ne doit jamais echouer parce qu'une autre
 *  application est en train de redemarrer. */
export async function fetchMusicCount(): Promise<number> {
  try {
    const r = await fetch(`${MUSIC_HUB_URL}/api/v1/songs?limit=1`, {
      signal: AbortSignal.timeout(6000),
    });
    if (!r.ok) return MUSIC_COUNT;
    const data = (await r.json()) as { total?: number };
    return typeof data.total === 'number' && data.total > 0 ? data.total : MUSIC_COUNT;
  } catch {
    return MUSIC_COUNT;
  }
}
export const GREEN_COUNT = 47;

export const ui = {
  fr: {
    'nav.house': 'La maison',
    'nav.room': 'La chambre',
    'nav.region': 'La région',
    'nav.host': 'L\'hôte',
    'nav.reviews': 'Avis',
    'nav.book': 'Réserver',
    'nav.music': 'Music Hub',
    'nav.green': 'Green Hub',
    'nav.sites': 'Productions',
    'nav.manuels': 'Manuels',

    'hub.title.l1': 'Le',
    'hub.title.em': 'monde',
    'hub.title.l3': 'de Maurisson',
    'hub.cat.1': 'Hébergement',
    'hub.cat.2': 'Music Hub',
    'hub.cat.3': 'Productions',
    'hub.motto': 'Bienvenue dans le désordre choisi.',
    'hub.room.coords': '50°38′N · 5°48′E',
    'hub.room.eyebrow': 'Herve · Belgique',
    'hub.room.title': 'La chambre d\'hôtes',
    'hub.room.body': 'Une chambre privée, mais toute la maison. Le piano, la cuisine, le jardin, le hamac. Et un chat roux pour vous inspecter.',
    'hub.room.cta': 'Découvrir',
    'hub.room.rating': '4,91 · Coup de cœur',
    'hub.music.title': 'Music Hub',
    'hub.music.stat': 'morceaux',
    'hub.music.eyebrow': 'Le carnet de jeu',
    'hub.music.body': 'Plus de {count} morceaux avec accords, paroles synchronisées et sections. Un vrai outil derrière : piano, guitare, ukulélé, harmonica. Transposition à la volée, gammes et accords diatoniques. Mon carnet de jeu vivant — pour explorer, apprendre et monter sur scène.',
    'hub.music.feat.1.title': 'Piano popover',
    'hub.music.feat.1.sub': 'Accords & gammes visualisés',
    'hub.music.feat.2.title': 'ChordPro',
    'hub.music.feat.2.sub': 'Paroles + accords alignés',
    'hub.music.feat.3.title': 'MIDI Studio',
    'hub.music.feat.3.sub': 'Partition défilante, viz touches',
    'hub.music.feat.4.title': 'HarmonicaHub',
    'hub.music.feat.4.sub': 'Tablatures & positions',
    'hub.music.feat.5.title': 'Spotify sync',
    'hub.music.feat.5.sub': 'Playlists, sélections, export',
    'hub.music.feat.6.title': 'Grilles d\'impro',
    'hub.music.feat.6.sub': 'Progressions transposables & jouables',
    'hub.green.title': 'Green Hub',
    'hub.green.stat': 'plantes',
    'hub.green.eyebrow': 'Le jardin numérique',
    'hub.green.body': 'Le jardin numérique de la maison. {count} plantes inventoriées, chacune avec sa fiche : identification photo, besoins en eau et en lumière, période de rempotage, signes d\'alerte. Plus un calendrier d\'entretien personnalisé qui rappelle quoi faire et quand — par plante, pas une notif générique. Pour ne plus tuer ses plantes.',
    'hub.green.feat.1.title': 'PlantNet',
    'hub.green.feat.1.sub': 'Identification photo',
    'hub.green.feat.2.title': 'Fiches de soin',
    'hub.green.feat.2.sub': 'Eau, lumière, rempotage',
    'hub.green.feat.3.title': 'Calendrier perso',
    'hub.green.feat.3.sub': 'Arrosage et rempotage par plante',
    'hub.idees.title': 'Idées',
    'hub.idees.eyebrow': 'Le carnet d\'idées',
    'hub.idees.body': 'Capturer une idée à la voix ou au clavier, où qu\'on soit — puis la laisser se ranger toute seule. Un agent IA trie la boîte de réception, regroupe par projet et garde la trace de ce qui est fait. Pour ne plus jamais perdre la bonne idée qui passe.',
    'hub.idees.feat.1.title': 'Capture vocale',
    'hub.idees.feat.1.sub': 'Micro → texte, en un tap',
    'hub.idees.feat.2.title': 'Tri par IA',
    'hub.idees.feat.2.sub': 'La boîte se range toute seule',
    'hub.idees.feat.3.title': 'Par projet',
    'hub.idees.feat.3.sub': 'Regroupé, priorisé, suivi',
    'hub.sites.title': 'Productions',
    'hub.sites.stat': 'productions',
    'hub.sites.body': 'Vitrines créées pour des amis créateurs : David Natan (sculpteur), Delavega (photographe), The GUTS (rock/metal, Verviers). De vrais sites, de vrais clics.',
    'hub.manuels.title': 'Manuels',
    'hub.manuels.stat': 'guides',
    'hub.manuels.body': 'Guides imprimables que j\'écris quand un sujet mérite mieux qu\'un mode d\'emploi standard. Tout ce que je pratique assez pour vouloir le transmettre proprement.',
    'hub.visit': 'Explorer',
    'hub.footer.bio': 'Maurisson — hôte, dev, musicien, jardinier.',
    'hub.footer.copy': '© 2026 Maurisson · Herve, Belgique · Hôte Airbnb',

    'hero.eyebrow': 'Herve · Belgique',
    'hero.title.l1': 'Une chambre',
    'hero.title.l2': 'une maison',
    'hero.title.l3': 'à partager',
    'hero.sub': 'À 20 minutes de Maastricht, d\'Aix-la-Chapelle et de Spa-Francorchamps. Un piano dans le salon, un chat roux dans le jardin, et vous qui vous posez.',
    'hero.cta.primary': 'Voir les dates',
    'hero.cta.secondary': 'Découvrir',
    'hero.badge': 'Coup de cœur voyageurs',
    'hero.rating': '4,91 · 62 avis',
    'hero.reviewsWord': 'avis',

    'intro.title': 'Pas un hôtel. Pas un Airbnb anonyme.',
    'intro.body': 'Chez Maurisson, vous louez une chambre — et vous avez les clés de toute la maison. Le salon, le piano, la cuisine, la terrasse, le jardin, le hamac sous l\'arbre. Je vis ici. Vous êtes chez moi, donc vous êtes un peu chez vous.',

    'room.eyebrow': 'Votre chambre',
    'room.title': 'Au calme, en rez-de-jardin',
    'room.body': 'Chambre privée avec serrure, lit double, tête de lit en bois, literie en coton. Vous êtes seul à cet étage. Une guitare vous attend contre le mur si l\'envie monte au réveil.',
    'room.feature.1.title': 'Serrure & intimité',
    'room.feature.1.body': 'Verrou sur votre porte. Wifi dédié à votre chambre, en plus de celui du haut.',
    'room.feature.2.title': 'Lit double',
    'room.feature.2.body': 'Linge de lit en coton, tête de lit en bois massif, chevet avec lumière tamisée.',
    'room.feature.3.title': 'Rez-de-jardin',
    'room.feature.3.body': 'Étage privé pour vous. Silence garanti, petite fenêtre côté jardin.',

    'house.eyebrow': 'La maison',
    'house.title': 'Vous avez accès à tout le reste.',
    'house.body': 'Le salon et ses guitares, le piano droit devant le papier peint Orla Kiely, la cuisine équipée avec espace dédié dans le frigo, le coin repas, la machine expresso, la terrasse, le jardin, le hamac. Rien n\'est en retrait. La maison est vivante — si vous avez une envie de playlist, lancez-vous.',
    'house.tile.1': 'Salon & instruments',
    'house.tile.2': 'Piano droit',
    'house.tile.3': 'Cuisine équipée',
    'house.tile.4': 'Terrasse & BBQ',
    'house.tile.5': 'Jardin & hamac',
    'house.tile.6': 'Salle de bain moderne',

    'region.eyebrow': 'La région',
    'region.title': 'Entre trois pays.',
    'region.body': 'Herve, au cœur du Pays de Herve, entre Liège, Maastricht et Aix-la-Chapelle. Le vert belge, les collines, les fermes. Spa-Francorchamps à 20 minutes pour les passionnés, les Hautes Fagnes un peu plus loin pour ceux qui marchent. Autoroute à deux minutes, rue sans issue face à un espace vert : c\'est calme, c\'est central, c\'est un bon compromis.',
    'region.pin.1.title': 'Maastricht',
    'region.pin.1.sub': '25 min · NL',
    'region.pin.2.title': 'Aix-la-Chapelle',
    'region.pin.2.sub': '25 min · DE',
    'region.pin.3.title': 'Spa-Francorchamps',
    'region.pin.3.sub': '20 min · BE',
    'region.pin.4.title': 'Liège',
    'region.pin.4.sub': '20 min · BE',

    'host.eyebrow': 'L\'hôte',
    'host.title': 'Maxime. Et Sushi.',
    'host.body': 'Je vis sur place. Disponible si vous avez besoin de quelque chose, discret si vous préférez votre tranquillité. Je connais bien la région et je peux vous orienter vers les bons endroits pour manger, randonner ou visiter. Pas de programme imposé, pas de protocole — juste une maison ouverte. Sushi, le chat roux, viendra probablement vous inspecter. C\'est son boulot.',
    'host.sushi': 'Chat roux, social',

    'gallery.eyebrow': 'La visite',
    'gallery.title': 'Chaque pièce a son humeur.',

    'reviews.eyebrow': 'Les voyageurs',
    'reviews.title': '4,91 · 62 avis · Coup de cœur voyageurs',
    'reviews.sub': 'Ce que les gens racontent, dans leurs mots, dans leurs langues.',

    'amenities.eyebrow': 'Les détails',
    'amenities.title': 'Tout ce qu\'il faut, rien de superflu.',

    'cta.title': 'Poser ses valises ?',
    'cta.body': 'Voir les dates disponibles, les prix et réserver directement sur Airbnb.',
    'cta.button': 'Voir les disponibilités',
    'cta.email': 'Ou écrivez-moi par email',

    'footer.tagline': 'Une chambre, une maison, en Belgique.',
    'footer.made': 'Chez Maurisson · Herve, Belgique',

    'lang.switch': 'Langue',

    'meta.home.title': 'Maurisson — Le hub de Maxime, en Belgique',
    'meta.home.description': 'Maurisson, le hub de Maxime Maurisson : Music Hub, Green Hub, Productions, Idées — et une maison à Herve, entre Liège, Maastricht et Aix-la-Chapelle, où l\'on peut dormir.',
    'meta.room.title': 'La chambre — Chez Maurisson · Herve, Belgique',
    'meta.room.description': 'Chambre privée au calme, rez-de-jardin, à 20 min de Spa-Francorchamps, Maastricht et Aix-la-Chapelle. Toute la maison à partager : piano, cuisine, terrasse, jardin.',
  },
  nl: {
    'nav.house': 'Het huis',
    'nav.room': 'De kamer',
    'nav.region': 'De streek',
    'nav.host': 'De gastheer',
    'nav.reviews': 'Reviews',
    'nav.book': 'Boeken',
    'nav.music': 'Music Hub',
    'nav.green': 'Green Hub',
    'nav.sites': 'Producties',
    'nav.manuels': 'Handleidingen',

    'hub.title.l1': 'De',
    'hub.title.em': 'wereld',
    'hub.title.l3': 'van Maurisson',
    'hub.cat.1': 'Verblijf',
    'hub.cat.2': 'Music Hub',
    'hub.cat.3': 'Producties',
    'hub.motto': 'Welkom in de gekozen chaos.',
    'hub.room.coords': '50°38′N · 5°48′E',
    'hub.room.eyebrow': 'Herve · België',
    'hub.room.title': 'De gastenkamer',
    'hub.room.body': 'Eén privékamer, maar het hele huis. Piano, keuken, tuin, hangmat. En een rode kat die je komt inspecteren.',
    'hub.room.cta': 'Ontdekken',
    'hub.room.rating': '4,91 · Favoriet',
    'hub.music.title': 'Music Hub',
    'hub.music.stat': 'nummers',
    'hub.music.eyebrow': 'Het speelboek',
    'hub.music.body': 'Meer dan {count} nummers met akkoorden, gesynchroniseerde teksten en secties. Een echte tool erachter: piano, gitaar, ukelele, mondharmonica. Transponering ter plekke, toonladders en diatonische akkoorden. Mijn levende speelboek — om te verkennen, te leren en op het podium te brengen.',
    'hub.music.feat.1.title': 'Piano popover',
    'hub.music.feat.1.sub': 'Akkoorden & toonladders',
    'hub.music.feat.2.title': 'ChordPro',
    'hub.music.feat.2.sub': 'Tekst + akkoorden gealigneerd',
    'hub.music.feat.3.title': 'MIDI Studio',
    'hub.music.feat.3.sub': 'Bladmuziek & toetsen-viz',
    'hub.music.feat.4.title': 'HarmonicaHub',
    'hub.music.feat.4.sub': 'Tabs & posities',
    'hub.music.feat.5.title': 'Spotify-sync',
    'hub.music.feat.5.sub': 'Playlists, selecties, export',
    'hub.music.feat.6.title': 'Impro-grids',
    'hub.music.feat.6.sub': 'Transponeerbare progressies & speelbaar',
    'hub.green.title': 'Green Hub',
    'hub.green.stat': 'planten',
    'hub.green.eyebrow': 'De digitale tuin',
    'hub.green.body': 'De digitale tuin van het huis. {count} planten geïnventariseerd, elk met een eigen fiche: foto-identificatie, water- en lichtbehoefte, verpottingsperiode, alarmsignalen. Plus een persoonlijke onderhoudskalender die zegt wat te doen en wanneer — per plant, geen algemene melding. Om geen planten meer te verliezen.',
    'hub.green.feat.1.title': 'PlantNet',
    'hub.green.feat.1.sub': 'Foto-identificatie',
    'hub.green.feat.2.title': 'Verzorgingsfiches',
    'hub.green.feat.2.sub': 'Water, licht, verpotten',
    'hub.green.feat.3.title': 'Persoonlijke kalender',
    'hub.green.feat.3.sub': 'Gieten en verpotten per plant',
    'hub.idees.title': 'Ideeën',
    'hub.idees.eyebrow': 'Het ideeënboek',
    'hub.idees.body': 'Een idee vastleggen met de stem of het toetsenbord, waar je ook bent — en het zichzelf laten opbergen. Een AI-agent sorteert de inbox, groepeert per project en houdt bij wat af is. Om nooit meer een goed idee kwijt te raken.',
    'hub.idees.feat.1.title': 'Spraakopname',
    'hub.idees.feat.1.sub': 'Micro → tekst, in één tik',
    'hub.idees.feat.2.title': 'AI-sortering',
    'hub.idees.feat.2.sub': 'De inbox ordent zichzelf',
    'hub.idees.feat.3.title': 'Per project',
    'hub.idees.feat.3.sub': 'Gegroepeerd, geprioriteerd, gevolgd',
    'hub.sites.title': 'Producties',
    'hub.sites.stat': 'producties',
    'hub.sites.body': 'Visitekaartjes gemaakt voor bevriende makers: David Natan (beeldhouwer), Delavega (fotograaf), The GUTS (rock/metal, Verviers). Echte sites, echte klikken.',
    'hub.manuels.title': 'Handleidingen',
    'hub.manuels.stat': 'gidsen',
    'hub.manuels.body': 'Afdrukbare gidsen die ik schrijf wanneer een onderwerp beter verdient dan een standaard handleiding. Alles waarmee ik genoeg bezig ben om het netjes door te willen geven.',
    'hub.visit': 'Verkennen',
    'hub.footer.bio': 'Maurisson — gastheer, dev, muzikant, tuinier.',
    'hub.footer.copy': '© 2026 Maurisson · Herve, België · Airbnb-gastheer',

    'hero.eyebrow': 'Herve · België',
    'hero.title.l1': 'Eén kamer',
    'hero.title.l2': 'één huis',
    'hero.title.l3': 'om te delen',
    'hero.sub': 'Op 20 minuten van Maastricht, Aken en Spa-Francorchamps. Een piano in de woonkamer, een rode kat in de tuin, en jij — die er even helemaal bent.',
    'hero.cta.primary': 'Bekijk data',
    'hero.cta.secondary': 'Ontdekken',
    'hero.badge': 'Favoriet van reizigers',
    'hero.rating': '4,91 · 62 reviews',
    'hero.reviewsWord': 'reviews',

    'intro.title': 'Geen hotel. Geen anonieme Airbnb.',
    'intro.body': 'Bij Maurisson huur je een kamer — en krijg je de sleutel van het hele huis. De woonkamer, de piano, de keuken, het terras, de tuin, de hangmat onder de boom. Ik woon hier. Je bent bij mij thuis — en dus ook een beetje bij jezelf.',

    'room.eyebrow': 'Jouw kamer',
    'room.title': 'Rustig, op de benedenverdieping',
    'room.body': 'Privékamer met slot, tweepersoonsbed, houten hoofdbord, katoenen beddengoed. Je bent alleen op deze verdieping. Een gitaar leunt tegen de muur — voor wie er \'s ochtends zin in heeft.',
    'room.feature.1.title': 'Slot & privacy',
    'room.feature.1.body': 'Grendel op je deur. Eigen wifi in je kamer, plus het netwerk boven.',
    'room.feature.2.title': 'Tweepersoonsbed',
    'room.feature.2.body': 'Katoenen beddengoed, massief houten hoofdbord, nachtkastje met zacht licht.',
    'room.feature.3.title': 'Benedenverdieping',
    'room.feature.3.body': 'Eigen verdieping. Stilte gegarandeerd, raampje aan de tuinzijde.',

    'house.eyebrow': 'Het huis',
    'house.title': 'De rest mag je ook gebruiken.',
    'house.body': 'De woonkamer met gitaren, de piano voor het Orla Kiely-behang, de volledig uitgeruste keuken met jouw eigen plek in de koelkast, de eettafel, het espressoapparaat, het terras, de tuin, de hangmat. Niets is afgesloten. Het is een levend huis — als je zin hebt om een playlist aan te zetten, doe het.',
    'house.tile.1': 'Salon & instrumenten',
    'house.tile.2': 'Piano',
    'house.tile.3': 'Volledige keuken',
    'house.tile.4': 'Terras & BBQ',
    'house.tile.5': 'Tuin & hangmat',
    'house.tile.6': 'Moderne badkamer',

    'region.eyebrow': 'De streek',
    'region.title': 'Tussen drie landen.',
    'region.body': 'Herve, in het Land van Herve, tussen Luik, Maastricht en Aken. Het Belgische groen, glooiende heuvels, boerderijen. Spa-Francorchamps op 20 minuten voor de fans, de Hoge Venen iets verder voor wie wandelt. Snelweg op twee minuten, doodlopende straat tegenover een groene zone: rustig, centraal, de juiste balans.',
    'region.pin.1.title': 'Maastricht',
    'region.pin.1.sub': '25 min · NL',
    'region.pin.2.title': 'Aken',
    'region.pin.2.sub': '25 min · DE',
    'region.pin.3.title': 'Spa-Francorchamps',
    'region.pin.3.sub': '20 min · BE',
    'region.pin.4.title': 'Luik',
    'region.pin.4.sub': '20 min · BE',

    'host.eyebrow': 'De gastheer',
    'host.title': 'Maxime. En Sushi.',
    'host.body': 'Ik woon hier. Beschikbaar als je iets nodig hebt, discreet als je liever je rust hebt. Ik ken de streek goed en kan je naar de juiste plekken sturen om te eten, te wandelen of te bezoeken. Geen opgelegd programma, geen protocol — gewoon een open huis. Sushi, de rode kat, komt je waarschijnlijk inspecteren. Dat is zijn job.',
    'host.sushi': 'Rode kat, sociaal',

    'gallery.eyebrow': 'De rondleiding',
    'gallery.title': 'Elke ruimte heeft zijn sfeer.',

    'reviews.eyebrow': 'De reizigers',
    'reviews.title': '4,91 · 62 reviews · Favoriet van reizigers',
    'reviews.sub': 'Wat mensen zeggen, in hun eigen woorden, in hun eigen taal.',

    'amenities.eyebrow': 'De details',
    'amenities.title': 'Alles wat nodig is, niets overbodigs.',

    'cta.title': 'Zin om te komen?',
    'cta.body': 'Bekijk beschikbare data, prijzen en boek rechtstreeks via Airbnb.',
    'cta.button': 'Bekijk beschikbaarheid',
    'cta.email': 'Of stuur me een e-mail',

    'footer.tagline': 'Eén kamer, één huis, in België.',
    'footer.made': 'Chez Maurisson · Herve, België',

    'lang.switch': 'Taal',

    'meta.home.title': 'Maurisson — De hub van Maxime, in België',
    'meta.home.description': 'Maurisson, de hub van Maxime Maurisson: Music Hub, Green Hub, Producties, Ideeën — en een huis in Herve, tussen Luik, Maastricht en Aken, waar je kunt overnachten.',
    'meta.room.title': 'De kamer — Chez Maurisson · Herve, België',
    'meta.room.description': 'Rustige privékamer op de benedenverdieping, op 20 min van Spa-Francorchamps, Maastricht en Aken. Het hele huis te delen: piano, keuken, terras, tuin.',
  },
  en: {
    'nav.house': 'The house',
    'nav.room': 'The room',
    'nav.region': 'The region',
    'nav.host': 'The host',
    'nav.reviews': 'Reviews',
    'nav.book': 'Book',
    'nav.music': 'Music Hub',
    'nav.green': 'Green Hub',
    'nav.sites': 'Productions',
    'nav.manuels': 'Manuals',

    'hub.title.l1': 'The',
    'hub.title.em': 'world',
    'hub.title.l3': 'of Maurisson',
    'hub.cat.1': 'Lodging',
    'hub.cat.2': 'Music Hub',
    'hub.cat.3': 'Productions',
    'hub.motto': 'Welcome to the chosen chaos.',
    'hub.room.coords': '50°38′N · 5°48′E',
    'hub.room.eyebrow': 'Herve · Belgium',
    'hub.room.title': 'The guest room',
    'hub.room.body': 'A private room, but the whole house. Piano, kitchen, garden, hammock. And a ginger cat to inspect you.',
    'hub.room.cta': 'Discover',
    'hub.room.rating': '4.91 · Guest favourite',
    'hub.music.title': 'Music Hub',
    'hub.music.stat': 'tracks',
    'hub.music.eyebrow': 'The song book',
    'hub.music.body': 'Over {count} songs with chords, synced lyrics and sections. A real tool behind it: piano, guitar, ukulele, harmonica. On-the-fly transposition, scales and diatonic chords. My living song book — to explore, learn and take on stage.',
    'hub.music.feat.1.title': 'Piano popover',
    'hub.music.feat.1.sub': 'Every chord & scale, visualised',
    'hub.music.feat.2.title': 'ChordPro',
    'hub.music.feat.2.sub': 'Lyrics aligned with chords',
    'hub.music.feat.3.title': 'MIDI Studio',
    'hub.music.feat.3.sub': 'Scrolling sheet & key viz',
    'hub.music.feat.4.title': 'HarmonicaHub',
    'hub.music.feat.4.sub': 'Tabs & harp positions',
    'hub.music.feat.5.title': 'Spotify sync',
    'hub.music.feat.5.sub': 'Playlists, sets, export',
    'hub.music.feat.6.title': 'Impro grids',
    'hub.music.feat.6.sub': 'Transposable progressions, playable',
    'hub.green.title': 'Green Hub',
    'hub.green.stat': 'plants',
    'hub.green.eyebrow': 'The digital garden',
    'hub.green.body': 'The house\'s digital garden. {count} plants logged, each with its own card: photo ID, water and light needs, repotting window, warning signs. Plus a personal care schedule telling you what to do and when — per plant, not a generic reminder. So plants stop dying.',
    'hub.green.feat.1.title': 'PlantNet',
    'hub.green.feat.1.sub': 'Photo identification',
    'hub.green.feat.2.title': 'Care sheets',
    'hub.green.feat.2.sub': 'Water, light, repotting',
    'hub.green.feat.3.title': 'Personal schedule',
    'hub.green.feat.3.sub': 'Watering & repotting per plant',
    'hub.idees.title': 'Ideas',
    'hub.idees.eyebrow': 'The idea book',
    'hub.idees.body': 'Capture an idea by voice or keyboard, wherever you are — then let it file itself. An AI agent sorts the inbox, groups by project and keeps track of what\'s done. So you never lose the good idea that passes by.',
    'hub.idees.feat.1.title': 'Voice capture',
    'hub.idees.feat.1.sub': 'Mic → text, in one tap',
    'hub.idees.feat.2.title': 'AI triage',
    'hub.idees.feat.2.sub': 'The inbox sorts itself',
    'hub.idees.feat.3.title': 'By project',
    'hub.idees.feat.3.sub': 'Grouped, prioritised, tracked',
    'hub.sites.title': 'Productions',
    'hub.sites.stat': 'sites',
    'hub.sites.body': 'Showcase sites built for friends who create: David Natan (sculptor), Delavega (photographer), The GUTS (rock/metal, Verviers). Real sites, real clicks.',
    'hub.manuels.title': 'Manuals',
    'hub.manuels.stat': 'guides',
    'hub.manuels.body': 'Printable guides I write when a subject deserves better than a stock manual. Everything I practice enough to want to pass it on properly.',
    'hub.visit': 'Explore',
    'hub.footer.bio': 'Maurisson — host, dev, musician, gardener.',
    'hub.footer.copy': '© 2026 Maurisson · Herve, Belgium · Airbnb host',

    'hero.eyebrow': 'Herve · Belgium',
    'hero.title.l1': 'One room',
    'hero.title.l2': 'one house',
    'hero.title.l3': 'to share',
    'hero.sub': '20 minutes from Maastricht, Aachen and Spa-Francorchamps. A piano in the living room, a ginger cat in the garden, and you — finally somewhere else.',
    'hero.cta.primary': 'Check dates',
    'hero.cta.secondary': 'Explore',
    'hero.badge': 'Guest favourite',
    'hero.rating': '4.91 · 62 reviews',
    'hero.reviewsWord': 'reviews',

    'intro.title': 'Not a hotel. Not a faceless Airbnb.',
    'intro.body': 'At Maurisson, you rent a room — and you get the keys to the whole house. The living room, the piano, the kitchen, the terrace, the garden, the hammock under the tree. I live here. You\'re at my place, which means you\'re a little at home too.',

    'room.eyebrow': 'Your room',
    'room.title': 'Quiet, on the garden level',
    'room.body': 'Private room with lock, double bed, wooden headboard, cotton linens. You have the whole floor to yourself. A guitar leans against the wall in case the morning asks for it.',
    'room.feature.1.title': 'Lock & privacy',
    'room.feature.1.body': 'Bolt on your door. Dedicated wifi in your room, plus the upstairs network.',
    'room.feature.2.title': 'Double bed',
    'room.feature.2.body': 'Cotton bedding, solid wood headboard, bedside lamp with soft light.',
    'room.feature.3.title': 'Garden level',
    'room.feature.3.body': 'Private floor for you. Guaranteed silence, small window facing the garden.',

    'house.eyebrow': 'The house',
    'house.title': 'Everything else is yours too.',
    'house.body': 'The living room and its guitars, the upright piano against the Orla Kiely wallpaper, the fully-equipped kitchen with your own shelf in the fridge, the dining table, the espresso machine, the terrace, the garden, the hammock. Nothing is off-limits. It\'s a living house — if you feel like putting a playlist on, go ahead.',
    'house.tile.1': 'Living room & instruments',
    'house.tile.2': 'Upright piano',
    'house.tile.3': 'Full kitchen',
    'house.tile.4': 'Terrace & BBQ',
    'house.tile.5': 'Garden & hammock',
    'house.tile.6': 'Modern bathroom',

    'region.eyebrow': 'The region',
    'region.title': 'Between three countries.',
    'region.body': 'Herve, in the heart of the Pays de Herve, between Liège, Maastricht and Aachen. Belgian green, rolling hills, farmsteads. Spa-Francorchamps 20 minutes away for the gearheads, the High Fens a bit further for walkers. Highway two minutes away, dead-end street facing a green space: quiet, central, the right balance.',
    'region.pin.1.title': 'Maastricht',
    'region.pin.1.sub': '25 min · NL',
    'region.pin.2.title': 'Aachen',
    'region.pin.2.sub': '25 min · DE',
    'region.pin.3.title': 'Spa-Francorchamps',
    'region.pin.3.sub': '20 min · BE',
    'region.pin.4.title': 'Liège',
    'region.pin.4.sub': '20 min · BE',

    'host.eyebrow': 'The host',
    'host.title': 'Maxime. And Sushi.',
    'host.body': 'I live here. Available if you need something, discreet if you\'d rather be on your own. I know the region well and can point you to the right places to eat, hike or visit. No schedule imposed, no protocol — just an open house. Sushi, the ginger cat, will probably come and inspect you. That\'s his job.',
    'host.sushi': 'Ginger cat, social',

    'gallery.eyebrow': 'The tour',
    'gallery.title': 'Every room has its own mood.',

    'reviews.eyebrow': 'The guests',
    'reviews.title': '4.91 · 62 reviews · Guest favourite',
    'reviews.sub': 'What people say, in their own words, in their own languages.',

    'amenities.eyebrow': 'The details',
    'amenities.title': 'Everything needed, nothing in the way.',

    'cta.title': 'Ready to drop your bags?',
    'cta.body': 'See available dates, prices and book directly on Airbnb.',
    'cta.button': 'Check availability',
    'cta.email': 'Or drop me an email',

    'footer.tagline': 'One room, one house, in Belgium.',
    'footer.made': 'Chez Maurisson · Herve, Belgium',

    'lang.switch': 'Language',

    'meta.home.title': 'Maurisson — Maxime\'s hub, in Belgium',
    'meta.home.description': 'Maurisson, Maxime Maurisson\'s hub: Music Hub, Green Hub, Productions, Ideas — and a house in Herve, between Liège, Maastricht and Aachen, where you can stay the night.',
    'meta.room.title': 'The room — Chez Maurisson · Herve, Belgium',
    'meta.room.description': 'Quiet private room on the garden level, 20 min from Spa-Francorchamps, Maastricht and Aachen. The whole house to share: piano, kitchen, terrace, garden.',
  },
  de: {
    'nav.house': 'Das Haus',
    'nav.room': 'Das Zimmer',
    'nav.region': 'Die Region',
    'nav.host': 'Der Gastgeber',
    'nav.reviews': 'Bewertungen',
    'nav.book': 'Buchen',
    'nav.music': 'Music Hub',
    'nav.green': 'Green Hub',
    'nav.sites': 'Produktionen',
    'nav.manuels': 'Anleitungen',

    'hub.title.l1': 'Die',
    'hub.title.em': 'Welt',
    'hub.title.l3': 'von Maurisson',
    'hub.cat.1': 'Unterkunft',
    'hub.cat.2': 'Music Hub',
    'hub.cat.3': 'Produktionen',
    'hub.motto': 'Willkommen im gewählten Chaos.',
    'hub.room.coords': '50°38′N · 5°48′E',
    'hub.room.eyebrow': 'Herve · Belgien',
    'hub.room.title': 'Das Gästezimmer',
    'hub.room.body': 'Ein privates Zimmer, aber das ganze Haus. Klavier, Küche, Garten, Hängematte. Und eine rote Katze, die Sie inspiziert.',
    'hub.room.cta': 'Entdecken',
    'hub.room.rating': '4,91 · Gästeliebling',
    'hub.music.title': 'Music Hub',
    'hub.music.stat': 'Titel',
    'hub.music.eyebrow': 'Das Spielbuch',
    'hub.music.body': 'Über {count} Lieder mit Akkorden, synchronisierten Texten und Abschnitten. Ein echtes Werkzeug dahinter: Klavier, Gitarre, Ukulele, Mundharmonika. Transposition im Vorbeigehen, Tonleitern und diatonische Akkorde. Mein lebendiges Spielbuch — zum Erkunden, Lernen und auf die Bühne bringen.',
    'hub.music.feat.1.title': 'Klavier-Popover',
    'hub.music.feat.1.sub': 'Akkorde & Tonleitern sichtbar',
    'hub.music.feat.2.title': 'ChordPro',
    'hub.music.feat.2.sub': 'Text + Akkorde ausgerichtet',
    'hub.music.feat.3.title': 'MIDI-Studio',
    'hub.music.feat.3.sub': 'Laufende Partitur, Tasten-Viz',
    'hub.music.feat.4.title': 'HarmonicaHub',
    'hub.music.feat.4.sub': 'Tabs & Positionen',
    'hub.music.feat.5.title': 'Spotify-Sync',
    'hub.music.feat.5.sub': 'Playlists, Sets, Export',
    'hub.music.feat.6.title': 'Impro-Grids',
    'hub.music.feat.6.sub': 'Transponierbare Progressionen, spielbar',
    'hub.green.title': 'Green Hub',
    'hub.green.stat': 'Pflanzen',
    'hub.green.eyebrow': 'Der digitale Garten',
    'hub.green.body': 'Der digitale Garten des Hauses. {count} erfasste Pflanzen, jede mit eigener Karte: Foto-Erkennung, Wasser- und Lichtbedarf, Umtopfzeitraum, Alarmsignale. Dazu ein persönlicher Pflegekalender, der sagt, was wann zu tun ist — pro Pflanze, keine generische Erinnerung. Damit keine Pflanze mehr eingeht.',
    'hub.green.feat.1.title': 'PlantNet',
    'hub.green.feat.1.sub': 'Foto-Erkennung',
    'hub.green.feat.2.title': 'Pflegeblätter',
    'hub.green.feat.2.sub': 'Wasser, Licht, Umtopfen',
    'hub.green.feat.3.title': 'Persönlicher Kalender',
    'hub.green.feat.3.sub': 'Gießen & Umtopfen pro Pflanze',
    'hub.idees.title': 'Ideen',
    'hub.idees.eyebrow': 'Das Ideenbuch',
    'hub.idees.body': 'Eine Idee per Stimme oder Tastatur festhalten, wo immer man ist — und sie sich selbst einsortieren lassen. Ein KI-Agent sortiert den Eingang, gruppiert nach Projekt und behält im Blick, was erledigt ist. Damit keine gute Idee mehr verloren geht.',
    'hub.idees.feat.1.title': 'Sprachaufnahme',
    'hub.idees.feat.1.sub': 'Mikro → Text, mit einem Tipp',
    'hub.idees.feat.2.title': 'KI-Sortierung',
    'hub.idees.feat.2.sub': 'Der Eingang ordnet sich selbst',
    'hub.idees.feat.3.title': 'Pro Projekt',
    'hub.idees.feat.3.sub': 'Gruppiert, priorisiert, verfolgt',
    'hub.sites.title': 'Produktionen',
    'hub.sites.stat': 'Seiten',
    'hub.sites.body': 'Vitrinen für kreative Freunde: David Natan (Bildhauer), Delavega (Fotograf), The GUTS (Rock/Metal, Verviers). Echte Seiten, echte Klicks.',
    'hub.manuels.title': 'Anleitungen',
    'hub.manuels.stat': 'Anleitungen',
    'hub.manuels.body': 'Druckbare Anleitungen, die ich schreibe, wenn ein Thema mehr verdient als eine Standardanleitung. Alles, womit ich mich genug beschäftige, um es ordentlich weitergeben zu wollen.',
    'hub.visit': 'Erkunden',
    'hub.footer.bio': 'Maurisson — Gastgeber, Entwickler, Musiker, Gärtner.',
    'hub.footer.copy': '© 2026 Maurisson · Herve, Belgien · Airbnb-Gastgeber',

    'hero.eyebrow': 'Herve · Belgien',
    'hero.title.l1': 'Ein Zimmer',
    'hero.title.l2': 'ein Haus',
    'hero.title.l3': 'zum Teilen',
    'hero.sub': '20 Minuten von Maastricht, Aachen und Spa-Francorchamps entfernt. Ein Klavier im Wohnzimmer, eine rote Katze im Garten — und Sie, endlich anderswo.',
    'hero.cta.primary': 'Termine prüfen',
    'hero.cta.secondary': 'Entdecken',
    'hero.badge': 'Gästeliebling',
    'hero.rating': '4,91 · 62 Bewertungen',
    'hero.reviewsWord': 'Bewertungen',

    'intro.title': 'Kein Hotel. Kein gesichtsloses Airbnb.',
    'intro.body': 'Bei Maurisson mieten Sie ein Zimmer — und bekommen den Schlüssel zum ganzen Haus. Das Wohnzimmer, das Klavier, die Küche, die Terrasse, den Garten, die Hängematte unter dem Baum. Ich lebe hier. Sie sind bei mir zu Hause — also auch ein bisschen bei sich selbst.',

    'room.eyebrow': 'Ihr Zimmer',
    'room.title': 'Ruhig, auf Gartenebene',
    'room.body': 'Privates Zimmer mit Schloss, Doppelbett, Holzkopfteil, Baumwollwäsche. Sie haben das Stockwerk für sich. Eine Gitarre lehnt an der Wand — falls der Morgen danach fragt.',
    'room.feature.1.title': 'Schloss & Privatsphäre',
    'room.feature.1.body': 'Riegel an Ihrer Tür. Eigenes WLAN im Zimmer, plus das obere Netzwerk.',
    'room.feature.2.title': 'Doppelbett',
    'room.feature.2.body': 'Baumwollwäsche, massives Holzkopfteil, Nachttischlampe mit weichem Licht.',
    'room.feature.3.title': 'Gartenebene',
    'room.feature.3.body': 'Eigene Etage. Garantierte Ruhe, kleines Fenster zum Garten.',

    'house.eyebrow': 'Das Haus',
    'house.title': 'Der Rest gehört auch Ihnen.',
    'house.body': 'Das Wohnzimmer mit seinen Gitarren, das Klavier vor der Orla-Kiely-Tapete, die voll ausgestattete Küche mit Ihrem Fach im Kühlschrank, der Esstisch, die Espressomaschine, die Terrasse, der Garten, die Hängematte. Nichts ist abgesperrt. Es ist ein lebendiges Haus — wenn Sie Lust auf eine Playlist haben, legen Sie los.',
    'house.tile.1': 'Wohnzimmer & Instrumente',
    'house.tile.2': 'Klavier',
    'house.tile.3': 'Volle Küche',
    'house.tile.4': 'Terrasse & Grill',
    'house.tile.5': 'Garten & Hängematte',
    'house.tile.6': 'Modernes Bad',

    'region.eyebrow': 'Die Region',
    'region.title': 'Zwischen drei Ländern.',
    'region.body': 'Herve, im Herzen des Pays de Herve, zwischen Lüttich, Maastricht und Aachen. Belgisches Grün, sanfte Hügel, Bauernhöfe. Spa-Francorchamps in 20 Minuten für die Fans, die Hohen Fenne etwas weiter für Wanderer. Autobahn zwei Minuten entfernt, Sackgasse gegenüber einer Grünfläche: ruhig, zentral, die richtige Balance.',
    'region.pin.1.title': 'Maastricht',
    'region.pin.1.sub': '25 Min · NL',
    'region.pin.2.title': 'Aachen',
    'region.pin.2.sub': '25 Min · DE',
    'region.pin.3.title': 'Spa-Francorchamps',
    'region.pin.3.sub': '20 Min · BE',
    'region.pin.4.title': 'Lüttich',
    'region.pin.4.sub': '20 Min · BE',

    'host.eyebrow': 'Der Gastgeber',
    'host.title': 'Maxime. Und Sushi.',
    'host.body': 'Ich wohne hier. Verfügbar, wenn Sie etwas brauchen, diskret, wenn Sie Ihre Ruhe bevorzugen. Ich kenne die Region gut und kann Sie zu den richtigen Orten zum Essen, Wandern oder Besuchen lenken. Kein aufgezwungenes Programm, kein Protokoll — nur ein offenes Haus. Sushi, die rote Katze, wird Sie wahrscheinlich inspizieren. Das ist ihr Job.',
    'host.sushi': 'Rote Katze, sozial',

    'gallery.eyebrow': 'Der Rundgang',
    'gallery.title': 'Jeder Raum hat seine Stimmung.',

    'reviews.eyebrow': 'Die Gäste',
    'reviews.title': '4,91 · 62 Bewertungen · Gästeliebling',
    'reviews.sub': 'Was Menschen sagen, in ihren eigenen Worten, in ihrer Sprache.',

    'amenities.eyebrow': 'Die Details',
    'amenities.title': 'Alles Nötige, nichts Überflüssiges.',

    'cta.title': 'Bereit, die Koffer abzustellen?',
    'cta.body': 'Verfügbare Termine, Preise und Buchung direkt bei Airbnb.',
    'cta.button': 'Verfügbarkeit prüfen',
    'cta.email': 'Oder schreiben Sie mir per E-Mail',

    'footer.tagline': 'Ein Zimmer, ein Haus, in Belgien.',
    'footer.made': 'Chez Maurisson · Herve, Belgien',

    'lang.switch': 'Sprache',

    'meta.home.title': 'Maurisson — Maximes Hub, in Belgien',
    'meta.home.description': 'Maurisson, Maxime Maurissons Hub: Music Hub, Green Hub, Produktionen, Ideen — und ein Haus in Herve, zwischen Lüttich, Maastricht und Aachen, in dem man übernachten kann.',
    'meta.room.title': 'Das Zimmer — Chez Maurisson · Herve, Belgien',
    'meta.room.description': 'Ruhiges Privatzimmer auf Gartenebene, 20 Min von Spa-Francorchamps, Maastricht und Aachen. Das ganze Haus zum Teilen: Klavier, Küche, Terrasse, Garten.',
  },
} as const;

export type UIKey = keyof typeof ui.fr;

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function localizedPath(lang: Lang, path: string = ''): string {
  const clean = path.replace(/^\/+/, '');
  if (lang === defaultLang) return '/' + clean;
  return '/' + lang + '/' + clean;
}

export function roomUrl(lang: Lang): string {
  return lang === defaultLang ? '/room' : '/' + lang + '/room';
}

export function hubUrl(lang: Lang): string {
  return lang === defaultLang ? '/' : '/' + lang + '/';
}
