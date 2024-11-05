import React from "react";
import { FaFileCode } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Card from "./Card";

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
  tech: string[];
  onOpenPhotoLightBox?: () => void;
}> = ({
  url,
  image,
  title,
  subtitle,
  description,
  job,
  tech,
  composition,
  collaboration,
  role,
  onOpenPhotoLightBox,
}) => {
  return (
    <Card>
      <div className="group grid grid-cols-12 p-3 md:p-6">
        <div className="col-span-3 py-2 justify-center items-start hidden md:flex mr-4 md:mr-8 ">
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
              className="t4 leading-7 font-semibold mb-2 group-hover:text-primary flex items-center gap-2"
              aria-label={title}
            >
              {title}{" "}
              {subtitle && (
                <span className="t5 font-light opacity-60">({subtitle})</span>
              )}
            </a>

            {description.map((e, index) => (
              <p key={index} className="t5 text-white/80 mb-4">
                {e}
              </p>
            ))}

            {job && (
              <div
                className="t5 text-white/80 mb-4"
                dangerouslySetInnerHTML={{ __html: job }}
              />
            )}

            {composition && (
              <ul className="list-disc mb-4 list-inside t5">
                <div className="text-white/60">Team Composition:</div>
                {composition && (
                  <>
                    <li>
                      <span className="text-white/60">
                        Size: {composition?.size}
                      </span>
                    </li>
                    <li>
                      <span className="text-white/60">
                        Roles: {composition?.role}
                      </span>
                    </li>
                  </>
                )}
              </ul>
            )}

            {role && (
              <ul className="list-disc mb-4 list-inside t5 text-white/60">
                <div className="text-white/60">My Responsibility:</div>
                {role?.map((e, index) => (
                  <li key={index}>
                    <span className="text-white/60">{e}</span>
                  </li>
                ))}
              </ul>
            )}

            {collaboration && (
              <ul className="list-disc mb-4 list-inside t5 text-white/60">
                <div className="text-white/60">Collaboration:</div>
                {collaboration?.map((e, index) => (
                  <li key={index}>
                    <span className="text-white/60">{e}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="flex flex-wrap gap-2">
              {tech.map((e, index) => (
                <div
                  key={index}
                  className="t6 py-1 px-2 text-primary-light bg-primary-dark rounded-full"
                >
                  {e}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Project;
