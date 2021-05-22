import React from 'react';

import 'css/Modal.css';

const Modal = (props: any) => {
  const {
    open,
    close,
    btn1str,
    btn1func,
    btn2str,
    btn2func,
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
            <button className="btn-register" onClick={btn1func} type="button">
              {btn1str}
            </button>
            <button className="btn-close" onClick={btn2func} type="button">
              {btn2str}
            </button>
          </footer>
        </section>
      )}
    </div>
  );
};

export default Modal;
