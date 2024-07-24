import { useContext } from "react";
import Heading2 from "../../../../heading/Heading2/Heading2";
import GithubCalendar from "../GithubCalendar/GithubCalendar";
import { ThemeContext } from "../../../../../context/ThemeContext";
import "./_githubStats.scss";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

const gitStatsLinks = {
  light: [
    {
      alt: "totalCommitsChart",
      src: "https://github-readme-stats.vercel.app/api?username=jeevan-2005&theme=light&hide_border=false&include_all_commits=true0",
    },
    {
      alt: "topLangs",
      src: "https://github-readme-stats.vercel.app/api/top-langs/?username=jeevan-2005&theme=light&hide_border=false&include_all_commits=true&count_private=false&layout=compact",
    },
    {
      alt: "streaks",
      src: "https://github-readme-streak-stats.herokuapp.com/?user=jeevan-2005&theme=light&hide_border=false",
    },
  ],
  dark: [
    {
      alt: "totalCommitsChart",
      src: "https://github-readme-stats.vercel.app/api?username=jeevan-2005&theme=tokyonight&hide_border=false&include_all_commits=true0",
    },
    {
      alt: "topLangs",
      src: "https://github-readme-stats.vercel.app/api/top-langs/?username=jeevan-2005&theme=tokyonight&hide_border=false&include_all_commits=true&count_private=false&layout=compact",
    },
    {
      alt: "streaks",
      src: "https://github-readme-streak-stats.herokuapp.com/?user=jeevan-2005&theme=tokyonight&hide_border=false",
    },
  ],
};

const GithubStats = () => {
  const { theme } = useContext(ThemeContext);

  const { ref: refGitImgs, inView: inViewGitImgs } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const styleGitImgs = useSpring({
    opacity: inViewGitImgs ? 1 : 0,
    transform: inViewGitImgs ? "translateX(0%)" : "translateX(70%)",
    config: { tension: 170, friction: 60 },
  });

  return (
    <div className="githubStats">
      <Heading2 text={"Github Stats"} />
      <div className="myGitHubCalendar">
        <GithubCalendar />
      </div>
      <animated.div className="gitCommitAndLangs" ref={refGitImgs} style={styleGitImgs}>
        {gitStatsLinks[theme].map((link, i) => (
          <div key={i} className={link.alt}>
            <img src={link.src} alt={link.alt} />
          </div>
        ))}
      </animated.div>
    </div>
  );
};

export default GithubStats;
