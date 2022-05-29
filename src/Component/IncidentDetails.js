import { useState, useEffect, useContext } from "react";

import SubGridComponent from "../Component/SubGridComponent";
import { GetKendoGridData_ } from "../logic/api-logic";
import {
  columns_carowner,
  columns_disabled,
  columns_nataz,
  columns_paymentdetails,
  columns_ticketpermit,
} from "../SubGridColumns";
import { initServerUrl } from "../CommonFunctions";
import { GetGridData } from "../logic/api-logic";
import {
  GetImagesLink,
  GetVideoLink,
  OpenSearchReport,
  handleDocOpen,
  handleOpenCrm,
  handleOpenAttachedResolutions,
  handleOpenAttachedIncidents,
} from "../OpenLink";
import moment from "moment";

const IncidentDetails = (params) => {
  debugger;
  const [hostName, SethostName] = useState([]);

  const [gridData, setGridData] = useState({
    CarOwnerList: null,
  });

  const [dataItem, SetData] = useState({});

  useEffect(() => {
    let hostName = initServerUrl();
    SethostName(hostName);
    GetGridData(hostName, null, handleAfterData);
  }, []);

  const handleAfterData = (data) => {
    debugger;
    SetData(data.IncidentList[0]);

    GetKendoGridData_(
      params.hostName,
      "GetAllSubGrid",
      data.ParkingTicketNumberId,
      data.Car_Des_Car_Original_Plate,
      data.ParkingTicketIdName,
      data.Inc_Contact_Partner
    ).then((res) => {
      res.json().then((result) => {
        if (!result) {
          setGridData(null);
          return;
        }

        if (result.PaymentDetailsList) {
          result.PaymentDetailsList.forEach((element) => {
            element.PaymentDate =
              element.PaymentDate !== null
                ? moment(element.PaymentDate).format("DD/MM/YYYY HH:mm")
                : "";
          });
        }

        setGridData(result);
      });
    });
  };

  //debugger;
  return (
    <div>
      <div className="navbar_form">
        <div>
          <a href="#report_details">פרטי דוח</a>
        </div>
        <div>פרטי הודעה והסבה</div>
        <div>פרטי רכב</div>
        <div>אכיפה</div>
        <div>פרטי תשלום</div>
        <div>תווי חניה</div>
        <div>מדדים</div>
      </div>
      {/* start scrollForm   */}
      <div className="scrollForm">
        {/* start general_desc   */}
        <div className="horizontal_box">
          <div className="horizontal_box width870px">
            <div className="generalbox width570px">
              <div className="margin_left30 ">
                <div className="horizontal_box ">
                  <div className="margin_left30">
                    <div className="label_form">קנס מקורי</div>
                    <div className="field_form">
                      {dataItem.new_original_amount}
                    </div>
                  </div>
                  <div className=" margin_left30">
                    <div className="label_form">תוספות</div>
                    <div className="field_form">
                      {dataItem.new_ParkingArrears}
                    </div>
                  </div>
                  <div className=" margin_left30">
                    <div className="label_form">יתרה לתשלום</div>
                    <div className="field_form">{dataItem.Balance}</div>
                  </div>
                </div>
                <div>
                  <div>
                    <div className="label_form">פיגורים בעת קבלת הפניה</div>
                    <div className="field_form">
                      {dataItem.Acifa_Des_Acifa_PK_Relevant}
                    </div>
                  </div>
                  <div>
                    <div className="label_form">תיאור שלב אחרון אכיפה</div>
                    <div className="field_form">
                      {dataItem.Acifa_Des_Last_ReportGviaLevel}
                    </div>
                  </div>
                  <div>
                    <div className="label_form">
                      ימים מה. תשלום עד תאריך קבלת הפנייה
                    </div>
                    <div className="field_form">
                      {dataItem.new_ParkingrDaysFromPaymentNotification}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="label_form">תו נכה</div>
                  <div className="field_form">{dataItem.Des_Disable_Type}</div>
                </div>
                <div>
                  <div className="label_form">מורשה נתצ</div>
                  <div className="field_form">
                    {dataItem.Inc_NN_Enable_Des_Type}
                  </div>
                </div>
                <div>
                  <div className="label_form">כמות תווים פעילים</div>
                  <div className="field_form">
                    {dataItem.CNT_QMNUM_ACTIVE_PLATE_PARTNER}
                  </div>
                </div>
                <div>
                  <div className="label_form">כמות תווים אי פעם</div>
                  <div className="field_form">
                    {dataItem.CNT_QMNUM_TOTAL_PLATE_PARTNER}
                  </div>
                </div>
              </div>
            </div>
            <div className="generalbox  generalbox_grayDark">
              <div className="margin_left30">
                <div>
                  <div className="label_form">תורים עם פנייה פתוחה </div>
                  <div className="field_form">{dataItem.ALL_TN_QUEUE}</div>
                </div>
                <div>
                  <div className="label_form"> .</div>
                  <div className="field_form"></div>
                </div>
                <div>
                  <div className="label_form">האם הושלמו מסמכים</div>
                  <div className="field_form">
                    {dataItem.new_parking_is_DocumentsCompleted}
                  </div>
                </div>
                <div>
                  <div className="label_form">ת. עדכון השלמת מסמכים</div>
                  <div className="field_form">
                    {dataItem.new_Parking_DocumentsCompletedDate}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="desc_box width746px ">
              <div>
                <div className="label_form black_color">שם קובץ מקורי </div>
                <div className="field_form white_color height30px">
                  {dataItem.ViewCode_Des_Original_ViewCode}
                </div>
              </div>
              <div>
                <div className="label_form black_color">
                  תאריך קבלת הפנייה: {dataItem.New_recivedate}
                </div>
              </div>
              <div className="left_div">
                <div className="label_form black_color">
                  {dataItem.Inc_Des_Questioning} |{" "}
                  {dataItem.Inc_Des_CaseOriginCode}
                </div>
              </div>
            </div>
            <div className="desc_box_white">
              <div className="label_form black_color custommargin">
                {dataItem.New_description}
              </div>
            </div>
          </div>
        </div>{" "}
        {/* end general_desc   */}
        <div>
          {" "}
          {/* start tab2- פרטי דוח*/}{" "}
          <div className="green_line">
            <a name="report_details">פרטי דוח</a>
          </div>
          <div className="horizontal_box width100">
            {/* start tab2.1   */}
            <div className="generalbox_classic ">
              <div className="generalbox_header">פרטי עבירה</div>
              <div className="horizontal_box width100">
                <div className="width50 margin_left30">
                  <div>
                    <div className="label_form">סוג הדוח:</div>
                    <div className="field_form">
                      {dataItem.new_ParkingFeedT}
                    </div>
                  </div>
                  <div>
                    <div className="label_form">תאור עבירה:</div>
                    <div className="field_form">{dataItem.Vbeln_Des_Kdmat}</div>
                  </div>
                  <div>
                    <div className="label_form">מועד העבירה:</div>
                    <div className="field_form">
                      {dataItem.new_violation_dateTime}
                    </div>
                  </div>

                  <div>
                    <div className="label_form">יום בשבוע של העבירה:</div>
                    <div className="field_form">
                      {dataItem.Des_new_ParkinbDayIntheWeek}
                    </div>
                  </div>
                  <div>
                    <div className="label_form">כתובת עבירה:</div>
                    <div className="field_form">
                      {dataItem.Concat_Address_Violation}
                    </div>
                  </div>
                  <div>
                    <div className="label_form">אזור העבירה:</div>
                    <div className="field_form">
                      {dataItem.new_Parking_Area}
                    </div>
                  </div>
                </div>
                <div className="width50">
                  <div>
                    <div className="label_form">אזור העבירה מיוחד:</div>
                    <div className="field_form">
                      {dataItem.new_ParkingTicketSpecialArea}
                    </div>
                  </div>
                  <div>
                    <div className="label_form">ימים מתאריך העבירה:</div>
                    <div className="field_form">
                      {dataItem.Vbeln_Days_From_Prsdt}
                    </div>
                  </div>
                  <div>
                    <div className="label_form">שם פקח:</div>
                    <div className="field_form">{dataItem.new_inspector}</div>
                  </div>
                  <div>
                    <div className="label_form">הערות פקח 1:</div>
                    <div className="field_form">
                      {dataItem.new_ParkingInspectorNotes1}
                    </div>
                  </div>
                  <div>
                    <div className="label_form">הערות פקח 2:</div>
                    <div className="field_form">
                      {dataItem.new_ParkingInspectorNotes2}
                    </div>
                  </div>
                  <div>
                    <div className="label_form">הערות פקח 3:</div>
                    <div className="field_form">
                      {dataItem.new_ParkingInspectorNotes3}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end tab2.1*/}
            {/* start tab2.2   */}
            <div className="generalbox_classic ">
              <div className="generalbox_header">סטטוס הדוח</div>
              <div className="horizontal_box width100">
                <div className="width50 margin_left30">
                  <div>
                    <div className="label_form">
                      תאריך עדכון אחרון של סטטוס הדוח :
                    </div>
                    <div className="field_form">
                      {dataItem.Vbeln_Last_Status_Update_Date}
                    </div>
                  </div>
                  <div>
                    <div className="label_form">תאריך ביטול הדוח:</div>
                    <div className="field_form">
                      {dataItem.new_CancelationDate}
                    </div>
                  </div>
                  <div>
                    <div className="label_form">תאריך העברה לבית משפט:</div>
                    <div className="field_form">
                      {dataItem.new_CourtTransferDate}
                    </div>
                  </div>
                  <div>
                    <div className="label_form">
                      בקשה/תביעה לבית משפט פתוחה:
                    </div>
                    <div className="field_form">
                      {dataItem.Vbeln_Ind_Open_Court_Inc}
                    </div>
                  </div>
                  <div>
                    <div className="label_form">
                      בקשה/תביעה לבית משפט סגורה:
                    </div>
                    <div className="field_form">
                      {dataItem.Vbeln_Ind_Closed_Court_Inc}
                    </div>
                  </div>
                </div>
                <div className="width50">
                  <div>
                    <div className="label_form">ממתין לפסילה:</div>
                    <div className="field_form">
                      {dataItem.new_ParkingWaitForInvalid2}
                    </div>
                  </div>
                  <div>
                    <div className="label_form">תאריך העברה לפסילה:</div>
                    <div className="field_form">
                      {dataItem.new_ParkingInvalidationDate}
                    </div>
                  </div>
                  <div>
                    <div className="label_form">סטטוס פורום פסילות:</div>
                    <div className="field_form">
                      {dataItem.new_ParkingEssence}
                    </div>
                  </div>
                  <div>
                    <div className="label_form">
                      פורום פסילות - תאריך עדכון אחרון:
                    </div>
                    <div className="field_form">
                      {dataItem.Vbeln_Forum_Psilot_DT_Last_UpdateDate}
                    </div>
                  </div>
                  <div>
                    <div className="label_form">
                      סיבת דחיית החיוב / משלוח ההודעה:
                    </div>
                    <div className="field_form">{dataItem.Vbeln_Des_Abgru}</div>
                  </div>
                </div>
              </div>
            </div>
            {/* end tab2.2*/}
          </div>
        </div>{" "}
        {/* end tab2- פרטי דוח*/}
        <div>
          {" "}
          {/* start tab3- הודעת תשלום והסבה*/}{" "}
          <div className="green_line">הודעת תשלום והסבה</div>
          <div className="horizontal_box width100">
            {/* start tab3.1   */}
            <div className="generalbox_classic ">
              <div className="generalbox_header">פרטי הודעה</div>
              <div className="horizontal_box width100">
                <div className="width50 margin_left30">
                  <div>
                    <div className="label_form">תאריך הדפסת הודעת התשלום:</div>
                    <div className="field_form">
                      {dataItem.new_ParkingPrintDate}
                    </div>
                  </div>
                  <div>
                    <div className="label_form">
                      תאריך משלוח הודעה לתשלום בדואר רשום:
                    </div>
                    <div className="field_form">
                      {dataItem.new_hodaat_tashlum_SendDate}
                    </div>
                  </div>

                  <div>
                    <div className="label_form">תאריך הודעת תשלום:</div>
                    <div className="field_form">
                      {dataItem.new_ParkingLastPostDate}
                    </div>
                  </div>
                  <div>
                    <div className="label_form">תאריך אחרון לתשלום בהודעה:</div>
                    <div className="field_form">
                      {dataItem.new_PaymentToDate}
                    </div>
                  </div>
                  <div>
                    <div className="label_form">
                      תאריך דחייה/הארכת המועד לתשלום:
                    </div>
                    <div className="field_form">
                      {dataItem.new_speicifed_date}
                    </div>
                  </div>
                  <div>
                    <div className="label_form">כתובת משלוח ההודעה:</div>
                    <div className="field_form">
                      {dataItem.new_ParkingShippingAddres}
                    </div>
                  </div>
                  <div>
                    <div className="label_form">מייל משלוח הודעה לתייר:</div>
                    <div className="field_form">
                      {dataItem.new_tourparkingmail}
                    </div>
                  </div>
                </div>
                <div className="width50">
                  <div>
                    <div className="label_form">חיווי מהדואר:</div>
                    <div className="field_form">
                      {dataItem.new_ParkingReasonReturnMail}
                    </div>
                  </div>
                  <div>
                    <div className="label_form">RR ברקוד דואר רשום:</div>
                    <div className="field_form">{dataItem.new_ParkingRR}</div>
                  </div>
                  <div>
                    <div className="label_form">
                      היסטוריית חיווי דואר חוזר - לזהות בעל הדוח:
                    </div>
                    <div className="field_form">
                      {dataItem.Note_Ind_Notes_Ever_Received}
                    </div>
                  </div>
                  <div>
                    <div className="label_form">כמות חיווי דואר חוזר:</div>
                    <div className="field_form">
                      {dataItem.DES_CNT_EVER_NOT_RECEIVED}
                    </div>
                  </div>
                  <div>
                    <div className="label_form">כמות חיווי לא נדרש:</div>
                    <div className="field_form">
                      {dataItem.DES_CNT_Ind_Lo_nidrash}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end tab3.1*/}
            {/* start tab3.2   */}
            <div className="generalbox_classic ">
              <div className="generalbox_header">פרטי הסבה</div>
              <div className="horizontal_box width100">
                <div className="width50 margin_left30">
                  <div>
                    <div className="label_form">דחיפות נצ / נתצ להסבה:</div>
                    <div className="field_form">
                      {dataItem.new_z_Urgency_for_conversion}
                    </div>
                  </div>
                  <div>
                    <div className="label_form">
                      תאריך התיישנות משוער - מחוג:
                    </div>
                    <div className="field_form">
                      {dataItem.new_ParkingAgingDate}
                    </div>
                  </div>
                  <div>
                    <div className="label_form">מוסב אל :</div>
                    <div className="field_form">
                      {dataItem.new_z_parkingconversiontocustomer_name}
                    </div>
                  </div>
                  <div>
                    <div className="label_form">מספר הסבות שבוצעו:</div>
                    <div className="field_form">
                      {dataItem.new_ParkingConversionNum}
                    </div>
                  </div>
                  <div>
                    <div className="label_form">תאריך ההסבה האחרונה:</div>
                    <div className="field_form">
                      {dataItem.new_ParkingLastConversion}
                    </div>
                  </div>
                  <div>
                    <div className="label_form">בעלים קודם:</div>
                    <div className="field_form">
                      {dataItem.Prev_Report_Holder}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end tab3.2*/}
          </div>
        </div>{" "}
        {/* end tab3- הודעת תשלום והסבה*/}
        <div>
          {" "}
          {/* start tab7- תווי חנייה*/}{" "}
          <div className="green_line">תווי חנייה</div>
          <div className="horizontal_box width100">
            {/* start tab7.1   */}
            <div className="generalbox_classic ">
              <div className="generalbox_header">תו לרכב</div>
              <div className="horizontal_box width100 ">
                <div>
                  <div>
                    <div className="label_form">לרכב תו במועד העבירה:</div>
                    <div className="field_form">
                      {dataItem.Qmnum_Des_Permit_Plate_Valid}
                    </div>
                  </div>
                  <div>
                    <div className="label_form">
                      לרכב הונפק תו תוך 60 ימים ממועד הדוח:
                    </div>
                    <div className="field_form">
                      {dataItem.Qmnum_Des_Permit_Plate_Valid_UP_to_60}
                    </div>
                  </div>
                  <div>
                    <div className="label_form">
                      לרכב הונפק תו מעבר ל-61 ימים ממועד הדוח:
                    </div>
                    <div className="field_form">
                      {dataItem.Qmnum_Des_Permit_Plate_Valid_Above_60}
                    </div>
                  </div>
                  <div>
                    <div className="label_form">
                      מס ימים ממועד הדוח עד הנפקת התו לרכב וגם אזור תו:
                    </div>
                    <div className="field_form">
                      {dataItem.Qmnum_Plate_days_diff_Area_Start}
                    </div>
                  </div>
                  <div>
                    <div className="label_form">
                      מס ימים ממועד ביטול התו לרכב ועד תאריך הדוח וגם אזור תו
                      שבוטל:
                    </div>
                    <div className="field_form">
                      {dataItem.Qmnum_Plate_days_diff_Area_Cancellation}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end tab7.1*/}
            {/* start tab7.2   */}
            <div className="generalbox_classic ">
              <div className="generalbox_header">תו לזהות</div>
              <div className="horizontal_box width100">
                <div>
                  <div>
                    <div className="label_form">לזהות תו במועד העבירה:</div>
                    <div className="field_form">
                      {dataItem.Qmnum_Des_Permit_Partner_Valid}
                    </div>
                  </div>
                  <div>
                    <div className="label_form">
                      לזהות הונפק תו תוך 60 ימים ממועד הדוח:
                    </div>
                    <div className="field_form">
                      {dataItem.Qmnum_Des_Permit_Partner_Valid_Up_to_60}
                    </div>
                  </div>
                  <div>
                    <div className="label_form">
                      לזהות הונפק תו מעבר ל-61 ימים ממועד הדוח:
                    </div>
                    <div className="field_form">
                      {dataItem.Qmnum_Des_Permit_Partner_Valid_Above_60}
                    </div>
                  </div>
                  <div>
                    <div className="label_form">
                      מס ימים ממועד הדוח עד הנפקת התו לזהות וגם אזור תו:
                    </div>
                    <div className="field_form">
                      {dataItem.Qmnum_Partner_days_diff_Area_Start}
                    </div>
                  </div>
                  <div>
                    <div className="label_form">
                      מס ימים ממועד ביטול התו לזהות ועד תאריך הדוח וגם אזור תו
                      שבוטל:
                    </div>
                    <div className="field_form">
                      {dataItem.Qmnum_Partner_days_diff_Area_Cancellation}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end tab7.1*/}
          </div>
          {/*row גריד תווי חנייה */}
          <div className="horizontal_box width100 ">
            <div className="generalbox_classic ">
              <div className="generalbox_header">תווי חנייה לרכב</div>
              <div className="horizontal_box width100  margin_bottom25">
                <SubGridComponent
                  maxWidth={"500px"}
                  data={gridData.TicketPermitList}
                  columns={columns_ticketpermit}
                ></SubGridComponent>
              </div>{" "}
            </div>
            <div className="generalbox_classic">
              <div className="generalbox_header">תווי חנייה לזהות</div>
              <div className="horizontal_box width100  margin_bottom25">
                <SubGridComponent
                  maxWidth={"500px"}
                  data={gridData.TicketPermitCustomerIdList}
                  columns={columns_ticketpermit}
                ></SubGridComponent>
              </div>{" "}
            </div>
          </div>
          {/*row גריד*/}
        </div>{" "}
        {/* end tab7- תווי חנייה*/}
        <div>
          {" "}
          {/* start tab4- פרטי רכב*/} <div className="green_line">פרטי רכב</div>
          <div>
            <div className="horizontal_box width100">
              {/* start tab4.1   */}
              <div className="generalbox_classic">
                <div className="generalbox_header">תג נכה</div>
                <div className="horizontal_box width100">
                  <div className="width50 margin_left30">
                    <div>
                      <div className="label_form">תו נכה</div>
                      <div className="field_form">
                        {dataItem.Des_Disable_Type}
                      </div>
                    </div>
                  </div>
                  <div className="width50">
                    <div>
                      <div className="label_form">תג נכה לרכב - תוקף </div>
                      <div className="field_form">
                        {dataItem.TXT_DIS_FROM_TO}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="width100 margin_top50">
                  <div className="generalbox_header">טבלת נכים</div>
                  <div className="horizontal_box width100">
                    <SubGridComponent
                      maxWidth={"100%"}
                      data={gridData.DisabledList}
                      columns={columns_disabled}
                    ></SubGridComponent>
                  </div>
                </div>
              </div>
              {/* end tab4.1*/}
              {/* start tab4.2   */}
              <div className="generalbox_classic ">
                <div className="generalbox_header">מורשה נתצ</div>
                <div className="horizontal_box width100">
                  <div className="width50 margin_left30">
                    <div>
                      <div className="label_form">מורשה נתצ</div>
                      <div className="field_form">
                        {dataItem.Inc_NN_Enable_Des_Type}
                      </div>
                    </div>
                  </div>
                  <div className="width50">
                    <div>
                      <div className="label_form">רכב מורשה נת"צ - תוקף</div>
                      <div className="field_form">
                        {dataItem.TXT_NN_FROM_TO}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="width100 margin_top50">
                  <div className="generalbox_header">טבלת מורשה נת"צ</div>
                  <div className="horizontal_box width100">
                    <SubGridComponent
                      data={gridData.NatazPermissionsList}
                      columns={columns_nataz}
                    ></SubGridComponent>
                  </div>
                </div>
              </div>
              {/* end tab4.2*/}
            </div>
            <div className="horizontal_box width100">
              {/* start tab4.3   */}
              <div className="generalbox_classic ">
                <div className="generalbox_header">רכב</div>
                <div className="horizontal_box width100">
                  <div className="width50 margin_left30">
                    <div>
                      <div className="label_form">
                        אינדיקציה לשינוי מספר רכב:
                      </div>
                      <div className="field_form">
                        {dataItem.Car_Ind_Plate_Chagned}
                      </div>
                    </div>
                    <div>
                      <div className="label_form">מספר רכב מקורי:</div>
                      <div className="field_form">
                        {dataItem.Car_Des_Car_Original_Plate}
                      </div>
                    </div>
                    <div>
                      <div className="label_form">סוג רכב:</div>
                      <div className="field_form">
                        {dataItem.Car_Des_CarType}
                      </div>
                    </div>
                    <div>
                      <div className="label_form">סוג רכב מיוחד:</div>
                      <div className="field_form">
                        {dataItem.Car_Des_Special_CarType}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end tab4.3*/}
              {/* start tab4.4   */}
              <div className="generalbox_classic ">
                <div className="generalbox_header">חיווי חריג</div>
                <div className="horizontal_box width100">
                  <div className="width50 margin_left30">
                    <div>
                      <div className="label_form">
                        שונות בין פקח למשרד הרישוי:
                      </div>
                      <div className="field_form">
                        {dataItem.Wait_For_Fix_Diff_Inspector_and_ZrishID}
                      </div>
                    </div>
                    <div>
                      <div className="label_form">תיאור החיווי:</div>
                      <div className="field_form">
                        {dataItem.new_ParkingErrorReason}
                      </div>
                    </div>
                    <div>
                      <div className="label_form">תאריך החיווי:</div>
                      <div className="field_form">
                        {dataItem.new_ParkingWaitForFixDate}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end tab4.4*/}
            </div>
          </div>
          {/*row גריד בעלי רכב */}
          <div className="generalbox_classic generalbox_classic_table">
            <div className="generalbox_header">בעלים נוספים לרכב</div>
            <div className="horizontal_box width100 margin_bottom25">
              <SubGridComponent
                maxWidth={"100%"}
                data={gridData.CarOwnerList}
                columns={columns_carowner}
              ></SubGridComponent>
            </div>
          </div>
        </div>{" "}
        {/* end tab4- פרטי רכב*/}
        <div>
          {" "}
          {/* start tab5- אכיפה*/} <div className="green_line">אכיפה</div>
          <div className="horizontal_box width100">
            {/* start tab5.1   */}
            <div className="generalbox_classic ">
              <div className="generalbox_header">פרטי אכיפה</div>
              <div className="horizontal_box width100">
                <div className="width50 margin_left30">
                  <div>
                    <div className="label_form">
                      אינדיקציה לתוספת פיגור לדוח בפניה:
                    </div>
                    <div className="field_form">
                      {dataItem.Acifa_Des_Acifa_PK_Relevant}
                    </div>
                  </div>
                  <div>
                    <div className="label_form">
                      סטטוס ושלב אכיפה בעת קבלת הפניה :
                    </div>
                    <div className="field_form">
                      {dataItem.new_ParkingEnforcement}
                    </div>
                  </div>
                  <div>
                    <div className="label_form">
                      סטטוס אכיפה (שלב אכיפה אחרון):
                    </div>
                    <div className="field_form">
                      {" "}
                      {dataItem.Acifa_Des_Current_ReportStatus}
                    </div>
                  </div>
                  <div>
                    <div className="label_form">
                      אינדיקציה לפיגורים או אכיפה של דוחות אחרים לזהות :
                    </div>
                    <div className="field_form">
                      {dataItem.Acida_Des_Ind_PK_Reports}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end tab5.1*/}
            {/* start tab5.2   */}
            <div className="generalbox_classic ">
              <div className="generalbox_header">דרישת תשלום</div>
              <div className="horizontal_box width100">
                <div className="width50 margin_left30">
                  <div>
                    <div className="label_form">
                      אינדיקציה למשלוח דרישת לתשלום:
                    </div>
                    <div className="field_form">
                      {dataItem.Acifa_Drisha_Ind_Sent}
                    </div>
                  </div>
                  <div>
                    <div className="label_form">סוג הדרישה שנשלחה:</div>
                    <div className="field_form">
                      {dataItem.Acifa_Drisha_Des_SendType}
                    </div>
                  </div>
                  <div>
                    <div className="label_form">תאריך הדפסת דרישה:</div>
                    <div className="field_form">
                      {dataItem.Acifa_Drisha_DT_PrintDate}
                    </div>
                  </div>
                  <div>
                    <div className="label_form">
                      תאריך משלוח דרישה בדואר רשום:
                    </div>
                    <div className="field_form">
                      {dataItem.Acifa_Drisha_DT_ApprovalDate}
                    </div>
                  </div>
                </div>
                <div className="width50">
                  <div>
                    <div className="label_form">כתובת למשלוח דרישה לתשלום:</div>
                    <div className="field_form">
                      {dataItem.Acifa_Drisha_Des_Address}
                    </div>
                  </div>

                  <div>
                    <div className="label_form">ברקוד דרישה לתשלום RR :</div>
                    <div className="field_form">
                      {dataItem.Acifa_Drisha_RR_Barcode}
                    </div>
                  </div>
                  <div>
                    <div className="label_form">חיווי מהדואר:</div>
                    <div className="field_form">
                      {dataItem.Acifa_Drisha_Des_AnswerReason}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end tab5.5*/}
          </div>
        </div>{" "}
        {/* end tab5- אכיפה*/}
        <div>
          {" "}
          {/* start tab6- פרטי תשלום*/}{" "}
          <div className="green_line">פרטי תשלום</div>
          <div className="horizontal_box width100">
            {/* start tab6.1   */}
            <div className="generalbox_classic ">
              <div className="generalbox_header">מצב תשלום עדכני</div>
              <div className="horizontal_box width100">
                <div className="width50 margin_left30">
                  <div>
                    <div className="label_form">קנס מקורי:</div>
                    <div className="field_form">
                      {dataItem.new_original_amount}
                    </div>
                  </div>
                  <div>
                    <div className="label_form">תוספות:</div>
                    <div className="field_form">
                      {dataItem.new_ParkingArrears}
                    </div>
                  </div>
                  <div>
                    <div className="label_form">יתרה לתשלום:</div>
                    <div className="field_form">{dataItem.Balance}</div>
                  </div>
                  <div>
                    <div className="label_form">סך הכל שולם:</div>
                    <div className="field_form">{dataItem.TotalPaid}</div>
                  </div>
                  <div>
                    <div className="label_form">אופן תשלום:</div>
                    <div className="field_form">{dataItem.PayType}</div>
                  </div>
                </div>
                <div className="width50">
                  <div>
                    <div className="label_form">סכום קיזוז:</div>
                    <div className="field_form">{dataItem.new_Deduction}</div>
                  </div>
                  <div>
                    <div className="label_form">תאריך קיזוז אחרון:</div>
                    <div className="field_form">
                      {dataItem.Finance_DT_Kizuz}
                    </div>
                  </div>
                  <div>
                    <div className="label_form">תאריך העברה אחרון:</div>
                    <div className="field_form">
                      {dataItem.Finance_DT_Transfer}
                    </div>
                  </div>
                  <div>
                    <div className="label_form">העברה בין חשבונות:</div>
                    <div className="field_form">
                      {dataItem.new_AccountsTransfer}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end tab6.1*/}
            {/* start tab6.2   */}
            <div className="generalbox_classic ">
              <div className="generalbox_header">פרטי תשלום נוספים</div>
              <div className="horizontal_box width100">
                <div className="width50 margin_left30">
                  <div>
                    <div className="label_form">תאריך התוספת הקרובה:</div>
                    <div className="field_form">
                      {dataItem.new_ArrearsToDate}
                    </div>
                  </div>
                  <div>
                    <div className="label_form">אחוז התוספת הקרובה:</div>
                    <div className="field_form">{dataItem.new_ZfineRate}</div>
                  </div>
                  <div>
                    <div className="label_form">שיעור הפחתה:</div>
                    <div className="field_form">{dataItem.Reduction_Rate}</div>
                  </div>
                  <div>
                    <div className="label_form">תאריך סיום הפחתה:</div>
                    <div className="field_form">
                      {dataItem.new_ParkingEndReductionDate}
                    </div>
                  </div>
                </div>
                <div className="width50">
                  <div>
                    <div className="label_form">הסדר תשלום:</div>
                    <div className="field_form">
                      {dataItem.new_ParkingInstallmentPlan}
                    </div>
                  </div>
                  <div>
                    <div className="label_form">הסדר לדוח:</div>
                    <div className="field_form">
                      {dataItem.Finance_InstallmentPlan_Ind}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end tab6.2*/}
          </div>
          {/*row גריד  פרטי תשלום */}
          <div className="generalbox_classic generalbox_classic_table">
            <div className="generalbox_header">פרטי תשלום</div>
            <div className="horizontal_box width100 margin_bottom25">
              <SubGridComponent
                maxWidth={"100%"}
                data={gridData.PaymentDetailsList}
                columns={columns_paymentdetails}
              ></SubGridComponent>
            </div>
          </div>
          {/*row גריד*/}
        </div>{" "}
        {/* end tab6- פרטי תשלום*/}
        <div>
          {" "}
          {/* start tab8- פרטים נוספים*/}{" "}
          <div className="green_line">פרטים נוספים</div>
          <div className="horizontal_box width100">
            {/* start tab8.1   */}
            <div className="generalbox_classic ">
              <div className="generalbox_header">פרטי פניה</div>
              <div className="horizontal_box width100">
                <div className="width50 margin_left30">
                  <div>
                    <div className="label_form">סטטוס הפנייה:</div>
                    <div className="field_form">
                      {dataItem.Inc_Des_StatusCode}
                    </div>
                  </div>
                  <div>
                    <div className="label_form">תאריך יצירת הפנייה:</div>
                    <div className="field_form">{dataItem.Inc_CreateDate}</div>
                  </div>
                  <div>
                    <div className="label_form">מספר הודעת שירות מחוג:</div>
                    <div className="field_form">
                      {dataItem.new_Parking_ServiceNotification}
                    </div>
                  </div>
                  <div>
                    <div className="label_form">
                      מספר ימים בין עבירה לתאריך פניה:
                    </div>
                    <div className="field_form">
                      {dataItem.Inc_Days_From_Prsdt}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end tab8.1*/}
            {/* start tab8.2   */}
            <div className="generalbox_classic ">
              <div className="generalbox_header">הודעת תשלום</div>
              <div className="horizontal_box width100">
                <div className="width50 margin_left30">
                  <div>
                    <div className="label_form">הודעת תשלום - מספר שובר:</div>
                    <div className="field_form">{dataItem.Note_Nrzas}</div>
                  </div>
                  <div>
                    <div className="label_form">
                      הודעת תשלום - אינדיקציה למסירה לנמען:
                    </div>
                    <div className="field_form">
                      {dataItem.Note_Ind_Note_Recived}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end tab8.2*/}
          </div>
        </div>{" "}
        {/* end tab8- פרטים נוספים*/}
        <div>
          {" "}
          {/* start tab9- מדדים*/} <div className="green_line">מדדים</div>
          <div className="horizontal_box width100">
            {/* start tab9.1   */}
            <div className="generalbox_classic ">
              <div className="generalbox_header">מדדים דוחות</div>
              <div className="horizontal_box width100">
                <div className="width50 margin_left30">
                  <div>
                    <div className="label_form">
                      כמות מאגדות פתוחות בהן הדוח קיים בתור תובעים:
                    </div>
                    <div className="field_form">
                      {dataItem.Vbeln_Cnt_AggadicInc_Proc_Open}
                    </div>
                  </div>
                  <div>
                    <div className="label_form">
                      כמות מאגדות פתוחות בהן הדוח קיים:
                    </div>
                    <div className="field_form">
                      {dataItem.Vbeln_Cnt_AggadicInc_Open}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end tab9.1*/}
            {/* start tab9.2   */}
            <div className="generalbox_classic ">
              <div className="generalbox_header">מדדים פנייה</div>
              <div className="horizontal_box width100">
                <div className="width50 margin_left30">
                  <div>
                    <div className="label_form">כמות פניות בת במאגדת:</div>
                    <div className="field_form">
                      {dataItem.new_z_sum_sub_incident_To_incident}
                    </div>
                  </div>
                  <div>
                    <div className="label_form">
                      כמות פניות בת פתוחות במאגדת:
                    </div>
                    <div className="field_form">
                      {dataItem.new_z_sum_sub_incident_open_To_incident}
                    </div>
                  </div>
                  <div>
                    <div className="label_form">
                      כמות מאגדות פתוחות לפונה בתור תובעים:
                    </div>
                    <div className="field_form">
                      {dataItem.Customer_Cnt_Open_Aggadic_Proc}
                    </div>
                  </div>
                  <div>
                    <div className="label_form">כמות מאגדות לפונה:</div>
                    <div className="field_form">
                      {dataItem.Customer_Cnt_Total_Aggadic}
                    </div>
                  </div>
                  <div>
                    <div className="label_form">כמות מאגדות פתוחות לפונה:</div>
                    <div className="field_form">
                      {dataItem.Customer_Cnt_Open_Aggadic}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end tab9.2*/}
          </div>
        </div>{" "}
        {/* end tab9- מדדים*/}
      </div>

      {/* end scrollForm   */}
    </div>
  );
};

export default IncidentDetails;
