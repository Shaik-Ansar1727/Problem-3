

import ThemeToggle from "./Components/ThemeToggle"
import CounterCard from "./Components/CounterCard"
import Dashboard from "./Components/Dashboard"
import UserPanel from "./Components/UserPanel"
import Navbar from "./Components/Navbar"

function App() {

  return (
    <>

      <Navbar/>
      <div style={{ padding: '40px' }}>
        <h1>Global State Demo</h1>
        <ThemeToggle />
        <br /><br />
        <CounterCard />
        <Dashboard/>
        <UserPanel/>
        
      </div>
    </>
  )
}

export default App
