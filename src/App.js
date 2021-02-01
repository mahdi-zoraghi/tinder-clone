import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Header from "./Header"
import TinderCards from "./TinderCards"
import SwipeButtons from "./SwipeButtons"
import Chats from "./Chats"
import ChatScreen from "./ChatScreen"

import "./App.css"

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
