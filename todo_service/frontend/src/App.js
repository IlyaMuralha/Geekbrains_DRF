import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap";
import axios from "axios";
import LoginForm from "./components/auth/Auth";
import UserList from "./components/todousers/TodoUser";
import Footer from "./components/footer/Footer";
import ProjectList from "./components/todoprojects/ToDoProjects";
import ToDoList from "./components/todoes/ToDoes";

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
    }


    load_data = () => {
        axios.get('http://127.0.0.1:8000/api/project/')
            .then(response => {
                console.log(response.data.results)
                this.setState({projects: response.data.results})
            }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/todousers/')
            .then(response => {
                console.log(response.data.results)
                this.setState({todousers: response.data.results})
            }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/todo/')
            .then(response => {
                console.log(response.data.results)
                this.setState({todoes: response.data.results})
            }).catch(error => console.log(error))
    }

    componentDidMount() {
        this.load_data()
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
                                    <Link to='/login'>Login</Link>
                                </Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
                    <Switch>
                        <Route exact path='/' component={() => <UserList todousers={this.state.todousers}/>}/>
                        <Route exact path='/projects' component={() => <ProjectList projects={this.state.projects}/>}/>
                        <Route exact path='/todo' component={() => <ToDoList todoes={this.state.todoes}/>}/>
                        <Route exact path='/login' component={() => <LoginForm/>}/>
                        <Route component={NotFound404}/>
                    </Switch>
                    <Footer/>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
