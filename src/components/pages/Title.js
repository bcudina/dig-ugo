/* početni title home stranice */

import React from "react";

export default function Title({ prvo, drugo, trece }) {
  return (
    <div className="row">
      <div className="col-10 mx-auto my-2 text-center  text-title">
        <h1 className="text-capitalize font-weight-bold">
          {prvo} <strong className="text-danger"> {drugo} </strong> {trece}
        </h1>
      </div>
    </div>
  );
}
