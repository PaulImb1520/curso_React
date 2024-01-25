import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";

export const HomePage = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <h1>
        HomePage de <small>{user?.name}</small>
      </h1>
      <hr />
      <pre>{JSON.stringify(user, null, 3)}</pre>
    </>
  );
};
