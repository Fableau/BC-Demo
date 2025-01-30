import Gradient from "@/components/Gradient/Gradient";
import Image from "next/image";

const FormImage = ({ imageProps, imageStyle, useGradient, gradientStyle, gradientColor = 'rgb(229, 242, 255)', priority }) => (
  // Niet noodzakelijk een component, maar andere end-of-form schermen 
  // bijv. een andere laadpaal kunnen tonen.
  
  <>
    <div className={imageStyle}>
      <Image width={imageProps.width}
             height={imageProps.height}
             src={imageProps.src}
             alt={imageProps.alt}
             priority={priority}

             // Unoptimized voor demo only
             unoptimized={true} />
    </div>

    { useGradient &&
      <div className={gradientStyle}>
        <Gradient color={gradientColor} />
      </div>
    }
  </>
)

export default FormImage;