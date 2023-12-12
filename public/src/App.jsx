import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Form from './components/Form';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Form/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
