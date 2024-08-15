import { MdDarkMode, MdOutlineWbSunny } from "react-icons/md"
import { HeaderSectionStyle } from "./HeaderSectionStyle"
import DarkModeTogglerHooks from "../../Hooks/DarkModeTogglerHooks"

export default function HeaderSection() {
  const { darkMode, setDarkMode } = DarkModeTogglerHooks()
  return (
    <div className={HeaderSectionStyle.container}>
      <h1>Book Generator API</h1>

      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode === true ? (
          <MdDarkMode className={HeaderSectionStyle.buttonStyle} />
        ) : (
          <MdOutlineWbSunny className={HeaderSectionStyle.buttonStyle} />
        )}
      </button>
    </div>
  )
}
