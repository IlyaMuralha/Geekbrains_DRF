// import React from 'react'

const UserItem = ({todouser}) => {
    return (
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
    )
}

const UserList = ({todousers}) => {
    return (
        <table>
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
            {todousers.map((todouser) => <UserItem todouser={todouser}/>)}
        </table>
    )
}
export default UserList
