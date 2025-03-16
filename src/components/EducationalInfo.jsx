import React from "react"
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../styles/EducationalInfo.css'
const EducationalInfo = ({schoolData,setSchoolData,submitSchoolData,startDate,endDate,setEndDate,setStartDate}) => {

  return (
    <div>
       <Form className="mainForm" onSubmit={submitSchoolData}>
        <Form.Group className="mb-3 innerDiv" controlId="formBasicName">
          <Form.Label>School Name</Form.Label>
          <input
            type="text"
            placeholder="Enter School"
            required
            value={schoolData.schoolName}
            onChange={(e) => setSchoolData({...schoolData,schoolName:e.target.value})}
          />
        </Form.Group>
        <Form.Group className="mb-3 innerDiv" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <input
            type="text"
            placeholder="Enter Title"
            required
            value={schoolData.title}
            onChange={(e) => setSchoolData({...schoolData,title:e.target.value})}
          />
        </Form.Group>
        <div className="dateDivs">
        <Form.Label>Start Date: </Form.Label>
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} required/>
        <Form.Label>End Date: </Form.Label>
        <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} required/>
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

export default EducationalInfo;
