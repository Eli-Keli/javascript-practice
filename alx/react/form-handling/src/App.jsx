import './App.css'
import ControlledForm from './components/ControlledForm'
import UncontrolledForm from './components/UncontrolledForm'

function App() {

  return (
    <>
      <h1>Controlled vs. Uncontrolled Components</h1>
      <h2>Controlled</h2>
      <ControlledForm />
      <h2>Uncontrolled</h2>
      <UncontrolledForm />
    </>
  )
}

export default App
