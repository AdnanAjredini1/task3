import { useState } from "react";
import { Modal } from "./components/Modal";


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  
  return (
    <div className="mainDiv">
      <div className="main-button-div">
         <button className="main-button" onClick={() => setIsModalOpen(true)}>show popup</button>
      </div>
      
      {isModalOpen && 
        
       <Modal onCloseModal={setIsModalOpen} 
        
       />}
    </div>
  )
}

export default App
