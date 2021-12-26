import {useState, useEffect} from 'react';
import axios from 'axios';

function useHero(url, id) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchComic = async () => {
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
    fetchComic();
  }, [id]);

  return {data, loading, error};
}
export default useHero;
