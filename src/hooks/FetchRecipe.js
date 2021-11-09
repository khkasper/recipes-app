import { useCallback, useState } from 'react';

const FetchRecipe = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const request = useCallback(async (url) => {
    let response;
    let result;
    try {
      setError(null);
      setIsLoading(true);
      response = await fetch(url);
      result = await response.json();
      setData(result);
      setIsLoading(false);
    } catch (erro) {
      result = null;
      setError(erro.message);
    }
  }, []);
  return { data, isLoading, error, request };
};
export default FetchRecipe;
