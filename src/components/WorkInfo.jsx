import React from "react"
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../styles/WorkInfo.css'
const WorkInfo = ({workData,setWorkData,submitWorkData,startWorkDate,endWorkDate,setEndWorkDate,setStartWorkDate}) => {

  return (
    <div>
       <Form className="mainForm" onSubmit={submitWorkData}>
        <Form.Group className="mb-3 innerDiv" controlId="formBasicName">
          <Form.Label>Company Name</Form.Label>
          <input
            type="text"
            placeholder="Enter Company Name"
            required
            value={workData.companyName}
            onChange={(e) => setWorkData({...workData,companyName:e.target.value})}
          />
        </Form.Group>
        <Form.Group className="mb-3 innerDiv" controlId="formBasicTitle">
          <Form.Label>Role</Form.Label>
          <input
            type="text"
            placeholder="Enter Role"
            required
            value={workData.role}
            onChange={(e) => setWorkData({...workData,role:e.target.value})}
          />
        </Form.Group>
        <Form.Group className="mb-3 innerDiv" controlId="formBasicResponsibilities">
          <Form.Label>Responsibilities</Form.Label>
          <textarea
      value={workData.responsibilities}
      onChange={(e) =>setWorkData({...workData,responsibilities:e.target.value})}
      required
    />
        </Form.Group>
        <div className="dateDivs">
        <Form.Label>Start Date: </Form.Label>
        <DatePicker selected={startWorkDate} onChange={(date) => {
          setStartWorkDate(date)}} required/>
        <Form.Label>End Date: </Form.Label>
        <DatePicker selected={endWorkDate} onChange={(date) => setEndWorkDate(date)} required/>
        </div>
        <div className="buttonsDiv">
        <Button variant="primary" type="submit">
          Submit
        </Button>
        </div>
      </Form>
    </div>
  )
};

export default WorkInfo;
