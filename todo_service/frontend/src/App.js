import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap";
import axios from "axios";
import Cookies from "universal-cookie/es6";
import LoginForm from "./components/auth/Auth";
import UserList from "./components/todousers/TodoUser";
import Footer from "./components/footer/Footer";
import ProjectList from "./components/todoprojects/ToDoProjects";
import ToDoList from "./components/todoes/ToDoes";
import ProjectToDoList from "./components/todofromproject/TodoFromProject";

const NotFound404 = ({location}) => {
    return (
        <div>
            <h1>Страница по адресу '{location.pathname}' не найдена</h1>
        </div>
    )
}

class App extends Component {
    state = {
        'todousers': [],
        'projects': [],
        'todoes': [],
        'token': '',
    }

    set_token(token) {
        const cookies = new Cookies()
        cookies.set('token', token)
        this.setState({'token': token}, () => this.load_data())
    }

    is_authenticated() {
        return this.state.token !== ''
    }

    logout() {
        this.set_token('')
    }

    get_token_from_storage() {
        const cookies = new Cookies()
        const token = cookies.get('token')
        this.setState({'token': token}, () => this.load_data())
    }


    get_token(username, password) {
        axios.post('http://127.0.0.1:8000/api-token-auth/', {
            username: username,
            password: password
        })
            .then(response => {
                this.set_token(response.data['token'])
            }).catch(error => alert('Неверный логин или пароль'))
    }

    get_headers() {
        let headers = {
            'Content-Type': 'application/json'
        }
        if (this.is_authenticated()) {
            headers['Authorization'] = 'Token ' + this.state.token
        }
        return headers
    }


    load_data = () => {
        const headers = this.get_headers()

        axios.get('http://127.0.0.1:8000/api/project/', {headers})
            .then(response => {
                this.setState({projects: response.data.results})
            }).catch(error => {
            console.log(error)
            this.setState({'project': []})
        })

        axios.get('http://127.0.0.1:8000/api/todousers/', {headers})
            .then(response => {
                this.setState({todousers: response.data.results})
            }).catch(error => {
            console.log(error)
            this.setState({'todousers': []})
        })

        axios.get('http://127.0.0.1:8000/api/todo/', {headers})
            .then(response => {
                this.setState({todoes: response.data.results})
            }).catch(error => {
            console.log(error)
            this.setState({'todoes': []})
        })
    }

    componentDidMount() {
        this.get_token_from_storage()
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Navbar bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                            <Nav className="me-auto">
                                <Nav.Link href='/'>
                                    <Link to='/'>Users</Link>
                                </Nav.Link>
                                <Nav.Link href='/projects'>
                                    <Link to='/projects'>Projects</Link>
                                </Nav.Link>
                                <Nav.Link href='/todo'>
                                    <Link to='/todo'>ToDoes</Link>
                                </Nav.Link>
                                <Nav.Link href='/login'>
                                    {this.is_authenticated() ? <button
                                        onClick={() => this.logout()}>Logout</button> : <Link to='/login'>Login</Link>}
                                </Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
                    <Switch>
                        <Route exact path='/' component={() => <UserList todousers={this.state.todousers}/>}/>
                        <Route exact path='/projects' component={() => <ProjectList projects={this.state.projects}/>}/>
                        <Route exact path='/todo' component={() => <ToDoList todoes={this.state.todoes}/>}/>
                        <Route path="/projects/:id"><ProjectToDoList todoes={this.state.todoes}/></Route>
                        <Route exact path='/login' component={() => <LoginForm
                            get_token={(username, password) => this.get_token(username, password)}/>}/>
                        <Route component={NotFound404}/>
                    </Switch>
                    <Footer/>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
