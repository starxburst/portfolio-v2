import Brightness4Icon from "@mui/icons-material/Brightness4";
import { darkModeState } from "../../stores/darkMode";
import { useRecoilState } from "recoil";
import IconButton from "@mui/material/IconButton";
import { theme } from "../../styles";
const DarkmodeSwitch = () => {
  const [darkMode, setDarkMode] = useRecoilState(darkModeState);
  return (
    <>
      <IconButton
        style={{
          color: theme.colors.primary.toString(),
        }}
        onClick={() => setDarkMode(!darkMode)}
      >
        <Brightness4Icon />
      </IconButton>
    </>
  );
};

export default DarkmodeSwitch;
