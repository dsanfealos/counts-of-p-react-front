import { useEffect, useState } from "react";

const useFetchGet = (url, trigger) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        if(!trigger) return;
        setIsPending(true);
        fetch(url)
            .then(response => {
                if(!response.ok){
                    throw Error("There is an error fetching the data.")
                }
                return response.json();
            })
            .then(fetchData => {
                setData(fetchData);
                setIsPending(false);
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
                setIsPending(false);
            });
    }, [trigger, url]);
    console.log(data);
    return {data, isPending, error};
}
 
export default useFetchGet;