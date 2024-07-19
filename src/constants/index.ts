import {
  deezer,
  dropbox,
  reddit,
  slack,
  superme,
  zalando,
  user1,
  user2,
  user3,
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

export const taskList = [
  {
    id: 1,
    name: "Meeting with Client",
    checked: false,
    users: [user1, user2, user3],
  },
  {
    id: 2,
    name: "Design Review with Stakeholders",
    checked: true,
    users: [user3, user1, user2],
  },
  {
    id: 3,
    name: "Design for Landing Page",
    checked: false,
    users: [user2, user3, user1],
  },
];

export const users = [user3, user1, user2];
