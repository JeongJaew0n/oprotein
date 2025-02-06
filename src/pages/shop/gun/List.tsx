import { useCallback } from "react";
import { useNavigate } from "react-router-dom"
import { useImmer } from "use-immer";

export const GunPage = () => {
  const navigate = useNavigate();

  const createPayload = useCallback(() =>{

    return {
      name: 'hello',
      id: 123
    }
  }, []);

  // const [searchPayload, setSearchPayload] = useImmer<any>();

  return (
  <>
    hello!
  </>
  );
}