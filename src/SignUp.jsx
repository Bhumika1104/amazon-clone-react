
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

const SignUp = ({ onClose }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUsers = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = newUsers.find(
      (u) => u.email === user.email
    );

    if (userExists) {
     alert("Email already registered!")
      return;
    }

    newUsers.push(user);
    localStorage.setItem("users", JSON.stringify(newUsers));
    alert("Signup SuccessfulS");

    setUser({
      name: "",
      email: "",
      password: ""
    });
  };

  return (
    <div
      style={{
        height: "55vh",
        width: "450px",
        backgroundColor: "#131921",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
      }}
    >
      <div
        style={{
          width: "400px",
          backgroundColor: "#ffffff",
          padding: "25px",
          borderRadius: "10px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          position: "relative"
        }}
      >

        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "15px",
            border: "none",
            background: "transparent",
            fontSize: "20px",
            cursor: "pointer"
          }}
        >
          ❌
        </button>

        <h4 className="mb-3">Create Account</h4>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              name="name"
              type="text"
              required
              placeholder="Enter username"
              value={user.name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              required
              placeholder="Enter email"
              value={user.email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              required
              placeholder="Password"
              value={user.password}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="Accept Terms & Conditions"
              required
            />
          </Form.Group>

          <Button variant="warning" type="submit" className="w-100">
            Sign Up
          </Button>
        </Form>

      </div>
    </div>
  );
};

export default SignUp;