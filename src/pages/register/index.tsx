import { userApi } from '../../api/services/auth';

const Register = () => {
  const handleBtnClick = async () => {

    // await userApi.createUser()
    //   .then((res) => {
    //     alert("hello!")
    //     console.log("res: ", res.data);
    //   })
    //   .catch((err) => {
    //     console.log("err:", err)
    //     if (err.res === 301) {
    //       console.log("에러 status: ", err.res);
    //     }
    //   });
  };

  return (
    <>
      <button onClick={handleBtnClick}>Register!</button>

      <a
      href="http://localhost:8080/api/v1/auth/kakao/login"
    >
      회원가입
    </a>
    </>
  );
};

export default Register;
