import GitHubCalendar from "react-github-calendar";
import "./_githubCalendar.scss";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../../../context/ThemeContext";
import './_githubCalendar.scss'

const GithubCalendar = () => {
  const { theme } = useContext(ThemeContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="githubCalendar">
      <GitHubCalendar
        username="jeevan-2005"
        loading={loading}
        colorScheme={theme}
      />
    </div>
  );
};

export default GithubCalendar;
