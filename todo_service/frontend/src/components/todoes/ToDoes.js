import {Table} from "react-bootstrap";

const ToDoItem = ({todo}) => {
    return (
        <tbody>
            <tr>
                <td>
                    {todo.user.firstName}
                </td>
                <td>
                    {todo.project.name}
                </td>
                <td>
                    {todo.title}
                </td>
                <td>
                    {todo.text}
                </td>
            </tr>
        </tbody>
    )
}

const ToDoList = ({todoes}) => {
    return (
        <Table striped bordered hover>
            <thead>
                <th>
                    User
                </th>
                <th>
                    Project Name
                </th>
                <th>
                    Title
                </th>
                <th>
                    Text
                </th>
            </thead>
            {todoes.map((todo, index) => <ToDoItem todo={todo} key={index}/>)}
        </Table>
    )
}
export default ToDoList;
