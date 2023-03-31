import { useRef} from 'react'
import './App.css'


function App() {
  const inputEl= useRef(null)
  
  const onButtonClick = () => {
   
    inputEl.current.focus()
    
  }
  
 
  return (
    <div className="App">
     <input type="text" ref={inputEl} />
     <button onClick={onButtonClick}>Focus the input</button>
    </div>
  )
}

export default App
