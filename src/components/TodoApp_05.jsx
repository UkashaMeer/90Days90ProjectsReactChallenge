import { useState } from "react"
import { FaMinus } from "react-icons/fa";

export const TodoApp = () => {
    const [items, setItems] = useState([]);
    const [addItem, setAddItem] = useState('');

    const AddItemFunc = () => {
        setItems([...items, addItem]);
        setAddItem('')
    }    
    
    const RemoveFunc = (i) => {
        setItems(items.filter((item) => item !== i))
    }
    
    return(
        <main className="flex items-center justify-center p-4 min-h-[100vh] h-full w-full bg-gray-400">
            <section className="bg-white max-w-[400px] flex flex-col gap-2 p-4 rounded-md">
                <h1 className="text-center text-2xl mb-3">Todo App</h1>
                <div className="flex gap-1 items-center">
                    <input type="text" placeholder="Whats in your mind today?" className="border p-2 border-solid border-gray-400 rounded-md" value={addItem} onChange={(e) => setAddItem(e.target.value)} />
                    <button className="bg-black text-white py-2 px-4 rounded-md text-sm w-full cursor-pointer hover:bg-white hover:text-black border border-solid border-black transition-all duration-200 ease-in-out" onClick={AddItemFunc}>Add</button>
                </div>
                <ul className="flex flex-col gap-2 w-full">
                    {items.map((item, index) => (
                        <li key={index} className="bg-gray-300 rounded-md p-2 px-4 flex items-center justify-between">
                            {item}
                            <FaMinus size='12px' onClick={() => RemoveFunc(item)} cursor="pointer" />
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    )
}