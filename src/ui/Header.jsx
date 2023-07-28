import { Link } from "react-router-dom";
import { SearchOrder } from "../features";

const Header = () => {
  return (
    <header>
      <Link to={"/"}>Fast React Pizza Co.</Link>
      <SearchOrder />
      <p>Shubham</p>
    </header>
  );
};

export default Header;
