import React from 'react';
import './App.css';
import UserList from "./components/todouser";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "todousers": []
        }
    }

    // componentDidMount() {
    //     const todousers = [
    //         {
    //             "username": "drf4",
    //             "firstname": "first",
    //             "lastname": "last",
    //             "age": 18,
    //             "email": "drf4@example.ru"
    //         },
    //         {
    //             "username": "drf4",
    //             "firstname": "first",
    //             "lastname": "last",
    //             "age": 18,
    //             "email": "drf4@example.ru"
    //         },
    //         {
    //             "username": "drf4",
    //             "firstname": "first",
    //             "lastname": "last",
    //             "age": 18,
    //             "email": "drf4@example.ru"
    //         }
    //     ]
    //     this.setState(
    //         {
    //             "todousers": todousers
    //         }
    //     )
    //
    // }

    componentDidMount() {
        
    }


    render() {
        return (
            <div>
                <UserList todousers={this.state.todousers}/>
            </div>
    )
    }
}

export default App;
