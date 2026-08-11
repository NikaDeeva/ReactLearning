import { useMemo, useRef, useState } from "react";

function IdontUnderstandAnything(){
const [products, setProducts] = useState([
        { name: "Apple", price: 2 },
        { name: "Milk", price: 3 },
        { name: "Bread", price: 4 }
    ]);

    const [name, setName] = useState("Anna");

    const [newName, setNewName] = useState('')


    const totalPrice = useMemo(() => {products.reduce((total, product) => {return total + product.price}, 0)}, [products]);

    function handleChange(e){
     setNewName(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        setName(newName);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                 <input type="text" onChange={handleChange} />
            <button type="submit">Save name</button>
            </form>
           <p>Name: {name}</p>
            <p>Total price: {totalPrice}</p>
        </div>
    )
}

function ProductsSearch(){

    const [products] = useState([
    { name: "Apple", price: 2 },
    { name: "Milk", price: 3 },
    { name: "Bread", price: 4 },
    { name: "Banana", price: 2 },
    { name: "Cheese", price: 6 }
]);

const [search, setSearch] = useState("");

const [isSearching, setIsSearching] = useState(false);

if (search === ''){
    setIsSearching(false);
}

const filteredProducts = useMemo(() => {
   return products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
}, [search]);
 
return (
    <div>
        Search: <input type="text" value={search} onChange={ (e) => {
            setSearch(e.target.value)
            setIsSearching(true)
        }   
            } />
        {isSearching ? <ul>{filteredProducts.map(p => <li key={p.name}>{p.name}</li>)}</ul> : <ul>{products.map(p => <li key={p.name}>{p.name}</li>)}</ul>}
        
    </div>
)

}

function Counter(){

    const [count, setCount] = useState(0);

    const renders = useRef(0);

    renders.current++;

    useEffect(() => {
    console.log(`Count changed: ${count}`);
}, [count]);

    return (
        <div>
            <p>Count: {count}</p>
            <p>Renders: {renders.current}</p>

            <button onClick={() => setCount(prev => (prev + 1))}>+ 1</button>
            <button onClick={() => setCount(prev => (prev - 1))}>- 1</button>
        </div>
    )

}