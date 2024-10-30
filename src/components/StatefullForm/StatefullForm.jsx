import { useState } from "react";

const StatefullForm = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState("Chloe");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("password must be at least 6 characters");
    } else {
      setError("");
      console.log(email, password, name);
    }
  };

  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleNameChange}
          value={name}
          type="text"
          name="name"
        />
        <br />
        <input onChange={handleEmailChange} type="email" name="email" id="" />

        <br />
        <input
          onChange={handlePasswordChange}
          type="password"
          name="password"
          required
        />
        {/* <button>Submit</button> */}
        <br />
        <input type="submit" value="submit" />

        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default StatefullForm;
