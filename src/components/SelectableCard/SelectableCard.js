import Image from "next/image";

import Gradient from "@/components/Gradient/Gradient";
import CheckCircle from "@/components/CheckCircle/CheckCircle";
import SelectableCardTitle from "./SelectableCardTitle/SelectableCardTitle";

import styles from './SelectableCard.module.scss';

const SelectableCard = ({ title, index, selectCard, isSelected, imageSrc, imageStyleOverride, alt = '', titleOffsetLeft, gradientStart }) => {
  const handleClick = () => selectCard(index);

  return (
    <button className={`${styles['selectable-card']}
                        ${isSelected ? styles['selectable-card-selected'] : ''}`}
            onClick={handleClick}>
      <Image className={styles['selectable-card-image']}
             style={imageStyleOverride}
             src={imageSrc}
             width={256}
             height={363}
             alt={alt}
             priority={true}

             // Case has full-resolution image, unoptimized for demo purposes only
             unoptimized={true} />
      <div className={styles['selectable-card-gradient-position']}>
        <Gradient gradientStart={gradientStart} />
      </div>
      <div className={styles['selectable-card-selection-container']}>
        <CheckCircle isSelected={isSelected} />
        <SelectableCardTitle title={title}
                             isSelected={isSelected} 
                             titleOffsetLeft={titleOffsetLeft} />
      </div>
    </button>
  )
}

export default SelectableCard;