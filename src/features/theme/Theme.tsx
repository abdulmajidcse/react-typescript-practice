import { updateTheme, themeTypes } from "./themeSlice";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "./../../app/hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdjust, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

type ThemeProps = { className?: string; style?: object };

export default function Theme({ className = "", style = {} }: ThemeProps) {
  const theme = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(updateTheme());
  }, [dispatch]);

  return (
    <>
      <span className={className} style={style}>
        <FontAwesomeIcon
          icon={faAdjust}
          className={`${theme.type !== themeTypes.system && "hidden"}`}
          title="Switch to dark mode"
          role="button"
          onClick={() => dispatch(updateTheme("dark"))}
        />
        <FontAwesomeIcon
          icon={faSun}
          className={`${theme.type !== themeTypes.light && "hidden"}`}
          title="Switch to system theme"
          role="button"
          onClick={() => dispatch(updateTheme("system"))}
        />
        <FontAwesomeIcon
          icon={faMoon}
          className={`${theme.type !== themeTypes.dark && "hidden"}`}
          title="Switch to light mode"
          role="button"
          onClick={() => dispatch(updateTheme("light"))}
        />
      </span>
    </>
  );
}
