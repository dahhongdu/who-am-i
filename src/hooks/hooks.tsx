import { useContext } from "react";
import { LoginStateContext } from "../contexts/contexts";

export const useLoginState = () => {
  const context = useContext(LoginStateContext);
  if (context === undefined) {
    throw new Error('로그인 context 사용 코드.. 뭔가 문제가 생겼다잉..')
  }
  return context;
}