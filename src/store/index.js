import React, { useState, useMemo, createContext, useContext } from "react";

function Store() {
  const context = createContext();


  const Provider = ({ children, initialState = {} }) => {
    const [state, setState] = useState(initialState);

    const contextValue = useMemo(() => [state, setState], [state]);

    return <context.Provider value={contextValue}>{children}</context.Provider>;
  };

  const useStore = () => useContext(context);

  return {
    Provider,
    useStore
  };
}

const AppStore = Store();

export default AppStore;
