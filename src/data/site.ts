export interface ProgramStat {
  num: string
  label: string
}

export interface ProgramPerson {
  name: string
  role: string
  /** Optional headshot path. */
  headshot?: string
}

export interface Program {
  slug: string
  id: string
  tag: string
  title: string
  blurb: string
  status: 'upcoming' | 'done'
  statusLabel: string
  location: string
  focus: string
  hero?: string
  image?: string
  logo?: string
  storyHeadline: string
  story: string[]
  stats: ProgramStat[]
  tags: string[]
  featureLink?: { url: string; label: string }
  people?: { heading: string; people: ProgramPerson[] }
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
    title: 'ABUADMUN Conference Partnership',
    blurb:
      "DACTION's first institutional funding partnership, backing a new Model United Nations association at Daniel's alma mater with a three-year commitment.",
    status: 'upcoming',
    statusLabel: 'Upcoming, November 2026',
    location: 'Afe Babalola University, Ado-Ekiti',
    focus: 'Youth diplomacy & institutional partnership',
    logo: '/assets/logos/abuadmun.png',
    storyHeadline: 'Backing the first Model UN at Daniel\u2019s own university.',
    story: [
      'In his final undergraduate semester, Daniel worked alongside Adebolu Alayonimi, head of ABUADMUN\u2019s local organizing committee, to help establish ABUADMUN as an organization and secure formal university approval for it, Afe Babalola University\u2019s first Model United Nations association. A Model UN simulates the structure and debate of the real United Nations, giving students practice in diplomacy, negotiation, public speaking, and policy writing.',
      'DACTION is a funding and advisory partner to ABUADMUN\u2019s annual conferences, the two-day UN simulation delegate events the association runs each year, committing three years of funding support alongside ongoing advisory and consulting input as it plans its inaugural conference for November 2026 at Alfa Belgore Hall on the ABUAD campus, expecting around 200 student delegates and staff.',
      "It's DACTION's first partnership of this kind: supporting an institution's flagship event rather than running a campaign directly, and a sign of the organization's work extending into new kinds of youth leadership beyond environmental programming.",
    ],
    stats: [
      { num: '200', label: 'delegates expected' },
      { num: '2', label: 'days of conference programming' },
    ],
    tags: [
      'Three-year funding commitment',
      'Funding & advisory partner',
      'Aligned with SDG 4 and SDG 16',
    ],
  },
  {
    slug: 'earth-summit',
    id: 'earth-summit',
    tag: '2026 · Upcoming',
    title: 'DACTION Earth Summit: Compost, Cultivate, Conserve',
    blurb:
      'A full-day summit on soil health, composting, and sustainable food systems at a Nigerian university, co-facilitated with informal youth waste workers.',
    status: 'upcoming',
    statusLabel: 'Upcoming, September 2026',
    location: 'Federal University of Technology Akure (FUTA), Ondo State',
    focus: 'Soil health, composting, sustainable food systems',
    image: '/assets/img/earth-summit/hero.jpg',
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
    tag: 'September 2025 · Completed',
    title: 'Hydrogen Horizons: Engineering Renewable Energy Solutions',
    blurb:
      "A hybrid energy dialogue on hydrogen's role in the energy transition, connecting an NNPC executive and researchers from three countries with Nigerian students.",
    status: 'done',
    statusLabel: 'Completed, September 2025',
    location: 'Lekki, Lagos, held in person and online',
    focus: 'Clean energy, hydrogen, career pathways',
    image: '/assets/img/hydrogen-horizons/hero.jpg',
    storyHeadline:
      'Where does a conventional engineering career fit in a cleaner energy future?',
    story: [
      'Most conversations young Nigerians have about energy fall into two camps: nostalgia for the oil and gas industry that built so many careers, or abstract talk about renewables with little connection to how people actually build a working life in the field. Hydrogen Horizons was built to sit between those two conversations.',
      "The meetup ran in person at Elomaz Hotels in Lekki in the afternoon, then continued online in the evening for a wider audience, pairing a Nigerian oil and gas executive's hard earned lessons with international researchers working directly on hydrogen and clean energy systems. Students and early career engineers heard directly from people who'd built careers on both sides of the transition, then worked through a documentary screening and open discussion on hydrogen's realistic place in Nigeria's energy future.",
      'The session closed with participants making personal pledges: pursuing renewable energy research, applying to postgraduate programmes in the field, or simply carrying sustainability into whatever engineering path they choose next.',
    ],
    stats: [
      { num: '2', label: 'sessions, in person and online' },
      { num: '3', label: 'countries represented on the panel' },
    ],
    tags: ['Funded by Captain Planet Foundation', 'Hosted under the Planeteer Alliance'],
    people: {
      heading: 'Who joined the conversation',
      people: [
        {
          name: 'Daniel Olajuyigbe',
          role: 'Founder, DACTION Initiative',
          headshot: '/assets/img/team/daniel-olajuyigbe/headshot.jpg',
        },
        {
          name: 'Dr. Johnson Olajuyigbe',
          role: 'Executive, Nigerian National Petroleum Company (Nigeria)',
          headshot: '/assets/img/hydrogen-horizons/team/dr-johnson-olajuyigbe.jpg',
        },
        {
          name: 'Tolu Fanibuyan',
          role: 'Co-Founder, JEAY Healthcare (Nigeria)',
          headshot: '/assets/img/hydrogen-horizons/team/tolu-fanibuyan.jpg',
        },
        {
          name: 'Kenneth Okosun',
          role: 'Energy Systems Analyst & Geoscientist, Forschungszentrum Julich (Germany)',
          headshot: '/assets/img/hydrogen-horizons/team/kenneth-okosun.jpg',
        },
        {
          name: 'Senakeesha Nwachukwu',
          role: 'Clean Energy Advocate',
          headshot: '/assets/img/hydrogen-horizons/team/senakeesha-nwachukwu.jpg',
        },
        {
          name: 'Oghenekevwe Oghenechovwen',
          role: 'Climate Scientist & Researcher, York University (Canada)',
          headshot: '/assets/img/hydrogen-horizons/team/oghenekevwe-oghenechovwen.jpg',
        },
      ],
    },
  },
  {
    slug: 'youth-vs-climate-change',
    id: 'youth-vs-climate-change',
    tag: 'August 2024 · Completed',
    title: 'Youth vs. Climate Change',
    blurb:
      'Five beach cleanups, a 20-tree reforestation planting, and a public artivism event across Lekki and Ajah, Lagos.',
    status: 'done',
    statusLabel: 'Completed, August 2024',
    location: 'Lekki & Ajah, Lagos State',
    focus: 'Coastal cleanups, reforestation, artivism',
    image: '/assets/img/youth-vs-climate-change/hero.jpg',
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
      heading: 'Who ran the campaign',
      people: [
        {
          name: 'Daniel Olajuyigbe',
          role: 'Team Lead',
          headshot: '/assets/img/team/daniel-olajuyigbe/headshot.jpg',
        },
        {
          name: 'Oluwanifemi Olajuyigbe',
          role: 'Team member',
          headshot: '/assets/img/youth-vs-climate-change/team/oluwanifemi-olajuyigbe.jpg',
        },
        {
          name: 'Alice Okpafi',
          role: 'Team member',
          headshot: '/assets/img/youth-vs-climate-change/team/alice-okpafi.jpg',
        },
        {
          name: 'Testimony Adeyemi',
          role: 'Team member',
          headshot: '/assets/img/youth-vs-climate-change/team/testimony-adeyemi.jpg',
        },
        {
          name: 'Saint-Christopher Annenechukwu',
          role: 'Team member',
          headshot: '/assets/img/youth-vs-climate-change/team/saint-christopher-annenechukwu.jpg',
        },
      ],
    },
  },
  {
    slug: 'ocean-conservation',
    id: 'ocean-conservation',
    tag: 'August 2022 · Completed',
    title: 'Ocean Conservation from the Classroom',
    blurb:
      "DACTION's first campaign: ocean conservation education, donated recycling bins, and a student artivism competition across five schools in Akure.",
    status: 'done',
    statusLabel: 'Completed, August 2022',
    location: 'Akure, Ondo State',
    focus: 'Ocean conservation education, school recycling',
    image: '/assets/img/ocean-conservation/hero.jpg',
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
      heading: 'Who ran the campaign',
      people: [
        {
          name: 'Daniel Olajuyigbe',
          role: 'Team Lead & Speaker',
          headshot: '/assets/img/ocean-conservation/team/daniel-olajuyigbe.jpg',
        },
        {
          name: 'John Glory',
          role: 'Speaker',
          headshot: '/assets/img/ocean-conservation/team/john-glory.jpg',
        },
        {
          name: 'Precious Ojo',
          role: 'Speaker',
          headshot: '/assets/img/ocean-conservation/team/precious-ojo.jpg',
        },
        {
          name: 'Ebenezer Tomoye',
          role: 'Speaker',
          headshot: '/assets/img/ocean-conservation/team/ebenezer-tomoye.jpg',
        },
        {
          name: 'Oluwasemiloore Dare-Atunse',
          role: 'Pledge Anchor & Interviewer',
          headshot: '/assets/img/ocean-conservation/team/oluwasemiloore-dare-atunse.jpg',
        },
        {
          name: 'Oluwadunsin Leramo',
          role: 'MC',
          headshot: '/assets/img/ocean-conservation/team/oluwadunsin-leramo.jpg',
        },
        {
          name: 'Promise Ojokoh',
          role: 'Registration & Judging',
          headshot: '/assets/img/ocean-conservation/team/promise-ojokoh.jpg',
        },
        { name: 'Oluwaseun Oyerinde', role: 'Registration' },
        { name: 'Oluwatomisin Adewale', role: 'Media Coverage' },
        { name: 'Oluwarotimi Ewulo', role: 'Media Coverage' },
        {
          name: 'Faith Melodi',
          role: 'Media Coverage',
          headshot: '/assets/img/ocean-conservation/team/faith-melodi.jpg',
        },
        {
          name: 'Oluwanifemi Olajuyigbe',
          role: 'Judge',
          headshot: '/assets/img/ocean-conservation/team/oluwanifemi-olajuyigbe.jpg',
        },
        { name: 'Victor Arum', role: 'Judge' },
        {
          name: 'Olumide Olubosede',
          role: 'Judge',
          headshot: '/assets/img/ocean-conservation/team/olumide-olubosede.jpg',
        },
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
  /** Headshot photo path. */
  headshot?: string
  /** Secondary "at work" photo path. */
  work?: string
}

export const teamMembers: TeamMember[] = [
  {
    slug: 'daniel-olajuyigbe',
    name: 'Daniel Olajuyigbe',
    role: 'Founder & Executive Director',
    blurb:
      'Leads strategic direction, national and international partnerships, and overall organizational growth.',
    headshot: '/assets/img/team/daniel-olajuyigbe/headshot.jpg',
    work: '/assets/img/team/daniel-olajuyigbe/work.jpg',
    bio: [
      'Daniel Olajuyigbe is a First Class graduate in Aeronautical and Astronautical Engineering from Afe Babalola University and the founder of DACTION Initiative, an environmental nonprofit he built as an undergraduate during his teenage years and has since grown into a five-time internationally funded organization.',
      'His engineering training centers on combustion and energy systems. His undergraduate thesis focused on the design and computational evaluation of a low-NOx hydrogen micro-injector for small gas turbine combustion, and his undergraduate research work involved running CFD simulations in ANSYS Fluent to study hydrogen-air mixing, flow distribution, and emissions performance in gas turbine combustors. He has completed three industrial placements, two with Aero Contractors Company of Nigeria and one with the Nigerian Air Force\u2019s 631 Aircraft Maintenance Depot, gaining hands-on exposure to propulsion, hydraulics, structural inspection, and avionics within safety-critical maintenance environments. He is now looking toward aviation, energy systems, and consulting, carrying that same combustion and thermofluids foundation into whichever of those paths he builds his career in.',
      "Daniel's path into environmental leadership began early. At fifteen he won the Turtle Prize from Mundus Maris Science and Arts for Sustainability in Belgium, and the following year took Silver in the Queen's Commonwealth Essay Competition. Through his late teens he wrote for the ThinkOcean Blog and served as a Commonwealth Correspondent for YourCommonwealth, then in 2021 was selected to the Captain Planet Foundation's Planeteer Alliance Design Squad, a global youth team assembled to help design and launch the newly formed Alliance. He led the team's Project 3, developing a formal proposal for the Alliance's leadership and governance structure, work that would later open the door to his current seat on the Foundation's Planeteer Alliance Wisdom Council, a small rotating body of young environmental leaders advising on program strategy for the Foundation's global youth network.",
      'Since founding DACTION in 2022, Daniel has led it to five internationally competitive grants worth over $4,000 from the Captain Planet Foundation and ThinkOcean, building volunteer teams to execute each campaign, forming lasting partnerships including a multi-year collaboration with RESWAYE, and helping secure university approval to establish ABUADMUN, a new Model United Nations association DACTION has committed five years of funding to support. He also founded ThinkOcean\u2019s first Nigerian chapter and served two years as its National Coordinator before handing leadership to a successor.',
      'On campus, Daniel served as General Secretary of the Nigerian Universities Engineering Students\u2019 Association (NUESA), ABUAD chapter, where he administered the executive secretariat and chaired both the Academic and Financial Committees, managing budgets, sponsorship acquisition, and technical programming for a body of over 1,500 engineering students, work recognized with an Award of Service. Before that, as General Secretary of ABUAD Salt Valley Associates, he coordinated executive communications and delivered flagship student events including engineering design challenges and technical workshops. He has also worked as an Outreach Representative for Nigeria\u2019s Rise Scholarship Program, mentoring over 300 students across 100+ schools through the scholarship application process.',
      "His recognition includes the Captain Planet Foundation's EARTH Summit Grant, FIRE Meetup Grant, Season of Solutions Grant, and Campaign Grant, ABUAD's Founder's Award for First Class academic performance across three consecutive years, an Award of Service from NUESA, a Silver Award in the Queen's Commonwealth Essay Competition, and the Turtle Prize from Mundus Maris Science and Arts for Sustainability.",
      "What genuinely drives Daniel is the idea that sustainability has to be built into how careers and businesses actually operate, not treated as a side project, if it's going to produce lasting change. He's currently focused on learning, professionally, how that plays out in practice: how businesses design and execute real sustainability strategy and incorporate ESG into how they operate, how oil and gas operations can run at maximum efficiency with minimal waste and strict environmental compliance, and how renewable alternatives, hydrogen especially, can be developed alongside that push for efficiency rather than instead of it. Just as much, he's drawn to the process behind all of it: spotting real gaps and problems in society, designing solutions for them, and bringing together young people capable of building those solutions, then investing in them, working alongside them, and pushing the resulting advocacy through to actual impact. That combination, technical rigor on one side and youth-led problem-solving on the other, is what he's building his career around.",
      'Outside of engineering and DACTION, Daniel is an avid reader of psychology, philosophy, and history, drawn especially to books on faith, and he loves a good debate.',
    ],
  },
  {
    slug: 'morounfoluwa-adeduro',
    name: 'Morounfoluwa Adeduro',
    role: 'Director of Programs',
    blurb:
      'Designs and runs campaigns end to end, from scoping goals through execution timelines to volunteer coordination for each event.',
    headshot: '/assets/img/team/morounfoluwa-adeduro/headshot.jpg',
    work: '/assets/img/team/morounfoluwa-adeduro/work.jpg',
    bio: [
      'Morounfoluwa Adeduro is a communications and community engagement professional who designs and runs DACTION\u2019s campaigns end to end, from scoping goals through execution timelines to volunteer coordination for each event.',
      'She currently serves as Communications and Community Associate at Break into Tech, where she leads digital strategy, manages community engagement, and built the organization\u2019s internal communications team from the ground up. Through Afro-centric storytelling and strategic content, she has grown the organization\u2019s organic reach to over 60,000 impressions on LinkedIn, curated more than 100 brand visual assets, and led high-impact partnerships with organizations including the SPAWN Initiative. She has planned, hosted, and moderated more than six virtual tech events featuring sixteen or more guest speakers and reaching over 500 registrants.',
      'Her background spans visual communications at GAO Tek Inc, co-designing event and brand materials for CHILDISH, and administrative and event operations leadership for Ahavah Kigali, where she coordinated itineraries for international guests and managed events for 130+ attendees.',
      'Morounfoluwa is passionate about social and sustainable development in African communities, and centers her work on meaningful visual storytelling, strategic brand experiences, and impactful digital spaces where people can connect, learn, and grow. She holds a deep belief in the potential of African nations to thrive, and sees healthy cities and healthy people, socially and environmentally, as central to that future, more so than is often recognized.',
      "Beyond digital community building, Morounfoluwa writes research reports on global crises like water security and curates short stories on her Substack publication, Myrtle. Whether she's building a community campaign, hosting a career masterclass, or crafting a narrative, she's driven by progress that empowers people and transforms communities.",
    ],
  },
  {
    slug: 'gloria-ogundipe',
    name: 'Gloria Ogundipe',
    role: 'Director of Impact',
    blurb:
      'Tracks whether campaigns actually achieve what they set out to do, setting measurable goals before each and reporting honestly on results after.',
    headshot: '/assets/img/team/gloria-ogundipe/headshot.jpg',
    work: '/assets/img/team/gloria-ogundipe/work.jpg',
    bio: [
      'Gloria Ogundipe is a Biomedical Engineering undergraduate at Afe Babalola University who tracks whether DACTION\u2019s campaigns actually achieve what they set out to do, setting measurable goals before each campaign, reporting honestly on results after, and feeding lessons back into future programs.',
      'She currently serves as President of the Biomedical Engineering Students Association (BESA), ABUAD chapter, for the 2026/2027 term, having previously served as Assistant Social Director (2025/2026) and Sports Director (2024/2025). She also works as a Video Editor with Khreeolife, an NGO based in southwestern Nigeria, combining creative and technical skill to communicate ideas through visual media.',
      'Gloria is an athlete on the ABUAD Volleyball Team, where she has developed discipline, teamwork, and resilience alongside a strong appreciation for the power of sport to bring people together.',
      "She's particularly interested in environmental education, sustainability, youth advocacy, and the role of innovation and technology in addressing societal challenges. As a Biomedical Engineering student, she's drawn to the intersection between technology, healthcare, and sustainable development, and hopes to contribute to solutions that improve both human wellbeing and the communities people live in.",
      'Her diverse experience across engineering, leadership, sports, and creative work reflects a broader belief that young people create real impact when given the knowledge, skills, and platforms to do so. Beyond DACTION, she\u2019s passionate about volleyball, science and technology, and creative storytelling.',
    ],
  },
  {
    slug: 'toluwanimi-olaoye',
    name: 'Toluwanimi Olaoye',
    role: 'Director of Operations',
    blurb:
      'Keeps the organization functioning day to day: logistics, internal workflows, digital infrastructure, and vendor or venue coordination.',
    headshot: '/assets/img/team/toluwanimi-olaoye/headshot.jpg',
    work: '/assets/img/team/toluwanimi-olaoye/work.jpg',
    bio: [
      'Olaoye Toluwanimi Gideon is an Aeronautical and Astronautical Engineering graduate of Afe Babalola University who keeps DACTION functioning day to day, handling logistics, internal workflows, digital infrastructure, and vendor and venue coordination.',
      'His professional exposure spans internships with Aero Contractors, 7 Star Global Hangar, and the Air Traffic Control Tower at Murtala Muhammed International Airport, giving him practical insight into aviation operations, aircraft maintenance, airport systems, and safety practice within the wider Nigerian aviation industry. He is ISO 45001 certified, reflecting a standing interest in occupational health and safety and building safer, more responsible working environments.',
      "During his undergraduate studies, Toluwanimi served as a 300-level Class Representative and later as Financial Secretary of the Aerospace Engineering Students' Association (AESA) in his final year, contributing to departmental coordination and administration. He currently serves as Youth Secretary at Foursquare Gospel Church, Abaranje Zonal Headquarters, contributing to youth-focused activities and community development.",
      'Toluwanimi has a growing interest in engineering, sustainability, environmental responsibility, and youth development, and believes young people have an important role to play in addressing environmental and social challenges. He\u2019s particularly interested in how education, engineering, innovation, and responsible leadership can contribute to the Sustainable Development Goals.',
      'A God-fearing, curious, and growth-oriented young professional, Toluwanimi enjoys football, learning new things, and engaging with people. He hopes to build a career that combines technical expertise with leadership and meaningful social impact.',
    ],
  },
  {
    slug: 'ayooluwa-sunmonu',
    name: 'Ayooluwa Sunmonu',
    role: 'Director of Finance',
    blurb:
      'Owns budgeting for every campaign, tracks spending, and ensures grant funds are allocated and accounted for properly.',
    headshot: '/assets/img/team/ayooluwa-sunmonu/headshot.jpg',
    work: '/assets/img/team/ayooluwa-sunmonu/work.jpg',
    bio: [
      'Ayooluwa Sunmonu is an undergraduate at Afe Babalola University who owns budgeting for every DACTION campaign, tracking spending and ensuring grant funds are allocated and accounted for properly.',
      'She currently serves as General Secretary of the Biomedical Engineering Students Association (BESA), following her tenure as the association\u2019s Sports Director from 2025 to 2026. Her professional background includes work as a Content Creator for Green Fingers Wildlife Conservation Initiative and as a Biomedical Engineering Intern at Philios Integrated Technologies. She was named Valedictorian of Refiners High School, recognized for academic excellence.',
      'Driven by a passion for sustainability, environmental education, and youth advocacy, Ayooluwa is committed to advancing the Sustainable Development Goals through strategic leadership and community engagement.',
      'Beyond her academic and leadership pursuits, she is passionate about technology, sports, and driving youth-led initiatives for environmental conservation.',
    ],
  },
  {
    slug: 'ayokunle-durojaiye',
    name: 'Ayokunle Durojaiye',
    role: 'Director of Development',
    blurb:
      'Manages the grant and partnership pipeline, identifying funding opportunities and maintaining relationships with funders and institutional partners.',
    headshot: '/assets/img/team/ayokunle-durojaiye/headshot.jpg',
    work: '/assets/img/team/ayokunle-durojaiye/work.jpg',
    bio: [
      'Ayokunle Durojaiye is a mechanical engineering student at Obafemi Awolowo University who manages DACTION\u2019s grant and partnership pipeline, identifying funding opportunities and maintaining relationships with funders and institutional partners.',
      'He has built practical industry skills through internships at Chevron Nigeria Limited and Toyota Nigeria Limited, and currently serves as a campus ambassador for Cowrywise. He has been recognized with the MTN Scholarship and the SOHCAHTOA Scholarship, and won the JAASF award for his essay \u201CNigerian Economy: A Way Forward.\u201D',
      'His commitment to sustainable development is rooted in concern for both mental health and the protection of endangered animals. He believes human wellbeing and nature are directly connected, and seeing the rapid, unregulated hunting of endangered species pushed him toward conservation advocacy, understanding that protecting natural ecosystems is essential to a balanced environment that reduces societal stress and supports mental wellness.',
      "When he's not studying or working on community projects, Ayokunle enjoys writing and staying active through basketball, football, and table tennis.",
    ],
  },
  {
    slug: 'mariah-kosuowei',
    name: 'Mariah Kosuowei',
    role: 'Director of Communications',
    blurb:
      "Runs public-facing messaging: social media, campaign storytelling, press, and keeping DACTION's voice consistent across platforms.",
    headshot: '/assets/img/team/mariah-kosuowei/headshot.jpg',
    work: '/assets/img/team/mariah-kosuowei/work.jpg',
    bio: [
      'Mariah Kosuowei is a Biomedical Engineering undergraduate who runs DACTION\u2019s public-facing voice: social media, campaign storytelling, press, and keeping the organization\u2019s messaging consistent across platforms.',
      'Her technical interests center on genomics, tissue engineering, and regenerative medicine, with a focus on cellular mechanics and how tissues respond during the development of hereditary diseases and genetic disorders. She is currently finalizing HSE Level 1, 2, and 3 certifications, trained under British International Safety Organisation standards, extending her advocacy into professional and industrial safety practice. She serves as Assistant Welfare Director of APWEN, is a candidate for the Millennium Fellowship (MCN), and has contested for the role of Campus Director.',
      "At the core of her work is a belief that health and environment are inseparable, true human health cannot exist without a healthy, balanced environment. She's drawn to the fact that marginalized and impoverished communities face significantly higher disease risk from environmental factors, and is committed to addressing those socio-environmental health disparities through technical awareness, community leadership, and strategic communication.",
      'Mariah is deeply engaged with the creative arts: dance and music, fibre arts like crochet, knitting, and sewing, and digital illustration and visual design. That love of aesthetics and hands-on creation balances her technical work and feeds an innovative, well-rounded approach to everything she does.',
    ],
  },
  {
    slug: 'precious-ojo',
    name: 'Precious Ojo',
    role: 'Director of Advocacy',
    blurb:
      "Carries DACTION's work into policy and public conversation, representing the organization externally and building its voice on youth and climate policy.",
    headshot: '/assets/img/team/precious-ojo/headshot.jpg',
    bio: [
      'Ojo Precious Oluwasemilore, known as Fiyin, is a marine geoscientist and oil and gas professional who carries DACTION\u2019s work into policy and public conversation, representing the organization externally and building its voice on youth and climate policy.',
      'He holds a B.Tech in Marine Geosciences from the Federal University of Technology, Akure, and is currently pursuing an MSc in Oil and Gas Engineering at Nile University of Nigeria. His career bridges the regulatory and technical sides of the energy sector: as a Graduate Intern in the Exploration and Acreage Management Department of the Nigerian Upstream Petroleum Regulatory Commission (NUPRC), he reviewed geotechnical, geophysical, and core acquisition survey applications, supported compliance environmental audits, and contributed to drafting exploration guidelines for the industry. His research background began at the Nigerian Institute for Oceanography and Marine Research (NIOMR), spanning marine biology, marine geology, chemical oceanography, and marine meteorology. He currently serves as a Community Associate at Regus, alongside earlier experience managing operations at Nezek Pharmacy.',
      'Fiyin is a founding member of the Organization of Marine Science Professionals (OMSP), where he leads the Abia Flood Vulnerability and Environmental Intelligence Initiative (AFVEII), a project mapping flood risk across Aba North, Aba South, and Oboma Ngwa using GIS, Google Earth Engine, and multi-criteria decision analysis to help communities and policymakers plan for flood exposure. He is also a member of ThinkOcean Nigeria.',
      'He holds certifications in Data Analysis (R programming), Logistics and Warehouse Management, and Project Management, and is proficient in Petrel and spreadsheet-based data analysis and reporting.',
      "His drive toward ocean conservation and environmental resilience grew directly out of his marine science training and internship experience, where he saw firsthand how closely coastal communities' livelihoods are tied to the health of their environment. That awareness now shapes both his flood vulnerability mapping work and his advocacy through DACTION, where he champions ocean conservation, tree planting, and plastic recycling as work directly connected to the UN Sustainable Development Goals on climate action, life below water, and sustainable communities. He's equally committed to youth advocacy, believing that equipping young people with data and geoscience skills is key to building climate-resilient communities across Nigeria.",
      'Outside of his academic and advocacy work, Fiyin enjoys music, gaming, and football.',
    ],
  },
  {
    slug: 'ebenezer-tomoye',
    name: 'Ebenezer Tomoye',
    role: 'Director of Volunteers',
    blurb:
      "Recruits, trains, and coordinates the volunteer base that shows up for each campaign, the people doing cleanups, staffing events, and judging competitions.",
    headshot: '/assets/img/team/ebenezer-tomoye/headshot.jpg',
    work: '/assets/img/team/ebenezer-tomoye/work.jpg',
    bio: [
      'Ebenezer Tomoye is an Agricultural and Environmental Engineering graduate of the Federal University of Technology Akure who recruits, trains, and coordinates the volunteer base that shows up for every DACTION campaign.',
      'Ebenezer currently works and freelances as an analytics engineer and educator in the data space, a field he\u2019s been in for four years. He\u2019s focused on the role analytics engineers play in ensuring data quality, and on the growing connection between AI and data as that intersection becomes more critical.',
      'He has volunteered with CTDF (Connecting the Dots Foundation) as an executive for four years, winning several awards in the process, and was a member of AIESEC\u2019s local chapter for four years, rising to Vice President of Operations before becoming an alumnus in 2024. His volunteer footprint spans local events like the WeInspire Conference, state-level events like LinkedIn Local Akure and TEDx Enugu, and national events like LinkedIn Local Nigeria.',
      'His leadership journey began in 2020, leading a group of 20+ volunteers on an SDG 6 community cleanup project. His biggest achievement to date came in 2024, leading a team of 15 people over six months to deliver an event targeted at the male child that drew 150+ attendees, three times the previous editions\u2019 turnout of roughly 50.',
      "His interest in climate change and environmental sustainability took root in that first 2020 leadership experience and deepened through DACTION's artivism challenge. He's driven by the belief that meaningful climate action needs not just innovative solutions but informed communities, collaboration, and a willingness to learn from one another, and he's particularly interested in climate education and community-driven solutions that make climate conversations more accessible and actionable for young people.",
      'Ebenezer writes a Substack blog called \u201CThe Inward Illumination,\u201D reflecting on what he\u2019s learning through both an introspective and retrospective lens, and shares what helps others navigate their twenties via Instagram. For fun, he dances, and takes walks to soak in nature and practice gratitude.',
    ],
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
    logo: '/assets/logos/captain-planet-foundation.png',
  },
  {
    name: 'RESWAYE',
    since: 'Since 2022',
    description:
      "The Recycling Scheme for Women and Youth Empowerment has been DACTION's delivery partner on the ground in Lagos and Ondo States since our first campaign, supporting cleanups, school programs, and community venues.",
    logo: '/assets/logos/reswaye.png',
  },
  {
    name: 'ABUADMUN',
    since: 'Since 2026',
    description:
      "DACTION helped establish the Afe Babalola University Model United Nations and now serves as a funding and advisory partner to its annual conferences, backed by a three-year commitment.",
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
    text: 'Meetup grant, Captain Planet Foundation, awarded to fund FIRE Meetup: Hydrogen Horizons.',
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

export interface GalleryMoment {
  title: string
  images?: string[]
  /** Shown when a moment has no photos yet (e.g. upcoming events). */
  note?: string
}

export interface GallerySection {
  title: string
  moments: GalleryMoment[]
}

export const gallerySections: GallerySection[] = [
  {
    title: 'ABUADMUN Conference Partnership, 2026',
    moments: [
      {
        title: 'Partnership & Planning',
        note: 'Photos added after the first conference in November 2026.',
      },
    ],
  },
  {
    title: 'DACTION Earth Summit, 2026',
    moments: [
      {
        title: 'Summit day',
        note: 'This summit takes place in September 2026. Photos will be added here once the event has happened.',
      },
    ],
  },
  {
    title: 'Hydrogen Horizons: Engineering Renewable Energy Solutions, 2025',
    moments: [
      {
        title: 'In-Person Session, Lekki',
        images: Array.from(
          { length: 8 },
          (_, i) => `/assets/img/hydrogen-horizons/session-${String(i + 1).padStart(2, '0')}.jpg`
        ),
      },
      {
        title: 'Online Session',
        images: Array.from(
          { length: 4 },
          (_, i) => `/assets/img/hydrogen-horizons/online-${String(i + 1).padStart(2, '0')}.jpg`
        ),
      },
    ],
  },
  {
    title: 'Youth vs. Climate Change, 2024',
    moments: [
      {
        title: 'Beach Cleanups',
        images: Array.from(
          { length: 4 },
          (_, i) => `/assets/img/youth-vs-climate-change/beach-${String(i + 1).padStart(2, '0')}.jpg`
        ),
      },
      {
        title: 'Tree Planting',
        images: Array.from(
          { length: 4 },
          (_, i) =>
            `/assets/img/youth-vs-climate-change/planting-${String(i + 1).padStart(2, '0')}.jpg`
        ),
      },
      {
        title: 'Public Awareness & Artivism',
        images: Array.from(
          { length: 8 },
          (_, i) => `/assets/img/youth-vs-climate-change/artivism-${String(i + 1).padStart(2, '0')}.jpg`
        ),
      },
    ],
  },
  {
    title: 'Ocean Conservation from the Classroom, 2022',
    moments: [
      {
        title: 'School Sessions',
        images: Array.from(
          { length: 8 },
          (_, i) => `/assets/img/ocean-conservation/school-${String(i + 1).padStart(2, '0')}.jpg`
        ),
      },
      {
        title: 'Artivism Contest & Awards Presentation',
        images: Array.from(
          { length: 8 },
          (_, i) => `/assets/img/ocean-conservation/artivism-${String(i + 1).padStart(2, '0')}.jpg`
        ),
      },
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
    title: 'Funding and advisory partner to ABUADMUN',
    text:
      'DACTION helped establish ABUADMUN as an organization and is now a funding and advisory partner to its annual conferences, backed by a three-year commitment starting with the first conference in November 2026.',
  },
  {
    year: '2026 · Soil systems',
    title: 'DACTION Earth Summit: Compost, Cultivate, Conserve',
    text:
      'A full-day summit on soil health, composting, and sustainable food systems at the Federal University of Technology Akure, bringing informal youth waste workers in as co-facilitators alongside students.',
  },
  {
    year: '2025 · Clean energy',
    title: 'Hydrogen Horizons: Engineering Renewable Energy Solutions',
    text:
      'An energy dialogue, held in person and online, exploring hydrogen\u2019s role in the energy transition, connecting an NNPC executive and international researchers from Germany and Canada with Nigerian students and early-career engineers.',
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
]

export const CONTACT = {
  orgEmail: 'dactioninitiative@gmail.com',
  founderEmail: 'dannyolaj@gmail.com',
  instagram: 'https://www.instagram.com/daction_initiative/',
  linkedin: 'https://www.linkedin.com/in/daniel-olajuyigbe/',
  linkedinCompany: 'https://www.linkedin.com/company/daction-initiative',
  captainPlanetProfile:
    'https://captainplanetfoundation.org/about/our-people/daniel-olajuyigbe/',
  address: 'Chevy View Estate, Chevron Drive, Lekki, Lagos, Nigeria.',
}
