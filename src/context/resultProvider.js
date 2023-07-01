import ResultContext from './resultContext.js';
import { useState } from 'react';

const ResultProvider = ({ children }) => {
  const [generalData, setGeneralData] = useState({})
  return (
    <ResultContext.Provider value={{ generalData, setGeneralData }}>
      {children}
    </ResultContext.Provider>)
}

export { ResultProvider }