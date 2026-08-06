export interface Program {
  slug: string
  id: string
  tag: string
  title: string
  blurb: string
}

export const programs: Program[] = [
  {
    slug: 'abuadmun',
    id: 'abuadmun',
    tag: '2026 \u00b7 Upcoming',
    title: 'ABUADMUN Founding Partnership',
    blurb:
      "DACTION's first institutional funding partnership, backing a new Model United Nations association at Daniel's alma mater with a multi-year commitment.",
  },
  {
    slug: 'earth-summit',
    id: 'earth-summit',
    tag: '2026 \u00b7 Upcoming',
    title: 'DACTION Earth Summit',
    blurb:
      'A full-day summit on soil health, composting, and sustainable food systems at a Nigerian university, co-facilitated with informal youth waste workers.',
  },
  {
    slug: 'hydrogen-horizons',
    id: 'hydrogen-horizons',
    tag: '2025 \u00b7 Completed',
    title: 'FIRE Meetup: Hydrogen Horizons',
    blurb:
      "A hybrid energy dialogue on hydrogen's role in the energy transition, connecting an NNPC executive and researchers from three countries with Nigerian students.",
  },
  {
    slug: 'youth-vs-climate-change',
    id: 'youth-vs-climate-change',
    tag: '2024 \u00b7 Completed',
    title: 'Youth vs. Climate Change',
    blurb:
      'Five beach cleanups, a 20-tree reforestation planting, and a public artivism event across Lekki and Ajah, Lagos.',
  },
  {
    slug: 'ocean-conservation',
    id: 'ocean-conservation',
    tag: '2022 \u00b7 Completed',
    title: 'Ocean Conservation from the Classroom',
    blurb:
      "DACTION's first campaign: ocean conservation education, donated recycling bins, and a student artivism competition across five schools in Akure.",
  },
]

export interface TeamMember {
  slug: string
  name: string
  role: string
  blurb: string
}

export const teamMembers: TeamMember[] = [
  {
    slug: 'daniel-olajuyigbe',
    name: 'Daniel Olajuyigbe',
    role: 'Founder & Executive Director',
    blurb:
      'Leads strategic direction, national and international partnerships, and overall organizational growth.',
  },
  {
    slug: 'ebenezer-tomoye',
    name: 'Ebenezer Tomoye',
    role: 'Director of Operations',
    blurb: 'Manages national logistics, standardizes workflows, and oversees digital infrastructure.',
  },
  {
    slug: 'precious-ojo',
    name: 'Precious Ojo',
    role: 'Director of Programs',
    blurb: 'Directs project execution, manages volunteer networks, and coordinates event timelines.',
  },
  {
    slug: 'gloria-ogundipe',
    name: 'Gloria Ogundipe',
    role: 'Director of Environmental Science',
    blurb:
      'Oversees ecological integrity, conducts site assessments, and quantifies impact metrics.',
  },
  {
    slug: 'ayooluwa-sunmonu',
    name: 'Ayooluwa Sunmonu',
    role: 'Director of Finance',
    blurb:
      'Manages budgeting, ensures fiscal compliance, and oversees grant fund allocation.',
  },
  {
    slug: 'ayokunle-durojaiye',
    name: 'Ayokunle Durojaiye',
    role: 'Director of Partnerships & Funding',
    blurb:
      'Leads donor relations, manages sponsorships, and coordinates international grant campaigns.',
  },
  {
    slug: 'mariah-kosuowei',
    name: 'Mariah Kosuowei',
    role: 'Director of Communications & Marketing',
    blurb:
      'Directs public relations, manages digital media platforms, and oversees campaign messaging.',
  },
]

export interface Partner {
  name: string
  since: string
  description: string
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
}

export const gallerySections: GallerySection[] = [
  { title: 'ABUADMUN Founding Partnership, 2026', count: 4 },
  { title: 'DACTION Earth Summit, 2026', count: 8 },
  { title: 'FIRE Meetup: Hydrogen Horizons, 2025', count: 8 },
  { title: 'Youth vs. Climate Change, 2024', count: 8 },
  { title: 'Ocean Conservation from the Classroom, 2022', count: 8 },
]

export interface TimelineItem {
  year: string
  title: string
  text: string
}

export const timeline: TimelineItem[] = [
  {
    year: '2026 \u00b7 Institutional partnership',
    title: 'Founding funding partner of ABUADMUN',
    text:
      'DACTION became a founding funding partner of the Afe Babalola University Model United Nations, a new student association holding its first conference in November 2026, backed by a multi-year commitment from DACTION.',
  },
  {
    year: '2026 \u00b7 Soil systems',
    title: 'DACTION Earth Summit: Compost, Cultivate, Conserve',
    text:
      'A full-day summit on soil health, composting, and sustainable food systems at the Federal University of Technology Akure, bringing informal youth waste workers in as co-facilitators alongside students.',
  },
  {
    year: '2025 \u00b7 Clean energy',
    title: 'FIRE Meetup: Hydrogen Horizons',
    text:
      "A hybrid, in-person and virtual, energy dialogue exploring hydrogen's role in the energy transition, connecting an NNPC executive and international researchers with Nigerian students and early-career engineers.",
  },
  {
    year: '2024 \u00b7 Coastal action',
    title: 'Youth vs. Climate Change',
    text:
      'Beach cleanups across five sites in Lekki and Ajah, a 20-tree reforestation planting at a public secondary school, and a public artivism event blending pottery, painting, and climate education.',
  },
  {
    year: '2022 \u00b7 Where it started',
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
