import React from "react";
import "../styles/DisplayCV.css";
const DisplayCv = ({ items, schoolItems, showButton, toggleButton,workItems, showWorkButton, toggleWorkButton }) => {
 
  console.log(workItems)
  return (
    <div className="main-div">
      <div className="mainInfoDiv">
        <h6>{items?.name}</h6>
        <h6>{items?.email}</h6>
        <h6>{items?.phone}</h6>
      </div>
      <div>
        <h3>Education Info</h3>
        <div>
          {schoolItems.map((schoolItem,index) => {
           return (<div key={schoolItem.title}  className="schoolInfoDiv">
              <div className="headersDiv">
                <h5>{schoolItem?.schoolName}</h5>
                <h6>{schoolItem?.title}</h6>
              </div>
              <div className="datesDiv">
                <div>{schoolItem?.startDate}</div>
                <div>{schoolItem?.endDate}</div>
              </div>
              <div>
                {showButton[index] && <button onClick={()=>toggleButton(index)}>Edit</button>}
              </div>
            </div>);
          })}
        </div>
      </div>
      <div>
        <h3>Work Info</h3>
        <div>
          {workItems.map((workItem,index) => {
           return (<div key={workItem.companyName}  className="workInfoDiv">
            <div className="contentDiv">
              <div className="headersDiv">
                <h5>{workItem?.companyName}</h5>
                <h6>{workItem?.role}</h6>
              </div>
              <div className="datesDiv">
                <div>{workItem?.startWorkDate}</div>
                <div>{workItem?.endWorkDate}</div>
              </div>
              </div>
              <li>{workItem?.responsibilities}</li>

              <div>
                {showWorkButton[index] && <button onClick={()=>toggleWorkButton(index)}>Edit</button>}
              </div>
            </div>);
          })}
        </div>
      </div>
    </div>
  );
};

export default DisplayCv;
