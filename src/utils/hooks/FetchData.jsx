import axios from "axios";
import { useState, useEffect } from "react";
import dataMocked from "../ManageApi";

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
          .then((response) =>
            dataMocked
              ? setData(new model(response.data))
              : setData(new model(response.data.data))
          );
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
