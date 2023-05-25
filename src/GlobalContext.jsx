import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  // STATES RESPONSAVEIS PELAS CORES DO TENIS AIRJORDAN
  const [colorRed, setColorRed] = React.useState(true);
  const [colorBlue, setColorBlue] = React.useState();
  const [colorBrown, setColorBrown] = React.useState();
  const [colorPink, setColorPink] = React.useState();

  return (
    <GlobalContext.Provider
      value={{
        // STATES EXPORTADOS QUE CONTROLAM AS TROCAS DE CORES DO TENIS
        colorRed,
        setColorRed,
        colorBlue,
        setColorBlue,
        colorBrown,
        setColorBrown,
        colorPink,
        setColorPink,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
