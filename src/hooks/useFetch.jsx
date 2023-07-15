import { useState } from "react";

function useFetch(url, options={}) {
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  async function usefetch() {
    try {
      setIsloading(true);
      const response = await fetch(url,options);
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error);
    }
    setIsloading(false);
  }

  return { isLoading, error, data, usefetch };
}

export default useFetch;
