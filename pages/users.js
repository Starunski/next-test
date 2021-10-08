import { useState } from "react";
import Link from "next/link";
import { A } from "../components/A/A";
import MainContainer from "../components/mainContainer/MainContainer";

export default function Users({ users }) {
  //   const [users, setUsers] = useState([
  //     { id: 1, name: "Dima" },
  //     { id: 2, name: "Pasha" },
  //     { id: 3, name: "Vlad" },

  //   ]);

  return (
    <MainContainer keywords={'Ivan Dima the best ! '}>
      <h1> My users </h1>
      <div>
        <ul>
          {users.map((user) => (
            <li key={user.name}>
              <A href={`/users/${user.id}`} text={user.name}></A>
            </li>
          ))}
        </ul>
      </div>
    </MainContainer>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await res.json();

  if (!users) {
    return {
      notFound: true,
    };
  }

  return {
    props: { users }, // will be passed to the page component as props
  };
}
