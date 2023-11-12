import { getLinkPreview } from "link-preview-js";

type LinkPreviewProps = {
  url: string;
};

const LinkPreview = ({ url }: LinkPreviewProps) => {

  getLinkPreview(url).then((data) => {
    console.log('data', data);
  });
  return (
    <div></div>
  )
}

export default LinkPreview;