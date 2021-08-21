import React from 'react';
import { ProfileUserProp } from 'interface/ArgProps';
import { Item, Container } from 'semantic-ui-react';
import { AiFillGithub } from 'react-icons/ai';
import { FcCloseUpMode, FcDocument } from 'react-icons/fc';
import 'css/Profile.css';

const ProfileUser = ({ userData }: ProfileUserProp) => {
  const { username, nickname, type, image, github, blog, description } = {
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
                  {type.text}
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
          <Item.Description className="description">
            {description}
          </Item.Description>
        </Item.Group>
      </Container>
    </div>
  );
};

export default ProfileUser;
