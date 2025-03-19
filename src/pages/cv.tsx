import { useEffect } from "react";

const CVRedirect = () => {
  useEffect(() => {
    window.location.href = "/assets/congs-resume.pdf";
  }, []);

  return null;
};

export default CVRedirect;
