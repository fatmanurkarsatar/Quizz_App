import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import QuestionCard from '../../components/questionCard/QuestionCard';
import './Quiz.css';
import Modal from '../../components/modal/Modal';
import questions from '../../data/dt.json';

const Quiz = () => {
  const { difficulty, amount } = useParams();
  const [questionsData, setQuestionsData] = useState([]);
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);
  const [modal, setModal] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null)); 

  const handleSkip = () => {
    setCurrentQuestionIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex < questions.length ? nextIndex : prevIndex;
    });
  };


  useEffect(() => {
    const getData = async () => {
      try {
        if (difficulty === 'easy') {
          const easyQuestions = questions.questions.filter(question => question.level === 'easy');
          setQuestionsData(easyQuestions);
          console.log(easyQuestions);

        }else if (difficulty === 'medium') {
          const mediumQuestions = questions.questions.filter(question => question.level === 'medium');
          setQuestionsData(mediumQuestions);
          console.log(mediumQuestions);

        } else if (difficulty === 'hard') {
          const hardQuestions = questions.questions.filter(question => question.level === 'hard');
          setQuestionsData(hardQuestions);
          console.log(hardQuestions);
        }
        
      } catch (error) {
        console.error('Error fetching quiz data:', error);
        
      }
    };

    getData();

  }, [difficulty, amount]);



  return (
    <div className='quiz'>
      {modal ? (
        <Modal score={score} />
      ) : (
        <QuestionCard
          questionsData={questionsData}
          score={score}
          setScore={setScore}
          count={count}
          setCount={setCount}
          modal={modal}
          setModal={setModal}
        />
      )}
      <div>
      {questions[currentQuestionIndex] && (
        <QuestionCard
          question={questions[currentQuestionIndex].question}
          options={questions[currentQuestionIndex].options}
          onSkip={handleSkip}
        />
      )}
    </div>
    </div>
  );
};

export default Quiz;
