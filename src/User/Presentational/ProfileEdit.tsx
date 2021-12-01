import React, { useState, useRef, useEffect } from 'react';
import { ProfileUserProp } from 'interface/ArgProps';
import { imgAPI } from 'api/api';
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

const ProfileEdit = ({ userData, onHandleEditProfile }: ProfileUserProp) => {
  const { nickname, type, image, github, blog, description } = {
    ...userData,
  };

  const [isEditStart, setEditStart] = useState<boolean>(false);
  const [isValidNickName, setValidNickName] = useState<boolean>(true);

  const [newNickName, setNewNickName] = useState<string>('');
  const [newType, setNewType] = useState<string>('');
  const [newContent, setNewContent] = useState<string>('');
  const [newBlog, setNewBlog] = useState<string>('');
  const [newGithub, setNewGithub] = useState<string>('');

  const [previewImg, setPreviewImg] = useState<string>('');
  const [selectedFile, setFile] = useState<File>();

  const editorRef = useRef<Editor>(null);

  const onHandleFileUpload = (event: any) => {
    const imageFile = event.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setPreviewImg(imageUrl);

    setFile(imageFile);
    setEditStart(true);
  };

  const onSetContent = () => {
    const editorInstance = editorRef.current?.getInstance();
    const getContentMarkdown = editorInstance?.getMarkdown() as string;
    setNewContent(getContentMarkdown);
    setEditStart(true);
  };

  const onValidCheck = () => {
    // 중복 확인 api calls.
    // if 중복확인 괜찮다면,
    setValidNickName(true);
  };

  const onSubmitChanges = async () => {
    const formData = new FormData();
    if (selectedFile) {
      formData.append('multipartFiles', selectedFile);
      const imgUrl = await imgAPI.profile(formData);
      onHandleEditProfile &&
        onHandleEditProfile({
          nickname: newNickName,
          userType: newType,
          image: imgUrl,
          github: newGithub,
          blog: newBlog,
          description: newContent,
        });
    } else {
      onHandleEditProfile &&
        onHandleEditProfile({
          nickname: newNickName,
          userType: newType,
          github: newGithub,
          blog: newBlog,
          description: newContent,
        });
    }
  };

  useEffect(() => {
    setNewNickName(nickname);
    setPreviewImg(image);
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
            {previewImg && <Item.Image alt="userProfileImg" src={previewImg} />}
            <Item.Content>
              <Item.Meta className="info">
                <input
                  className="profile-edit-input-nickname"
                  defaultValue={newNickName}
                  onChange={(e) => {
                    setNewNickName(e.target.value);
                    setEditStart(true);
                    setValidNickName(false);
                  }}
                />
                <button
                  onClick={onValidCheck}
                  type="button"
                  className="default-btn"
                >
                  중복확인
                </button>
              </Item.Meta>
              <Item.Extra>
                <div className="profile-edit-option">
                  <FcCloseUpMode className="icon" size="20" color="black" />
                  <Dropdown text={newType}>
                    <Dropdown.Menu content={newType}>
                      <Dropdown.Item
                        onClick={(e) => {
                          setNewType(e.currentTarget.innerText);
                          setEditStart(true);
                        }}
                        text="재학생"
                      />
                      <Dropdown.Item
                        onClick={(e) => {
                          setNewType(e.currentTarget.innerText);
                          setEditStart(true);
                        }}
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
                    onChange={(e) => {
                      setNewBlog(e.target.value);
                      setEditStart(true);
                    }}
                  />
                </div>
                <div>
                  <AiFillGithub className="icon" size="20" color="black" />
                  <input
                    className="profile-edit-input"
                    defaultValue={newGithub}
                    onChange={(e) => {
                      setNewGithub(e.target.value);
                      setEditStart(true);
                    }}
                  />
                </div>
                <div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={onHandleFileUpload}
                  />
                </div>
              </Item.Extra>
            </Item.Content>
          </Item>
          {description && (
            <Editor
              initialValue={description}
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
        {isEditStart && isValidNickName ? (
          <button
            onClick={onSubmitChanges}
            className="default-btn"
            type="button"
          >
            수정 완료
          </button>
        ) : (
          <button disabled className="default-btn" type="button">
            수정 완료
          </button>
        )}
      </Container>
    </div>
  );
};

export default ProfileEdit;
