import styles from './Gradient.module.scss';

const Gradient = ({ color = 'white', gradientStart = '18%', gradientEnd = '71%' }) => (
  // The Selectable Cards gradient is listed as starting at 18% in the design data, but looks visually closer to 32%.
  // So, prop for manual adjustment.

  <div className={styles.gradient}
       style={{ background: `linear-gradient(to bottom,
                             rgba(255, 255, 255, 0) ${gradientStart},
                             ${color} ${gradientEnd})`}} />
)

export default Gradient;