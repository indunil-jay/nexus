import {
  deezer,
  dropbox,
  reddit,
  slack,
  superme,
  zalando,
} from "@/constants/images";

export const navigations = [
  { id: 1, url: "/", name: "Home" },
  { id: 2, url: "/benefits", name: "Benefits" },
  { id: 3, url: "/features", name: "Features" },
  { id: 4, url: "/Pricing", name: "Pricing" },
  { id: 5, url: "/Faq", name: "Faq" },
] as const;

export const trustedCompanies = [
  { id: 1, img: deezer, name: "company-logo" },
  { id: 2, img: superme, name: "company-logo" },
  { id: 3, img: slack, name: "company-logo" },
  { id: 4, img: zalando, name: "company-logo" },
  { id: 5, img: reddit, name: "company-logo" },
  { id: 6, img: dropbox, name: "company-logo" },
] as const;
