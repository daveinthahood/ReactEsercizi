import { useState } from "react"



export const useFetch = () => {
    const [data, setData] = useState(null);

    const fetchData = async () => {
        if (!data) {
          try {
            const response = await fetch(
              `https://api.github.com/users/${username}`
            );
            if (response.ok) {
              const res = await response.json();
              setData(res);
            }
          } catch (error) {
            console.log(error);
            setErr(error);
          }
        }
      };
      useEffect(() => {
        fetchData();
      }, []);

      return [data, setData]
}