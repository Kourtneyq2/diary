import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export const UseFetch = (defaultURL = "") => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const [url, setUrl] = useState(defaultURL);
  useEffect(() => {
    if (url) {
      const fetchData = async () => {
        try {
          setIsLoading(true);
          const { data: apiData } = await axios.get(url);
          setError(false);
          setIsLoading(false);
          setData(apiData);
        } catch (error) {
          setData();
          setIsLoading(false);
          setError(true);
        }
      };

      fetchData();
    }
  }, [url]);

  return { setUrl, error, isLoading, data };
};
