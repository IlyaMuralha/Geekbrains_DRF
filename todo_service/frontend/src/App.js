import {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import UserList from "./components/todousers/TodoUser";
import AuthorList from "./components/authors/Authors";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu"
import TodoService from "./services/TodoService";


class App extends Component {
    state = {
            todousers: [],
            authors: []
        }

    todoApiService = new TodoService()

    componentDidMount() {
        this.todoApiService.getAllElements('authors')
            .then(this.onAuthorListLoaded)
            .catch(error => console.log(error))

        this.todoApiService.getAllElements('todousers')
            .then(this.onUserListLoaded)
            .catch(error => console.log(error))
    }

    onAuthorListLoaded = (authors) => {
        this.setState(
            {authors: authors}
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
                <Menu/>
                <UserList todousers={this.state.todousers}/>
                <AuthorList authors={this.state.authors}/>
                <Footer />
            </div>
        )
    }
}

export default App;
