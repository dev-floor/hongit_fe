import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Header, Form, Segment, Input, Button } from 'semantic-ui-react'

import 'css/SignIn.css';

const AddUserInfo = () => {
    // 프로필사진, 깃헙주소, 블로그주소
    const [githubAddress, setGithubAddress] = useState<string>('');
    const [blogAddress, setBlogAddress] = useState<string>('');

    return (
        <Grid textAlign="center" style={{height: '100vh'}} verticalAlign="middle">
            <Grid.Column style={{maxWidth: 450}}>
                <Header color="teal" as="h2" textAlign="center">
                    STEP 3
                </Header>
                <Header color="grey" as="h5" textAlign="center">
                    아래 정보들은 가입 완료 후 나중에 설정이 가능합니다.
                </Header>
                <Form size="large">
                    <Segment stacked>
                        {githubAddress.length === 0 ? (
                            <Form.Input
                                className="input-field"
                                type="text"
                                placeholder="Github Address"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    setGithubAddress(e.target.value);
                                }}
                                icon={<i className="default check icon" />}
                            />
                        ):(
                            <Form.Input
                                className="input-field"
                                type="text"
                                placeholder="Github Address"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    setGithubAddress(e.target.value);
                                }}
                                icon={<i className="on check icon" />}
                            />
                        )}
                        {blogAddress.length === 0 ? (
                            <Form.Input
                                className="input-field"
                                type="text"
                                placeholder="Blog Address"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    setBlogAddress(e.target.value);
                                }}
                                icon={<i className="default check icon" />}
                            />
                        ): (
                            <Form.Input
                                className="input-field"
                                type="text"
                                placeholder="Blog Address"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    setBlogAddress(e.target.value);
                                }}
                                icon={<i className="on check icon" />}
                            />
                        )}
                        {githubAddress !== '' ||
                        blogAddress !== '' ? (
                            <Form.Button color="teal" fluid size="large">
                                저장하기    
                            </Form.Button>
                        ) : (
                            <Form.Button color="teal" fluid size="large" disabled>
                                저장하기    
                            </Form.Button>
                        )
                        
                        }
                        <Form.Button color="teal" fluid size="large">
                            건너뛰기    
                        </Form.Button>
                    </Segment>
                    <Link to="/" className="return-home">
                        <span>
                        홈으로
                        </span>
                    </Link>
                </Form>
            </Grid.Column>
        </Grid>
    )
}

export default AddUserInfo;
