import { faLongArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Button from '@/components/Button/Button';
import styles from './SecondaryButton.module.scss';

const SecondaryButton = ({ text, href, styleOverride }) => (
  <Button text={text}
          href={href}
          icon={faLongArrowLeft}
          font={'font-header-dodger'}
          variantStyle={styles} 
          styleOverride={styleOverride} />
)

export default SecondaryButton;