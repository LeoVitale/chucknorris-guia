import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const SliderItem = ({ joke, background }) => (
  <div className={styles.slideItem} style={background.image_url && { backgroundImage: `url(${background.image_url})` }}>
    <div className={styles.shine} />
    <div className={styles.slideContent}>
      <h1>Chucky</h1>
      <h2>{joke.category ? joke.category : 'Random'}</h2>
      <p>{joke.value}</p>
    </div>
  </div>
);

SliderItem.propTypes = {
  joke: PropTypes.object.isRequired,
  background: PropTypes.object.isRequired
};

export default SliderItem;
