

export const columns_carowner = [
  // { field: "id", title: "#", width: 90, align: "right" },
  { field: "new_name", title: "מס' דוח", width: 100, align: "right" },
  {
    field: "BW_PLATE_ADJ_8_DIGITS",
    title: "מס' רכב",
    width: 100,
    align: "right",
  },
  { field: "DES_Interface", title: "ממשק", width: 90, align: "right" },
  { field: "DES_P_TYPE", title: "זיקה לרכב", width: 90, align: "right" },
  { field: "IDNUMBER", title: "זהות בעל הרכב", width: 100, align: "right" },
  { field: "partner", title: "מזהה שותף", width: 120, align: "right" },
  { field: "VKONT", title: "מזהה חשבון חוזה", width: 120, align: "right" },
  {
    field: "OWN_DATE",
    title: "תאריך בעלות רכב מ-",
    format: "{0:hh:mm dd/MM/yyyy}",
    width: 90,
    align: "right",
  },
  {
    field: "EXP_DATE",
    title: "תאריך בעלות רכב עד-",
    format: "{0:hh:mm dd/MM/yyyy}",
    width: 90,
    align: "right",
  },
  { field: "MC_NAME1", title: "שם פרטי בעל הרכב", width: 100, align: "right" },
  { field: "MC_NAME2", title: "שם משפחה בעל הרכב", width: 100, align: "right" },
];

export const columns_disabled = [
  // { field: "id", title: "#", width: 50 },
  { field: "DISABLE_PLATE", title: "מספר רכב", width: 150 },
  {
    field: "DATEFROM",
    title: "תוקף תו נכה מ",
    format: "{0:hh:mm dd/MM/yyyy}",
    width: 150,
  },
  {
    field: "DATETO",
    title: "תוקף תו נכה עד",
    format: "{0:hh:mm dd/MM/yyyy}",
    width: 150,
  },
  // { field: "NEXT_DATEFROM", title: "#", width: 90  },
  // { field: "NEXT_DATEFROM_PLUS30", title: "#", width: 90  },
];

export const columns_nataz = [
  // { field: "id", title: "#", width: 50 },
  { field: "PlateNum_NatzNataz", title: "מס' רכב", width: 150 },
  {
    field: "DT_From_NatzNataz",
    title: "תאריך מ",
    format: "{0:hh:mm dd/MM/yyyy}",
    width: 150,
  },
  {
    field: "DT_To_NatzNataz",
    title: "תאריך עד",
    format: "{0:hh:mm dd/MM/yyyy}",
    width: 150,
  },
];

export const columns_paymentdetails = [
  { field: "PayerName", title: "שם המשלם", width: 170 },
  { field: "PayerId", title: "ת.ז משלם", width: 140 },
  {
    field: "Converted",
    title: "תקבול רשום בחשבון שונה מחשבון הדוח",
    width: 140,
  },
  { field: "ContactAccountPay", title: "חשבון חוזה תקבול", width: 140 },
  { field: "PayerInd", title: "ת.ז משלם שונה מת.ז בעל הדוח", width: 140 },
  { field: "PaymentAmount", title: "סכום לתשלום", width: 140 },
  { field: "PaymentDate", title: "תאריך תשלום", width: 140 },
  { field: "Type", title: "אופן תשלום", width: 140 },
];

export const columns_ticketpermit = [
  // { field: "id", title: "#", width: 140 },
  // { field: "PERMIT_PARTNER", title: "מס' שותף תו חנייה", width: 150 },

  {
    field: "PERMIT_VALID_FLAG",
    title: "אינדיקציה לתו פעיל/ לא פעיל",
    width: 140,
  },
  { field: "QMNUM", title: "מס' תווי חנייה", width: 150 },
  { field: "permit_PLATE_8_DIGITS", title: "מס' רכב", width: 140 },
  {
    field: "PERMIT_FROM_DATE",
    title: "תוקף תו חנייה מ",
    format: "{0:hh:mm dd/MM/yyyy}",
    width: 140,
  },
  {
    field: "Permit_Actual_End_Date",
    title: "תוקף תו חנייה עד",
    format: "{0:hh:mm dd/MM/yyyy}",
    width: 140,
  },
  {
    field: "PERMIT_ERDAT",
    title: "תאריך הנפקה",
    format: "{0:hh:mm dd/MM/yyyy}",
    width: 140,
  },
  { field: "PERMIT_PARKING_AREA", title: "אזור חנייה", width: 140 },
  {
    field: "Permit_Special_Strt_ind",
    title: "אינדיקציה לאזור מיוחד",
    width: 140,
  },

  // { field: "Permit_Special_Street", title: "מס' רחוב מיוחד", width: 140 },

  { field: "ARNONA_STRT_NAME", title: "שם רחוב של תו", width: 140 },
  { field: "Des_TV_Cancel_Reason", title: "סיבת ביטול", width: 140 },

  { field: "IND_Rented_Car", title: "אינדיקציה רכב שכור", width: 140 },
  { field: "Concat_qmnum_Partner_Details", title: "פרטי שותף", width: 140 },
  { field: "DES_CAR_OWNING_TYPE", title: "סוג רכב 2", width: 140 },
  { field: "CD_CAR_OWNING_TYPE", title: "סוג רכב", width: 140 },

];

export const columns_ticketpermit_customer = [
  { field: "RequestNumber", title: "", width: 170 },
  { field: "PlateNumber", title: "", width: 140 },
  { field: "RequestStatus", title: "  ", width: 140 },
  { field: "RavPark", title: "", width: 140 },
  { field: "ParkingArea", title: " ", width: 140 },
  { field: "FromDate", title: " ", width: 140 },
  { field: "ToDate", title: " ", width: 140 },
];
