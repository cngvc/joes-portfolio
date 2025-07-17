import FsLightbox from "fslightbox-react";
import { Suspense, useState } from "react";
import { sides } from "../content.json";
import SideProject from "./side-project";

const images = sides.map((e) => `${e.demo}`);

const SideProjects = () => {
  const [isOpenLightBox, $isOpenLightBox] = useState(false);
  const [selectedImageIndex, $selectedImage] = useState(0);

  return (
    <div>
      <Suspense fallback={<div />}>
        <FsLightbox
          toggler={isOpenLightBox}
          sources={images}
          sourceIndex={selectedImageIndex}
        />
      </Suspense>
      <ol className="gap-2 overflow-hidden list-none group/list">
        {sides.map((item, index) => (
          <li
            key={index}
            className="lg:hover:opacity-100! lg:group-hover/list:opacity-60 duration-100"
          >
            <SideProject
              {...item}
              onOpenPhotoLightBox={() => {
                $isOpenLightBox((cur) => !cur);
                $selectedImage(index);
              }}
            />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default SideProjects;
