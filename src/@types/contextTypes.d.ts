// file contains the type definitions for parts of the app that concern the isLoggedIn implementation

interface LoginStateContextType {
  isLoggedIn: boolean | null;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}
