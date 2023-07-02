import ResultContext from './createContext.js';
import { useState } from 'react';

const ResultProvider = ({ children }) => {
  const [generalData, setGeneralData] = useState(null)
  return (
    <ResultContext.Provider value={{ generalData, setGeneralData }}>
      {children}
    </ResultContext.Provider>)
}

export { ResultProvider }