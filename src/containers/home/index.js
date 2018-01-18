import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styles from './home.scss';

import { loadCategories, loadRadomJoke, loadCategoryJoke } from 'modules/modules/home';
import chuckImage from 'images/chuck_norris_cartoon.png';

class Home extends Component {
  componentWillMount() {
    this.props.loadCategories();
    this.props.loadRadomJoke();
  }

  loadCategoryJoke = category => {
    if (category === 'random') {
      this.props.loadRadomJoke();
    } else {
      this.props.loadCategoryJoke(category);
    }
  }

  render() {
    const { joke, gif, categories } = this.props;
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
                  <div className={styles.slideContent}>
                    <h1>Chucky</h1>
                    <h3>{joke.category ? joke.category : 'Random'}</h3>
                    <p>{joke.value}</p>
                  </div>
                </div>
              </CSSTransition>
            </TransitionGroup>
          </div>
          <div className={styles.buttons}>
            <button className={styles.categoryButton} onClick={() => this.loadCategoryJoke('random')}>random</button>
            {categories.map((category, index) => <button className={styles.categoryButton} key={index} onClick={() => this.loadCategoryJoke(category)}>{category}</button>)}
          </div>
        </div>

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
  loadRadomJoke,
  loadCategoryJoke
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
