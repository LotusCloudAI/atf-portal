export interface Tile {
  title: string;
  desc: string;
  image: string;
  link: string;
}

export interface LangContent {
  heroTitle: string;
  heroTagline: string;
  becomeMember: string;
  donateNow: string;
  quickLinks: string[];
  connectTitle: string;
  newsletterText: string;
  tiles: Tile[];
}

export const EN_TILES: Tile[] = [
  { title: "News", desc: "Community updates & press releases.", image: "/images/news.png", link: "/news" },
  { title: "Events", desc: "Cultural festivals & gatherings.", image: "/images/events.png", link: "/events" },
  { title: "Chapters", desc: "Regional chapters & contacts.", image: "/images/chapters.png", link: "/chapters" },
  { title: "Programs", desc: "Education, youth & cultural initiatives.", image: "/images/programs.png", link: "/programs" },
  { title: "Scholarships", desc: "Support for bright Telugu students.", image: "/images/scholarships.png", link: "/scholarships" },
  { title: "Membership", desc: "Join our Telugu community.", image: "/images/membership.png", link: "/membership" },
  { title: "Donate", desc: "Support cultural & social causes.", image: "/images/donate.png", link: "/donate" },
  { title: "Media", desc: "Photos, videos & newsletters.", image: "/images/media.png", link: "/media" },
  { title: "Helpline", desc: "Support & assistance services.", image: "/images/helpline.png", link: "/helpline" },
  { title: "Careers", desc: "Jobs, internships & volunteering.", image: "/images/careers.png", link: "/careers" },
  { title: "Governance", desc: "Leadership & organizational structure.", image: "/images/governance.png", link: "/governance" },
  { title: "About ATF", desc: "Mission, vision & contact.", image: "/images/about.png", link: "/about" },
  { title: "Horoscope", desc: "Panchangam & predictions.", image: "/images/horoscope.png", link: "/horoscope" },
  { title: "Vedic Calendar", desc: "Festivals & auspicious days.", image: "/images/calendar.png", link: "/calendar" },
  { title: "Jobs & Business", desc: "Entrepreneurship & growth.", image: "/images/jobs.png", link: "/jobs" },
  { title: "Women Empowerment", desc: "Programs for women leaders.", image: "/images/women.png", link: "/women" },
];

export const TE_TILES: Tile[] = [
  { title: "వార్తలు", desc: "తెలుగు కమ్యూనిటీ తాజా అప్‌డేట్లు.", image: "/images/news.png", link: "/news" },
  { title: "కార్యక్రమాలు", desc: "సాంస్కృతిక వేడుకలు మరియు సమావేశాలు.", image: "/images/events.png", link: "/events" },
  { title: "శాఖలు", desc: "ప్రాంతీయ శాఖలు మరియు వివరాలు.", image: "/images/chapters.png", link: "/chapters" },
  { title: "పథకాలు", desc: "విద్యా, యువత కార్యక్రమాలు.", image: "/images/programs.png", link: "/programs" },
  { title: "విద్యావేతనాలు", desc: "తెలుగు విద్యార్థులకు మద్దతు.", image: "/images/scholarships.png", link: "/scholarships" },
  { title: "సభ్యత్వం", desc: "తెలుగు కుటుంబంలో చేరండి.", image: "/images/membership.png", link: "/membership" },
  { title: "దానం", desc: "సాంస్కృతిక కార్యక్రమాలకు మద్దతు.", image: "/images/donate.png", link: "/donate" },
  { title: "మీడియా", desc: "ఫోటోలు, వీడియోలు, వార్తలు.", image: "/images/media.png", link: "/media" },
  { title: "హెల్ప్‌లైన్", desc: "అత్యవసర సహాయం.", image: "/images/helpline.png", link: "/helpline" },
  { title: "ఉద్యోగాలు", desc: "ఉద్యోగాలు & సేవలు.", image: "/images/careers.png", link: "/careers" },
  { title: "పాలన", desc: "నాయకత్వం & వ్యవస్థ.", image: "/images/governance.png", link: "/governance" },
  { title: "గురిగి", desc: "దృష్టి & సంప్రదించండి.", image: "/images/about.png", link: "/about" },
  { title: "జాతకం", desc: "పంచాంగం & జాతకం.", image: "/images/horoscope.png", link: "/horoscope" },
  { title: "వేద క్యాలెండర్", desc: "పండుగలు & శుభదినాలు.", image: "/images/calendar.png", link: "/calendar" },
  { title: "ఉద్యోగాలు & వ్యాపారం", desc: "అవకాశాలు.", image: "/images/jobs.png", link: "/jobs" },
  { title: "మహిళా శక్తి", desc: "మహిళా అభివృద్ధి.", image: "/images/women.png", link: "/women" },
];

export const TEXT: Record<"EN" | "TE", LangContent> = {
  EN: {
    heroTitle: "American Telugu Federation",
    heroTagline: "A unified hub for Telugu communities across America.",
    becomeMember: "Become a Member",
    donateNow: "Donate",
    quickLinks: ["News", "Events", "Programs", "Membership"],
    connectTitle: "Connect with Us",
    newsletterText: "Subscribe to our Newsletter",
    tiles: EN_TILES,
  },
  TE: {
    heroTitle: "అమెరికన్ తెలుగు ఫెడరేషన్",
    heroTagline: "తెలుగు కమ్యూనిటీ ఐక్య వేదిక.",
    becomeMember: "సభ్యుడిగా చేరండి",
    donateNow: "దానం చేయండి",
    quickLinks: ["వార్తలు", "కార్యక్రమాలు", "పథకాలు", "సభ్యత్వం"],
    connectTitle: "మాతో కలవండి",
    newsletterText: "మా వార్తాపత్రికకు చందా ఇవ్వండి",
    tiles: TE_TILES,
  },
};
