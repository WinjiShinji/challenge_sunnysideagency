import { useContext } from "react"
import ResizeContext from "./context/ResizeContext"

const Nav = () => {
  const {showNav, setShowNav, viewportWidth} = useContext(ResizeContext)
  return (
    <nav className="nav">
      <p>sunnyside</p>
      <i 
        className={`${viewportWidth < 1024 ? "btn_show" : "btn_hide"}`}
        onClick={() => {
          setShowNav(!showNav)
        }}
      >
        <svg width="24" height="18"><path d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z" fill="#FFF" fillRule="evenodd"/></svg>
      </i>
      <ul className={`nav_links ${viewportWidth < 1024 ? showNav === true ? "show" : "hidden": "show_lg"}`}>
        <div className="corner"></div>
        <li><a href="/">About</a></li>
        <li><a href="/">Services</a></li>
        <li><a href="/">Projects</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Nav

