import { useState, useEffect } from "react";

function useFetch(service){
const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);

    async function getData(){
            try{
                setError(null);
                setLoading(true);
const result = await service();
                setData(result);
            }
            catch (error){
                setError(error.message);
            }
            finally {
                setLoading(false)
            }
        }

    useEffect(() => {
        getData();
    }, [service]);

    function refetch(){
        getData();
    }

    return {loading, error, data, refetch}
}