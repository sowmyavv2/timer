import { forwardRef } from "react"


const ResulstModal = forwardRef(function ResulstModal({ result, targetTime}, ref) {

    return(
        
        <dialog ref={ref} className="result-modal">
        <h2> You {result}</h2>
        </dialog>
    
        
    );
})


export default ResulstModal;