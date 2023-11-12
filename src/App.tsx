import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
// import './App.css';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import Spacer from "./components/Spacer";
import WorkingExperience from "./components/WorkingExperience/WorkingExperience";
import { useDarkMode } from "./hooks/useDarkMode";
import MainLayout from "./layouts/MainLayout";
import Home from "./page/Home";
import { globalStyles } from "./styles/globalStyle";

function App() {
  globalStyles();
  useDarkMode();

  return (
    <>
      <MainLayout>
        <Home />
        <Introduction />
        <Spacer height={10} />
        <WorkingExperience />
        <Spacer height={10} />
        <Projects />
        <Spacer height={10} />
      </MainLayout>
    </>
  );
}

export default App;
