import FoodAppImg from "../assets/foodapp home.png";
import storeImg from "../assets/store.png";
import aioImg from "../assets/aio.png";
import disneyImg from "../assets/disney.png";

const projects = [
  {
    id: 1,
    title: "Food App",
    description:
      "A responsive food ordering app built with Next.js, Zustand, and Tailwind CSS.",
    image: FoodAppImg,
    live: "https://food-app-delta-lake.vercel.app/",
  },
  {
    id: 2,
    title: "E-Commerce Website",
    description:
      "A fully functional e-commerce website built with React, Tailwind CSS, and Redux Toolkit for state management. The site features a clean, responsive design and offers smooth product browsing",
    image: storeImg,
    live: "https://kaida-store.vercel.app/",
  },
  {
    id: 3,
    title: "AIO Logistics Network",
    description:
      "AIO Logistics Network LTD is a modern logistics platform providing reliable nationwide and international deliveries across major cities in Nigeria and beyond.",
    image: aioImg,
    live: "https://aio.ng/",
  },
  {
    id: 4,
    title: "Disney Clone",
    description:
      "A responsive Disney+ clone built with React, Tailwind CSS and TMDB API.",
    image: disneyImg,
    live: "https://disney-plus-weld.vercel.app/",
  },
];

export default projects;
