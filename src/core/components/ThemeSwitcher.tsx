import React from "react"

type Props = {
  handleThemeChange: (e: any) => void
  savedTheme: string
}

export const ThemeSwitcher = ({ handleThemeChange, savedTheme }: Props) => {
  return (
    <div className="max-h-1/3-screen overflow-y-auto">
      <div className="flex flex-col">
        <li className="form-control">
          <label className="label cursor-pointer gap-4">
            <span className="label-text">Cyberpunk2077</span>
            <input
              type="radio"
              name="theme-radios"
              className="radio theme-controller"
              value="default"
              onChange={(e) => handleThemeChange(e)}
              checked={savedTheme === "default"}
            />
          </label>
        </li>
        <li className="form-control">
          <label className="label cursor-pointer gap-4">
            <span className="label-text">Light</span>
            <input
              type="radio"
              name="theme-radios"
              className="radio theme-controller"
              value="light"
              onChange={(e) => handleThemeChange(e)}
              checked={savedTheme === "light"}
            />
          </label>
        </li>
        <li className="form-control">
          <label className="label cursor-pointer gap-4">
            <span className="label-text">Dark</span>
            <input
              type="radio"
              name="theme-radios"
              className="radio theme-controller"
              value="dark"
              onChange={(e) => handleThemeChange(e)}
              checked={savedTheme === "dark"}
            />
          </label>
        </li>
        <li className="form-control">
          <label className="label cursor-pointer gap-4">
            <span className="label-text">Cupcake</span>
            <input
              type="radio"
              name="theme-radios"
              className="radio theme-controller"
              value="cupcake"
              onChange={(e) => handleThemeChange(e)}
              checked={savedTheme === "cupcake"}
            />
          </label>
        </li>
        <li className="form-control">
          <label className="label cursor-pointer gap-4">
            <span className="label-text">Bumblebee</span>
            <input
              type="radio"
              name="theme-radios"
              className="radio theme-controller"
              value="bumblebee"
              onChange={(e) => handleThemeChange(e)}
              checked={savedTheme === "bumblebee"}
            />
          </label>
        </li>
        <li className="form-control">
          <label className="label cursor-pointer gap-4">
            <span className="label-text">Emerald</span>
            <input
              type="radio"
              name="theme-radios"
              className="radio theme-controller"
              value="emerald"
              onChange={(e) => handleThemeChange(e)}
              checked={savedTheme === "emerald"}
            />
          </label>
        </li>
        <li className="form-control">
          <label className="label cursor-pointer gap-4">
            <span className="label-text">Corporate</span>
            <input
              type="radio"
              name="theme-radios"
              className="radio theme-controller"
              value="corporate"
              onChange={(e) => handleThemeChange(e)}
              checked={savedTheme === "corporate"}
            />
          </label>
        </li>
        <li className="form-control">
          <label className="label cursor-pointer gap-4">
            <span className="label-text">Synthwave</span>
            <input
              type="radio"
              name="theme-radios"
              className="radio theme-controller"
              value="synthwave"
              onChange={(e) => handleThemeChange(e)}
              checked={savedTheme === "synthwave"}
            />
          </label>
        </li>
        <li className="form-control">
          <label className="label cursor-pointer gap-4">
            <span className="label-text">Retro</span>
            <input
              type="radio"
              name="theme-radios"
              className="radio theme-controller"
              value="retro"
              onChange={(e) => handleThemeChange(e)}
              checked={savedTheme === "retro"}
            />
          </label>
        </li>
        <li className="form-control">
          <label className="label cursor-pointer gap-4">
            <span className="label-text">Cyberpunk</span>
            <input
              type="radio"
              name="theme-radios"
              className="radio theme-controller"
              value="cyberpunk"
              onChange={(e) => handleThemeChange(e)}
              checked={savedTheme === "cyberpunk"}
            />
          </label>
        </li>
        <li className="form-control">
          <label className="label cursor-pointer gap-4">
            <span className="label-text">Valentine</span>
            <input
              type="radio"
              name="theme-radios"
              className="radio theme-controller"
              value="valentine"
              onChange={(e) => handleThemeChange(e)}
              checked={savedTheme === "valentine"}
            />
          </label>
        </li>
        <li className="form-control">
          <label className="label cursor-pointer gap-4">
            <span className="label-text">Halloween</span>
            <input
              type="radio"
              name="theme-radios"
              className="radio theme-controller"
              value="halloween"
              onChange={(e) => handleThemeChange(e)}
              checked={savedTheme === "halloween"}
            />
          </label>
        </li>
        <li className="form-control">
          <label className="label cursor-pointer gap-4">
            <span className="label-text">Garden</span>
            <input
              type="radio"
              name="theme-radios"
              className="radio theme-controller"
              value="garden"
              onChange={(e) => handleThemeChange(e)}
              checked={savedTheme === "garden"}
            />
          </label>
        </li>
        <li className="form-control">
          <label className="label cursor-pointer gap-4">
            <span className="label-text">Forest</span>
            <input
              type="radio"
              name="theme-radios"
              className="radio theme-controller"
              value="forest"
              onChange={(e) => handleThemeChange(e)}
              checked={savedTheme === "forest"}
            />
          </label>
        </li>
        <li className="form-control">
          <label className="label cursor-pointer gap-4">
            <span className="label-text">Aqua</span>
            <input
              type="radio"
              name="theme-radios"
              className="radio theme-controller"
              value="aqua"
              onChange={(e) => handleThemeChange(e)}
              checked={savedTheme === "aqua"}
            />
          </label>
        </li>
        <li className="form-control">
          <label className="label cursor-pointer gap-4">
            <span className="label-text">Lofi</span>
            <input
              type="radio"
              name="theme-radios"
              className="radio theme-controller"
              value="lofi"
              onChange={(e) => handleThemeChange(e)}
              checked={savedTheme === "lofi"}
            />
          </label>
        </li>
        <li className="form-control">
          <label className="label cursor-pointer gap-4">
            <span className="label-text">Pastel</span>
            <input
              type="radio"
              name="theme-radios"
              className="radio theme-controller"
              value="pastel"
              onChange={(e) => handleThemeChange(e)}
              checked={savedTheme === "pastel"}
            />
          </label>
        </li>
        <li className="form-control">
          <label className="label cursor-pointer gap-4">
            <span className="label-text">Fantasy</span>
            <input
              type="radio"
              name="theme-radios"
              className="radio theme-controller"
              value="fantasy"
              onChange={(e) => handleThemeChange(e)}
              checked={savedTheme === "fantasy"}
            />
          </label>
        </li>
        <li className="form-control">
          <label className="label cursor-pointer gap-4">
            <span className="label-text">Wireframe</span>
            <input
              type="radio"
              name="theme-radios"
              className="radio theme-controller"
              value="wireframe"
              onChange={(e) => handleThemeChange(e)}
              checked={savedTheme === "wireframe"}
            />
          </label>
        </li>
        <li className="form-control">
          <label className="label cursor-pointer gap-4">
            <span className="label-text">Black</span>
            <input
              type="radio"
              name="theme-radios"
              className="radio theme-controller"
              value="black"
              onChange={(e) => handleThemeChange(e)}
              checked={savedTheme === "black"}
            />
          </label>
        </li>
        <li className="form-control">
          <label className="label cursor-pointer gap-4">
            <span className="label-text">Luxury</span>
            <input
              type="radio"
              name="theme-radios"
              className="radio theme-controller"
              value="luxury"
              onChange={(e) => handleThemeChange(e)}
              checked={savedTheme === "luxury"}
            />
          </label>
        </li>
        <li className="form-control">
          <label className="label cursor-pointer gap-4">
            <span className="label-text">Dracula</span>
            <input
              type="radio"
              name="theme-radios"
              className="radio theme-controller"
              value="dracula"
              onChange={(e) => handleThemeChange(e)}
              checked={savedTheme === "dracula"}
            />
          </label>
        </li>
        <li className="form-control">
          <label className="label cursor-pointer gap-4">
            <span className="label-text">Cmyk</span>
            <input
              type="radio"
              name="theme-radios"
              className="radio theme-controller"
              value="cmyk"
              onChange={(e) => handleThemeChange(e)}
              checked={savedTheme === "cmyk"}
            />
          </label>
        </li>
        <li className="form-control">
          <label className="label cursor-pointer gap-4">
            <span className="label-text">Autumn</span>
            <input
              type="radio"
              name="theme-radios"
              className="radio theme-controller"
              value="autumn"
              onChange={(e) => handleThemeChange(e)}
              checked={savedTheme === "autumn"}
            />
          </label>
        </li>
        <li className="form-control">
          <label className="label cursor-pointer gap-4">
            <span className="label-text">Business</span>
            <input
              type="radio"
              name="theme-radios"
              className="radio theme-controller"
              value="business"
              onChange={(e) => handleThemeChange(e)}
              checked={savedTheme === "business"}
            />
          </label>
        </li>
        <li className="form-control">
          <label className="label cursor-pointer gap-4">
            <span className="label-text">Acid</span>
            <input
              type="radio"
              name="theme-radios"
              className="radio theme-controller"
              value="acid"
              onChange={(e) => handleThemeChange(e)}
              checked={savedTheme === "acid"}
            />
          </label>
        </li>
        <li className="form-control">
          <label className="label cursor-pointer gap-4">
            <span className="label-text">Lemonade</span>
            <input
              type="radio"
              name="theme-radios"
              className="radio theme-controller"
              value="lemonade"
              onChange={(e) => handleThemeChange(e)}
              checked={savedTheme === "lemonade"}
            />
          </label>
        </li>
        <li className="form-control">
          <label className="label cursor-pointer gap-4">
            <span className="label-text">Night</span>
            <input
              type="radio"
              name="theme-radios"
              className="radio theme-controller"
              value="night"
              onChange={(e) => handleThemeChange(e)}
              checked={savedTheme === "night"}
            />
          </label>
        </li>
        <li className="form-control">
          <label className="label cursor-pointer gap-4">
            <span className="label-text">Coffee</span>
            <input
              type="radio"
              name="theme-radios"
              className="radio theme-controller"
              value="coffee"
              onChange={(e) => handleThemeChange(e)}
              checked={savedTheme === "coffee"}
            />
          </label>
        </li>
        <li className="form-control">
          <label className="label cursor-pointer gap-4">
            <span className="label-text">Winter</span>
            <input
              type="radio"
              name="theme-radios"
              className="radio theme-controller"
              value="winter"
              onChange={(e) => handleThemeChange(e)}
              checked={savedTheme === "winter"}
            />
          </label>
        </li>
      </div>
    </div>
  )
}
