import React, { useState, useRef, useEffect } from 'react';
import { ProfileUserProp } from 'interface/ArgProps';
import { Item, Container, Breadcrumb } from 'semantic-ui-react';
import { AiFillGithub } from 'react-icons/ai';
import { FcCloseUpMode, FcDocument } from 'react-icons/fc';
import 'css/Profile.css';

import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import { Editor, Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

const ProfileUser = ({ userData }: ProfileUserProp) => {
  const { nickname, type, image, github, blog, description } = {
    ...userData,
  };

  const [isEditMode, setEditMode] = useState<boolean>(false);

  const [newImg, setNewImg] = useState<string>('');
  const [newContent, setNewContent] = useState<string>('');
  const [newBlog, setNewBlog] = useState<string>('');
  const [newGithub, setNewGithub] = useState<string>('');

  const editorRef = useRef<Editor>(null);

  const onToggleEditMode = () => {
    setEditMode(!isEditMode);
  };

  const onSetContent = () => {
    const editorInstance = editorRef.current?.getInstance();
    const getContentMarkdown = editorInstance?.getMarkdown() as string;
    setNewContent(getContentMarkdown);
    // api calls.
  };

  useEffect(() => {
    setNewImg(image);
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
                <span className="nick-name">{nickname}</span>
              </Item.Meta>
              <Item.Extra>
                <div>
                  <FcCloseUpMode className="icon" size="20" color="black" />
                  {type}
                </div>
                {isEditMode ? (
                  <div>
                    <FcDocument className="icon" size="20" color="black" />
                    <input
                      className="profile-edit-input"
                      defaultValue={newBlog}
                      onChange={(e) => setNewBlog(e.target.value)}
                    />
                  </div>
                ) : (
                  <div>
                    <a href={newBlog} target="_blank" rel="noreferrer">
                      <FcDocument className="icon" size="20" color="black" />
                    </a>
                    {newBlog}
                  </div>
                )}
                {isEditMode ? (
                  <div>
                    <AiFillGithub className="icon" size="20" color="black" />
                    <input
                      className="profile-edit-input"
                      defaultValue={newGithub}
                      onChange={(e) => setNewGithub(e.target.value)}
                    />
                  </div>
                ) : (
                  <div>
                    <a href={newGithub} target="_blank" rel="noreferrer">
                      <AiFillGithub className="icon" size="20" color="black" />
                    </a>
                    {newGithub}
                  </div>
                )}
                {isEditMode ? (
                  <Breadcrumb style={{ float: 'right' }}>
                    <Breadcrumb.Section link onClick={onToggleEditMode}>
                      완료
                    </Breadcrumb.Section>
                  </Breadcrumb>
                ) : (
                  <Breadcrumb style={{ float: 'right' }}>
                    <Breadcrumb.Section link onClick={onToggleEditMode}>
                      수정
                    </Breadcrumb.Section>
                  </Breadcrumb>
                )}
              </Item.Extra>
            </Item.Content>
          </Item>
          {isEditMode ? (
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
          ) : (
            newContent && (
              <Viewer
                initialValue={newContent}
                plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
              />
            )
          )}
        </Item.Group>
      </Container>
    </div>
  );
};

export default ProfileUser;
