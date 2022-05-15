import {Table} from "react-bootstrap";


const AuthorItem = ({author}) => {
    return (
        <tbody>
            <tr>
                <td>
                    {author.id}
                </td>
                <td>
                    {author.first_name}
                </td>
                <td>
                    {author.last_name}
                </td>
                <td>
                    {author.birthday_year}
                </td>
            </tr>
        </tbody>
    )
}

const AuthorList = ({authors}) => {
    return (
        <Table striped bordered hover>
            <thead>
                <th>
                    Id
                </th>
                <th>
                    First name
                </th>
                <th>
                    Last Name
                </th>
                <th>
                    Birthday year
                </th>
            </thead>
            {authors.map((author) => <AuthorItem author={author} key={author.id}/>)}
        </Table>
    )
}

export default AuthorList;
