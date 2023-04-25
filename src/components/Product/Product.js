import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import {useState, useMemo} from 'react';

import ProductForm from '../ProductForm/ProductForm';
import ProductImage from '../ProductImage/ProductImage';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  const [currentPrice, setCurrentPrice] = useState(props.sizes[0].additionalPrice);
  

  const totalPrice = useMemo(
    () => props.basePrice + currentPrice,
    [props.basePrice, currentPrice]
  );

  const cartSummary = {
    name: props.title,
    price: totalPrice,
    size: currentSize,
    color: currentColor,
  };

  return (
    <article className={styles.product}>
      <ProductImage
        title={props.title}
        name={props.name}
        color={currentColor}
      />
      <div>
        <header>
          <h2 className={styles.name}> {props.title} </h2>
          <span className={styles.price}>Price: {totalPrice} $</span>
        </header>

        <ProductForm
          sizes={props.sizes}
          setCurrentSize={setCurrentSize}
          setCurrentPrice={setCurrentPrice}
          currentSize={currentSize}
          colors={props.colors}
          setCurrentColor={setCurrentColor}
          cartSummary={cartSummary}
          currentColor={currentColor}
        />

      </div>
    </article>
  )
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Product;