import {Table} from "react-bootstrap";

const ToDoItem = ({todo}) => {
    return (
        <tbody>
            <tr>
                <td>
                    {todo.user}
                </td>
                <td>
                    {todo.projectName}
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
                    ProjectName
                </th>
                <th>
                    Title
                </th>
                <th>
                    Text
                </th>
            </thead>
            {todoes.map((todo) => <ToDoItem todo={todo} key={todo.id}/>)}
        </Table>
    )
}
export default ToDoList;
