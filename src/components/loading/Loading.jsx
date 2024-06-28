import DisplayLottieAnm from "../../containers/displayLottie/DisplayLottieAnm";
import { greeting, loadAnimation } from "../../portfolio";
import "./_loading.scss";

const Loading = () => {
  const loadLines = [
    // Funny
    "Loading... Time to stretch your legs, maybe do a little dance!",
    "Hold your horses, almost there! We promise, no actual horses involved.",
    "Loading... If we were any faster, we'd be in a time machine!",
    "Patience, wait till the cube gets solved - Just kidding!",
    "Hold on, explorer. Loading... Meanwhile, did you know pigeons can do math?",

    // Official
    "Please wait while we load your content.",
    "Loading... Your request is being processed.",
    "Thank you for your patience. Loading...",
    "Loading... Ensuring everything is perfect.",
    "Loading... We appreciate your patience.",

    // Gen Z
    "Loading... BRB, making it lit!",
    "Hold up... We're vibing and loading.",
    "Loading... No cap, almost done.",
    "Loading... Slay, it's worth the wait.",
    "Loading... Just a sec, fam!",
  ];

  const generateRandomString = () => {
    let randomIndex = Math.floor(Math.random() * loadLines.length);
    return loadLines[randomIndex];
  };

  return (
    <div className="loader">
      <div className="loading-logo">
        <div className="loader-title">
          <span className="grey-color"> &lt;</span>
          <span className="logo-title">{greeting.name}</span>
          <span className="grey-color">/&gt;</span>
        </div>
      </div>
      <div className="animation">
        <DisplayLottieAnm animationData={loadAnimation.animation} />
      </div>
      <p className="randomString">{generateRandomString()}</p>
    </div>
  );
};

export default Loading;
