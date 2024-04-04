import './App.css'
import Page from './components/page'
function App() {

  return (
    <div className='page'>
    <div className='intro'>
      <div><h1 className="title">MEMORY GAME</h1></div>
      <div><h2 className='rulesText'>Do not click on the same Pokemon twice!</h2></div>
    </div>
    <Page/>
    </div>
  )
}

export default App
