import { Link } from "react-router-dom";

export default function LogoContainer() {
  return (
    <Link to="/">
      <img src="./public/assets/svg/applogo.jpg" className="w-10 h-10 object-contain" />

    </Link>
  );
}
