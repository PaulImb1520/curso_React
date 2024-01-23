import { useForm } from "../hooks/useForm";
export const CustomHook = () => {
  const { form, onResetForm, onInputChange, username, email, password } =
    useForm({
      username: "",
      email: "",
      password: "",
    });
  //const { username, email, password } = form;

  return (
    <>
      <h1>Formulario con Custom Hook</h1>
      <hr />
      <input
        type="text"
        className="form-control mt-2"
        placeholder="Username"
        name="username"
        value={username || ""}
        onChange={onInputChange}
      />
      <input
        type="text"
        className="form-control mt-2"
        placeholder="user@example.com"
        name="email"
        value={email || ""}
        onChange={onInputChange}
      />
      <input
        type="password"
        className="form-control mt-2"
        placeholder="Contraseña"
        name="password"
        value={password || ""}
        onChange={onInputChange}
      />

      <button onClick={onResetForm} className="btn btn-primary mt-2">
        Borrar
      </button>
    </>
  );
};
