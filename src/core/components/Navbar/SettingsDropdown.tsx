import { useEffect, useState } from "react"
import { ThemeSwitcher } from "../ThemeSwitcher"

export const SettingsDropdown = () => {
  const [savedTheme, setSavedTheme] = useState("default")

  const handleThemeChange = (e) => {
    const selectedTheme = e.target.value
    setSavedTheme(selectedTheme)
    localStorage.setItem("theme", selectedTheme)
  }

  useEffect(() => {
    const theme = localStorage.getItem("theme")
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme)
    }
  }, [savedTheme])

  return (
    <div className="dropdown-end dropdown z-10">
      <div tabIndex={0} className="avatar btn btn-md btn-circle btn-ghost">
        <div className="w-7 rounded-full">
          <img src="https://picsum.photos/80/80?5" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu dropdown-content mt-3 w-52 rounded-box bg-base-100 p-2 shadow-2xl"
      >
        <li>
          <a>Settings</a>
        </li>
        <li>
          <details>
            <summary>Themes</summary>
            <ul>
              <a>
                <ThemeSwitcher handleThemeChange={handleThemeChange} savedTheme={savedTheme} />
              </a>
            </ul>
          </details>
        </li>
        <li>
          <a>Billing</a>
        </li>
        <li>
          <a>Restore Content</a>
        </li>
        <li>
          <a>Import/Export</a>
        </li>
        <li>
          <a>Billing</a>
        </li>
        <li>
          <a>Logout</a>
        </li>
        <li>
          <a>
            Inbox
            <span className="badge badge-success">12</span>
          </a>
        </li>
      </ul>
    </div>
  )
}
