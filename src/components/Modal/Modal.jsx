import React from 'react';
import s from './Modal.module.css';
export class Modal extends React.Component {
  render() {
    return (
      <div
        className={s.backdrop}
        onClick={() => {
          this.props.toggleModal();
        }}
      >
        <div className={s.Modal}>
          <img src={this.props.modaiImg} alt="" />
        </div>
      </div>
    );
  }
}
