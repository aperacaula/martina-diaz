// components/ImageGrid.js
import Image from 'next/image';
import styles from './imageGrid.module.scss';

interface ImageItem {
  src: string;
  alt: string;
  width: number;
  height: number;
  layout?: 'fill' | 'responsive';
}

interface ImageGridProps {
  images: ImageItem[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  return (
    <div className={styles.imageGrid}>
      {images.map((image, index) => (
        <div key={index} className={styles.imageItem}>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            layout={image.layout || 'responsive'}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;