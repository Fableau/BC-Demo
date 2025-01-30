import styles from './SelectableCardTitle.module.scss';

const SelectableCardTitle = ({ title, isSelected, titleOffsetLeft }) => (
  <div className={`font-header-sapphire 
                   ${styles['selectable-card-title']}
                   ${isSelected ? '' : styles['selectable-card-title-unselected']}`}
       style={{ paddingLeft: titleOffsetLeft }}>
    { title }
  </div>
)

export default SelectableCardTitle;