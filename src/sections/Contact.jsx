// const Contact = () => {
//   return (
//     <section id="contact" className="!py-20 !px-6 bg-[#FFFDF9]">
//       <div className="max-w-4xl !mx-auto text-center">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800 !mb-6">
//           Contact Me
//         </h2>
//         <p className="text-gray-700 text-lg md:text-xl !mb-8">
//           I’m currently open to frontend roles and collaborations. You can reach me at:
//         </p>
//         <a
//           href="mailto:stanleychilaka22270@gmail.com"
//           className="!px-6 !py-3 rounded-lg bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition"
//         >
//           Email Me
//         </a>
//         <div className="!mt-10 flex justify-center !gap-6">
//           <a
//             href="https://github.com/BigCelz"
//             target="_blank"
//             rel="noreferrer"
//             className="text-cyan-500 font-semibold hover:underline"
//           >
//             GitHub
//           </a>
//           <a
//             href="https://www.linkedin.com/in/stanley-chilaka-50006b2a8/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
//             target="_blank"
//             rel="noreferrer"
//             className="text-yellow-500 font-semibold hover:underline"
//           >
//             LinkedIn
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;


import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="!py-20 !px-6 bg-[#FFFDF9]">
      <div className="max-w-5xl !mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center !mb-12">
          Let’s Connect
        </h2>

        <div className="bg-white rounded-2xl shadow-lg !p-8 !md:p-12 flex flex-col md:flex-row gap-10 items-center">
          {/* Left */}
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-gray-800 !mb-4">
              Open to opportunities & collaborations
            </h3>
            <p className="text-gray-700 !mb-6 leading-relaxed">
              I’m currently open to frontend roles, freelance gigs, and cool
              product ideas. If you’ve got something in mind, let’s talk.
            </p>

            <a
              href="mailto:stanleychilaka22270@gmail.com"
              className="inline-flex items-center gap-2 !px-6 !py-3 rounded-lg bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition"
            >
              <HiOutlineMail className="text-xl" />
              Email Me
            </a>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4 text-lg">
            <a
              href="https://github.com/BigCelz"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-gray-800 hover:text-cyan-500 transition"
            >
              <FaGithub className="text-2xl" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/stanley-chilaka-50006b2a8/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-gray-800 hover:text-cyan-500 transition"
            >
              <FaLinkedin className="text-2xl" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

