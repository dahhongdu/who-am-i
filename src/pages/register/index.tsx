import { userApi } from "../../api/services/auth";

const Register = () => {
  const handleBtnClick = async () => {
    await userApi.createUser()
      .then((res) => {
        console.log("register successful!");
        console.log(res);
      })
      .catch((err) => {
        console.log("register failed!");
        console.log(err);
      })
  };

  return (
    <>
      <button onClick={handleBtnClick}>
        Register!
      </button>
    </>
  );
};

export default Register;
