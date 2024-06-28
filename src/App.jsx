import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import MainContainer from "./components/mainContainer/MainContainer";
import { useEffect, useState } from "react";
import { loadAnimation } from "./portfolio";
import Loading from "./components/loading/Loading";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const [isLoding, setIsLoading] = useState(true);

  useEffect(() => {
    if (loadAnimation.enabled) {
      const loadTimer = setTimeout(
        () => setIsLoading(false),
        loadAnimation.duration
      );

      return () => clearTimeout(loadTimer);
    }
  }, []);

  return (
    <>
      <ThemeProvider>
        {isLoding ? (
          <Loading />
        ) : (
          <>
            <div className="layout">
              <Navbar />
              <div className="content-container">
                <Sidebar />
                <MainContainer/>
              </div>
            </div>
          </>
        )}
      </ThemeProvider>
    </>
  );
}

export default App;
