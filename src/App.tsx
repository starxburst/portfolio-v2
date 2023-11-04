import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import WorkingExperience from './components/WorkingExperience';
import MainLayout from './layouts/MainLayout';
import Home from './page/Home';
import { globalStyles } from './styles/globalStyle';
import { useDarkMode } from './hooks/useDarkMode';

function App() {

  globalStyles()
  useDarkMode()

  return (
    <>
      <MainLayout>
        <Home />
        <WorkingExperience/>
      </MainLayout>
    </>
  )
}

export default App
