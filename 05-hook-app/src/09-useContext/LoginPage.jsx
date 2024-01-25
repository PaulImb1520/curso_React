import React from "react";
import { UserContext } from "./contexts/UserContext";

export const LoginPage = () => {
  const { user, setUser } = React.useContext(UserContext);
  return (
    <>
      <h1>LoginPage</h1>
      <hr />

      <pre>{JSON.stringify(user, null, 3)}</pre>

      <button
        onClick={() =>
          setUser({
            id: 123,
            name: "Paúl Imbaquingo",
            email: "paul.imbm@gmail.com",
          })
        }
        className="btn btn-primary"
      >
        Establecer usuario
      </button>
    </>
  );
};
