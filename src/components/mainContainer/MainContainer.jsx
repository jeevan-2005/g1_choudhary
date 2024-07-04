import "./_mainContainer.scss";
import AppRoutes from "../../routes/AppRoutes";
import "animate.css";

const MainContainer = () => {
  return (
    <div className="main-content">
      <div className="gradientBorder animate__animated animate__fadeIn">
        <div className="pageContent">
          <AppRoutes />
        </div>
      </div>
    </div>
  );
};

export default MainContainer;