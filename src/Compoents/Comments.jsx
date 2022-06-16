import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComments, getUsers } from "../redux";

const Commetns = () => {
  const { comments, ...rest } = useSelector((store) => store.comments);
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
            <th>Name</th>
            <th>eMail</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((commetn) => (
            <tr key={commetn.id}>
              <td>{commetn.name}</td>
              <td>{commetn.email}</td>
              <td>{commetn.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {Button}
    </>
  );
};

export default Commetns;
