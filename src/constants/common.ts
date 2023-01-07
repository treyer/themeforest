import { ICON_URLS } from "./iconPaths";

export const LOADER_WIDTH = 100;
export const LOADER_HEIGHT = 70;

export const SOCIAL_NETWORK_LIST = [
  { id: 1, url: ICON_URLS.Facebook },
  { id: 2, url: ICON_URLS.Twitter },
  { id: 3, url: ICON_URLS.LinkedIn },
  { id: 4, url: ICON_URLS.Youtube },
  { id: 5, url: ICON_URLS.Dribbble },
  { id: 6, url: ICON_URLS.Behance },
];

export const BREADCRUMBS_LIST = {
  Services: [
    { name: "Home", url: "/", isActive: false },
    { name: "Services", url: "/services", isActive: true },
  ],
  About: [
    { name: "Home", url: "/", isActive: false },
    { name: "About Us", url: "/about", isActive: true },
  ],
};

export const CUSTOMERS_LIST = [
  { id: 1, src: "/assets/photos/logo_1.png", alt: "WildWood logo" },
  { id: 2, src: "/assets/photos/logo_2.png", alt: "Apple Rush logo" },
  { id: 3, src: "/assets/photos/logo_3.png", alt: "LLi logo" },
  { id: 4, src: "/assets/photos/logo_4.png", alt: "AW Group logo" },
  { id: 5, src: "/assets/photos/logo_5.png", alt: "Hard To Ignore logo" },
  { id: 6, src: "/assets/photos/logo_6.png", alt: "FairTech logo" },
];
