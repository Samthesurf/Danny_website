export interface ProgramStat {
  num: string
  label: string
}

export interface Person {
  name: string
  role: string
}

export interface PeopleSection {
  eyebrow: string
  heading: string
  people: Person[]
}

export interface Program {
  slug: string
  id: string
  tag: string
  title: string
  blurb: string
  /** Pill status styling. */
  status: 'done' | 'upcoming'
  statusLabel: string
  location: string
  focus: string
  /** Hero/feature image for the program card and story page. */
  image?: string
  /** Optional campaign logo (e.g. Earth Summit, ABUADMUN). */
  logo?: string
  storyHeadline: string
  story: string[]
  stats: ProgramStat[]
  tags: string[]
  featureLink?: { url: string; label: string }
  people?: PeopleSection
  prevSlug?: string
  nextSlug?: string
}

const prevProgram = (slugs: string[], slug: string) => {
  const i = slugs.indexOf(slug)
  return i > 0 ? slugs[i - 1] : undefined
}
const nextProgram = (slugs: string[], slug: string) => {
  const i = slugs.indexOf(slug)
  return i >= 0 && i < slugs.length - 1 ? slugs[i + 1] : undefined
}

/** Oldest-to-newest order used for the prev/next strip at the bottom of program pages. */
const storyOrder = [
  'ocean-conservation',
  'youth-vs-climate-change',
  'hydrogen-horizons',
  'earth-summit',
  'abuadmun',
]

