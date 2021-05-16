import React from 'react';

import 'css/Modal.css';

const Modal = (props: any) => {
  const { open, close, header, info } = props;
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
            <button className="btn-register" onClick={close} type="button">
              등록
            </button>
            <button className="btn-close" onClick={close} type="button">
              취소
            </button>
          </footer>
        </section>
      )}
    </div>
  );
};

export default Modal;
