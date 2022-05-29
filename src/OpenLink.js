// import { initSapUrl, initDocumantumUrl } from "./CommonFunctions";

// export const handleOpenAttachedIncidents = (entityName, entityId) => {
//   let paramaters = {};
//   paramaters["p_showIcidentsRelation"] = true;
//   handleOpenCrm(entityName, entityId, paramaters);
// };

// export const handleOpenAttachedResolutions = (entityName, entityId) => {
//   let paramaters = {};
//   paramaters["p_showResolutionsRelation"] = true;
//   handleOpenCrm(entityName, entityId, paramaters);
// };

// export const handleOpenHistoryActivities = (entityName, entityId) => {
//   let paramaters = {};
//   paramaters["p_showHistoryActivities"] = true;
//   handleOpenCrm(entityName, entityId, paramaters);
// };

// export const handleOpenCarDetails = (entityName, entityId) => {
//   let paramaters = {};
//   paramaters["p_showCarDetails"] = true;
//   handleOpenCrm(entityName, entityId, paramaters);
// };

// export const handleOpenHistoryReport = (entityName, entityId) => {
//   let paramaters = {};
//   paramaters["p_showReportHistory"] = true;
//   handleOpenCrm(entityName, entityId, paramaters);
// };

// export const handleOpenEnforcement = (entityName, entityId) => {
//   let paramaters = {};
//   paramaters["p_enforcement"] = true;
//   handleOpenCrm(entityName, entityId, paramaters);
// };

// export const handleDocOpen = (entityName, param) => {
//   let documantumUrl = initDocumantumUrl() + "doctlv67/component/tlvmain";
//   let params;
//   if (entityName === "BusinessPartner")
//     params = "?bus=ISUPARTNER&folderpath=" + param;
//   else if (entityName === "incident")
//     params = "?bus=NOTIFICATION&folderpath=" + param;
//   else if (entityName === "motherincident")
//     params = "?objectIds=" + param + "&objectTypes=NOTIFICATION";
//   else if (entityName === "new_parkingticket")
//     params = "?bus=BUS2032&folderpath=" + param;

//   OpenWindow(documantumUrl + params);
// };

// export const handleOpenCrm = (entityName, entityId, paramaters) => {
//   if (!window["Xrm"]) {
//     alert("go to crm");
//     return;
//   }
//   var windowOptions = {
//     openInNewWindow: true,
//   };

//   window["Xrm"].Utility.openEntityForm(
//     entityName,
//     entityId,
//     paramaters === undefined ? null : paramaters,
//     windowOptions
//   );
// };

// const OpenWindow = (url) => {
//   //alert(url);
//   window.open(url, "MsgWindow", "width=800,height=800");
// };

// export const GetImagesLink = (dataItem) => {
//   var reportNum = dataItem.ParkingTicketIdName;
//   var src = initDocumantumUrl() + "ImageSlider/slider-frame.html";
//   var param = "?objectId=" + reportNum.toUpperCase() + "&objectType=BUS2032";
//   OpenWindow(src + param);
// };

// export const GetVideoLink = (dataItem, currentUserId, hostname) => {
//   let obj = buildVideoLinksObj(dataItem, currentUserId);
//   GetVideoLinks(obj, hostname).then((res) => {
//     res.json().then((result) => {
//       if (result) {
//         OpenWindow(result);
//       } else {
//         alert("Error getting video link!  ");
//       }
//     });
//   });
// };

// const buildVideoLinksObj = (dataItem, currentUserId) => {
//   let obj = {
//     parkingTicketNum: dataItem.ParkingTicketIdName,
//     UserId: currentUserId,
//     CarNumber: dataItem.new_car_number,
//   };
//   return obj;
// };

// function GetVideoLinks(obj, hostName) {
//   const url =
//     hostName +
//     "/WS/Parking_WebApi/api/MassiveResolutionsController/GetVideoLinks";
//   return fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json;charset=utf-8",
//     },
//     body: JSON.stringify(obj),
//   });
// }

// export const OpenSearchReport = (
//   idNumber,
//   idTypeDesc,
//   converType,
//   hostname
// ) => {
//   let idType;
//   if (converType === 1)
//     //מחוג
//     idType =
//       idTypeDesc === "FS0001"
//         ? "1" //תעודת זהות
//         : idTypeDesc === "FS0002"
//         ? "2" //דרכון
//         : "3";
//   //ארגון
//   else idType = idTypeDesc === "ת.ז" ? "1" : idTypeDesc === "דרכון" ? "2" : "3";

