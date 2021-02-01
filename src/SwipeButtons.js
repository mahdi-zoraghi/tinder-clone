import { IconButton } from "@material-ui/core"
import {
  Replay as ReplayIcon,
  Close as CloseIcon,
  StarRate as StarRateIcon,
  Favorite as FavoriteIcon,
  FlashOn as FlashOnIcon,
} from "@material-ui/icons"

import "./SwipeButtons.css"

function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons__repeat">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__left">
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__star">
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__right">
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__lightning">
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  )
}

export default SwipeButtons
