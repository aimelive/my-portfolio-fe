import { TOTAL_SCREENS } from "../../utils/screenUtils";
import Header from "../layouts/Header";
import ScreenComponent from "./ScreenComponent";

const Home = () => {
  const mapAllScreens = () => {
    return TOTAL_SCREENS.map((screen) => (
      <div>
        <ScreenComponent
          name={screen.name}
          component={screen.component}
          key={screen.name}
        />
      </div>
    ));
  };

  return (
    <>
      <Header />
      {mapAllScreens()}
    </>
  );
};

export default Home;
