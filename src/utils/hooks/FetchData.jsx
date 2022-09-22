import axios from "axios";
import { useState, useEffect } from "react";

const FetchData = (url, model) => {
  const [data, setData] = useState();
  const [dataLoaded, setDataLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!url) return setDataLoaded(false);
    const getData = async () => {
      try {
        await axios
          .get(url)
          .then((response) => setData(new model(response.data.data)));
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setDataLoaded(true);
      }
    };
    getData();
  }, [url, model]);

  return { dataLoaded, data, error };
};

export default FetchData;
