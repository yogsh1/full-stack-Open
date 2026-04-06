import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const { onLogin } = props;

  const navigate = useNavigate();

  const onSubmit = (event) => {
    // stops the browser from hard refresh
    event.preventDefault();
    onLogin("thisguy1328");
    navigate("/");
  };

  return (
    <div>
      <h2>login</h2>
      <form onSubmit={onSubmit}>
        <div>
          username: <input />
        </div>
        <div>
          password: <input type="password" />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default Login;
