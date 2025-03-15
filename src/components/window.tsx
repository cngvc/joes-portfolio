import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-okaidia.min.css";

import { useEffect, useState } from "react";

const content = `
  const profile = {
    "name": "Vu Chi Cong",
    "title": "Mid-Level Full-Stack Developer",
    "skills": {
      "languages": ["JavaScript", "TypeScript", ".NET Core"],
      "frontend": [
        "React.js", "React Native", "Next.js", "Tailwind CSS", 
        "Mobile-First", "Responsive Web Design"
      ],
      "backend": [
        "Node.js", "Express.js", "RESTful APIs", 
        "RabbitMQ", "Elasticsearch"
      ],
      "databases": ["MongoDB", "MySQL", "PostgreSQL", "Redis"],
      "tool_n_platforms": ["Vercel", "Heroku", "Docker", "Cloudflare", "Jira"]
    },
    "years_of_experience": "5+",
    "personality_traits": {
      "hard_worker": true,
      "quick_learner": true,
      "team_player": true,
      "detail_oriented": true,
      "adaptable": true,
      "proactive": true
    }
  }
`;

const Window = () => {
  const [code] = useState(content);

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <div className="flex-1">
      <div className="bg-gray-950 relative">
        <div className="flex items-center p-4 bg-background gap-1">
          <div className="w-3 h-3 rounded-full hover:scale-125 duration-200 animate-ease-out bg-red-500"></div>
          <div className="w-3 h-3 rounded-full hover:scale-125 duration-200 animate-ease-out bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full hover:scale-125 duration-200 animate-ease-out bg-green-500"></div>
          <span className="ml-2 text-sm leading-normal text-muted-foreground flex items-center font-code">
            <span className="text-primary">{`{{gateway}}`}</span>/auth/me
          </span>
        </div>
        <pre
          className="language-javascript !px-0 !my-0 line-numbers"
          data-language="JavaScript"
        >
          <code className="language-javascript">{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default Window;
