import './ImageContainer.scss'

type imageProps = { 
  image: string;
  index: number;
}

const ImageContainer = ({ image, index }: imageProps) => {
  const animationDelay = `${index * 0.5}s`;
  return (
    <div className="c-image-container" style={{ animationDelay: animationDelay }}>
      <img className="banner-img" src={image} alt="imagen del banner" />
    </div>
  )
}

export default ImageContainer