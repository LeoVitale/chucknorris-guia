import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Slider from 'components/slider';

import { loadCategories, loadRadomJoke, loadCategoryJoke } from 'modules/modules/home';
import chuckImage from 'images/chuck_norris_cartoon.png';
import styles from './home.scss';

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
          <Slider joke={joke} gif={gif} />
          <div className={styles.buttons}>
            <button className={styles.categoryButton} onClick={() => this.loadCategoryJoke('random')}>random</button>
            {categories.map((category, index) => <button className={styles.categoryButton} key={index} onClick={() => this.loadCategoryJoke(category)}>{category}</button>)}
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  loadCategories: PropTypes.func.isRequired,
  loadRadomJoke: PropTypes.func.isRequired,
  loadCategoryJoke: PropTypes.func.isRequired,
  joke: PropTypes.object.isRequired,
  gif: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired

};

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
