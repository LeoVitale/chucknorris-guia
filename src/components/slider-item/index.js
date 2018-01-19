import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const SliderItem = ({ joke, gif }) => (
  <div className={styles.slideItem} style={{ backgroundImage: `url(${gif.image_url})` }}>
    <div className={styles.shine} />
    <div className={styles.slideContent}>
      <h1>Chucky</h1>
      <h3>{joke.category ? joke.category : 'Random'}</h3>
      <p>{joke.value}</p>
    </div>
  </div>
);

SliderItem.propTypes = {
  joke: PropTypes.object.isRequired,
  gif: PropTypes.object.isRequired
};

export default SliderItem;
