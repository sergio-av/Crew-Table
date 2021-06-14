import { auth } from "../utils/firebasejeConfig";
import { useEffect, useState } from "react";
import Store from ".";

export const initialState = {
  currentUser: null,
  isLoggedIn: false
};

export function useSession() {
  const [{ currentUser, isLoggedIn }, setState] = Store.useStore();
  const [isLoading, toggleIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setState({
          currentUser: user,
          isLoggedIn: true
        });
      } else {
        setState({
          currentUser: null,
          isLoggedIn: false
        });
      }
      toggleIsLoading(false);
    });


    return () => unsubscribe();
  }, [setState]);

  return {
    isLoading,
    currentUser,
    isLoggedIn
  };
}
