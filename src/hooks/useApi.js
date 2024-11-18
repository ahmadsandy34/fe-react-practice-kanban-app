import { useState, useEffect } from 'react';
import axios from 'axios';

const useApi = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error.message);
    } finally {
      setLoading(false)
    }
  };

  const postData = async (data) => {
    setLoading(true)
    try {
      const response = await axios.post(url, data);
      await fetchData();
    } catch (error) {
      console.error("Error submitting data:", error);
      setError(error.message);
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, error, loading, postData };
};

export default useApi;