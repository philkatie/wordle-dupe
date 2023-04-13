import React, {useContext} from 'react';
import App, { AppContext } from '../App';

function Letter({letterPos, attemptVal}) {
    const { board, correctWord, currentAttempt } = useContext(AppContext);
    const letter = board[attemptVal][letterPos];

    const correct = correctWord[letterPos] === letter;
    const almost = !correct && letter != "" && correctWord.includes(letter);

    const letterState = currentAttempt.attempt > attemptVal && 
        (correct ? "correct" : almost ? "almost" : "error");

  return (
    <div className='letter' id={letterState}>
        {letter}
    </div>
  )
}

export default Letter
