import {Table} from "react-bootstrap";
import {useParams} from "react-router-dom";

const ProjectToDoItem = ({todo}) => {
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

const ProjectToDoList = ({todoes}) => {
    let {id} = useParams();
    let filtered_items = todoes.filter((item) => item.project.uid == id)

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
            {filtered_items.map((todo) => <ProjectToDoItem todo={todo}/>)}
        </Table>
    )
}
export default ProjectToDoList;
