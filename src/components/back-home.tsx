import { Link } from "react-router-dom";
import { internal } from "../urls";
import { Button } from "./ui/button";

const BackHome = () => {
  return (
    <Button asChild variant={"link"} className="w-full">
      <Link to={internal.home} aria-label="Home">
        Back to Home
      </Link>
    </Button>
  );
};

export default BackHome;
