/* eslint-disable no-irregular-whitespace */
import { ICON_URLS } from "./iconPaths";

export const DROPDOWN_BUTTONS = [
  { id: 1, link: "/", description: "Home" },
  { id: 2, link: "/solutions", description: "Solutions" },
  { id: 3, link: "/blog", description: "Blog" },
  { id: 4, link: "/contacts", description: "Contacts" },
  { id: 5, link: "/team", description: "Our Team" },
  { id: 6, link: "/about", description: "About Us" },
  { id: 7, link: "/services", description: "Services" },
  { id: 8, link: "/faqs", description: "FAQ" },
];

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
  Contacts: [
    { id: 1, name: "Home", url: "/", isActive: false },
    { id: 2, name: "Contacts", url: "/contacts", isActive: true },
  ],
  Team: [
    { id: 1, name: "Home", url: "/", isActive: false },
    { id: 2, name: "Our team", url: "/team", isActive: true },
  ],
  FAQs: [
    { id: 1, name: "Home", url: "/", isActive: false },
    { id: 2, name: "FAQs", url: "/faqs", isActive: true },
  ],
  Solutions: [
    { id: 1, name: "Home", url: "/", isActive: false },
    { id: 2, name: "Solutions", url: "/solutions", isActive: true },
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
  {
    id: 1,
    iconUrl: ICON_URLS.Mail,
    name: "Email address",
    value: "ensome@info.co.us",
    valueShort: "ensome@info.co.us",
  },
  {
    id: 2,
    iconUrl: ICON_URLS.Call,
    name: "Phone number",
    value: "+1601-201-5580",
    valueShort: "+1601-201-5580",
  },
  {
    id: 3,
    iconUrl: ICON_URLS.Location,
    name: "Address",
    value: "1642 Washington Avenue, Jackson, MS, Mississippi, 39201",
    valueShort: `1642 Washington Avenue, Jackson, MS`,
  },
];

export const MAP_POINTS = [
  {
    type: "Feature",
    geometry: { type: "Point", coordinates: [23.7637, 52.0997] },
  },
  {
    type: "Feature",
    geometry: { type: "Point", coordinates: [21.0122, 52.2297] },
  },
  {
    type: "Feature",
    geometry: { type: "Point", coordinates: [14.4378, 50.0755] },
  },
];
