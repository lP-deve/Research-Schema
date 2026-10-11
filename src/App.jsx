
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ResearchPoster from './ResearchPoster'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={ <ResearchPoster/>} />
      </Routes>
      
    </>
  )
}

export default App
