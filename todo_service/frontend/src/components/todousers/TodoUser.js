import {Table} from "react-bootstrap";

const UserItem = ({todouser}) => {
    return (
        <tbody>
            <tr>
                <td>
                    {todouser.username}
                </td>
                <td>
                    {todouser.first_name}
                </td>
                <td>
                    {todouser.last_name}
                </td>
                <td>
                    {todouser.age}
                </td>
                <td>
                    {todouser.email}
                </td>
            </tr>
        </tbody>
    )
}

const UserList = ({todousers}) => {
    return (
        <Table striped bordered hover>
            <thead>
                <th>
                    Username
                </th>
                <th>
                    First name
                </th>
                <th>
                    Last Name
                </th>
                <th>
                    Age
                </th>
                <th>
                    Email
                </th>
            </thead>
            {todousers.map((todouser) => <UserItem todouser={todouser} key={todouser.id}/>)}
        </Table>
    )
}
export default UserList;
