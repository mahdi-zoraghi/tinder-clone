import { useState } from "react"
import { Avatar } from "@material-ui/core"

import "./ChatScreen.scss"

function ChatScreen() {
  const [input, setInput] = useState("")

  const [messages, setMessages] = useState([
    {
      name: "margot robbie",
      message: "Hey! how are you",
      image:
        "https://www.stuttgarter-nachrichten.de/media.media.a24a9a12-d88e-48a5-af08-a77d098c723e.original1024.jpg",
    },
    {
      name: "margot robbie",
      message: "Whats up?",
      image:
        "https://www.stuttgarter-nachrichten.de/media.media.a24a9a12-d88e-48a5-af08-a77d098c723e.original1024.jpg",
    },
    {
      name: "margot robbie",
      message: "Oh!",
      image:
        "https://www.stuttgarter-nachrichten.de/media.media.a24a9a12-d88e-48a5-af08-a77d098c723e.original1024.jpg",
    },
    {
      message: "!!??!!",
    },
  ])

  const handleSend = e => {
    e.preventDefault()
    setMessages([...messages, { message: input }])
    setInput("")
  }

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH MARGOT ROBBIE ON 10/08/20
      </p>
      {messages.map(message =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}
      <form className="chatScreen__input">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          className="chatScreen__inputField"
          placeholder="Type a message..."
          type="text"
        />
        <button
          onClick={handleSend}
          type="submit"
          className="chatScreen__inputButton"
        >
          SEND
        </button>
      </form>
    </div>
  )
}

export default ChatScreen
