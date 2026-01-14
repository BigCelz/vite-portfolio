// import { FaReact } from "react-icons/fa";
// import { SiNextdotjs, SiTailwindcss, SiRedux } from "react-icons/si";
// import { TbApi } from "react-icons/tb";
// import { FaNodeJs } from "react-icons/fa";
// import { SiVite } from "react-icons/si";
// import { SiMongodb } from "react-icons/si";

// const StackIcons = {
//   react: <FaReact className="text-cyan-500" />,
//   NodeJs: <FaNodeJs className="text-black" />,
//   vite: <SiVite className="w-5 h-5" style={{ color: "#646CFF" }} />,
//   mongodb: <SiMongodb className="text-green-600 w-5 h-5" />,
//   next: <SiNextdotjs className="text-black" />,
//   tailwind: <SiTailwindcss className="text-sky-500" />,
//   redux: <SiRedux className="text-purple-600" />,
//   zustand: (
//     <span
//       className="flex items-center justify-center 
//                    w-6 h-6 rounded-full 
//                    bg-gray-200 text-gray-800 
//                    font-bold text-xs"
//     >
//       Z
//     </span>
//   ),
//   express: (
//     <span
//       className="flex items-center justify-center 
//                    w-6 h-6 rounded-full 
//                    bg-gray-200 text-gray-800 
//                    font-bold text-xs"
//     >
//       ex
//     </span>
//   ),
//   api: (
//     <span
//       className="flex items-center justify-center 
//                    w-6 h-6 rounded-full 
//                    bg-gray-200 text-gray-800 
//                    font-bold text-xs"
//     >
//       TMDb
//     </span>
//   ),
// };

// export default StackIcons;


import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiRedux, SiVite, SiMongodb } from "react-icons/si";

const StackIcons = {
  react: <FaReact className="text-cyan-500 w-5 h-5" />,
  NodeJs: <FaNodeJs className="text-green-700 w-5 h-5" />,
  vite: <SiVite className="text-indigo-500 w-5 h-5" />,
  mongodb: <SiMongodb className="text-green-600 w-5 h-5" />,
  next: <SiNextdotjs className="text-black w-5 h-5" />,
  tailwind: <SiTailwindcss className="text-sky-500 w-5 h-5" />,
  redux: <SiRedux className="text-purple-600 w-5 h-5" />,

  // Custom text badges
  zustand: (
    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 text-gray-800 font-semibold text-xs tracking-tight">
      Z
    </span>
  ),
  express: (
    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 text-gray-800 font-semibold text-xs tracking-tight">
      Ex
    </span>
  ),
  api: (
    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 text-gray-800 font-semibold text-xs tracking-tight">
      TM
    </span>
  ),
};

export default StackIcons;


