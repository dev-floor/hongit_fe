import React, { Fragment, useState } from 'react';
import Modal from './Commons/Modal';

const App = () => {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div>
      <button onClick={openModal} type="button">
        여기 누르세요
      </button>
      <Modal
        open={open}
        close={closeModal}
        header="모달제목"
        info="모달 테스트중입니다 여기에는 내용을 입력"
      />
    </div>
  );
};

export default App;
