import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [form, setForm] = useState({
    username: "Breixxar",
    email: "paul.imbm@gmail.com",
  });
  const { username, email } = form;
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  useEffect(() => {
    //console.log("el useEffect se llamó!!!");
  }, []);
  useEffect(() => {
    //console.log("se ha cambiado a formState!!!");
  }, [form]);
  useEffect(() => {
    //console.log("se ha cambiado el E-mail!!!");
  }, [email]);

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />
      <input
        type="text"
        className="form-control mt-2"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="text"
        className="form-control mt-2"
        placeholder="user@example.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      {username === "Breixxar" && <Message />}
    </>
  );
};
