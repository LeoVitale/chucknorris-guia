import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styles from './home.scss';

import { loadCategories, loadRadomJoke } from 'modules/modules/home';
import chuckImage from 'images/chuck_norris_cartoon.png';

class Home extends Component {
  componentWillMount() {
    this.props.loadCategories();
    this.props.loadRadomJoke();
  }

  render() {
    const { joke, gif } = this.props;
    return (
      <div>
        <div className={styles.slider}>
          <div className={styles.chuckImage}>
            <img src={chuckImage} alt="chuck norris" />
          </div>
          <div className={styles.slideContainer} >
            <TransitionGroup className="rawr">
              <CSSTransition timeout={{ appear: 700, enter: 700, exit: 700 }} classNames="pagefade" key={joke.id}>
                <div className={styles.slideItem} style={{ backgroundImage: `url(${gif.image_url})` }}>
                  <div className={styles.shine} />
                  {joke.value}
                </div>
              </CSSTransition>
            </TransitionGroup>
          </div>
        </div>
        <span className="mydiv" onClick={this.props.loadRadomJoke}>clique</span>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.home.categories,
  joke: state.home.joke,
  gif: state.home.gif
});

const mapDispatchToProps = {
  loadCategories,
  loadRadomJoke
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
