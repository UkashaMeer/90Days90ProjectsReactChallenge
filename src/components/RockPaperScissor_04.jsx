import { useState } from "react"

export const RockPaperScissor = () => {
    const [userPick, setUserPick] = useState('');
    const [computerPick, setComputerPick] = useState('');
    const [userScore, setUserScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const [winning, setWinning] = useState('');


    const PickerFunc = (value) => {
        const choices = ["Rock", "Paper", "Scissors"];
        let computerRandPic = choices[Math.floor(Math.random() * choices.length)];

        setUserPick(value)
        setComputerPick(computerRandPic)

        if (value === computerRandPic){
            setWinning("It's a draw.")
        }
        else if ((value === 'Scissors' && computerRandPic === 'Paper') || (value === 'Paper' && computerRandPic === 'Rock') || (value === 'Rock' && computerRandPic === 'Scissors')){
            setUserScore((prev) => prev + 1);
            setWinning('You Win');
        }else {
            setComputerScore((prev) => prev + 1);
            setWinning('Computer Win');

        }
    }
    const RestartGame = () => {
        setUserPick('')
        setComputerPick('')
        setUserScore(0)
        setComputerScore(0)
        setWinning('')
    }

    return(
        <div className="flex items-center justify-center bg-gray-400 min-h-[100vh] h-full w-full">
            <div className="flex flex-col items-center min-w-[400px] w-full bg-white rounded-md shadow-sm p-4">
                <div className="flex gap-2 w-full items-center">
                    {["Rock", "Paper", "Scissors"].map((value, idx) => (
                        <button key={idx} className="bg-black text-white py-2 px-4 rounded-md text-sm w-full cursor-pointer hover:bg-white hover:text-black border border-solid border-black transition-all duration-200 ease-in-out" onClick={() => PickerFunc(value)}>{value}</button>  
                    ))} 
                </div>
                <div className="flex flex-col gap-1 text-center mt-4">
                    <p>Your Picked: <span>{userPick}</span></p>
                    <p>Computer Picked: <span>{computerPick}</span></p>
                </div>
                <div className="flex flex-col gap-1 text-center mt-4">
                    <p>User Score: <span>{userScore}</span></p>
                    <p>Computer Score: <span>{computerScore}</span></p>
                    <p>{winning}</p>
                    <button className="bg-black text-white py-2 px-4 rounded-md text-sm w-full cursor-pointer hover:bg-white hover:text-black border border-solid border-black transition-all duration-200 ease-in-out" onClick={RestartGame}>Play Again</button>  
                </div>
            </div>
        </div>
    )
}