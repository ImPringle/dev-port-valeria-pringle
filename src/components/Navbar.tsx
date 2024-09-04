import { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
const Navbar = () => {
  const [darkmode, setDarkmode] = useState(false);

  const toggleDarkmode = () => {
    if (darkmode == false) {
      setDarkmode(true);
    } else {
      setDarkmode(false);
    }
  };
  return (
    <div className="flex w-full border-b-[1px] justify-center h-16 drop-shadow-sm sticky top-0">
      <div className=" w-3/4 flex justify-between items-center">
        <FaMoon
          className={darkmode ? "" : "hidden"}
          onClick={() => toggleDarkmode()}
        />
        <FaRegMoon
          className={darkmode ? "hidden" : ""}
          onClick={() => toggleDarkmode()}
        />

        <p>Valeria Pringle</p>

        <div className="flex gap-4">
          <a href="">About me</a>
          <a href="">Projects</a>
          <a href="">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
