import styles from './DataFormTextInput.module.scss';

const DataFormTextInput = ({ displayName, value, handleChange, type = 'text', styleOverride }) => (
  <div className={styles['data-form-text-input-container']}
       style={styleOverride}>
    <input className={`font-input-text
                       ${styles['data-form-text-input']}`}
           type={type}
           value={value}
           onChange={({ target: { value } }) => handleChange(value)}
           placeholder={displayName} />
    <span className={`${styles['data-form-input-name']}
                      ${value ? styles['data-form-input-name-show'] : ''}`}>
      {displayName}
    </span>
  </div>
)

export default DataFormTextInput;