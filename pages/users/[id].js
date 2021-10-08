import { useRouter } from "next/router";
import styles from "./user.module.scss";
import MainContainer from "../../components/mainContainer/MainContainer";

export default function User({ user }) {
  const router = useRouter();
  // console.log(router)
  return (
    <MainContainer>
      <div className={styles.wrapper}>
        User - {router.query.id} ///
        <div>user name {user.name}</div>
      </div>
    </MainContainer>
  );
}

export async function getServerSideProps({ params }) {
  console.log(params);
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await res.json();

  if (!user) {
    return {
      notFound: true,
    };
  }

  return {
    props: { user }, // will be passed to the page component as props
  };
}
