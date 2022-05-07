import React from "react";
import { Table } from "reactstrap";
import Switch from "react-switch";
import EmptyData from "../general/EmptyData.js";
import Link from "next/link";

const AccreditedInstitutesTable = ({
  issuerList,
  loading,
  _handleActivateIssuer,
}) => {
  console.log("issuerList: ", issuerList);

  return (
    <>
      <Table responsive={true} bordered={false}>
        <thead>
          <tr>
            <th>#</th>
            <th>Type</th>
            <th>Title</th>
            <th>Description</th>
            <th>Issuance date</th>
            <th>Board</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {issuerList?.map((row, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{row.type}</td>
              <td>{row.title}</td>
              <td>{row.description}</td>
              <td>{row.issuance_date}</td>
              <td>{row.Board}</td>
              <td style={{ fontSize: "24px" }}>
                {/* <Link href="/"> */}
                  <i class="ri-eye-fill cursor-pointer"></i>
                {/* </Link> */}
              </td>
            </tr>
          ))}
          <tr className="text-center">
            <td colspan="7">
              {issuerList?.length == 0 && <EmptyData />}
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

AccreditedInstitutesTable.args = {
  bordered: false,
  borderless: false,
  dark: false,
  hover: false,
  responsive: false,
  striped: false,
};

AccreditedInstitutesTable.argTypes = {
  size: {
    control: { type: "select" },
    options: ["", "sm"],
  },
};

export default AccreditedInstitutesTable;
