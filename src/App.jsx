import "./App.css";
import Grandpa from "./components/Grandpa/Grandpa";
// import ReusableForm from "./components/ReusableForm/ReusableForm";
// import HookForm from "./components/HookForm/HookForm";
// import RefForm from "./components/RefForm/RefForm";
// import StatefullForm from "./components/StatefullForm/StatefullForm";
// import SimpleForm from "./components/SimpleForm/SimpleForm";

function App() {
  // const handleSignUpSubmit = (data) => {
  //   console.log("Sign Up data: ", data);
  // };

  // const handleUpdateProfile = (data) => {
  //   console.log("Update profile data: ", data);
  // };
  return (
    <>
      <h1>Form Master</h1>
      <Grandpa></Grandpa>

      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefullForm></StatefullForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}

      {/* <ReusableForm formTitle={"Sign up"} handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sing up</h2>
          <p>please sign up right now</p>
        </div>
      </ReusableForm>
      <ReusableForm
        formTitle={"Profile Update"}
        submitBtnText="Update"
        handleSubmit={handleUpdateProfile}
      >
        <div>
          <h2>Update profile</h2>
          <p>always keep your profile updated</p>
        </div>
      </ReusableForm> */}
    </>
  );
}

export default App;
