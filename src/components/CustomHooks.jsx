import { useState } from "react";

function useCounter(){
    const [count, setCount] = useState(0);
    function increment(){
        setCount(prev => prev + 1);
    }
    function decrement(){
        setCount(prev => prev - 1);
    }
    function reset(){
        setCount(0);
    }

    return [count, increment, decrement, reset];
}

function Counter(){
    const [count, increment, decrement, reset] = useCounter();
    return (
        <div>
            <p>{count}</p>
            <button onClick={decrement}>- 1</button>
            <button onClick={increment}>+ 1</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

function useToggle(){
    const [isOpen, setIsOpen] = useState(false);
    function open(){
        setIsOpen(prev => prev = true);
    }
    function close(){
        setIsOpen(prev => prev = false);
    }
    return {isOpen, open, close};
}

function Modal(){
    const {isOpen, open, close} = useToggle();
    return (
        <div>
            <button onClick={() => {isOpen ? alert('Modal is already open') : open()}}>Open modal</button>
            <button onClick={() => {isOpen ? close() : alert('Modal is already closed')}}>Close modal</button>
            {isOpen && <p>Modal is open</p>}
        </div>
    )
}

function useToggle(){
    const [isOpen, setIsOpen] = useState(false);
    // function open(){
    //     setIsOpen(prev => prev = true);
    // }
    // function close(){
    //     setIsOpen(prev => prev = false);
    // }
    return {setIsOpen};
}

function Modal(){
    const {setIsOpen} = useToggle();
    const isOpen = setIsOpen;
    return (
        <div>
            <button onClick={() => {isOpen ? alert('Modal is already open') : setIsOpen(true)}}>Open modal</button>
            <button onClick={() => {isOpen ? setIsOpen(false) : alert('Modal is already closed')}}>Close modal</button>
            {isOpen && <p>Modal is open</p>}
        </div>
    )
}