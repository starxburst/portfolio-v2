import { ArticleSchema } from "../../types/contentfulSchema";
import Box from "../Containers/Box";

type LinkPreviewCardProps = {
  article: ArticleSchema;
};

const LinkPreviewCard = ({ article }: LinkPreviewCardProps) => {
  console.log('article', article);
  const { title } = article;
  return <Box css={{width: '50rem', border: '1px solid $text', borderRadius: '1rem', '@sm': {
    width: '100%'
  }}} padding='small'>{title}</Box>;
};

export default LinkPreviewCard;
