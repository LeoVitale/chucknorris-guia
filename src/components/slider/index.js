import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import SliderItem from 'components/slider-item';
import styles from './styles.scss';

const Slider = props => (
  <div className={styles.slideContainer}>
    <TransitionGroup>
      <CSSTransition timeout={{ appear: 700, enter: 700, exit: 700 }} classNames="pagefade" key={props.joke.id}>
        <SliderItem {...props} />
      </CSSTransition>
    </TransitionGroup>
  </div>
);

export default Slider;