const programsBase: Program[] = [
  {
    slug: 'abuadmun',
    id: 'abuadmun',
    tag: '2026 · Upcoming',
    title: 'ABUADMUN Founding Partnership',
    blurb:
      "DACTION's first institutional funding partnership, backing a new Model United Nations association at Daniel's alma mater with a multi-year commitment.",
    status: 'upcoming',
    statusLabel: 'Upcoming, November 2026',
    location: 'Afe Babalola University, Ado-Ekiti',
    focus: 'Youth diplomacy & institutional partnership',
    logo: '/assets/logos/abuadmun.png',
    storyHeadline: "Backing the first Model UN at Daniel's own university.",
    story: [
      'In his final undergraduate semester, Daniel worked with the administration at Afe Babalola University to secure formal approval for ABUADMUN, the university\u2019s first Model United Nations association. A Model UN simulates the structure and debate of the real United Nations, giving students practice in diplomacy, negotiation, public speaking, and policy writing.',
      'DACTION stepped in as a founding funding partner, committing multi-year support to help the association get on its feet: covering early costs, and standing behind it as it plans its inaugural conference for November 2026 at Alfa Belgore Hall on the ABUAD campus, expecting around 200 student delegates and staff.',
      "It's DACTION's first partnership of this kind: supporting an institution rather than running a campaign directly, and a sign of the organization's work extending into new kinds of youth leadership beyond environmental programming.",
    ],
    stats: [
      { num: '200', label: 'delegates expected' },
      { num: '2', label: 'days of conference programming' },
    ],
    tags: ['Multi-year funding commitment', 'Aligned with SDG 4 and SDG 16'],
  },
  {
    slug: 'earth-summit',
    id: 'earth-summit',
    tag: '2026 · Upcoming',
    title: 'DACTION Earth Summit',
    blurb:
      'A full-day summit on soil health, composting, and sustainable food systems at a Nigerian university, co-facilitated with informal youth waste workers.',
    status: 'upcoming',
    statusLabel: 'Upcoming, September 2026',
    location: 'Federal University of Technology Akure (FUTA), Ondo State',
    focus: 'Soil health, composting, sustainable food systems',
    logo: '/assets/logos/earth-summit.png',
    storyHeadline: 'Turning everyday waste into a solution communities can use.',
    story: [
      'Across Akure, homes, markets, and university dining halls generate large volumes of organic waste every day, while nearby farming communities struggle with declining soil fertility from erosion and nutrient loss. The two problems are directly connected: waste that could restore soil is instead treated as trash.',
      'The Earth Summit brings roughly 100 students and young people together for a full day of learning and hands on demonstration rather than a standard lecture format: sessions on soil health and food systems, a community dialogue panel, live composting and urban gardening demonstrations, and small group work where participants commit to one practical action they\u2019ll take within a month.',
      "A defining feature of the Summit is who's in the room. Alongside students, informal youth waste workers from the Akure community join as co-facilitators, sharing hands on experience managing organic waste that most academic settings never make space for. It's a deliberate attempt to put community knowledge and classroom knowledge on equal footing.",
    ],
    stats: [
      { num: '100', label: 'students and youth targeted' },
      { num: '40', label: 'participants aimed to start home composting within a month' },
    ],
    tags: [
      'Funded by Captain Planet Foundation',
      'Community co-facilitation with youth waste workers',
    ],
    people: {
      eyebrow: 'Event team',
      heading: "Who's running the Summit",
      people: [
        { name: 'Daniel Olajuyigbe', role: 'Summit Host' },
        { name: 'Ayokunle Durojaiye', role: 'Operations' },
        { name: 'Anenechukwu Saintchristopher', role: 'Media' },
        { name: 'Ebenezer Tomoye', role: 'Documentation' },
        { name: 'Faith Melodi', role: 'Photography' },
        { name: 'David Olajuyigbe', role: 'Registration' },
        { name: 'Leramo Oluwadunsin', role: 'Emcee' },
        { name: 'John Kolade', role: 'Technical Support' },
      ],
    },
  },
  {
    slug: 'hydrogen-horizons',
    id: 'hydrogen-horizons',
    tag: '2025 · Completed',
    title: 'FIRE Meetup: Hydrogen Horizons',
    blurb:
      "A hybrid energy dialogue on hydrogen's role in the energy transition, connecting an NNPC executive and researchers from three countries with Nigerian students.",
    status: 'done',
    statusLabel: 'Completed, September 2025',
    location: 'Lekki, Lagos (hybrid, in person and online)',
    focus: 'Clean energy, hydrogen, career pathways',
    image: '/assets/img/hydrogen-horizons/hydrogen-01.jpg',
    storyHeadline:
      'Where does a conventional engineering career fit in a cleaner energy future?',
    story: [
      'Most conversations young Nigerians have about energy fall into two camps: nostalgia for the oil and gas industry that built so many careers, or abstract talk about renewables with little connection to how people actually build a working life in the field. Hydrogen Horizons was built to sit between those two conversations.',
      "Held as a hybrid event, in person at Elomaz Hotels in Lekki in the afternoon and online in the evening, the meetup paired a Nigerian oil and gas executive's hard earned lessons with international researchers working directly on hydrogen and clean energy systems. Students and early career engineers heard directly from people who'd built careers on both sides of the transition, then worked through a documentary screening and open discussion on hydrogen's realistic place in Nigeria's energy future.",
      'The session closed with participants making personal pledges: pursuing renewable energy research, applying to postgraduate programmes in the field, or simply carrying sustainability into whatever engineering path they choose next.',
    ],
    stats: [
      { num: '2', label: 'sessions, physical and online' },
      { num: '3', label: 'countries represented on the panel' },
    ],
    tags: ['Funded by Captain Planet Foundation', 'Hosted under the Planeteer Alliance'],
    people: {
      eyebrow: 'Speakers',
      heading: 'Who joined the conversation',
      people: [
        { name: 'Daniel Olajuyigbe', role: 'Founder, DACTION Initiative' },
        {
          name: 'Dr. Johnson Olajuyigbe',
          role: 'Executive, Nigerian National Petroleum Company (Nigeria)',
        },
        { name: 'Tolu Fanibuyan', role: 'Co-Founder, JEAY Healthcare (Nigeria)' },
        {
          name: 'Kenneth Okosun',
          role: 'Energy Systems Analyst & Geoscientist, Forschungszentrum Julich (Germany)',
        },
        { name: 'Senakeesha Nwachukwu', role: 'Clean Energy Advocate' },
        {
          name: 'Oghenekevwe Oghenechovwen',
          role: 'Climate Scientist & Researcher, York University (Canada)',
        },
      ],
    },
  },
  {
    slug: 'youth-vs-climate-change',
    id: 'youth-vs-climate-change',
    tag: '2024 · Completed',
    title: 'Youth vs. Climate Change',
    blurb:
      'Five beach cleanups, a 20-tree reforestation planting, and a public artivism event across Lekki and Ajah, Lagos.',
    status: 'done',
    statusLabel: 'Completed, 2024',
    location: 'Lekki & Ajah, Lagos State',
    focus: 'Coastal cleanups, reforestation, artivism',
    image: '/assets/img/youth-vs-climate-change/youth-01.jpg',
    storyHeadline: "Nigeria's beaches carry a problem most visitors walk past.",
    story: [
      "Lagos has some of Nigeria's most visited coastline, and also some of its most littered. Single-use plastic bottles, bags, wrappers, and cigarette butts collect freely on beaches with no real system for managing them, while most visitors and beach owners alike have little sense of the harm it causes.",
      'Youth vs. Climate Change tackled that gap directly: cleanups across five popular beaches in the Lekki area, engaging beach owners and visitors in the process rather than working around them. Alongside the cleanups, DACTION planted trees at a public secondary school in Lekki to address local deforestation, doubling its original planting target.',
      'The campaign closed with a public artivism and awareness event at Kids Beach Garden, where participants worked through pottery and eco-friendly painting activities designed to make sustainability tangible rather than theoretical, alongside talks connecting climate change to everyday choices.',
    ],
    stats: [
      { num: '5', label: 'beaches cleaned' },
      { num: '20', label: 'trees planted' },
      { num: '21', label: 'artivism event participants' },
    ],
    tags: ['Funded by Captain Planet Foundation', 'Delivery support: RESWAYE'],
    featureLink: {
      url: 'https://captainplanetfoundation.org/youth-vs-climate-change-in-lekki-lagos-nigeria/',
      label: 'Read the published feature on the Captain Planet Foundation site',
    },
    people: {
      eyebrow: 'Campaign team',
      heading: 'Who ran the campaign',
      people: [
        { name: 'Daniel Olajuyigbe', role: 'Team Lead' },
        { name: 'Oluwanifemi Olajuyigbe', role: 'Team member' },
        { name: 'Alice Okpafi', role: 'Team member' },
        { name: 'Testimony Adeyemi', role: 'Team member' },
        { name: 'Saint-Christopher Annenechukwu', role: 'Team member' },
      ],
    },
  },
  {
    slug: 'ocean-conservation',
    id: 'ocean-conservation',
    tag: '2022 · Completed',
    title: 'Ocean Conservation from the Classroom',
    blurb:
      "DACTION's first campaign: ocean conservation education, donated recycling bins, and a student artivism competition across five schools in Akure.",
    status: 'done',
    statusLabel: 'Completed, 2022',
    location: 'Akure, Ondo State',
    focus: 'Ocean conservation education, school recycling',
    image: '/assets/img/ocean-conservation/ocean-01.jpg',
    storyHeadline: 'Nine out of ten schools had never had a recycling bin.',
    story: [
      "This was DACTION's first campaign, and its first real proof that a small, youth-led team could plan and deliver something real. Pre-campaign research found that most secondary schools in Ondo State had no history of recycling at all, and most of the wider public had little concern for ocean conservation to begin with.",
      'Fifteen schools were invited to take part; five accepted. In each, DACTION ran a 30-minute session teaching students what the ocean is, why it matters, and the specific danger single-use plastic poses to it, closing with a shared conservation pledge and an invitation to enter a student artivism competition.',
      'The campaign closed with a youth educational event at a government hall in Akure: a panel discussion, an awards presentation for the artivism competition, winning students reading their work aloud on stage, and recycling bins handed over to each participating school, connected for the first time to an ongoing recycling network through DACTION\u2019s delivery partner, RESWAYE.',
    ],
    stats: [
      { num: '500+', label: 'students reached' },
      { num: '5', label: 'schools engaged' },
      { num: '15', label: 'recycling bins donated' },
      { num: '516', label: 'conservation pledges signed' },
      { num: '58', label: 'artivism entries judged' },
    ],
    tags: ['Funded by Captain Planet Foundation', 'Delivery support: RESWAYE'],
    people: {
      eyebrow: 'Campaign team',
      heading: 'Who ran the campaign',
      people: [
        { name: 'Daniel Olajuyigbe', role: 'Speaker & Logistics' },
        { name: 'John Glory', role: 'Speaker' },
        { name: 'Precious Ojo', role: 'Speaker' },
        { name: 'Ebenezer Tomoye', role: 'Speaker' },
        { name: 'Oluwasemiloore Dare-Atunse', role: 'Pledge Anchor & Interviewer' },
        { name: 'Oluwadunsin Leramo', role: 'MC' },
        { name: 'Promise Ojokoh', role: 'Registration & Judging' },
        { name: 'Oluwaseun Oyerinde', role: 'Registration & Graphics' },
        { name: 'Oluwatomisin Adewale', role: 'Media Coverage' },
        { name: 'Oluwarotimi Ewulo', role: 'Media Coverage' },
        { name: 'Faith Melodi', role: 'Media Coverage' },
        { name: 'Oluwadamilola Adeduro', role: 'Graphics Design' },
        { name: 'Oluwanifemi Olajuyigbe', role: 'Judge' },
        { name: 'Victor Arum', role: 'Judge' },
        { name: 'Olumide Olubosede', role: 'Judge' },
      ],
    },
  },
]

