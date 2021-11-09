import { useCallback, useContext, useState } from 'react';
import ContextPrimary from '../context/ContextPrimary';

const FetchAPI = () => {
  const [all, setAll] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const PRIMARY = useContext(ContextPrimary);

  const requestAPI = useCallback(async (url) => {
    let response;
    let result;
    try {
      setError(null);
      setIsLoading(true);
      response = await fetch(url);
      result = await response.json();
      setAll(result);
      PRIMARY.setFetchResponse(result);
      setIsLoading(false);
    } catch (erro) {
      result = null;
      setError(erro.message);
    }
  }, [PRIMARY]);
  return { all, isLoading, error, requestAPI };
};
export default FetchAPI;
