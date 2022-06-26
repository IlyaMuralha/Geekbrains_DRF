import {Table} from "react-bootstrap";

const ProjectItem = ({project}) => {
    return (
        <tbody>
            <tr>
                <td>
                    {project.name}
                </td>
                <td>
                    {project.users}
                </td>
                <td>
                    {project.link}
                </td>
            </tr>
        </tbody>
    )
}

const ProjectList = ({projects}) => {
    return (
        <Table striped bordered hover>
            <thead>
                <th>
                    Name
                </th>
                <th>
                    Users
                </th>
                <th>
                    Link
                </th>
            </thead>
            {projects.map((project) => <ProjectItem project={project} key={project.id}/>)}
        </Table>
    )
}
export default ProjectList;
