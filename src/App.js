import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect, useContext, useRef } from "react";

import IncidentDetails from "./Component/IncidentDetails";
import { GetGridData } from "./logic/api-logic";
import { initServerUrl, getUrlVars } from "./CommonFunctions";

function App() {
  const incidentid = getUrlVars();
  //alert(incidentid);

  return <IncidentDetails></IncidentDetails>;
}

export default App;
