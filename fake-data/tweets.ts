import { ITweet } from "../components/shared/tweet/index";

export const tweets: ITweet[] = [
  {
    id: String(Math.random() * 100000),
    description:
      "Built this app to dynamically curate the essential resources from the most helpful/verified posts. I am constantly improving the app based on user interactions.",
    username: "sri_mash",
    name: "Mashrin Srivastava",
    date: new Date("2021-4-24"),
    likes: 5000,
    replies: 300,
    retweets: 786,
  },
  {
    id: String(Math.random() * 100000),
    description:
      " Hey, this is just another clone of twitter, no integration is made, maybe I should continue working on it with a backend as well?",
    username: "sri_mash",
    name: "Mashrin Srivastava",
    avatar: "/images/personal.jpg",
    date: new Date("2020-7-8"),
    likes: 511,
    replies: 78,
    retweets: 32,
  },
  {
    id: String(Math.random() * 100000),
    description: ` Created this page with these two technologies <a href="https://nextjs.org/" target="_blank" class='mention'>@nextjs</a> & 
    <a href="https://tailwindcss.com/" target="_blank" class='mention'>@tailwind</a>
     man I really love them! <a class='hashtag'>#nextjs_and_tailwind_rocks</a>`,
    username: "mhmdou1",
    name: "Mashrin Srivastava",
    avatar: "/images/personal.jpg",
    date: new Date("2020-7-8"),
    likes: 554,
    replies: 112,
    retweets: 60,
    assets: [
      { type: "image", url: "/images/nextjs.png" },
      { type: "image", url: "/images/nextjs.png" },
      { type: "image", url: "/images/nextjs.png" },
    ],
  },
  {
    id: String(Math.random() * 100000),
    description: `Yep we are awesome!`,
    username: "polkadot",
    name: "Polkadot",
    avatar: "/images/polka.png",
    date: new Date("2020-7-8"),
    likes: 210,
    replies: 78,
    retweets: 32,
  },
  {
    id: String(Math.random() * 100000),
    description: `We second it! don't worry you wont ever be able to keep up with our new updates speed.`,
    username: "subsocial",
    name: "Subsocial",
    avatar: "/images/sub.jpg",
    date: new Date("2020-7-8"),
    likes: 199,
    replies: 45,
    retweets: 22,
  },
];
