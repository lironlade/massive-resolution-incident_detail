import {
  Grid,
  GridColumn as Column,
  getSelectedState,
  GridColumnMenuWrapper,
} from "@progress/kendo-react-grid";
import {
  IntlProvider,
  load,
  LocalizationProvider,
  loadMessages,
} from "@progress/kendo-react-intl";
import heMessages from "../he.json";

const NumberCell = (props) => {
  return <td style={{ textAlign: "center" }}>{props.dataItem[props.field]}</td>;
};

const NameHeader = (props) => {
  return (
    <td
      title={props.tooltip ? props.tooltip : props.title}
      style={{ textAlign: "center", whiteSpace: "normal" }}
    >
      {props.title}
    </td>
  );
};

const SubGridComponent = (params) => {
  loadMessages(heMessages, "he-HE");

  return (
    <div dir="rtl" className="k-rtl">
      <LocalizationProvider language="he-HE">
        <IntlProvider locale="he">
          <Grid
            style={{
              height: "250px",
              width: params.maxWidth,
            }}
            data={params.data}
          >
            {params.columns.map((col, idx) => (
              <Column
                field={col.field}
                title={col.title}
                width={col.width}
                filter={col.filter}
                format={col.format}
                cell={NumberCell}
                headerCell={NameHeader}
              ></Column>
            ))}
          </Grid>{" "}
        </IntlProvider>
      </LocalizationProvider>
    </div>
  );
};

export default SubGridComponent;
