import Color from "color";
import { useRecoilValue } from "recoil";
import useResponsive from "../../hooks/useResponsive";
import { darkModeState } from "../../stores/darkMode";
import { darkThemeColors, lightThemeColors } from "../../styles/colorTheme";
import { ArticleSchema, Favicon } from "../../types/contentfulSchema";
import Box from "../Containers/Box";
import { ImageAspect } from "../ImageAspect";
import youtube from "../../assets/favicon/youtube.png";
import linked_in from "../../assets/favicon/linked_in.png";
import instagram from "../../assets/favicon/instagram.png";
import foodpanda from "../../assets/favicon/foodPanda.jpeg";
import epd from "../../assets/favicon/epd.png";
import hk01 from "../../assets/favicon/hk01.png";
import clp from "../../assets/favicon/clp.png";

type LinkPreviewCardProps = {
  article: ArticleSchema;
};

const LinkPreviewCard = ({ article }: LinkPreviewCardProps) => {
  const { isMobile } = useResponsive();
  const isDarkMode = useRecoilValue(darkModeState);
  // console.log("article", article);
  const { title, description, favicons, image, url } = article;
  const getFavicon = (faviconName: Favicon) => {
    console.log("favicons", favicons);
    switch (faviconName) {
      case 'youtube':
        return youtube;
      case 'linkedIn':
        return linked_in;
      case 'instagram':
        return instagram;
      case 'foodPanda':
        return foodpanda;
      case 'epd':
        return epd;
      case 'hk01':
        return hk01;
      case 'clp':
        return clp
      default:
        return favicons;
    }
  }
  return (
    <Box
      padding="none"
      direction="column"
      css={{
        overflow: "hidden",
        width: "70%",
        // border: "1px solid $text",
        borderRadius: "1rem",
        cursor: "pointer",
        boxShadow: `0 2px 20px ${Color(
          isDarkMode ? darkThemeColors.text : lightThemeColors.text
        )
          .alpha(0.1)
          .rgb()
          .string()}`,
        "@sm": {
          width: "95%",
        },
      }}
      onClick={() => {
        window.open(url, "_blank");
      }}
    >
      <Box css={{ position: "relative" }}>
        <ImageAspect src={image} google alt="image" width="1800%" />
        <Box direction="column" align="flex-start" css={{ position: "absolute", bottom: 0 }}>
          <Box
            padding="medium"
            css={{
              fontWeight: "bold",
              fontSize: isMobile ? "1rem" : "1.5rem",
              color: "white",
              background:
                "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
            }}
          >
            <Box justify="flex-start" css={{width: 'fit-content'}}>
            <img src={getFavicon(favicons)} alt="image" width="50px" />
          </Box>
            {title}
          </Box>
        </Box>
      </Box>
      <Box padding={isMobile ? "medium" : "large"} css={{fontSize: '1.5rem', '@sm': {fontSize: '1rem'}}}>{description}</Box>
    </Box>
  );
};

export default LinkPreviewCard;
