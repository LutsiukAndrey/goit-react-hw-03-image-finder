import { Component } from 'react';
import s from './Button.module.css';
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
