import React from "react";
import { FaFileCode } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Card from "./Card";
import Lists from "./Lists";
import Techs from "./Techs";

const Project: React.FC<{
  url?: string;
  image?: string;
  title: string;
  subtitle?: string;
  description: string[];
  composition:
    | {
        size: string;
      }
    | undefined;
  role: string[] | undefined;
  achievements?: string[] | undefined;
  job?: string;
  techs: string[];
  onOpenPhotoLightBox?: () => void;
}> = ({
  url,
  image,
  title,
  subtitle,
  description,
  job,
  techs,
  composition,
  role,
  achievements,
  onOpenPhotoLightBox,
}) => {
  return (
    <Card>
      <div className="grid grid-cols-12 p-3 md:p-6">
        <div className="col-span-3 py-2 justify-center items-start hidden md:flex mr-4 md:mr-8">
          {image ? (
            <LazyLoadImage
              src={image}
              className="w-full h-auto object-contain bg-primary/20 rounded-md"
              onClick={(e) => {
                e.preventDefault();
                onOpenPhotoLightBox?.();
              }}
              alt={title}
            />
          ) : (
            <FaFileCode
              fill="rgb(var(--primary-color))"
              className="w-3/5 h-auto"
            />
          )}
        </div>
        <div className="col-span-full md:col-span-9 mt-0.5">
          <div className="flex flex-col">
            <a
              target="_blank"
              href={url ?? "#"}
              className="t4 leading-7 font-semibold mb-2 lg:group-hover:text-primary duration-200 flex flex-wrap items-center gap-2"
              aria-label={title}
            >
              {title}{" "}
              {subtitle && (
                <span className="t5 font-light text-white/60">
                  ({subtitle})
                </span>
              )}
            </a>

            {description.map((e, index) => (
              <p
                key={index}
                className="t5 text-white/80 mb-2 lg:group-hover:text-white duration-200"
              >
                {e}
              </p>
            ))}

            {job && (
              <div
                className="t5 text-white/80 mb-2 lg:group-hover:text-white duration-200"
                dangerouslySetInnerHTML={{ __html: job }}
              />
            )}

            <div className="text-white/60 lg:group-hover:text-white duration-200 t5">
              Team Composition:
            </div>
            {composition && (
              <ul className="list-disc mb-2 list-outside pl-[18px] t5">
                {composition && (
                  <>
                    <li>
                      <span className="text-white/60 lg:group-hover:text-white duration-200">
                        Size: {composition?.size}
                      </span>
                    </li>
                  </>
                )}
              </ul>
            )}

            <Lists label="My Responsibility" data={role} />
            <Lists label="Achievements" data={achievements} />
            <Techs techs={techs} />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Project;
