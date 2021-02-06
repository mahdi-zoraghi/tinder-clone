import { IconButton } from "@material-ui/core"
import {
  Person as PersonIcon,
  Forum as ForumIcon,
  ArrowBackIos as ArrowBackIosIcon,
} from "@material-ui/icons"
import { Link, useHistory } from "react-router-dom"

import "./Header.scss"

function Header({ backButton }) {
  const history = useHistory()

  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon fontSize="large" className="header__icon" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon fontSize="large" className="header__icon" />
        </IconButton>
      )}
      <Link to="/">
        <img
          className="header__logo"
          src="https://www.logo.wine/a/logo/Tinder_(app)/Tinder_(app)-Flame-Logo.wine.svg"
          alt="Tinder Logo"
        />
      </Link>
      <Link to="/chat">
        <IconButton>
          <ForumIcon fontSize="large" className="header__icon" />
        </IconButton>
      </Link>
    </div>
  )
}

export default Header
