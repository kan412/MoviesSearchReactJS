import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './component.css';
import { SORT_BY } from '../../../shared';
import { sortBY } from '../../../core/store/actions';

export class SortContainer extends React.Component {
  static propTypes = {
    sortToggle: PropTypes.func.isRequired,
    sortBy: PropTypes.string.isRequired,
  }

  handleSort = (e) => {
    const { sortToggle } = this.props;
    sortToggle(e.target.value);
  }

  render() {
    const { sortBy } = this.props;
    return (
      <div className={styles['search-results-sort']}>
        Sort by
        <span className={styles['split-buttons']}>
          <button type="button" onClick={this.handleSort} value={SORT_BY.YEAR} className={(sortBy === SORT_BY.YEAR) ? styles.active : ''}>Release Date</button>
          <button type="button" onClick={this.handleSort} value={SORT_BY.RATING} className={(sortBy === SORT_BY.RATING) ? styles.active : ''}>Rating</button>
        </span>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  sortBy: state.sortBy,
});


export const mapDispatchToProps = dispatch => ({
  sortToggle: (value) => {
    dispatch(sortBY(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SortContainer);
