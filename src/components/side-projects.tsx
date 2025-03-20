import { lazy, Suspense, useState } from "react";
import { sides } from "../content.json";
import SideProject from "./side-project";

const FsLightbox = lazy(() => import("fslightbox-react"));
const images = sides.map((e) => `${e.demo}`);

const SideProjects = () => {
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
        {sides.map((item, index) => (
          <li className="lg:hover:opacity-100! lg:group-hover/list:opacity-50 duration-100">
            <SideProject
              key={index}
              {...item}
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

export default SideProjects;
