import { useEffect } from "react";

const CVRedirect = () => {
  useEffect(() => {
    window.location.href = "/assets/congvus-resume.pdf";
  }, []);

  return null;
};

export default CVRedirect;
