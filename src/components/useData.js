import { useState, useEffect } from 'react';

export default function useData(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setData(data));
  }, [url]);

  return data;
}
