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

export const pricingPlans = [
  {
    id: 1,
    name: "Basic Plan",
    describe: "Perfect for individuals and small teams",
    price: 9.99,
    btnText: "Get Started",
    features: [
      "Task management made easy",
      "Collaborate with ease",
      "Track progress Effortlessly",
    ],
  },
  {
    id: 2,
    name: "Business Plan",
    describe: "Ideal for growing teams and business",
    price: 29.99,
    btnText: "Get Started",
    features: [
      "Advanced task management features",
      "Enhanced collaboration tools",
      "Customizable workflows",
      "integrate with your favorite apps",
    ],
  },
  {
    id: 3,
    name: "Enterprise Plan",
    describe: "Tailored solutions for large organizations",
    price: 69.99,
    btnText: "Get Started",
    features: [
      "Advance security features",
      "Dedicated account manager",
      "24/7 customer support",
      "Enterprise-grade integrations",
      "Customizable reporting",
    ],
  },
];
