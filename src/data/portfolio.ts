/**
 * Central portfolio data for KP Photography (Krishna Patel).
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

const WA = '919691857981';
const wa = (msg: string) => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;

export const profile = {
  fullName: 'Krishna Patel',
  displayName: 'KP Photography',
  firstName: 'KP',
  seriesTag: 'PHOTOGRAPHY',
  /** Studio card shown at the very start of the opening sequence. */
  originalLabel: 'THE KP PHOTOGRAPHY',
  role: 'Photographer & Videographer',
  tagline: ['Cinematic Photographer', 'Videographer', 'Editor', 'Website Developer'],
  intro:
    'Krishna Patel — a photographer, videographer and editor from Kawardha, Chhattisgarh. Shooting weddings and celebrations since 2021, with 100+ weddings behind the lens.',
  location: 'Kawardha, Chhattisgarh',
  email: 'kp6261180241@gmail.com',
  whatsapp: WA,
  whatsappLink: wa('Namaste KP Photography, I want to book a shoot.'),
  links: {
    instagram: 'https://www.instagram.com/kp_photography._143',
    youtube: 'https://youtube.com/@kp_photography_143',
    facebook: 'https://www.facebook.com/share/18edw2Png7/',
  },
  resumePdf: '/assets/KP_Photography_Price_List.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Krishna Patel of KP Photography shooting with a gimbal camera',
  },
  interests: ['Wedding Films', 'Cinematic Reels', 'Album Design', 'Website Development'],
};

export const education = [
  {
    school: 'KP Photography',
    place: 'Kawardha, Chhattisgarh',
    degree: 'Photography, Videography & Editing',
    period: 'Since 2021',
    score: '100+ weddings',
  },
];

