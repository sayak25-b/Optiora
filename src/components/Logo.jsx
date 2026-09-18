import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="inline-flex items-center">
      <img
        src="/logo1.png"
        alt="Optiora"
        className="h-9 w-auto object-contain"
      />
      <span className="text-xl font-bold tracking-tight text-white">
        PTIORA<span className="text-cyan-400">.</span>
      </span>
    </Link>
  );
}

export default Logo;