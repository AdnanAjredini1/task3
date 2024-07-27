import ModalItems from "./ModalItems"


export const Modal = ({onCloseModal}) => {
  return (
    <div className="modalBackground">
       <div className="modal-container">
          <div className="modal-header" style={{display:'flex',flexDirection:'row',flexWrap:'wrap', justifyContent:'space-between'}}>
            <p>Theme Color</p>
            <p style={{fontSize:'0.7rem',fontWeight:'bold',color:'#2072EF'}}>Change Theme</p>
          </div>
          <div className="items">
             <ModalItems text="Font Color" colorNum='#444444' color='#444444' />
             <ModalItems text="Background Color" colorNum='#FFFFFF' color='#FFFFFF'/>
             <ModalItems text="Button Color" colorNum='#2072EF' color='#2072EF'/>
             <ModalItems text="Button Border Color" colorNum='#2072EF' color='#2072EF'/>
             <ModalItems text="Buttons Mouseover Color" colorNum='#0053D1' color='#0053D1'/>

          </div>
          <div className="buttons-div" >
             <button className="button-close" onClick={() => onCloseModal(false)}>Close</button>
             <button className="button-save" >Save</button>
          </div>
          
       </div>
 
    </div>
  )
}
