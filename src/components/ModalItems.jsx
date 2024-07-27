export default function ModalItems({text, colorNum, color }) {
    return (
        <div className="modal-item" style={{display:'flex',flexDirection:'row',flexWrap:'wrap', justifyContent:'space-between',paddingRight:'0.4rem'}}>
            <p>{text}</p>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',gap:'0.7rem'}}>
                <p>{colorNum}</p>
                <div style={{backgroundColor:color}} className="items-color"></div>
            </div>
        </div>
    );
}