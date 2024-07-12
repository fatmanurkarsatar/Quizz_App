import React, {useState} from 'react'
import Dropdown from '../../components/dropdown/Dropdown'
import './Introduce.css'
import { useNavigate } from 'react-router-dom';


const Introduce = () => {
    const difficulty = ["easy", "medium", "hard"];
    const [difficultyChange, setDifficultyChange] = useState('');
    const navigate = useNavigate(); 
    const TOTAL_QUESTİONS = 10;

    const startQuiz = () => { 
        if(difficultyChange){
            navigate(`/quiz/${difficultyChange}/${TOTAL_QUESTİONS}`)
        }
    }
    
    return (
    <div className='introduce'>
        <div className="introduce-container">
            <img src="https://i.pinimg.com/564x/ec/77/1d/ec771dcb4f83f09e3b0c59d622d95ad5.jpg" alt="" />
            <Dropdown data={difficulty} setDifficultyChange={setDifficultyChange}/>
            <div  onClick={startQuiz} className='introduce-btn'>Start</div>
        </div>
    </div>
  )
}

export default Introduce