//   let params = "IsNewWindow=1&idNumber=" + idNumber + "&idType=" + idType;

//   var url =
//     hostname +
//     ":5555/PARKING/WebResources/new_ParkingTicketsSearchScreen?data=" +
//     window.encodeURIComponent(params);
//   OpenWindow(url);
// };

// export const OpenSearchReportForCar = (
//   carNumber,
//   hostname
// ) => {
//   if(carNumber.startsWith('0'))
//   {
//     carNumber = carNumber.substring(1, carNumber.length);
//   }
//   let params = "IsNewWindow=1&CarNumber=" + carNumber;

//   var url =
//     hostname +
//     ":5555/PARKING/WebResources/new_ParkingTicketsSearchScreen?data=" +
//     window.encodeURIComponent(params);
//   OpenWindow(url);
// };

// export const OpenDafdefet = (params, currentUserId, hostname) => {
//   let data = params.dataItem;
//   let isCustomer = data.new_z_parkingcustomerid_Id == null ? 1 : 2;
//   let userId = currentUserId;
//   let governmentid =
//     data.new_governmentid == null
//       ? data.new_z_customerid_like_governmentid
//       : data.new_governmentid;
//   let fullname =
//     data.new_z_parkingcustomerid_name == null
//       ? data.new_z_customerid_name
//       : data.new_z_parkingcustomerid_name;
//   let id_type =
//     data.new_z_parkingcustomerid_idtype == null
//       ? data.new_z_customerid_idtype
//       : data.new_z_parkingcustomerid_idtype;
//   //var params = "ticketNum=" + data.incidentTicketNumber + "&sn=" + serviceNotification + "&iscustomer=" + isCustomer + "&idnum=" + result.governmentid + "&parkingticketnum=" + reportNumber + "&userId=" + userId + "&mothercaseid=" + motherIncidentId + "&daughtercaseid=" + incidentId + "&contactName=" + result.fullname + "&idType=" + result.new_idtype;
//   var params =
//     "ticketNum=" +
//     data.TicketNumber +
//     "&sn=" +
//     data.new_Parking_ServiceNotification +
//     "&iscustomer=" +
//     isCustomer +
//     "&idnum=" +
//     governmentid +
//     "&parkingticketnum=" +
//     data.ParkingTicketIdName +
//     "&userId=" +
//     userId +
//     "&mothercaseid=" +
//     data.IncidentIdAggadic +
//     "&daughtercaseid=" +
//     data.IncidentId +
//     "&contactName=" +
//     fullname +
//     "&idType=" +
//     id_type;

//   var url =
//     hostname +
//     ":5555/PARKING/WebResources/new_DafdefetLatovea.html?data=" +
//     window.encodeURIComponent(params);
//   OpenWindow(url);
// };

// export const OpenBalanceSheet = (params) => {
//   let data = params.dataItem;
//   var url =
//     initSapUrl() +
//     "sap/bc/gui/sap/its/webgui?~transaction=*ZZFICAPRK_VBELN p_vbeln = " +
//     data.ParkingTicketIdName;
//   OpenWindow(url);
// };

// export const OpenCustomerSheet = (account_num) => {
//   var url =
//   initSapUrl() + "sap/bc/gui/sap/" +
//     "its/webgui?~transaction=%2aFPL9%20FKKL1-VKONT%3d" +
//     account_num +
//     "%3bDYNP_OKCODE=/00";
//   OpenWindow(url);
// };

// export const OpenCustomerSheetByIdNumber = (account_number) => {
  
//   var url =
//   initSapUrl() + "sap/bc/gui/sap/its/webgui?~transaction=%2aFPL9%20FKKL1-VKONT%3d" +
//   account_number + "%3bDYNP_OKCODE=/00";
//   OpenWindow(url);
// };

// export const OpenParkingCardForCar = (params) => {
//   let data = params.dataItem;
//   var url =
//   initSapUrl() + "sap/bc/gui/sap/its/webgui?~transaction=%2aZPARKING_TV%20R_PLATE-LOW%3d" +
//     params.dataItem.new_car_number +
//     "%3dDYNP_OKCODE=ONLI";
//   OpenWindow(url);
// };

// export const OpenParkingCardForCustomer = (params) => {
//   let data = params.dataItem;
//   var url =
//   initSapUrl() + "sap/bc/gui/sap/its/webgui?~transaction=%2aZPARKING_TV%20R_PLATE-LOW%3d73271601%3dDYNP_OKCODE=ONLI";
//   OpenWindow(url);
// };
