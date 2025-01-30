import Image from 'next/image';
import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <div className={styles['header-background']} />
    <div className={styles['header-content']}>
      <Image
        className={styles['header-motorhuis']}
        src='/images/logo/motorhuis.svg'
        width={275}
        height={38}
        priority
        alt='Powered By Motorhuis.' />
      <Image
        className={styles['header-blue-current']}
        src='/images/logo/blue-current-logo.svg'
        width={70}
        height={43}
        priority
        alt='Blue Current logo.' />
    </div>
  </header>
)

export default Header;