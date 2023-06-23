/* ======================= Main Navigation Bar ======================= */

interface MainNavbarMenu {
  aboutUs: string;
  wallet: string;
  partners: string;
  joinUs: string;
  whitepaper: string;
}

interface MainNavbar {
  menu: MainNavbarMenu;
}

/* ======================= Footer ======================= */

interface FooterMenu {
  aboutUs: string;
  wallet: string;
  partners: string;
  joinUs: string;
  whitepaper: string;
}

interface Footer {
  info: {
    excerpt: string[];
    contact: string;
  };
  navigation: {
    title: string;
    menu: FooterMenu;
  };
  media: {
    audit: {
      title: string;
    };
    listing: {
      title: string;
    };
  };
  socialMedia: {
    title: string;
  };
  smartContract: {
    title: string;
  };
}

/* ======================= Home Page ======================= */

interface HomeBanner {
  excerpt: string[];
}

interface EcosystemIntro {
  excerpt: string[];
}

export interface EcosystemCompany {
  title: string;
  excerpt: string[];
  logoUrl: string;
}

interface HomeEcosystem {
  intro: EcosystemIntro;
  companies: EcosystemCompany[];
}

export interface AIFlowItem {
  title: string;
  excerpt: string[];
  iconUrl: string;
}

interface HomeAIFlow {
  items: AIFlowItem[];
}

interface RoadmapIntro {
  title: string;
  excerpt: string[];
}

export interface RoadmapItemList {
  header: {
    iconUrl: string;
    title: string;
  };
  body: {
    list: string[];
  };
}

interface RoadmapItem {
  titleBox: {
    iconUrl: string;
    title: string;
  };
  list: RoadmapItemList[];
  color: string;
}

interface HomeRoadmap {
  intro: RoadmapIntro;
  items: RoadmapItem[];
}

interface HomeDownloadBSI {
  title: string;
  excerpt: string[];
  downloadTitle: string;
}

interface HomePartnership {
  intro: {
    title: string;
    excerpt: string[];
  };
  supported: {
    title: string;
  };
  strategic: {
    title: string;
  };
  media: {
    title: string;
  };
}

interface JoinUsIntro {
  title: string;
  excerpt: string[];
}

export interface JoinUsItem {
  title: string;
  excerpt: string[];
  button: string;
  color: string;
  iconUrl: string;
}

interface HomeJoinUs {
  intro: JoinUsIntro;
  partners: JoinUsItem;
  ambassadors: JoinUsItem;
}

interface Home {
  banner: HomeBanner;
  ecosystem: HomeEcosystem;
  aiFlow: HomeAIFlow;
  roadmap: HomeRoadmap;
  downloadBSI: HomeDownloadBSI;
  partnership: HomePartnership;
  joinUs: HomeJoinUs;
}

/* ======================= Main Export ======================= */

export interface Dictionary {
  mainNavbar: MainNavbar;
  footer: Footer;
  home: Home;
}
