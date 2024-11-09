import React from "react";
import { FaFileCode } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Card from "./Card";
import Techs from "./Techs";
import Lists from "./Lists";

const Project: React.FC<{
  url?: string;
  image?: string;
  title: string;
  subtitle?: string;
  description: string[];
  composition:
    | {
        size: string;
        role: string;
      }
    | undefined;
  collaboration: string[] | undefined;
  role: string[] | undefined;
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
  collaboration,
  role,
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
                className="t5 text-white/80 mb-4 lg:group-hover:text-white duration-200"
              >
                {e}
              </p>
            ))}

            {job && (
              <div
                className="t5 text-white/80 mb-4 lg:group-hover:text-white duration-200"
                dangerouslySetInnerHTML={{ __html: job }}
              />
            )}

            {composition && (
              <ul className="list-disc mb-4 list-inside t5">
                <div className="text-white/60 lg:group-hover:text-white duration-200">
                  Team Composition:
                </div>
                {composition && (
                  <>
                    <li>
                      <span className="text-white/60 lg:group-hover:text-white duration-200">
                        Size: {composition?.size}
                      </span>
                    </li>
                    <li>
                      <span className="text-white/60 lg:group-hover:text-white duration-200">
                        Roles: {composition?.role}
                      </span>
                    </li>
                  </>
                )}
              </ul>
            )}

            <Lists label="My Responsibility" data={role} />
            <Lists label="Collaboration" data={collaboration} />
            <Techs techs={techs} />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Project;
