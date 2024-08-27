import './App.css'
import FormikForm from './components/FormikForm'
import ReactHookForm from './components/ReactHookForm'

function App() {

  return (
    <>
      <h1>Form Libraries: Formik and React Hook Form</h1>
      <h2>Formik Form</h2>
      <FormikForm />
      <h2>React Hook Form</h2>
      <ReactHookForm />
    </>
  )
}

export default App
