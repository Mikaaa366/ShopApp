import styles from './OptionSize.module.scss';
import shortid from 'shortid';
import clsx from 'clsx';
import { PropTypes } from 'prop-types';

const OptionSize = (props) => {
  return (
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        {props.sizes.map((size) => (
          <li key={shortid()}>
            <button
              onClick={() => {
                props.setCurrentSize(size.name);
                props.setCurrentPrice(size.additionalPrice);
              }}
              className={clsx(size.name === props.currentSize && styles.active)}
            >
              {size.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

OptionSize.propTypes = {
  sizes: PropTypes.arrayOf(PropTypes.object).isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  currentSize: PropTypes.string.isRequired,
  setCurrentPrice: PropTypes.func.isRequired,
};

export default OptionSize;