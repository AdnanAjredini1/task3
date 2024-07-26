export default function ModalItems({text, colorNum, color }) {
    return (
        <div className="modal-item" style={{display:'flex',flexDirection:'row',flexWrap:'wrap', justifyContent:'space-between'}}>
            <p>{text}</p>
            <div>
                <p>{colorNum}</p>
                <div style={{color:color}}></div>
            </div>
        </div>
    );
}