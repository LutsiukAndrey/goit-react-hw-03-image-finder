import { Component } from 'react';
import s from './Button.module.css';
import PropTypes from 'prop-types';

export class Button extends Component {
  render() {
    return (
      <button
        type="button"
        className={s.Button}
        onClick={this.props.pagination}
      >
        Load more
      </button>
    );
  }
}

Button.propTypes = {
  pagination: PropTypes.func,
};
