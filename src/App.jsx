import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const initialList = [];

    const [list, setList] = useState(initialList);

    const deleteValue = (index) => {
        const auxList = [...list];

        auxList.splice(index, 1);

        setList(auxList);
    };

    const taskDone = (index) => {
        const updatedList = [...list];
        updatedList[index].completed = !updatedList[index].completed;
        setList(updatedList);
    };

    const [inputValue, setInputValue] = useState("");

    const onInputChange = ({ target }) => {
        // console.log( target.value )
        setInputValue(target.value);
        console.log(inputValue);
    };

    const onSubmit = (event) => {
        // console.log(inputValue);
        event.preventDefault();
        // if (inputValue.trim().length <= 1) return;
        setList([...list, { text: inputValue, completed: false }]);

        setInputValue("");
    };

    return (
        <>
            <h1>Lista de tareas pendientes</h1>

            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    className="input"
                    placeholder="Añadir tarea"
                    value={inputValue}
                    onChange={onInputChange}
                />
            </form>

            <ul>
                {list.map((item, index) => (
                    <li key={index} className="todo-li">
                        <div
                            onClick={() => taskDone(index)}
                            className={
                                item.completed === true
                                    ? "todo-completed"
                                    : "todo-uncompleted"
                            }
                        >
                            {item.text}
                        </div>
                        <button
                            className="buttonDelete"
                            onClick={() => deleteValue(index)}
                        >
                            X
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default App;
