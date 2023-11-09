import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// import './App.css';
import WorkingExperience from './components/WorkingExperience/WorkingExperience';
import MainLayout from './layouts/MainLayout';
import Home from './page/Home';
import { globalStyles } from './styles/globalStyle';
import { useDarkMode } from './hooks/useDarkMode';
import Spacer from './components/Spacer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {

  globalStyles()
  useDarkMode()

  return (
    <>
      <MainLayout>
        <Home />
        <Spacer height={10}/>
        <WorkingExperience/>
      </MainLayout>
    </>
  )
}

export default App
