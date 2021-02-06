import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Header from "./components/Header"
import TinderCards from "./components/TinderCards"
import SwipeButtons from "./components/SwipeButtons"
import Chats from "./components/Chats"
import ChatScreen from "./components/ChatScreen"

import "./App.scss"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
          <Route path="/chat" exact>
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/chat/:person" exact>
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
