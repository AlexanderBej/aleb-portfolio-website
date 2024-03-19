import ImageGallery from "react-image-gallery";

import "./image-gallery.styles.scss";

const ImgGallery = ({ imgs }) => {
	return <ImageGallery items={imgs} showFullscreenButton={false} showPlayButton={false} />;
};

export default ImgGallery;
