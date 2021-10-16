import React, { useState, useRef, useEffect } from 'react';
import { ProfileUserProp } from 'interface/ArgProps';
import { Item, Container, Dropdown } from 'semantic-ui-react';
import { AiFillGithub } from 'react-icons/ai';
import { FcCloseUpMode, FcDocument } from 'react-icons/fc';
import 'css/Profile.css';

import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

const ProfileEdit = ({ userData }: ProfileUserProp) => {
  const { nickname, type, image, github, blog, description } = {
    ...userData,
  };

  const [isValidNickName, setValidNickName] = useState<boolean>(false);

  const [newNickName, setNewNickName] = useState<string>('');
  const [newImg, setNewImg] = useState<string>('');
  const [newType, setNewType] = useState<string>('');
  const [newContent, setNewContent] = useState<string>('');
  const [newBlog, setNewBlog] = useState<string>('');
  const [newGithub, setNewGithub] = useState<string>('');

  const editorRef = useRef<Editor>(null);

  const onSetContent = () => {
    const editorInstance = editorRef.current?.getInstance();
    const getContentMarkdown = editorInstance?.getMarkdown() as string;
    setNewContent(getContentMarkdown);
  };

  const onValidCheck = () => {
    // 중복 확인 api calls.
    // if 중복확인 괜찮다면,
    setValidNickName(true);
  };

  const onSubmitChanges = () => {
    console.log(
      `수정한 내용은 ${newNickName}, ${newImg}, ${newType}, ${newContent}, ${newBlog}, ${newGithub}`
    );
    // api calls.
  };

  useEffect(() => {
    setNewNickName(nickname);
    setNewImg(image);
    setNewType(type.text);
    setNewBlog(blog);
    setNewGithub(github);
    setNewContent(description);
  }, [nickname, image, description, blog, github, type]);

  return (
    <div>
      <Container>
        <Item.Group divided>
          <Item>
            <Item.Image src={newImg} />
            <Item.Content>
              <Item.Meta className="info">
                <input
                  className="profile-edit-input-nickname"
                  defaultValue={newNickName}
                  onChange={(e) => setNewNickName(e.target.value)}
                />
                <button onClick={onValidCheck} type="button">
                  중복확인
                </button>
              </Item.Meta>
              <Item.Extra>
                <div className="profile-edit-option">
                  <FcCloseUpMode className="icon" size="20" color="black" />
                  <Dropdown text={newType}>
                    <Dropdown.Menu content={newType}>
                      <Dropdown.Item
                        onClick={(e) => setNewType(e.currentTarget.innerText)}
                        text="재학생"
                      />
                      <Dropdown.Item
                        onClick={(e) => setNewType(e.currentTarget.innerText)}
                        text="졸업생"
                      />
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div>
                  <FcDocument className="icon" size="20" color="black" />
                  <input
                    className="profile-edit-input"
                    defaultValue={newBlog}
                    onChange={(e) => setNewBlog(e.target.value)}
                  />
                </div>
                <div>
                  <AiFillGithub className="icon" size="20" color="black" />
                  <input
                    className="profile-edit-input"
                    defaultValue={newGithub}
                    onChange={(e) => setNewGithub(e.target.value)}
                  />
                </div>
                <div>
                  <button className='profile-edit-image' type='button'>이미지 수정</button>
                </div>
              </Item.Extra>
            </Item.Content>
          </Item>
          {newContent && (
            <Editor
              initialValue={newContent}
              previewStyle="vertical"
              height="300px"
              initialEditType="markdown"
              useCommandShortcut
              onChange={onSetContent}
              ref={editorRef}
              plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
            />
          )}
        </Item.Group>
        {isValidNickName ? (
          <button onClick={onSubmitChanges} type="button">
            수정 완료
          </button>
        ) : (
          <button disabled onClick={onSubmitChanges} type="button">
            수정 완료
          </button>
        )}
      </Container>
    </div>
  );
};

export default ProfileEdit;