export const programs: Program[] = programsBase.map((p) => ({
  ...p,
  prevSlug: prevProgram(storyOrder, p.slug),
  nextSlug: nextProgram(storyOrder, p.slug),
}))

export interface TeamMember {
  slug: string
  name: string
  role: string
  blurb: string
  /** Full bio paragraphs. */
  bio: string[]
  /** Optional italic note shown after the bio. */
  note?: string
}

export const teamMembers: TeamMember[] = [
  {
    slug: 'daniel-olajuyigbe',
    name: 'Daniel Olajuyigbe',
    role: 'Founder & Executive Director',
    blurb:
      'Leads strategic direction, national and international partnerships, and overall organizational growth.',
    bio: [
      'Daniel is the founder and executive director of DACTION Initiative. He holds a First Class degree in Aeronautical and Astronautical Engineering from Afe Babalola University, and has worked across propulsion, hydraulic, and avionics systems through engineering internships with Aero Contractors and the Nigerian Air Force.',
      'He founded DACTION in 2021 as an undergraduate and has since led the organization through five internationally funded campaigns spanning ocean conservation, coastal cleanups, clean energy education, and sustainable food systems. He also serves on the Captain Planet Foundation\u2019s Planeteer Alliance Wisdom Council, advising on strategy and mentoring young environmental leaders internationally, and previously built a national youth ocean advocacy chapter from the ground up.',
      "Daniel's engineering research has focused on hydrogen combustion for cleaner propulsion systems, work he continues to connect with his broader interest in Africa's energy transition.",
    ],
  },
  {
    slug: 'ebenezer-tomoye',
    name: 'Ebenezer Tomoye',
    role: 'Director of Operations',
    blurb: 'Manages national logistics, standardizes workflows, and oversees digital infrastructure.',
    bio: [
      "Ebenezer manages DACTION's national logistics, standardizes organizational workflows, and oversees the initiative's digital infrastructure. He has been part of the core team since the organization's first campaign in 2022.",
    ],
    note: 'Full biography coming soon.',
  },
  {
    slug: 'precious-ojo',
    name: 'Precious Ojo',
    role: 'Director of Programs',
    blurb: 'Directs project execution, manages volunteer networks, and coordinates event timelines.',
    bio: [
      "Precious directs project execution across DACTION's campaigns, manages volunteer networks, and coordinates on-the-ground event timelines. She has contributed to DACTION's programs since 2022.",
    ],
    note: 'Full biography coming soon.',
  },
  {
    slug: 'gloria-ogundipe',
    name: 'Gloria Ogundipe',
    role: 'Director of Environmental Science',
    blurb:
      'Oversees ecological integrity, conducts site assessments, and quantifies impact metrics.',
    bio: [
      "Gloria oversees the ecological integrity of DACTION's initiatives, conducts site assessments, and quantifies the environmental impact of each campaign.",
    ],
    note: 'Full biography coming soon.',
  },
  {
    slug: 'ayooluwa-sunmonu',
    name: 'Ayooluwa Sunmonu',
    role: 'Director of Finance',
    blurb: 'Manages budgeting, ensures fiscal compliance, and oversees grant fund allocation.',
    bio: [
      "Ayooluwa manages DACTION's organizational budgeting, ensures fiscal compliance, and oversees transparent allocation of grant funding across campaigns.",
    ],
    note: 'Full biography coming soon.',
  },
  {
    slug: 'ayokunle-durojaiye',
    name: 'Ayokunle Durojaiye',
    role: 'Director of Partnerships & Funding',
    blurb: 'Leads donor relations, manages sponsorships, and coordinates international grant campaigns.',
    bio: [
      "Ayokunle leads institutional donor relations, manages sponsorships, and coordinates DACTION's international grant campaigns. He has also supported on-the-ground event operations, including the DACTION Earth Summit.",
    ],
    note: 'Full biography coming soon.',
  },
  {
    slug: 'mariah-kosuowei',
    name: 'Mariah Kosuowei',
    role: 'Director of Communications & Marketing',
    blurb: 'Directs public relations, manages digital media platforms, and oversees campaign messaging.',
    bio: [
      "Mariah directs DACTION's public relations, manages its digital media platforms, and oversees unified messaging across campaigns.",
    ],
    note: 'Full biography coming soon.',
  },
]

