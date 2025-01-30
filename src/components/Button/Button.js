import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Button.module.scss';

const Button = ({ text, icon, href = '', font, variantStyle, styleOverride }) => {
  // styles: base style (all buttons)
  // variantStyle: additional style passed (fromPrimaryButton / SecondaryButton)
  // styleOverride: manual adjustments (e.g. forcing individual width)

  return (
    <Link className={`${styles['button-shared']} 
                      ${variantStyle['button']}`}
          style={styleOverride}
          href={href}>
      <div className={`${font}
                       ${variantStyle['button-text']}`}>
        { text }
      </div>
      <div className={variantStyle['button-icon-container']}>
        <FontAwesomeIcon icon={icon} 
                         className={variantStyle['button-arrow']}/>
      </div>
    </Link>
  )
}

export default Button;