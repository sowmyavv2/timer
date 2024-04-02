import { useState, useRef } from "react";
import ResulstModal from "./ResultModal";
export default function TimerChallenge({title, targetTime}) {
    const timer = useRef();
    const dialog = useRef();
    const [timerExp, setTimeExp] = useState(false)
    const [timerStarted, setTimeStarted] = useState(false)

  //  let timer;
    function handleStart() {
        timer.current = setTimeout(() => {
          setTimeExp(true);
          dialog.current.showModal();
        }, targetTime * 1000);

        setTimeExp(setTimeStarted(true))
      }

   function handleStop() {
    clearTimeout(timer.current);
    //dialog.current.hideModal();


   }
    return(
    <>
   <ResulstModal ref={dialog} targetTime={targetTime} result='lostt'/>
    <section className="challenge">
        <h2>{title}</h2>
        {timerExp && <p>You lost</p>}
        <p className="challenge-time">
    {targetTime} seconds{targetTime > 1 ? 's': ''}
        </p>
        <button onClick={timerStarted ? handleStop: handleStart}>
            {timerStarted ? 'Stop': 'Start'} Challenge
        </button>
        <p>
        {timerStarted ? 'Time is running ': 'not running'} 
        </p>
    </section>
    
    </>)
}