export const experience = [
  {
    company: 'KP Photography',
    role: 'Photographer & Editor',
    place: 'Kawardha, CG',
    period: '2021 – Present',
    points: [
      'Shot 100+ weddings with traditional, cinematic and candid coverage.',
      'Edit wedding films, reels, teasers and album spreads in-house.',
      'Build wedding invitation websites and invitation videos for clients.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Booking link (shown as a button). Omit to hide it. */
  github?: string;
  /** Optional cover photo. Without it the generated motif art is used. */
  image?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'wedding-shoots',
    title: 'Wedding Shoots',
    year: '2021–Now',
    genre: 'Wedding • Cinematic • Candid',
    logline: 'Complete wedding coverage — traditional to cinematic photography and videography, with drone, reels and luxury albums.',
    stack: ['Traditional', 'Cinematic', 'Candid', 'Gimbal', 'Drone'],
    build: [
      '100+ weddings shot since 2021, with 3-day and 4-day coverage.',
      'Five packages from Basic to Diamond — full HD wedding video, cinematic teaser, highlight film and 25 to 50 sheet albums (12×36).',
    ],
    features: [
      'Traditional & cinematic photography',
      'Candid photography & videography',
      'Gimbal videography',
      'Drone shoot — up to all days',
      '2 to 7 event reels',
      'Premium album 12×36',
    ],
    metrics: [
      { value: '100+', label: 'weddings shot' },
      { value: '6', label: 'years of experience' },
      { value: '5', label: 'wedding packages' },
      { value: '25–50', label: 'album sheets' },
    ],
    github: wa('Namaste, I want to know about your wedding packages.'),
    image: '/assets/shoot-wedding.webp',
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'flow',
  },
  {
    id: 'celebrations',
    title: 'Commercial & Celebration',
    year: '2021–Now',
    genre: 'Events • Commercial • Reels',
    logline: 'Car & bike deliveries, birthdays, baby showers, anniversaries, baby shoots, mundan, griha pravesh, shop promotions and every small function.',
    stack: ['Photo', 'Video', 'Reels', 'Drone'],
    build: [
      'Five packages from ₹4,999 to ₹21,999, covering 1 to 6 hours.',
      'Every package includes full HD video coverage and cinematic reels.',
    ],
    features: [
      'Car & bike delivery',
      'Birthday & baby shower',
      'Anniversary & baby shoot',
      'Mundan & griha pravesh',
      'Shop & business promotion',
      'Cinematic reels & highlight video',
    ],
    metrics: [
      { value: '10', label: 'occasion types' },
      { value: '5', label: 'packages' },
      { value: '₹4,999', label: 'starting price' },
      { value: '1–6 hrs', label: 'coverage' },
    ],
    github: wa('Namaste, I want to know about your event shoot packages.'),
    image: '/assets/shoot-celebration.webp',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'shield',
  },
  {
    id: 'album-design',
    title: 'Album Design & Editing',
    year: '2021–Now',
    genre: 'Albums • Editing • Design',
    logline: 'Wedding album spreads, cinematic edits and graphics — designed and edited in-house.',
    stack: ['After Effects', 'Premiere Pro', 'DaVinci Resolve', 'Filmora', 'CapCut'],
    build: [
      'Luxury 12×36 album sheets, 25 to 50 sheets across the wedding packages.',
      'Cinematic teasers, highlight films, event reels and wedding title editing.',
    ],
    features: ['Album spreads 12×36', 'Wedding title editing', 'Cinematic teaser', 'Highlight video', 'Event reels', 'Graphic design'],
    metrics: [
      { value: '25–50', label: 'album sheets' },
      { value: '12×36', label: 'album size' },
      { value: '5', label: 'editing tools' },
    ],
    github: wa('Namaste, I want to know about album design and editing.'),
    image: '/assets/shoot-album.webp',
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
    motif: 'tenants',
  },
  {
    id: 'invitation-websites',
    title: 'Wedding Invitation Websites',
    year: '2026',
    genre: 'Web • Invitations • Video',
    logline: 'Animated wedding invitation websites and invitation videos, delivered as a link you can share on WhatsApp.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    build: [
      'Invitation websites with a countdown, scratch-to-reveal date, event scrolls, venue map and WhatsApp RSVP.',
      'Built from a reusable template — only one data file changes for each new client.',
    ],
    features: ['Countdown to the wedding', 'Event schedule scrolls', 'Venue map', 'WhatsApp RSVP', 'Invitation video'],
    metrics: [
      { value: '1 file', label: 'edited per client' },
      { value: 'WhatsApp', label: 'RSVP' },
      { value: 'Link', label: 'ready to share' },
    ],
    github: wa('Namaste, I want a wedding invitation website.'),
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'flow',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  { id: 'weddings', title: '100+ Weddings', org: 'Since 2021', detail: 'Attended and shot more than a hundred weddings.', laurel: 'Wedding Specialist' },
  { id: 'years', title: '6 Years', org: 'KP Photography', detail: 'Photography, video editing, content creation, graphic design and website development.', laurel: 'Since 2021' },
  { id: 'cinematic', title: 'Cinematic Films', org: 'Teasers • Highlights', detail: 'Cinematic teasers, highlight films and full HD wedding videos in the packages.', laurel: 'Cinematic' },
  { id: 'albums', title: 'Luxury Albums', org: '12×36 Sheets', detail: 'Albums of 25 to 50 sheets, designed in-house.', laurel: 'Album Design' },
  { id: 'drone', title: 'Drone Coverage', org: 'Weddings & Events', detail: 'Drone shoots from 1 day up to all days of the wedding.', laurel: 'Aerial' },
];

/** Packages rail (re-uses the credentials rail). Each card opens WhatsApp. */
export type Certification = { issuer: string; name: string; link: string };

const pk = (issuer: string, name: string) => ({ issuer, name, link: wa(`Namaste, I am interested in the ${issuer} ${name.split(' · ')[0]} package.`) });

export const certifications: Certification[] = [
  pk('Wedding', 'Basic · ₹25,000 (3 days)'),
  pk('Wedding', 'Silver · ₹49,999 (3 days)'),
  pk('Wedding', 'Golden · ₹64,999 (3 days)'),
  pk('Wedding', 'Platinum · ₹89,999 (3 days)'),
  pk('Wedding', 'Diamond · ₹99,999 (3 days)'),
  pk('Celebration', 'Basic · ₹4,999'),
  pk('Celebration', 'Silver · ₹7,999'),
  pk('Celebration', 'Golden · ₹11,999'),
  pk('Celebration', 'Platinum · ₹16,999'),
  pk('Celebration', 'Diamond · ₹21,999'),
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'cameras',
    title: 'Cameras',
    subtitle: 'Sony • Nikon • Canon',
    skills: [
      { name: 'Sony', mono: 'So' },
      { name: 'Nikon', mono: 'Ni' },
      { name: 'Canon', mono: 'Ca' },
    ],
  },
  {
    id: 'lenses',
    title: 'Lenses',
    subtitle: 'Glass for every frame',
    skills: [
      { name: 'Prime Lens', mono: 'Pl' },
      { name: 'Zoom Lens', mono: 'Zl' },
      { name: 'Wide & Ultra-Wide', mono: 'Ww' },
      { name: 'Standard Lens', mono: 'Sl' },
    ],
  },
  {
    id: 'editing',
    title: 'Editing',
    subtitle: 'Video, colour & motion',
    skills: [
      { name: 'After Effects', mono: 'Ae' },
      { name: 'Premiere Pro', mono: 'Pp' },
      { name: 'DaVinci Resolve', mono: 'Dv' },
      { name: 'Filmora', mono: 'Fi' },
      { name: 'CapCut', mono: 'Cc' },
    ],
  },
  {
    id: 'craft',
    title: 'Craft',
    subtitle: 'What I make',
    skills: [
      { name: 'Photography', mono: 'Ph', note: 'Primary' },
      { name: 'Videography', mono: 'Vd' },
      { name: 'Content Creation', mono: 'Cn' },
      { name: 'Graphic Design', mono: 'Gd' },
      { name: 'Website Development', mono: 'Wd' },
    ],
  },
];

