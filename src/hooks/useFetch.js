import { useState, useEffect } from 'react';
import axios from 'axios';


function useFetch(url, query) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get(url);
            setData(response.data.data.results);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [query]);

    return { data, loading, error, }
};
export default useFetch;

