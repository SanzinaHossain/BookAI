import { useEffect, useState } from "react"

export default function DarkModeTogglerHooks() {
  const [darkMode, setDarkMode] = useState(false)
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])
  return { darkMode, setDarkMode }
}
