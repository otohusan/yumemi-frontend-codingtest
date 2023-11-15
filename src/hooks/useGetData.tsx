import axios from 'axios';
import { useState, useEffect } from 'react';

// URLとapiKeyを引数にデータとローディング中であることを返す
function useGetData(url: string, apiKey: string): any {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    setLoading(true);

    axios
      .get(url, {
        headers: {
          'X-API-KEY': apiKey,
        },
      })
      .then((response) => {
        setData(response.data.result);
        setLoading(false);
      })
      .catch((error) => {
        alert(`${error}が起きました`);
        setLoading(false);
      });
  }, [url]);

  return [data, loading];
}

export default useGetData;
