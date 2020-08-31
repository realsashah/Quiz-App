import React,{useState} from 'react';
import './App.css';
import QuestionCard from './components/QuestionCard';
import {fetchQuizQuestions} from './components/API'

const TOTAL_QUESTIONS=10;

function App() {

  const [loading,setLoading]=useState(false);
  const [questions,setQuestions]=useState([]);
  const [number,setNumber]=useState(0);
  const [userAnswers,setUserAnswers]=useState([]);
  const [score,setScore]=useState(0);
  const [gameOver,setGameOver]=useState(true);

  console.log(fetchQuizQuestions(10));
  


  const startQuiz=async()=>{
    
  }

  const checkAnswer=(e:React.MouseEvent<HTMLButtonElement>)=>{
    
  }

  const nextQuestion=()=>{

  }

  return (
    <div>
      <h1>React Quiz</h1>
      <button className='startBtn' onClick={startQuiz}>Start Quiz</button>
      <p className='score'>Score: </p>
      <p>Loading Questions...</p>
      {/* <QuestionCard 
        questionNumber={number+1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers?userAnswers[number]:undefined}
        callback={checkAnswer}
      /> */}
      <button className='nextBtn' onClick={nextQuestion}>Next Question</button>
    </div>
  );
}

export default App;
