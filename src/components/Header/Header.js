import React, { useState } from "react";
import Web from "./Web";
import Mob from "./Mob";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className=" p-3 d-flex justify-content-between shade1"
      // style={{ zIndex: "3 !important" }}
    >
      {/* <div className="brand px-lg-5 px-3 d-flex justify-content-between align-content-center">
        <div className="mx-3 logo bg-warning fw-bold py-2 px-3 rounded-circle li-shadow">
          JS
        </div>
        <div className="name pt-0 fw-bold">Jayasurya</div>
      </div> */}
      <div className="col-12 ">
        <div className=" col-12">
          <div className="d-none d-md-block col-12">
            <Web />
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="btn btn-success d-md-none "
          >
            <i class="bi bi-list "></i>
          </button>
        </div>
        <div className="mob-menu">
          {isOpen && <Mob isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
}

export default Header;
