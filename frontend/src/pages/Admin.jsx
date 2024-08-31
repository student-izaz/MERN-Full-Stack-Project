import React from "react";
import './Admin.css';

function Admin() {
  return (
    <main>
      <div className="admin-dashboard">
        <div className="row row-1 flex just-btwn align-center">
          <div className="col col-1 flex align-center col-gap-20">
            <div className="col-icon">
              <i className="fa-solid fa-user"></i>
            </div>
            <div className="col-txt flex fl-col row-gap-10">
              <p>TOTAL STUDENT</p>
              <span className="font-600 size-22">3000</span>
            </div>
          </div>
          <div className="col col-2 flex align-center col-gap-20">
            <div className="col-icon">
            <i className="fa-solid fa-user"></i>
            </div>
            <div className="col-txt flex fl-col row-gap-10">
              <p>NEW STUDENT</p>
              <span className="font-600 size-22">300</span>
            </div>
          </div>
          <div className="col col-3 flex align-center col-gap-20">
            <div className="col-icon">
            <i className="fa-solid fa-user"></i>
            </div>
            <div className="col-txt flex fl-col row-gap-10">
              <p>TOTAL COURSES</p>
              <span className="font-600 size-22">30</span>
            </div>
          </div>
          <div className="col col-4 flex align-center col-gap-20">
            <div className="col-icon">
            <i className="fa-solid fa-user"></i>
            </div>
            <div className="col-txt flex fl-col row-gap-10">
              <p>FEE COLLECTION</p>
              <span className="font-600 size-22">300000$</span>
            </div>
          </div>
        </div>
        <div className="row row-2"></div>
      </div>
    </main>
  );
}

export default Admin;
