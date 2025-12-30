import { Link } from "react-router-dom";
import { GoSun, GoMoon } from "react-icons/go";
import { useTheme } from "@/context/ThemeContext";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        // second: "2-digit",
        hour12: true,
        timeZone: "Asia/Karachi",
      };
      const formatter = new Intl.DateTimeFormat("en-US", options);
      setTime(formatter.format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="navbar">
      <div className="container--fluid">
        <div className="navbar__wrap">
          <div className="navbar__time">
            <span className="navbar__time-text">
              Pakistan, Islamabad - {time}
            </span>
          </div>
          <div className="navbar__logo">
            <Link to="/" className="navbar__link">
              Aizaz Jamil
            </Link>
          </div>
          <nav className="navbar__menu">
            <button
              className="navbar__menu-button"
              aria-label="Toggle Dark Mode"
              onClick={toggleTheme}
            >
              {theme === "dark" ? <GoSun /> : <GoMoon />}
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
