import React from 'react';
import 'css/Modal.css';

const Modal = (props: any) => {
  const {
    open,
    close,
    registerBtnStr,
    registerBtnFunc,
    cancelBtnStr,
    cancelBtnFunc,
    header,
    info,
  } = props;
  return (
    <div className={open ? 'openModal modal' : 'modal'}>
      {open && (
        <section>
          <header>
            {header}
            <button className="btn-close-mark" onClick={close} type="button">
              &times;
            </button>
          </header>
          <main>{info}</main>
          <footer>
            <button
              className="btn-register"
              onClick={registerBtnFunc}
              type="button"
            >
              {registerBtnStr}
            </button>
            <button
              className="btn-cancel"
              onClick={cancelBtnFunc}
              type="button"
            >
              {cancelBtnStr}
            </button>
          </footer>
        </section>
      )}
    </div>
  );
};

export default Modal;
