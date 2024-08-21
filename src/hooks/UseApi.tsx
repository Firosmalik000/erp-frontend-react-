/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig, Method } from 'axios';
import { useEffect, useState } from 'react';

const UseApi = (path: string, method: Method = 'GET', body: any = null, headers: any = null) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
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
      } catch (err) {
        setError(err as any);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [path, method, body, headers]);
  return { data, error, loading };
};

export default UseApi;
