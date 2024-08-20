// file contains the type definitions for parts of the app that concern the isLoggedIn implementation

// context type를 정해줍니다. 로그인 여부 확인하는 것과 useState에서 동적으로 바꿔줄 set을 만들어줍니다.
interface LoginStateContextType {
  isLoggedIn: boolean | undefined;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}
