import FsLightbox from "fslightbox-react";
import { Suspense, useState } from "react";
import { projects } from "../content.json";
import Project from "./project-item";

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
          <li
            key={index}
            className="lg:hover:opacity-100! lg:group-hover/list:opacity-60 duration-100"
          >
            <Project
              {...e}
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
