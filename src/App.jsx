import "./App.css";
import WorkInfo from "./components/WorkInfo";
import MainInfo from "./components/MainInfo";
import EducationalInfo from "./components/EducationalInfo";
import DisplayCv from "./components/Display-Cv";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
function App() {
  const [data, setData] = useState(null);
  const [editDisabled, setEdit] = useState(false);
  const [savedData, setSavedData] = useState({
    inputValue: "",
    email: "",
    phoneno: "",
  });
  const [editable, setEditable] = useState(null);
  const [editWork,setEditWork] = useState(null);
  const [schoolDataDisplayed, setSchoolDataDisplayed] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [currentSchoolData, setCurrentSchoolData] = useState({
    schoolName: "",
    title: "",
    startDate: startDate,
    endDate: endDate,
  });
  const [showButtonSave, setShowButtonSave] = useState([]);
  const [currentWorkData, setCurrentWorkData] = useState({
    companyName: "",
    role: "",
    responsibilities: "",
    startWorkDate: startDate,
    endWorkDate: endDate,
  });
  const [showButtonWorkSave, setShowButtonWorkSave] = useState([]);
  const [startWorkDate, setStartWorkDate] = useState(null);
  const [endWorkDate, setEndWorkDate] = useState(null);
  const [workDataDisplayed, setWorkDataDisplayed] = useState([]);
  // console.log(showButtonWorkSave)
  // console.log(showButtonSave)

  function submitWorkData() {
    debugger
    event.preventDefault();
    if (editWork != null) {
      setWorkDataDisplayed(workDataDisplayed.map((item, index) => index === editWork ? {companyName: currentWorkData.companyName,role: currentWorkData.role,startWorkDate: startWorkDate.toLocaleString("en-US", {day: "2-digit", month: "long",year: "numeric",}),endWorkDate: endWorkDate.toLocaleString("en-US", {day: "2-digit",month: "long",year: "numeric",})}: item));
      setCurrentWorkData({
        companyName: "",
        role: "",
        startWorkDate: setStartDate(null),
        endWorkDate: setEndDate(null),
        responsibilities: ""
      });
      setShowButtonWorkSave(showButtonWorkSave.map((item, index) => (index === editWork ? true : item)));
      setEditWork(null);
      setStartWorkDate("")
      setEndWorkDate("")
      return;
    }
    setWorkDataDisplayed([
      ...workDataDisplayed,
      {
        companyName: currentWorkData.companyName,
        role: currentWorkData.role,
        startWorkDate: startWorkDate.toLocaleString("en-US", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }),
        endWorkDate: endWorkDate.toLocaleString("en-US", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }),
    responsibilities: currentWorkData.responsibilities
      },
    ]);

    setCurrentWorkData({
      companyName: "",
      role: "",
      startWorkDate: setStartWorkDate(""),
      endWorkDate: setEndWorkDate(""),
       responsibilities: ""
    });
   
    setShowButtonWorkSave([...showButtonWorkSave, true]);
  }

  function edit() {
    setSavedData({
      inputValue: data.name,
      email: data.email,
      phoneno: data.phone,
    });
    setData(null);
    setEdit(false);
  }
  function submitFn(event) {
    event.preventDefault();

    setData({
      name: savedData.inputValue,
      email: savedData.email,
      phone: savedData.phoneno,
    });
    setSavedData({ inputValue: "", email: "", phoneno: "" });
    setEdit(true);
  }

  function toggleWorkButton(e)
  {
    setEditWork(e);
    setShowButtonWorkSave(showButtonWorkSave.map((item, index) => (index === e ? false : item)));
    let sum = workDataDisplayed[e];
    setWorkDataDisplayed(workDataDisplayed.map((item, index) =>index === e? {companyName: " ",role: " ",startWorkDate: setStartWorkDate(null),endWorkDate: setEndWorkDate(null)}: item));
    setCurrentWorkData({
      companyName: sum.companyName,
      role: sum.role,
      startWorkDate: setStartWorkDate(new Date(sum.startWorkDate)),
      endWorkDate: setEndWorkDate(new Date(sum.endWorkDate)),
      responsibilities: sum.responsibilities
    });
    setStartWorkDate(new Date(sum.startWorkDate));
    setEndWorkDate(new Date(sum.endWorkDate));
  }

  function toggleButton(e) {
    setEditable(e);
    setShowButtonSave(showButtonSave.map((item, index) => (index === e ? false : item)));
    let sum = schoolDataDisplayed[e];
    setSchoolDataDisplayed(schoolDataDisplayed.map((item, index) =>index === e? {schoolName: " ",title: " ",startDate: setStartDate(null),endDate: setEndDate(null)}: item)
    );
    setCurrentSchoolData({
      schoolName: sum.schoolName,
      title: sum.title,
      startDate: setStartDate(new Date(sum.startDate)),
      endDate: setEndDate(new Date(sum.endDate))
    });
    setStartDate(new Date(sum.startDate));
    setEndDate(new Date(sum.endDate));
  }

  function submitSchoolData(event) {
    event.preventDefault();
    if (editable != null) {
      setSchoolDataDisplayed(
        schoolDataDisplayed.map((item, index) =>index === editable? {schoolName: currentSchoolData.schoolName,title: currentSchoolData.title,startDate: startDate.toLocaleString("en-US", {day: "2-digit",month: "long",year: "numeric"}),endDate: endDate.toLocaleString("en-US", {day: "2-digit",month: "long",year: "numeric",})}: item));
        setCurrentSchoolData({
        schoolName: "",
        title: "",
        startDate: setStartDate(null),
        endDate: setEndDate(null),
      });
      setShowButtonSave(showButtonSave.map((item, index) => (index === editable ? true : item)));
      setEditable(null);
      return;
    }
    setSchoolDataDisplayed([
      ...schoolDataDisplayed,
      {
        schoolName: currentSchoolData.schoolName,
        title: currentSchoolData.title,
        startDate: startDate.toLocaleString("en-US", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }),
        endDate: endDate.toLocaleString("en-US", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }),
      },
    ]);

    setCurrentSchoolData({
      schoolName: "",
      title: "",
      startDate: setStartDate(""),
      endDate: setEndDate(""),
    });
    setShowButtonSave([...showButtonSave, true]);
  }
  return (
    <>
      <h1 className="headerDiv">Resume Builder</h1>
      <div className="mainDiv">
        <div className="leftDiv">
          <MainInfo
            editDisabled={editDisabled}
            edit={edit}
            submitFn={submitFn}
            savedData={savedData}
            setSavedData={setSavedData}
          ></MainInfo>
          <EducationalInfo
            schoolData={currentSchoolData}
            setSchoolData={setCurrentSchoolData}
            submitSchoolData={submitSchoolData}
            showButton={showButtonSave}
            startDate={startDate}
            endDate={endDate}
            setEndDate={setEndDate}
            setStartDate={setStartDate}
          ></EducationalInfo>
          <WorkInfo
            workData={currentWorkData}
            setWorkData={setCurrentWorkData}
            submitWorkData={submitWorkData}
            showWorkButton={showButtonWorkSave}
            startWorkDate={startWorkDate}
            endWorkDate={endWorkDate}
            setEndWorkDate={setEndWorkDate}
            setStartWorkDate={setStartWorkDate}
          ></WorkInfo>
        </div>
        <div className="rightDiv">
          <DisplayCv
            items={data}
            schoolItems={schoolDataDisplayed}
            workItems={workDataDisplayed}
            showButton={showButtonSave}
            showWorkButton={showButtonWorkSave}
            toggleButton={toggleButton}
            toggleWorkButton={toggleWorkButton}
          ></DisplayCv>
        </div>
      </div>
    </>
  );
}

export default App;
