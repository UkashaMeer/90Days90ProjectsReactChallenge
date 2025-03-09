import { useState } from "react"
import qBank from "./QuestionData"

export const QuizApp = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [score, setScore] = useState(0);
    const [endQuiz, setEndQuiz] = useState(false);
    const [answer, setAnswer] = useState('');
    const [err, setErr] = useState('');
    const [progress, setProgress] = useState(0);

    const NextQuestionFunc = () => {

        if (selectedOption === '') {
            setErr('Please Select Field');
            return;
        }

        if (qBank[currentQuestion].answer === selectedOption){
            setAnswer('correct')
            setScore((prev) => prev  + 1);
        }else{
            setAnswer('wrong')
        }

        setTimeout(() => {
            setAnswer('')
            setSelectedOption('')
            setErr('')
            if(currentQuestion + 1 < qBank.length){
                setSelectedOption('');
                setCurrentQuestion((prev) => prev + 1);
            }else{
                setEndQuiz(true)
            }
            setProgress(((currentQuestion + 1) / qBank.length) * 100);
        }, 1000)
    }

    const ResetGame = () => {
        setEndQuiz(false);
        setCurrentQuestion(0)
        setSelectedOption('')
        setScore(0)
        setProgress(0)
    }

    return(
        <main className="flex items-center justify-center p-4 min-h-[100vh] h-full w-full bg-gray-400">
            <section className="bg-white min-w-[400px] flex flex-col rounded-md overflow-hidden">
                <span className={`h-2 bg-green-400 flex relative`} style={{width: `${progress}%`}}></span>
                <div className="flex flex-col p-4">
                    <h1 className="text-center text-2xl mb-3">Quiz App</h1>
                    { !endQuiz ?
                        <div id={qBank[currentQuestion].id}>
                            <p>{qBank[currentQuestion].question}</p>
                            <div className="flex flex-col gap-2 mt-2 mb-2">
                                {
                                    qBank[currentQuestion].options.map((option, index) => (
                                        <div className="flex items-center justify-between py-2 px-4 bg-gray-300 rounded-md" key={index}>
                                            <label className="w-full" htmlFor={option}>{option}</label>
                                            <input type="radio" name="quiz" id={option} checked={selectedOption === option} value={option} onChange={(e) => setSelectedOption(e.target.value)} />
                                        </div>
                                    ))
                                }
                                {
                                    answer && (
                                        <p>Your Answer is <span className={answer === 'correct' ? 'text-green-700' : 'text-red-700'}>{answer === 'correct' ? 'Correct' : 'Wrong'}</span></p>
                                    )
                                }
                                {err && (
                                    <p className="text-red-700">{err}</p>
                                )}
                                <p className="text-lg">Your Score: <span className="font-bold">{score} / {qBank.length}</span></p>
                            </div>
                            <button className={`bg-black text-white py-2 px-4 rounded-md text-sm w-full cursor-pointer ${!selectedOption ? 'cursor-not-allowed opacity-50' : 'hover:bg-white hover:text-black border border-solid border-black transition-all duration-200 ease-in-out'}`} onClick={NextQuestionFunc}>Submit</button>
                        </div>
                        : <div>
                            <p className="text-xl font-semibold">🎉 Quiz Completed! 🎉</p>
                            <p className="text-lg">Your Score: <span className="font-bold">{score} / {qBank.length}</span></p>
                            <button className="mt-4 bg-black text-white py-2 px-4 rounded-md text-sm w-full cursor-pointer hover:bg-white hover:text-black border border-solid border-black transition-all duration-200 ease-in-out" onClick={ResetGame}>Play Again</button>
                        </div>
                    }
                </div>
            </section>
        </main>
    )
}