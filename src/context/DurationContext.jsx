import { createContext, useEffect, useState } from "react";

const DurationContext = createContext();

const DurationProvider = ({ children }) => {
  const [duration, setDuration] = useState(1500);

  useEffect(() => {
    const timer = setTimeout(() => setDuration(0), 7000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <DurationContext.Provider value={{ duration }}>
      {children}
    </DurationContext.Provider>
  );
};

export { DurationContext, DurationProvider };
