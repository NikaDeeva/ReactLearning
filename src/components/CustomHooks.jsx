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

function useInput(initValue){
const [value, setValue] = useState(initValue);
function onChange(e){
    setValue(e.target.value)
}
function reset(){
    setValue(initValue);
}
return {value, onChange, reset};
}
function Form() {
    const name = useInput("");
    const email = useInput("");

    return (
        <form>
            <input
                value={name.value}
                onChange={name.onChange}
            />

            <input
                value={email.value}
                onChange={email.onChange}
            />

            <button type="button" onClick={name.reset}>
                Reset name
            </button>
        </form>
    );
}

function useFetch(url) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData(){
            try{
                setError(null);
                setLoading(true);
                const res = await fetch(url);
                if (!res.ok){
                    throw new Error('Something went wrong');
                }
                const gottenData = await res.json();
                setData(gottenData);
            }
            catch (error){
                setError(error.message);
            }
            finally {
                setLoading(false)
            }
        }
        getData();
    }, [url]);

    return {loading, error, data}
}

function Posts(){
    const {loading, error, data} = useFetch('https://jsonplaceholder.typicode.com/posts');
    return (
        <div>{loading ? <h2>Loading...</h2> : error ? <h2>Error: {error}</h2> : <ul>{data.map(p => <li key={p.id}>{p.title}</li>)}</ul>}</div>
    )

}