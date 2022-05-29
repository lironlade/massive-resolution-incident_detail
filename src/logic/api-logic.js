
import Moment from "moment";
import { useState } from "react";


export const GetKendoGridData_ = (
  hostname,
  kendoStr,
  reportId,
  carplate,
  reportName,
  customerId
) => {
  let url =
    hostname +
    "/WS/Parking_WebApi/api/MassiveResolutionsController/" +
    kendoStr +
    "/" +
    reportId +
    "/" +
    carplate +
    "/" +
    reportName +
    "/" +
    customerId;

  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    credentials: "include",
  });
};

export const GetGridData = ( hostName, incidentid, callback) => {
  let url =
    hostName +
    "/WS/Parking_WebApi/api/MassiveResolutionsController/GetIncidents_and_ReportsData/" +
    (incidentid != null ? incidentid : "00000000-0000-0000-0000-000000000000");

  fetch(url, { method: "GET", credentials: "include" })
    .then((res) => {
      console.log(res);
      if (!res.ok) {
        console.log("couldn't fetch data for that resource");
        return;
      }
      return res.json();
    })
    .then((data) => {
      debugger;
      
      

      data.IncidentList.forEach((element) => {
       
        element.New_recivedate =
          element.New_recivedate !== null
            ? Moment(element.New_recivedate).format("DD/MM/YYYY")
            : "";
        element.Inc_CreateDate =
          element.Inc_CreateDate !== null
            ? Moment(element.Inc_CreateDate).format("DD/MM/YYYY")
            : "";
        element.new_Parking_DocumentsCompletedDate =
          element.new_Parking_DocumentsCompletedDate !== null
            ? Moment(element.new_Parking_DocumentsCompletedDate).format(
                "DD/MM/YYYY"
              )
            : "";
        element.Inc_NN_Enable_DT_Inc_EndDate =
          element.Inc_NN_Enable_DT_Inc_EndDate !== null
            ? Moment(element.Inc_NN_Enable_DT_Inc_EndDate).format("DD/MM/YYYY")
            : "";
        element.Inc_NN_Enable_DT_Inc_StartDate =
          element.Inc_NN_Enable_DT_Inc_StartDate !== null
            ? Moment(element.Inc_NN_Enable_DT_Inc_StartDate).format(
                "DD/MM/YYYY"
              )
            : "";
        element.Inc_NN_Enable_DT_Prsdt_StartDate =
          element.Inc_NN_Enable_DT_Prsdt_StartDate !== null
            ? Moment(element.Inc_NN_Enable_DT_Prsdt_StartDate).format(
                "DD/MM/YYYY"
              )
            : "";
        element.new_violation_date =
          element.new_violation_date !== null
            ? Moment(element.new_violation_date).format("DD/MM/YYYY")
            : "";
        element.new_ParkingAgingDate =
          element.new_ParkingAgingDate !== null
            ? Moment(element.new_ParkingAgingDate).format("DD/MM/YYYY")
            : "";
        element.new_ParkingLastConversion =
          element.new_ParkingLastConversion !== null
            ? Moment(element.new_ParkingLastConversion).format("DD/MM/YYYY")
            : "";
        element.new_ParkingPrintDate =
          element.new_ParkingPrintDate !== null
            ? Moment(element.new_ParkingPrintDate).format("DD/MM/YYYY")
            : "";
        element.new_PaymentToDate =
          element.new_PaymentToDate !== null
            ? Moment(element.new_PaymentToDate).format("DD/MM/YYYY")
            : "";
        element.new_ParkingLastPostDate =
          element.new_ParkingLastPostDate !== null
            ? Moment(element.new_ParkingLastPostDate).format("DD/MM/YYYY")
            : "";
        element.new_hodaat_tashlum_SendDate =
          element.new_hodaat_tashlum_SendDate !== null
            ? Moment(element.new_hodaat_tashlum_SendDate).format("DD/MM/YYYY")
            : "";
        element.new_speicifed_date =
          element.new_speicifed_date !== null
            ? Moment(element.new_speicifed_date).format("DD/MM/YYYY")
            : "";
        element.new_ParkingWaitForFixDate =
          element.new_ParkingWaitForFixDate !== null
            ? Moment(element.new_ParkingWaitForFixDate).format("DD/MM/YYYY")
            : "";
        element.new_CancelationDate =
          element.new_CancelationDate !== null
            ? Moment(element.new_CancelationDate).format("DD/MM/YYYY")
            : "";

        element.new_CourtTransferDate =
          element.new_CourtTransferDate !== null
            ? Moment(element.new_CourtTransferDate).format("DD/MM/YYYY")
            : "";
        element.new_ArrearsToDate =
          element.new_ArrearsToDate !== null
            ? Moment(element.new_ArrearsToDate).format("DD/MM/YYYY")
            : "";
        element.new_ParkingEndReductionDate =
          element.new_ParkingEndReductionDate !== null
            ? Moment(element.new_ParkingEndReductionDate).format("DD/MM/YYYY")
            : "";
        element.new_z_ParkongHandicappedFromDate =
          element.new_z_ParkongHandicappedFromDate !== null
            ? Moment(element.new_z_ParkongHandicappedFromDate).format(
                "DD/MM/YYYY"
              )
            : "";
        element.new_z_ParkongHandicappedToDate =
          element.new_z_ParkongHandicappedToDate !== null
            ? Moment(element.new_z_ParkongHandicappedToDate).format(
                "DD/MM/YYYY"
              )
            : "";
        element.Acifa_DT_Last_StartDate =
          element.Acifa_DT_Last_StartDate !== null
            ? Moment(element.Acifa_DT_Last_StartDate).format("DD/MM/YYYY")
            : "";
        element.Acifa_DT_Last_EndDate =
          element.Acifa_DT_Last_EndDate !== null
            ? Moment(element.Acifa_DT_Last_EndDate).format("DD/MM/YYYY")
            : "";
        element.Acifa_Drisha_DT_PrintDate =
          element.Acifa_Drisha_DT_PrintDate !== null
            ? Moment(element.Acifa_Drisha_DT_PrintDate).format("DD/MM/YYYY")
            : "";
        element.Acifa_Drisha_DT_ApprovalDate =
          element.Acifa_Drisha_DT_ApprovalDate !== null
            ? Moment(element.Acifa_Drisha_DT_ApprovalDate).format("DD/MM/YYYY")
            : "";
        element.Vbeln_Last_Status_Update_Date =
          element.Vbeln_Last_Status_Update_Date !== null
            ? Moment(element.Vbeln_Last_Status_Update_Date).format("DD/MM/YYYY")
            : "";
        element.new_z_ParkongPublicFromDate =
          element.new_z_ParkongPublicFromDate !== null
            ? Moment(element.new_z_ParkongPublicFromDate).format("DD/MM/YYYY")
            : "";
        element.NN_Enable_Plate_DT_Max_Ever_Ind =
          element.NN_Enable_Plate_DT_Max_Ever_Ind !== null
            ? Moment(element.NN_Enable_Plate_DT_Max_Ever_Ind).format(
                "DD/MM/YYYY"
              )
            : "";
        element.Disabled_Plate_DT_Max_Ever_Ind =
          element.Disabled_Plate_DT_Max_Ever_Ind !== null
            ? Moment(element.Disabled_Plate_DT_Max_Ever_Ind).format(
                "DD/MM/YYYY"
              )
            : "";
        element.Finance_DT_Kizuz =
          element.Finance_DT_Kizuz !== null
            ? Moment(element.Finance_DT_Kizuz).format("DD/MM/YYYY")
            : "";
        element.Finance_DT_Takbul =
          element.Finance_DT_Takbul !== null
            ? Moment(element.Finance_DT_Takbul).format("DD/MM/YYYY")
            : "";
        element.Finance_DT_Transfer =
          element.Finance_DT_Transfer !== null
            ? Moment(element.Finance_DT_Transfer).format("DD/MM/YYYY")
            : "";
        element.DT_Car_Own_Date =
          element.DT_Car_Own_Date !== null
            ? Moment(element.DT_Car_Own_Date).format("DD/MM/YYYY")
            : "";
        element.DT_Car_Exp_Date =
          element.DT_Car_Exp_Date !== null
            ? Moment(element.DT_Car_Exp_Date).format("DD/MM/YYYY")
            : "";
        element.new_ParkingInspectorNotes =
          (element.new_ParkingInspectorNotes1 != null
            ? element.new_ParkingInspectorNotes1 + "\n"
            : "") +
          (element.new_ParkingInspectorNotes2 != null
            ? element.new_ParkingInspectorNotes2 + "\n"
            : "") +
          (element.new_ParkingInspectorNotes3 != null
            ? element.new_ParkingInspectorNotes3
            : "");
        element.violationDetails =
          element.new_violation_dateTime +
          "\n" +
          element.Concat_Address_Violation;
        element.CaseOriginCode_Questioning =
          element.Inc_Des_Questioning + "\n" + element.Inc_Des_CaseOriginCode;

         

      });
     
      callback(data);
    })
    .catch((err) => {
      console.log(err.message);
    });
};


export const sendGetRequest = (
  query,
  async,
  successHandler,
  failureHandler
) => {
  let result;
  let req = new XMLHttpRequest();

  async = async == undefined ? false : async;

  req.open(
    "Get",
    window["Xrm"].Page.context.getClientUrl() + "/api/data/v9.0/" + query,
    async
  );
  req.setRequestHeader("Accept", "application/json");
  req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
  req.setRequestHeader("OData-MaxVersion", "4.0");
  req.setRequestHeader("OData-Version", "4.0");
  req.setRequestHeader("Prefer", 'odata.include-annotations="*"');

  req.onreadystatechange = function () {
    if (this.readyState == 4 /* complete */) {
      req.onreadystatechange = null;

      if (this.status == 200) {
        //success callback this returns null since no return value available.
        result = JSON.parse(this.response);

        if (successHandler != undefined) successHandler(result);
      } else {
        //error callback
        alert(JSON.parse(this.response).error);

        if (failureHandler != undefined)
          failureHandler(JSON.parse(this.response));
      }
    }
  };

  req.send();

  if (async == false) return result;
};
