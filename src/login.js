import axios from "axios";
import React, { useState } from "react";
import Alert from 'react-bootstrap/Alert';

const Login = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [message, setMessage] = useState(false);

  const login = (e) => {
    e.preventDefault();
    var data = JSON.stringify({
      email: e.target.elements.username.value,
      password: e.target.elements.password.value,
    });
    // console.log(data)
    var config = {
      method: "post",
      url: "http://localhost:8080/users/login/",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        console.log("loged in dude.");
      })
      .catch(function (error) {
        console.log("user name error", error.response.status);
        if (error.response.status == 404) {
          setShowBanner(true);
          setMessage("Invalid username/password");
        }
      });
  };
  return (
    <div>
      <Alert variant="danger" show={true}>dsfsdfsdf</Alert>
      <form onSubmit={login}>
        <label>
          UserName:
          <input type="email" name="username"></input>
        </label>
        <br></br>
        <label>
          Password:
          <input type="password" name="password"></input>
        </label>
        <br></br>
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default Login;
