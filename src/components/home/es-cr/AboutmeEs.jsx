import {
  projectExperiences,
  technologies,
  userDetails,
  userDetailsSidebar,
} from "@/src/staticData/home/home";
import { CiUser } from "react-icons/ci";
import AboutTechnologies from "@/src/components/home/AboutTechnologies";
import UserDetail from "@/src/components/home/UserDetail";
import ProjectExperience from "@/src/components/home/ProjectExperience";

const AboutMe = () => {
  return (
    <div
      data-scroll-index="1"
      id="acerca"
      className="py-3.5  max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto"
    >
      <div className="px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl about-section lg:p-10 2xl:p-13">
        <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
          <CiUser className="text-theme" size={14} />
          ACERCA
        </div>
        <div className="mt-7 md:mt-10 section-title">
          <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
            Acerca de <span className="font-semibold text-theme">Rus</span>
          </h2>
          <p className="max-w-2xl mt-4 md:mt-6 subtitle">
            <span className="text-black dark:text-white">
              {userDetailsSidebar?.userIntro}{" "}
            </span>{" "}
            En este sitio web podrás encontrar información relacionada con los
            servicios que ofrezco, así como conocer un poco más de mi
            trayectoria laboral y tecnologías con las que principalmente he
            trabajado.{" "}
            <span className="text-black dark:text-white">
              {" "}
              Contáctame si tienes alguna duda adicional.
            </span>
          </p>
        </div>
        <div className="mt-6 section-content">
          <div className="inline-flex flex-wrap items-center gap-2 mb-5 text-sm md:gap-4">
            {technologies?.map((tech) => (
              <AboutTechnologies key={tech?.id} {...tech} />
            ))}
          </div>

          <ul className="grid mt-4 mb-10 text-sm lg:mt-6 md:grid-cols-2 gap-x-8 gap-y-3">
            {userDetails?.map((singlInfo, i) => (
              <UserDetail key={i} {...singlInfo} />
            ))}
          </ul>

          <ul className="grid grid-cols-2 gap-6 counters md:grid-cols-4 xl:gap-8">
            {projectExperiences?.map((exp, i) => (
              <ProjectExperience key={i} {...exp} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
