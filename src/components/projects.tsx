import { lazy, Suspense, useState } from "react";
import { projects } from "../content.json";
import Project from "./project-item";

const FsLightbox = lazy(() => import("fslightbox-react"));

const images = projects.map((e) => e.image);

const Projects = () => {
  const [isOpenLightBox, $isOpenLightBox] = useState(false);
  const [selectedImageIndex, $selectedImage] = useState(0);
  return (
    <>
      <Suspense fallback={<div />}>
        <FsLightbox
          toggler={isOpenLightBox}
          sources={images}
          sourceIndex={selectedImageIndex}
        />
      </Suspense>

      <ol className="gap-2 overflow-hidden list-none group/list">
        {projects.map((e, index) => (
          <li className="lg:hover:opacity-100! lg:group-hover/list:opacity-50 duration-200">
            <Project
              key={index}
              image={e.image}
              url={e.url}
              title={e.title}
              description={e.description}
              techs={e.techs}
              composition={e.composition}
              subtitle={e.subtitle}
              achievements={e.achievements}
              role={e.role}
              onOpenPhotoLightBox={() => {
                $isOpenLightBox((cur) => !cur);
                $selectedImage(index);
              }}
            />
          </li>
        ))}
      </ol>
    </>
  );
};

export default Projects;