export interface Partner {
  name: string
  since: string
  description: string
  logo?: string
}

export const partners: Partner[] = [
  {
    name: 'Captain Planet Foundation',
    since: 'Since 2022',
    description:
      "Our primary funding and program partner since 2022, based in Atlanta, Georgia. DACTION's founder also sits on the Foundation's Planeteer Alliance Wisdom Council, its global network for youth environmental leaders.",
  },
  {
    name: 'RESWAYE',
    since: 'Since 2022',
    description:
      "The Recycling Scheme for Women and Youth Empowerment has been DACTION's delivery partner on the ground in Lagos and Ondo States since our first campaign, supporting cleanups, school programs, and community venues.",
  },
  {
    name: 'ABUADMUN',
    since: 'Since 2026',
    description:
      "The Afe Babalola University Model United Nations is DACTION's newest partner: a founding funding relationship backing the university's first Model UN conference with a multi-year commitment.",
    logo: '/assets/logos/abuadmun.png',
  },
]

export interface Recognition {
  year: string
  text: string
}

export const recognition: Recognition[] = [
  {
    year: '2026',
    text: 'Summit Grant, Captain Planet Foundation, awarded to fund the DACTION Earth Summit.',
  },
  {
    year: '2026',
    text: 'Seat on the Planeteer Alliance Wisdom Council, Captain Planet Foundation.',
  },
  {
    year: '2025',
    text: 'Program grant, Captain Planet Foundation, awarded to fund FIRE Meetup: Hydrogen Horizons.',
  },
  {
    year: '2024',
    text: 'Season of Solutions Grant, Captain Planet Foundation, awarded to fund Youth vs. Climate Change.',
  },
  {
    year: '2022',
    text: 'Campaign Grant, Captain Planet Foundation, awarded to fund Ocean Conservation from the Classroom.',
  },
]

