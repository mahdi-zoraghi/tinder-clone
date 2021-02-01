import Chat from "./Chat"

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="margot robbie"
        message="Hey! how are you"
        timestamp="40 seconds ago"
        profilePic="https://www.stuttgarter-nachrichten.de/media.media.a24a9a12-d88e-48a5-af08-a77d098c723e.original1024.jpg"
      />
      <Chat
        name="kim kardashian"
        message="Whats up?"
        timestamp="55 minutes ago"
        profilePic="https://pbs.twimg.com/profile_images/1282057272357683201/hm0ianWU_400x400.jpg"
      />
      <Chat
        name="taylor swift"
        message="Oh!"
        timestamp="3 days ago"
        profilePic="https://variety.com/wp-content/uploads/2020/01/taylor-swift-variety-cover-5-16x9-1000.jpg?w=681&h=383&crop=1"
      />
    </div>
  )
}

export default Chats
