import styles from './DataFormField.module.scss';

const DataFormField = ({ caption, styleOverride, children }) => (
  <fieldset className={styles['data-form-field']}>
    <legend className={styles['data-form-field-legend']}>
      { caption }
    </legend>
    <div className={styles['data-form-field-container']}
         style={styleOverride}>
      { children }
    </div>
  </fieldset>
)
  
export default DataFormField;