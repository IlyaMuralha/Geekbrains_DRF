import {Table} from "react-bootstrap";
import {Link} from "react-router-dom";

const ProjectItem = ({project}) => {
    return (
        <tbody>
            <tr>
                <td>
                    <Link to={`projects/${project.uid}`}>{project.name}</Link>
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
            {projects.map((project, index) => <ProjectItem project={project} key={index}/>)}
        </Table>
    )
}
export default ProjectList;
