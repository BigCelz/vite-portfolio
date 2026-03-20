import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const About = () => {
  return (
    <section id="about" className="!py-20 !px-6">
      <div className="max-w-4xl !mx-auto text-center">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 !mb-3">
            About Me
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed">
            Hello! I'm <span className="font-bold">Stanley Chilaka</span>, a
            forward-thinking web developer passionate about building modern,
            responsive, and user-friendly digital experiences. I work with
            technologies like Next.js, React, and Tailwind CSS, while also
            exploring new frameworks, tools, and best practices. My focus is on
            creating fast, scalable, and accessible applications that deliver
            real value.
          </p>
        </div>

        <div className="mb-4 sm:mb-4 md:mb-4 text-left">
          <h5 className="text-xl sm:text-2xl font-bold text-center dark:text-gray-100">
            Where I've Worked
          </h5>
        </div>

        <Tabs defaultValue="item-1" className="flex flex-col md:flex-row gap-4">
          <TabsList className="flex md:flex-col gap-1 p-3 w-full md:w-48 items-start sm:mt-9 customized-background">
            <TabsTrigger
              value="item-1"
              className="!justify-start py-2 px-3 md:py-3 md:px-4 text-gray-800 dark:text-gray-200 font-medium hover:bg-gray-50 dark:hover:bg-gray-700 data-[state=active]:font-bold data-[state=active]:bg-gray-100 dark:data-[state=active]:bg-gray-700 rounded-md"
            >
              Activedge Technologies
            </TabsTrigger>
            <TabsTrigger
              value="item-2"
              className="!justify-start py-2 px-3 md:py-3 md:px-4 text-gray-800 dark:text-gray-200 font-medium hover:bg-gray-50 dark:hover:bg-gray-700 data-[state=active]:font-bold data-[state=active]:bg-gray-100 dark:data-[state=active]:bg-gray-700 rounded-md"
            >
              FigorateHQ
            </TabsTrigger>
          </TabsList>

          <div className="flex-1 mt-2 md:mt-0">
            <TabsContent
              value="item-1"
              className="text-left px-4 py-5 !bg-none rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700"
            >
              <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">
                Frontend Developer (NYSC) @ Activedge Technologies
              </h3>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">February 2025 - December 2025</p>
              <ul className="list-disc list-outside ml-5 space-y-2">
                <li className="text-sm text-gray-700 dark:text-gray-300">
                  Built and maintained responsive web pages using React.js and Next.js.
                </li>
                <li className="text-sm text-gray-700 dark:text-gray-300">
                  Styled modern user interfaces using Tailwind CSS and shadcn/ui.
                </li>
                <li className="text-sm text-gray-700 dark:text-gray-300">
                  Integrated and handled API data using Axios and React Query (TanStack Query).
                </li>
                <li className="text-sm text-gray-700 dark:text-gray-300">
                  Fixed UI bugs and optimized page performance to improve user experience.
                </li>
                <li className="text-sm text-gray-700 dark:text-gray-300">
                  Collaborated with team members using GitHub for version control and code reviews.
                </li>
                <li className="text-sm text-gray-700 dark:text-gray-300">
                  Got familiar with backend integration (Node.js, Express.js, MongoDB, JWT).
                </li>
              </ul>
            </TabsContent>

            <TabsContent
              value="item-2"
              className="text-left px-4 py-5 !bg-none rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 mt-2 md:mt-0 bg-gray-50 dark:bg-gray-700"
            >
              <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">
                Frontend Developer (Intern, Remote) @ FigorateHQ
              </h3>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">January 2024 - December 2024</p>
              <ul className="list-disc list-outside ml-5 space-y-2">
                <li className="text-sm text-gray-700 dark:text-gray-300">
                  Developed responsive websites using HTML, CSS, and JavaScript.
                </li>
                <li className="text-sm text-gray-700 dark:text-gray-300">
                  Created various interfaces in JavaScript, CSS, and HTML, increasing the user experience by 25%.
                </li>
                <li className="text-sm text-gray-700 dark:text-gray-300">
                  Developed reusable React.js components to make frontend development more efficient.
                </li>
                <li className="text-sm text-gray-700 dark:text-gray-300">
                  Collaborated with team members using GitHub.
                </li>
              </ul>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default About;
