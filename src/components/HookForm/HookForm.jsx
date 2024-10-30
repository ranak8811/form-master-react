import useInputState from "../../hooks/useInputState";

const HookForm = () => {
  //   const [name, handleNameChange] = useInputState("Rojoni hooked");

  // after return like an object from useInputState.js file

  //   const nameState = useInputState("Rojoni hooked");
  const emailState = useInputState("hey@example.com");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("form data", name);
    console.log("form data", emailState.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <input
          value={name}
          onChange={handleNameChange}
          type="text"
          name="name"
        /> */}
        <br />
        <input {...emailState} type="email" name="email" id="" />

        <br />
        <input type="password" name="password" />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default HookForm;
