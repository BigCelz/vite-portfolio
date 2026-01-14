import FoodAppImg from "../assets/foodapp home.png";
import storeImg from "../assets/store.png";
import aioImg from "../assets/aio.png";
import disneyImg from "../assets/disney.png";
import kaidaHeavensImg from "../assets/kaida.png";

const projects = [
  {
    id: 1,
    title: "Food App",
    description:
      "A responsive food ordering app built with Next.js, Zustand, and Tailwind CSS.",
    image: FoodAppImg,
    live: "https://food-app-delta-lake.vercel.app/",
    stack: ["next", "zustand", "tailwind"],
  },
  {
    id: 2,
    title: "E-Commerce Website",
    description:
      "A fully functional e-commerce website built with React, Tailwind CSS, and Redux Toolkit for state management.",
    image: storeImg,
    live: "https://kaida-store.vercel.app/",
    stack: ["react", "redux", "tailwind"],
  },
  {
    id: 3,
    title: "AIO Logistics Network",
    description:
      "A modern logistics platform providing reliable nationwide and international deliveries.",
    image: aioImg,
    live: "https://aio.ng/",
    stack: ["react", "tailwind"],
  },
  {
    id: 4,
    title: "Disney Clone",
    description:
      "A responsive Disney+ clone built with React, Tailwind CSS and TMDB API.",
    image: disneyImg,
    live: "https://disney-plus-weld.vercel.app/",
    stack: ["react", "tailwind", "api"],
  },
  {
    id: 5,
    title: "KaidaHeavens",
    description: "A MERN full-stack property platform to list, manage, and discover properties with secure login and live updates.",
    image: kaidaHeavensImg,
    live: "https://real-estate-liart-psi.vercel.app/",
    stack: ["vite", "NodeJs", "express", "mongodb", "redux", "tailwind", ],
  },
];

export default projects;
