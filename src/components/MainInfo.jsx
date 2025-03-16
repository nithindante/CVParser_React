import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../styles/MainInfo.css";
const MainInfo = ({edit,editDisabled,submitFn,savedData,setSavedData}) => {

  return (
    <div>
      <Form className="mainForm" onSubmit={submitFn}>
        <Form.Group className="mb-3 innerDiv" controlId="formBasicPassword">
          <Form.Label>Full Name</Form.Label>
          <input
            type="text"
            placeholder="Enter Name"
            required
            value={savedData.inputValue}
            onChange={(e) => setSavedData({...savedData,inputValue:e.target.value})}
          />
        </Form.Group>
        <Form.Group className="mb-3 innerDiv" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <input
            type="email"
            placeholder="Enter email"
            required
            value={savedData.email}
            onChange={(e) =>  setSavedData({...savedData,email:e.target.value})}
          />
        </Form.Group>
        <Form.Group className="mb-3 innerDiv" controlId="formBasicEmail">
          <Form.Label>Phone Number</Form.Label>
          <input
            type="number"
            placeholder="Enter phone number"
            required
            value={savedData.phoneno}
            onChange={(e) => setSavedData({...savedData,phoneno:e.target.value})}
          />
        </Form.Group>
        <div className="buttonsDiv">
        <Button variant="primary" type="submit" disabled={editDisabled}>
          Submit
        </Button>
        <Button variant="primary" type="button" onClick={edit} disabled={!editDisabled}>
        Edit
        </Button>
        </div>
      </Form>
    </div>
  );
};

export default MainInfo;
