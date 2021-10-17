import React from 'react';
import { ProfileUserProp } from 'interface/ArgProps';
import { Item, Container } from 'semantic-ui-react';
import { AiFillGithub } from 'react-icons/ai';
import { FcCloseUpMode, FcDocument } from 'react-icons/fc';
import 'css/Profile.css';

import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

const ProfileUser = ({ userData }: ProfileUserProp) => {
  const { nickname, type, image, github, blog, description } = {
    ...userData,
  };

  return (
    <div>
      <Container>
        <Item.Group divided>
          <Item>
            <Item.Image src={image} />
            <Item.Content>
              <Item.Meta className="info">
                <span className="nick-name">{nickname}</span>
              </Item.Meta>
              <Item.Extra>
                <div>
                  <FcCloseUpMode className="icon" size="20" color="black" />
                  {type}
                </div>
                <div>
                  <a href={blog} target="_blank" rel="noreferrer">
                    <FcDocument className="icon" size="20" color="black" />
                  </a>
                  {blog}
                </div>
                <div>
                  <a href={github} target="_blank" rel="noreferrer">
                    <AiFillGithub className="icon" size="20" color="black" />
                  </a>
                  {github}
                </div>
              </Item.Extra>
            </Item.Content>
          </Item>
          {description && (
            <Viewer
              initialValue={description}
              plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
            />
          )}
        </Item.Group>
      </Container>
    </div>
  );
};

export default ProfileUser;
