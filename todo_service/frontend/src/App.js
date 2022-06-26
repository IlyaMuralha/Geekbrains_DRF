import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import UserList from "./components/todousers/TodoUser";
import Footer from "./components/footer/Footer";
import TodoService from "./services/TodoService";
import ProjectList from "./components/todoprojects/ToDoProjects";
import ToDoList from "./components/todoes/ToDoes";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap";

const NotFound404 = ({location}) => {
    return (
        <div>
            <h1>Страница по адресу '{location.pathname}' не найдена</h1>
        </div>
    )
}

class App extends Component {
    state = {
        todousers: [],
        projects: [],
        todoes: [],
    }

    todoApiService = new TodoService()

    componentDidMount() {
        this.todoApiService.getAllElements('project')
            .then(this.onProjectListLoaded)
            .catch(error => console.log(error))

        this.todoApiService.getAllElements('todousers')
            .then(this.onUserListLoaded)
            .catch(error => console.log(error))

        this.todoApiService.getAllElements('todo')
            .then(this.onToDoListLoaded)
            .catch(error => console.log(error))
    }

    onProjectListLoaded = (projects) => {
        this.setState(
            {projects: projects}
        )
    }

    onToDoListLoaded = (todoes) => {
        this.setState(
            {todoes: todoes}
        )
    }

    onUserListLoaded = (todousers) => {
        this.setState(
            {todousers: todousers}
        )
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Navbar bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                            <Nav className="me-auto">
                                <Nav.Link href="/">
                                    <Link to='/'>Users</Link>
                                </Nav.Link>
                                <Nav.Link href="">
                                    <Link to='/projects'>Projects</Link>
                                </Nav.Link>
                                <Nav.Link href="#pricing">
                                    <Link to='/todo'>ToDoes</Link>
                                </Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
                    <Switch>
                        <Route exact path='/' component={() => <UserList todousers={this.state.todousers}/>}/>
                        <Route exact path='/projects' component={() => <ProjectList projects={this.state.projects}/>}/>
                        <Route exact path='/todo' component={() => <ToDoList todoes={this.state.todoes}/>}/>
                        <Route component={NotFound404}/>
                    </Switch>
                    <Footer/>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
