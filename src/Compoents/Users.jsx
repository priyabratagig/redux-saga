import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux";

const Users = () => {
  const { users, ...rest } = useSelector((store) => store.users);
  const dispatch = useDispatch();
  const Button = (
    <button onClick={() => dispatch(getUsers())}>load Comments</button>
  );
  if (rest.loading) return <p>loading...</p>;
  if (rest.error !== "")
    return (
      <>
        <p>{rest.error}</p>
        {Button}
      </>
    );
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>userId</th>
            <th>Name</th>
            <th>eMail</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {Button}
    </>
  );
};

export default Users;