/** Where a skill shows up in the work above. */
export const skillEvidence: Record<string, string[]> = {
  'After Effects': ['Album Design & Editing'],
  'Premiere Pro': ['Album Design & Editing'],
  'DaVinci Resolve': ['Album Design & Editing'],
  Filmora: ['Album Design & Editing'],
  CapCut: ['Album Design & Editing'],
  'Website Development': ['Wedding Invitation Websites'],
  'Graphic Design': ['Album Design & Editing'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Beginning',
    period: '2021',
    synopsis: 'KP Photography begins in Kawardha, Chhattisgarh.',
    episodes: [
      { code: 'S01 E01', title: 'First Frame', description: 'Photography starts in 2021 — the first shoots, the first clients.', tags: ['Photography', '2021'], runtime: 'Since 2021', palette: amber },
    ],
  },
  {
    number: 2,
    title: 'On Location',
    period: '2021 – Present',
    synopsis: 'Weddings, celebrations and commercial shoots, again and again.',
    episodes: [
      { code: 'S02 E01', title: 'The Wedding Season', description: 'More than 100 weddings shot — traditional, cinematic and candid coverage.', tags: ['Weddings', 'Cinematic', 'Candid'], runtime: '100+ weddings', palette: crimson },
      { code: 'S02 E02', title: 'Every Celebration', description: 'Birthdays, baby showers, anniversaries, mundan, griha pravesh, car and bike deliveries.', tags: ['Events', 'Reels'], runtime: '10 occasion types', palette: jade },
      { code: 'S02 E03', title: 'Above It All', description: 'Drone coverage and gimbal videography for bigger, smoother stories.', tags: ['Drone', 'Gimbal'], runtime: 'Up to all days', palette: ocean },
    ],
  },
  {
    number: 3,
    title: 'In the Edit Suite',
    period: 'Ongoing',
    synopsis: 'Every shoot gets its second life on the timeline.',
    episodes: [
      { code: 'S03 E01', title: 'The Cut', description: 'Cinematic teasers, highlight films and event reels edited in Premiere Pro, After Effects, DaVinci Resolve, Filmora and CapCut.', tags: ['Premiere Pro', 'After Effects', 'DaVinci Resolve'], runtime: '5 editing tools', palette: violet },
      { code: 'S03 E02', title: 'The Album', description: 'Luxury 12×36 album sheets, designed from the best frames.', tags: ['Albums', '12×36'], runtime: '25–50 sheets', palette: amber },
    ],
  },
  {
    number: 4,
    title: 'Beyond the Lens',
    period: '2026',
    synopsis: 'Design and code join the camera.',
    episodes: [
      { code: 'S04 E01', title: 'The Designer', description: 'Graphic design and content creation for clients and celebrations.', tags: ['Graphic Design', 'Content'], runtime: 'Ongoing', palette: crimson },
      { code: 'S04 E02', title: 'The Developer', description: 'Animated wedding invitation websites and invitation videos, delivered as a shareable link.', tags: ['HTML', 'CSS', 'JavaScript'], runtime: '2026', palette: jade },
    ],
  },
  {
    number: 5,
    title: 'Your Story',
    period: 'Now streaming',
    synopsis: 'The next episode is yours — message on WhatsApp to book.',
    episodes: [
      { code: 'S05 E01', title: 'Book the Shoot', description: 'Weddings from ₹25,000 and celebrations from ₹4,999. See the price list for every package.', tags: ['Weddings', 'Celebrations'], runtime: 'WhatsApp 9691857981', palette: violet },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'The beginning', title: '2021', detail: 'KP Photography starts', palette: amber },
  { label: 'Wedding count', title: '100+ Weddings', detail: 'Shot since 2021', palette: crimson },
  { label: 'Experience', title: '6 Years', detail: 'Photo • Video • Editing', palette: ocean },
  { label: 'Top package', title: 'Diamond', detail: 'Premium cinematic film • 50-sheet album', palette: violet },
  { label: 'Starter package', title: 'Basic', detail: 'From ₹25,000 for 3 days', palette: jade },
  { label: 'Event shoots', title: 'From ₹4,999', detail: 'Commercial & celebration packages', palette: amber },
  { label: 'Aerial', title: 'Drone Shoot', detail: 'Up to all days of the wedding', palette: ocean },
  { label: 'Editing suite', title: 'Premiere Pro', detail: 'with After Effects & DaVinci Resolve', palette: violet },
  { label: 'Albums', title: '12×36', detail: '25 to 50 luxury sheets', palette: crimson },
  { label: 'Based in', title: 'Kawardha', detail: 'Chhattisgarh, India', palette: jade },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  { kicker: 'Introducing', title: 'KP Photography', lines: ['Krishna Patel · Kawardha, Chhattisgarh', 'Photographer · Videographer · Editor'], chips: ['Since 2021'] },
  { kicker: 'Experience', title: '100+ Weddings', lines: ['6 years behind the lens', 'Traditional, cinematic and candid coverage'] },
  { kicker: 'Gear', title: 'Sony · Nikon · Canon', lines: ['Prime, zoom, wide and ultra-wide lenses', 'Gimbal and drone coverage'], chips: ['Sony', 'Nikon', 'Canon', 'Drone', 'Gimbal'] },
  { kicker: 'Editing', title: 'Cut to perfection.', lines: ['After Effects · Premiere Pro · DaVinci Resolve', 'Filmora · CapCut'] },
  { kicker: 'Packages', title: 'Weddings & Celebrations', lines: ['Wedding packages from ₹25,000', 'Event packages from ₹4,999'] },
  { kicker: 'Book now', title: 'Your story, beautifully shot.', lines: ['WhatsApp 9691857981'] },
];

export type ProfileId = 'kp' | 'brand' | 'admin' | 'client';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  { id: 'kp', name: 'Krishna', blurb: 'The full series, in order', color: '#e5132b', order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'] },
  { id: 'brand', name: 'Brand', blurb: 'Commercial shoots, reels & rates first', color: '#4cc9ff', order: ['originals', 'story', 'moments', 'skills', 'about', 'journey', 'picks'] },
  { id: 'admin', name: 'Admin', blurb: 'Gear, skills & the journey first', color: '#46e3a8', order: ['skills', 'journey', 'about', 'originals', 'moments', 'picks', 'story'] },
  { id: 'client', name: 'Client', blurb: 'Weddings, packages & price list first', color: '#ffb547', order: ['originals', 'story', 'picks', 'moments', 'journey', 'about', 'skills'] },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Story & experience', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Work', meta: `${projects.length} Originals • Since 2021`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 • KP Photography', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Packages`, palette: crimson },
  story: { nav: 'Price List', card: 'The Full Story', meta: 'Price list • View & download', palette: violet },
};
