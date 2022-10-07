import { useEffect, useState } from "react";

function useFetch(
  uri,
  fetchOptions = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  },
  useNow=true
) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  let componentMounted = true;

  useEffect(() => {
    if (useNow) {
      setData(null);
      setError(null);
      setLoading(true);
      let controller = new AbortController();
      if (!uri) return;
      fetch(uri, {...fetchOptions,signal:controller.signal})
        .then(async (response) => {
          const isJson = response.headers.get("content-type").includes("application/json");
          if (!response.ok) {
            const errorMsg = {
              status: response.status,
              text: response.statusText,
            };
            return Promise.reject(errorMsg);
          }
          if (!isJson) {
            const errorMsg = {status:200,text:"Invalid data returned from server"}
            return Promise.reject(errorMsg);
          }
          return response.json();
        })
        .then(dat=>{
          if(dat.error){ //Check for error object from server
            return Promise.reject({status:200,text:dat.message});
          } else{
            return dat
          }
        })
        .then((data) => {
          if(componentMounted) setLoading(false);
          return data
        })
        .then((dat)=>{
          if (componentMounted) setData(dat);
        })  
        .catch((error) => {
          error = error.status? error:{status:1,text:error.message};
          if(componentMounted) {
            setError(error);
            setLoading(false)
          };
        });
        return ()=>{
          controller.abort();
          componentMounted=false;
        }
    }
  }, [uri]);

  return {
    loading,
    data,
    error,
  };
}

export default useFetch;