export interface GallerySection {
  title: string
  count: number
  /** Optional array of image paths to display for this section. */
  images?: string[]
}

export const gallerySections: GallerySection[] = [
  {
    title: 'DACTION Earth Summit, 2026',
    count: 0,
    images: [],
  },
  {
    title: 'FIRE Meetup: Hydrogen Horizons, 2025',
    count: 8,
    images: [
      '/assets/img/hydrogen-horizons/hydrogen-01.jpg',
      '/assets/img/hydrogen-horizons/hydrogen-02.jpg',
      '/assets/img/hydrogen-horizons/hydrogen-03.jpg',
      '/assets/img/hydrogen-horizons/hydrogen-04.jpg',
      '/assets/img/hydrogen-horizons/hydrogen-05.jpg',
      '/assets/img/hydrogen-horizons/hydrogen-06.jpg',
      '/assets/img/hydrogen-horizons/hydrogen-07.jpg',
      '/assets/img/hydrogen-horizons/hydrogen-08.jpg',
    ],
  },
  {
    title: 'Youth vs. Climate Change, 2024',
    count: 8,
    images: [
      '/assets/img/youth-vs-climate-change/youth-01.jpg',
      '/assets/img/youth-vs-climate-change/youth-02.jpg',
      '/assets/img/youth-vs-climate-change/youth-03.jpg',
      '/assets/img/youth-vs-climate-change/youth-04.jpg',
      '/assets/img/youth-vs-climate-change/youth-05.jpg',
      '/assets/img/youth-vs-climate-change/youth-06.jpg',
      '/assets/img/youth-vs-climate-change/youth-07.jpg',
      '/assets/img/youth-vs-climate-change/youth-08.jpg',
    ],
  },
  {
    title: 'Ocean Conservation from the Classroom, 2022',
    count: 8,
    images: [
      '/assets/img/ocean-conservation/ocean-01.jpg',
      '/assets/img/ocean-conservation/ocean-02.jpg',
      '/assets/img/ocean-conservation/ocean-03.jpg',
      '/assets/img/ocean-conservation/ocean-04.jpg',
      '/assets/img/ocean-conservation/ocean-05.jpg',
      '/assets/img/ocean-conservation/ocean-06.jpg',
      '/assets/img/ocean-conservation/ocean-07.jpg',
      '/assets/img/ocean-conservation/ocean-08.jpg',
    ],
  },
]

