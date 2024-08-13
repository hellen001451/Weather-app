import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [isPending, setisPending] = useState(true); //incase fetching ur data istaking time
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("cannot fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setisPending(false);
          setError(null);
          console.log(data);
        })
        .catch((error) => {
          setError(error.message);
          setisPending(false);
        });
    }, 1000);
  }, [url]);

  return { data, isPending, error };
};
export default useFetch;
