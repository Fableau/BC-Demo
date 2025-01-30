import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
import Button from '@/components/Button/Button';
import styles from './PrimaryButton.module.scss';

const PrimaryButton = ({ text, href, styleOverride }) => (
  <Button text={text}
          href={href}
          icon={faLongArrowRight}
          font={'font-header-white'}
          variantStyle={styles} 
          styleOverride={styleOverride} />
)

export default PrimaryButton;