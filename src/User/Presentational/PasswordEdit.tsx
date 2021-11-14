import React, { useState } from 'react';
import Modal from 'Commons/Modal';
import { Button, Form, Icon, Input, Label, Message } from 'semantic-ui-react';

import 'css/PasswordEdit.css';

const PasswordEdit = () => {
  const [oldPwd, setOldPwd] = useState<string>('');
  const [newPwd, setNewPwd] = useState<string>('');
  const [newPwdChk, setNewPwdChk] = useState<string>('');
  const [deletePwd, setDeletePwd] = useState<string>('');

  const [openPwdChange, setOpenPwdChange] = useState<boolean>(false);
  const [openDeleteAccount, setOpenDeleteAccount] = useState<boolean>(false);
  const [openWrongPwd, setOpenWrongPwd] = useState<boolean>(false);

  const closePwdChangeModal = () => {
    setOpenPwdChange(false);
    window.location.reload();
  };
  const onChangePassword = () => {
    setOpenPwdChange(true);
    // 비밀번호를 수정하는 api call
  };

  const openDeleteAccountModal = () => setOpenDeleteAccount(true);
  const closeDeleteAccountModal = () => {
    setOpenDeleteAccount(false);
    window.location.reload();
  };
  const openWrongPwdModal = () => setOpenWrongPwd(true);
  const closeWrongPwdModal = () => {
    setOpenWrongPwd(false);
    window.location.reload();
  };
  const onValidCheckPwd = () => {
    // 입력한 비밀번호가 옳은지 확인하는 api call
  };

  const onDeleteAccount = () => {
    // 계정을 삭제하는 api call
    window.location.assign('/');
  };

  return (
    <div>
      <Form className="change-password-form">
        <h2>비밀번호 수정</h2>
        <div className="ui divider" />
        <Form.Field inline>
          <h5>기존 비밀번호</h5>
          <Input
            type="password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setOldPwd(e.target.value);
            }}
            onBlur={() => {
              /* 맞는 비밀번호인지 확인하는 Api Call 날려야 함 */
              console.log('mouse is out');
            }}
            style={{ width: '500px' }}
          />
        </Form.Field>
        <Form.Field inline>
          <h5>새 비밀번호</h5>
          <Input
            type="password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setNewPwd(e.target.value);
            }}
            style={{ width: '500px' }}
          />
          {newPwd.length === 0 || (newPwd.length > 5 && newPwd.length < 16) ? (
            ' '
          ) : (
            <Label basic color="red" pointing="left">
              비밀번호 자릿수 조건을 만족하지 않습니다!
            </Label>
          )}
        </Form.Field>
        <Form.Field inline>
          <h5>비밀번호 확인</h5>
          <Input
            type="password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setNewPwdChk(e.target.value);
            }}
            style={{ width: '500px' }}
          />
          {newPwdChk.length === 0 || newPwdChk === newPwd ? (
            ' '
          ) : (
            <Label basic color="red" pointing="left">
              비밀번호가 일치하지 않습니다!
            </Label>
          )}
        </Form.Field>
        <h5 style={{ color: 'gray' }}>
          ❗ 비밀번호는 6자리 이상 15자리 이하여야 합니다.
        </h5>
        {oldPwd.length > 0 && newPwd.length > 0 && newPwdChk.length > 0 ? (
          <Button type="submit" onClick={onChangePassword}>
            비밀번호 변경하기
          </Button>
        ) : (
          <Button type="submit" disabled>
            비밀번호 변경하기
          </Button>
        )}
        <Button animated>
          <Button.Content visible>비밀번호를 잊어버렸어요😅</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow right" />
          </Button.Content>
        </Button>
      </Form>
      <Form className="delete-account-form">
        <h2 style={{ color: 'crimson' }}>계정 삭제하기</h2>
        <div className="ui divider" />
        <Message negative>
          <Message.Header>정말 계정을 삭제하시겠습니까?</Message.Header>
          <p>
            계정을 한 번 삭제하면 되돌릴 수 없습니다. 확실히 확인한 후
            진행해주세요. 😢
          </p>
          <Input
            type="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setDeletePwd(e.target.value);
            }}
            style={{ width: '300px' }}
          />
          {deletePwd.length === 0 ? (
            <Button
              className="delete-account-button"
              type="submit"
              disabled
              style={{ color: 'crimson' }}
            >
              계정 삭제하기
            </Button>
          ) : (
            <Button
              className="delete-account-button"
              type="submit"
              style={{ color: 'crimson' }}
              // onValidCheckPwd 의 response가 조건에 와야함
              // 비밀번호가 맞다면 openSecondModal, 틀리다면 openThirdModal
              onClick={
                deletePwd === '0' ? openDeleteAccountModal : openWrongPwdModal
              }
            >
              계정 삭제하기
            </Button>
          )}
        </Message>
      </Form>
      <Modal
        open={openPwdChange}
        close={closePwdChangeModal}
        registerBtnStr="변경완료!"
        registerBtnFunc={closePwdChangeModal}
        header="비밀번호 변경 완료"
        info="비밀번호가 정상적으로 변경되었습니다😆"
      />
      <Modal
        open={openDeleteAccount}
        close={closeDeleteAccountModal}
        registerBtnStr="삭제하기"
        registerBtnFunc={onDeleteAccount}
        cancelBtnStr="취소하기"
        cancelBtnFunc={closeDeleteAccountModal}
        header="계정 삭제하기"
        info="계정을 정말로 삭제하시겠습니까?😢"
      />
      <Modal
        open={openWrongPwd}
        close={closeWrongPwdModal}
        registerBtnStr="다시 입력하기"
        registerBtnFunc={closeWrongPwdModal}
        header="계정 삭제하기"
        info="입력하신 비밀번호가 옳지 않습니다😦"
      />
    </div>
  );
};

export default PasswordEdit;
