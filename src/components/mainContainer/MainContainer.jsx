import './_mainContainer.scss'
import AppRoutes from "../../routes/AppRoutes";

const MainContainer = () => {
  return (
    <div>
      <div className="main-content">
        <AppRoutes />
      </div>
    </div>
  );
};

export default MainContainer;
