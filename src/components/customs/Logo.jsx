import paths from "core/paths";
import { Link } from "react-router-dom";

const Logo = function () {
  return (
    <Link className="flex items-center gap-2  text-xl" to={paths.root}>
      <img
        src="/images/logo.png"
        className="w-10 object-fill rounded-full"
        alt="logo"
      />
      <h1>Rick&Morty</h1>
    </Link>
  );
};

export default Logo;
