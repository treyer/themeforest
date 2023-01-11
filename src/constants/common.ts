import { ICON_URLS } from "./iconPaths";

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
    { id: 1, name: "Home", url: "/", isActive: false },
    { id: 2, name: "Services", url: "/services", isActive: true },
  ],
  About: [
    { id: 1, name: "Home", url: "/", isActive: false },
    { id: 2, name: "About Us", url: "/about", isActive: true },
  ],
  Blog: [
    { id: 1, name: "Home", url: "/", isActive: false },
    {
      id: 2,
      name: "2022 software development trends",
      url: "/blog",
      isActive: true,
    },
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

export const CONTACTS_LIST = [
  { id: 1, name: "Email address", value: "ensome@info.co.us" },
  { id: 2, name: "Phone number", value: "+1601-201-5580" },
  {
    id: 3,
    name: "Address",
    value: "1642 Washington Avenue, Jackson, MS, Mississippi, 39201",
  },
];
