import React, { useState } from 'react';
import './login.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// inspired by https://serverless-stack.com/chapters/create-a-login-page.html

export default function Login() {
    const [newusername, setNewusername] = useState('');
    const [newpassword, setNewpassword] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function validateCreation() {
        return newusername.length > 0 && newpassword.length > 0;
    }

    function validateLogin() {
        const users = JSON.parse(localStorage.getItem('users'));
        let i;
        for (i = 0; i < users.length; i += 1) {
            if (users[i][0] === username && users[i][1] === password) {
                return true;
            }
        }
        return false;
    }

    function handleCreateAccount(e) {
        const users = JSON.parse(localStorage.getItem('users'));
        users.push([newusername, newpassword]);
        localStorage.setItem('users', JSON.stringify(users));
        setNewusername('');
        setNewpassword('');
        e.preventdefault();
    }

    function handleLogin(e) {
        localStorage.setItem('currUser', username);
        window.location.href = '/home';
        e.preventdefault();
    }

    return (
        <div className="Login">
            <div className="topnav">
                <topnavheader> Atlantis </topnavheader>
            </div>
            <Container>
                <Row>
                    <Col>
                        <header> Create Account </header>
                        <Form>
                            <Form.Group size="lg" controlId="email">
                                <Form.Control
                                    autoFocus
                                    placeholder="Username"
                                    value={newusername}
                                    onChange={(e) => setNewusername(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group size="lg" controlId="password">
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    value={newpassword}
                                    onChange={(e) => setNewpassword(e.target.value)}
                                />
                            </Form.Group>
                            <div> </div>
                            <div> </div>
                            <Button variant="dark" disabled={!validateCreation()} onClick={(e) => handleCreateAccount(e)}>
                                Register
                            </Button>
                        </Form>
                    </Col>
                    <Col>
                        <header> Login </header>
                        <Form>
                            <Form.Group size="lg" controlId="email">
                                <Form.Control
                                    autoFocus
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group size="lg" controlId="password">
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Group>
                            <div> </div>
                            <div> </div>
                            <Button variant="dark" disabled={!validateLogin()} onClick={(e) => handleLogin(e)}>
                                Login
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}