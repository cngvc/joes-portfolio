import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { PiImageSquare } from "react-icons/pi";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Card from "./card";
import Lists from "./lists-item";
import Techs from "./techs";

const SideProject: React.FC<{
  url?: string;
  image?: string;
  title: string;
  description: string[];
  features: string[];
  techs: string[];
  repo: string;
  subtitle?: string;
  goal?: string;
  onOpenPhotoLightBox?: () => void;
}> = ({
  url,
  image,
  title,
  description,
  techs,
  repo,
  features,
  subtitle,
  goal,
  onOpenPhotoLightBox,
}) => {
  return (
    <Card>
      <div className="group grid grid-cols-12 p-3 md:p-6">
        <div className="col-span-3 py-2 justify-center items-start hidden md:flex mr-4 md:mr-8">
          {image ? (
            <LazyLoadImage
              src={image}
              className="w-full h-auto object-contain rounded-md"
              onClick={(e) => {
                e.preventDefault();
                onOpenPhotoLightBox?.();
              }}
              alt={title}
            />
          ) : (
            <div className="w-full aspect-square flex items-center justify-center bg-primary/20 rounded-md">
              <PiImageSquare className="w-5/12 h-auto text-primary" />
            </div>
          )}
        </div>

        <div className="col-span-full md:col-span-9 mt-0.5">
          <div className="flex flex-col">
            <a
              target="_blank"
              href={url ?? "#"}
              className="t4 leading-7 font-medium mb-2 item-desc flex flex-wrap items-center gap-2"
              aria-label={title}
            >
              {title}
              {subtitle && (
                <span className="t5 font-light text-muted-foreground">
                  ({subtitle})
                </span>
              )}

              <a
                target="_blank"
                href={repo ?? "#"}
                aria-label="Github"
                className="duration-100 lg:hover:-translate-y-1 ease-in-out"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <BsArrowUpRight className="w-5 h-5 lg:group-hover:-translate-y-1 lg:group-hover:translate-x-1 duration-100 ease-in-out" />
            </a>

            {description.map((e, index) => (
              <p key={index} className="item-desc mb-2">
                {e}
              </p>
            ))}

            <Lists label="Main Features" data={features} />

            {goal && <div className="item-desc mb-2">Goal: {goal}</div>}

            <Techs techs={techs} />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SideProject;
