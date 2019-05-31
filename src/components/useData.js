import { useState, useEffect } from 'react';

export default url => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let ignore = false;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (!ignore) setData(data);
      });
    return () => {
      ignore = true;
    };
  }, [url]);

  return data;
};
