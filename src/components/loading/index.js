import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const Loading = props => (
  <div className={`${styles.loadingContainer} ${props.isLoading ? styles.showLoading : ''}`}>
    <div className={styles.loadingBro}>
      <svg className={styles.load} x="0px" y="0px" viewBox="0 0 150 150">
        <circle className={styles.loadingInner} cx="75" cy="75" r="60" />
      </svg>
    </div>
  </div>
);

Loading.propTypes = {
  isLoading: PropTypes.bool
};

export default Loading;
