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
