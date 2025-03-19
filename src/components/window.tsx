import Prism from "prismjs";
import "prismjs/components/prism-javascript.min.js";
import "prismjs/themes/prism-okaidia.min.css";

import { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { externals, internal } from "../urls";

const content = `
  const my_profile = {
    fullname: 'Vu Chi Cong',
    nickname: 'Joe', 
    title: 'Mid-Level Full-Stack Developer',
    skills: {
      languages: ['JavaScript', 'TypeScript', '.NET Core'],
      frontend: [
        'React.js', 'React Native', 'Next.js', 'Tailwind CSS', 
        'Mobile-First', 'Responsive Web Design'
      ],
      backend: ['Node.js', 'Express.js', 'RESTful APIs', 'RabbitMQ', 'Elasticsearch'],
      databases: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis'],
      tool_n_platforms: ['Vercel', 'Heroku', 'Docker', 'Cloudflare', 'Jira']
    },
    years_of_experience: '5+',
    personality_traits: {
      hard_worker: true,
      quick_learner: true,
      team_player: true,
      detail_oriented: true,
      adaptable: true,
      proactive: true
    }
  } satisfies IGoodJavascriptDeveloper
`;

const Window = () => {
  const [code] = useState(content);

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <div className="flex-1">
      <div className="bg-gray-950 relative">
        <div className="flex items-center bg-background border-b border-b-primary py-0.5">
          <div className="px-4 py-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full hover:scale-125 duration-200 animate-ease-out bg-red-500"></div>
            <div className="w-3 h-3 rounded-full hover:scale-125 duration-200 animate-ease-out bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full hover:scale-125 duration-200 animate-ease-out bg-green-500"></div>
          </div>

          <div className="flex items-center gap-1">
            <span className="text-sm leading-normal text-foreground flex items-center font-code p-2 bg-primary/40 rounded-md">
              <span className="text-blue-400">{`{{gateway}}`}</span>/auth/me
            </span>
            <a
              href={externals.linkedin}
              target="_blank"
              className="text-sm leading-normal text-foreground flex items-center font-code p-2 bg-primary/10 hover:bg-primary/40 duration-200 rounded-md"
            >
              <FaLinkedinIn className="w-4 h-4 text-foreground" />
              <span className="hidden lg:block">/@jv98</span>
            </a>
            <a
              href={externals.github}
              target="_blank"
              className="text-sm leading-normal text-foreground flex items-center font-code p-2 bg-primary/10 hover:bg-primary/40 duration-200 rounded-md"
            >
              <FaGithub className="w-4 h-4 text-foreground" />
              <span className="hidden lg:block">/@cngvc</span>
            </a>
            <Link
              to={internal.cv}
              target="_blank"
              className="text-sm leading-normal text-foreground flex items-center font-code p-2 bg-primary/10 hover:bg-primary/40 duration-200 rounded-md"
            >
              <FaUserCircle className="w-4 h-4 text-foreground" />
              <span className="hidden lg:block">/resume</span>
            </Link>
          </div>
        </div>
        <pre
          className="language-javascript code-editor"
          data-language="JavaScript"
        >
          <code
            className="language-javascript !text-foreground"
            style={{ textShadow: "none" }}
          >
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Window;