export interface TimelineItem {
  year: string
  title: string
  text: string
}

export const timeline: TimelineItem[] = [
  {
    year: '2026 · Institutional partnership',
    title: 'Founding funding partner of ABUADMUN',
    text:
      'DACTION became a founding funding partner of the Afe Babalola University Model United Nations, a new student association holding its first conference in November 2026, backed by a multi-year commitment from DACTION.',
  },
  {
    year: '2026 · Soil systems',
    title: 'DACTION Earth Summit: Compost, Cultivate, Conserve',
    text:
      'A full-day summit on soil health, composting, and sustainable food systems at the Federal University of Technology Akure, bringing informal youth waste workers in as co-facilitators alongside students.',
  },
  {
    year: '2025 · Clean energy',
    title: 'FIRE Meetup: Hydrogen Horizons',
    text:
      "A hybrid, in-person and virtual, energy dialogue exploring hydrogen's role in the energy transition, connecting an NNPC executive and international researchers with Nigerian students and early-career engineers.",
  },
  {
    year: '2024 · Coastal action',
    title: 'Youth vs. Climate Change',
    text:
      'Beach cleanups across five sites in Lekki and Ajah, a 20-tree reforestation planting at a public secondary school, and a public artivism event blending pottery, painting, and climate education.',
  },
  {
    year: '2022 · Where it started',
    title: 'Ocean Conservation from the Classroom',
    text:
      "DACTION's first campaign: ocean conservation education, donated recycling bins, and a student artivism competition delivered across five secondary schools in Akure, Ondo State.",
  },
]

export const impactStats: { num: string; label: string }[] = [
  { num: '$4,000+', label: 'in competitively won grants' },
  { num: '500+', label: 'students reached directly' },
  { num: '5', label: 'flagship campaigns delivered' },
  { num: '3', label: 'Nigerian states reached' },
]

export const siteNav: { to: string; label: string }[] = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/programs', label: 'Programs' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/team', label: 'Team' },
  { to: '/partners', label: 'Partners' },
  { to: '/contact', label: 'Contact' },
]

export const CONTACT = {
  orgEmail: 'dactionnpo@gmail.com',
  founderEmail: 'dannyolaj@gmail.com',
  instagram: 'https://www.instagram.com/daction_initiative/',
  linkedin: 'https://www.linkedin.com/in/daniel-olajuyigbe/',
  captainPlanetProfile:
    'https://captainplanetfoundation.org/about/our-people/daniel-olajuyigbe/',
  address: 'Chevy View Estate, Chevron Drive, Lekki, Lagos, Nigeria.',
}
