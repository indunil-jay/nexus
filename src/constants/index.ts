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
  { id: 1, url: "#home", name: "Home" },
  { id: 2, url: "#benefits", name: "Benefits" },
  { id: 3, url: "#features", name: "Features" },
  { id: 4, url: "#Pricing", name: "Pricing" },
  { id: 5, url: "#Faq", name: "Faq" },
] as const;

export const trustedCompanies = [
  { id: 1, img: deezer, name: "company-logo" },
  { id: 2, img: superme, name: "company-logo" },
  { id: 3, img: slack, name: "company-logo" },
  { id: 4, img: zalando, name: "company-logo" },
  { id: 5, img: reddit, name: "company-logo" },
  { id: 6, img: dropbox, name: "company-logo" },
  { id: 7, img: deezer, name: "company-logo" },
  { id: 8, img: superme, name: "company-logo" },
  { id: 9, img: slack, name: "company-logo" },
  { id: 10, img: zalando, name: "company-logo" },
  { id: 11, img: reddit, name: "company-logo" },
  { id: 12, img: dropbox, name: "company-logo" },
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

export const faqs = [
  {
    id: 1,
    question: "What features should I look for in a task management app?",
    answer:
      "When looking for a task management app, you should consider features such as task assignment, due dates, notifications, collaboration tools, progress tracking, integration with other apps, and a user-friendly interface.",
  },
  {
    id: 2,
    question: "How does a task management app help with teamwork?",
    answer:
      "A task management app helps with teamwork by providing a centralized platform where team members can collaborate, share updates, assign tasks, track progress, and communicate effectively. This ensures everyone is on the same page and work is coordinated efficiently.",
  },
  {
    id: 3,
    question: "What are some popular task management apps?",
    answer:
      "Some popular task management apps include Trello, Asana, Monday.com, Todoist, Microsoft To Do, and ClickUp. These apps offer various features to help individuals and teams manage their tasks and projects effectively.",
  },
  {
    id: 4,
    question: "What are the benefits of using a task management app?",
    answer:
      "The benefits of using a task management app include improved organization, enhanced productivity, better time management, streamlined communication, and the ability to track progress and deadlines. These apps help individuals and teams stay on top of their tasks and projects.",
  },
  {
    id: 5,
    question: "Is there a free version of a task management app available?",
    answer:
      "Yes, many task management apps offer free versions with basic features. Examples include Trello, Asana, Todoist, and Microsoft To Do. These free versions are often sufficient for individuals or small teams with basic task management needs.",
  },
  {
    id: 6,
    question: "How does a task management app help me prioritize my tasks?",
    answer:
      "A task management app helps prioritize tasks by allowing you to set due dates, assign priority levels, and categorize tasks. Features like reminders, notifications, and progress tracking also help ensure that important tasks are completed on time.",
  },
] as const;

export const testimonials = [
  {
    id: 1,
    img: user1,
    name: "Carter Vetrovs",
    occupation: "Project Manager",
    rating: 5,
    review: `Nexus stands out for its flexibility and customization
              options. it's helped me streamline my workflow and stay on
              top of my to-do list.`,
  },
  {
    id: 2,
    img: user2,
    name: "Alexandra Smith",
    occupation: "Software Engineer",
    rating: 4,
    review: `Using Nexus has significantly improved our team
              collaboration. The intuitive interface and powerful
              features make project management a breeze.`,
  },
  {
    id: 3,
    img: user3,
    name: "James Nguyen",
    occupation: "Product Designer",
    rating: 5,
    review: `Nexus is a game-changer! Its robust project tracking
              capabilities and real-time updates have kept my projects
              on schedule and within budget.`,
  },
  {
    id: 4,
    img: user1,
    name: "Sophia Martinez",
    occupation: "Marketing Director",
    rating: 5,
    review: `I love how Nexus integrates with our existing tools.
              It's streamlined our marketing campaigns and improved
              overall efficiency.`,
  },
  {
    id: 5,
    img: user2,
    name: "David Lee",
    occupation: "Business Analyst",
    rating: 4,
    review: `Nexus offers excellent analytics and reporting
              features. It's helped us make data-driven decisions and
              optimize our project strategies.`,
  },
];
