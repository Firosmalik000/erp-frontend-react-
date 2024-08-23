import axios, { AxiosRequestConfig, Method } from 'axios';
import { useEffect, useState } from 'react';

const UseApi = <T,>(path: string, method: Method = 'GET', body: any = null, headers: any = null) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const config: AxiosRequestConfig = {
          method,
          url: `https://deploy-test-node-plum.vercel.app/api${path}`,
          data: body,
          headers: headers,
        };
        const response = await axios(config);
        setData(response.data);
      } catch (err: any) {
        if (err.response) {
          setError(err.response.data.msg || 'An error occurred');
        } else {
          setError('An error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [path, method, body, headers]);

  return { data, error, loading };
};

export default UseApi;
