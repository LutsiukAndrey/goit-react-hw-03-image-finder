import React from 'react';
import s from './Modal.module.css';
export class Modal extends React.Component {
  render() {
    return (
      <div className={s.Overlay}>
        <div className={s.Modal}>
          <img src="" alt="" />
        </div>
      </div>
    );
  }
}
/* <div className="Overlay" onClick={onClick}>
  <div className="Modal">
    <img src={searchLargeImage} alt="" />
  </div>
</div>; */
