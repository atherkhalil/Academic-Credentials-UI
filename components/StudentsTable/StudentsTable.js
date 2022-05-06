import React from "react";
import { Table } from "reactstrap";
import Switch from "react-switch";
import EmptyData from "../general/EmptyData.js";

const StudentsTable = ({
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
          <th>Name</th>
          <th>DOB</th>
          <th>Email</th>
          <th>Telephone no.</th>
          <th>Country</th>
          <th>City</th>
          <th>Is Verified</th>
          <th>Joined</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {issuerList?.map((row, index) => (
          <tr>
            <th scope="row">{index + 1}</th>
            <td>{row.type}</td>
            <td>{row.adminEmail}</td>
            <td>{row.name}</td>
            <td>{row.name}</td>
            <td>{row.name}</td>
            <td>{row.name}</td>
            <td>{row.telephone}</td>
            <td>{row.approved ? "Approved" : "Pending"}</td>
            <td>
              <Switch
                onChange={() =>
                  _handleActivateIssuer(row.id, row.approved, index)
                }
                checked={row.approved}
              />
            </td>
          </tr>
        ))}
        <tr className="text-center">
          <td colspan="10">
            {issuerList?.length == 0 && <EmptyData />}
          </td>
        </tr>
      </tbody>
    </Table>
    </>
  );
};

StudentsTable.args = {
  bordered: false,
  borderless: false,
  dark: false,
  hover: false,
  responsive: false,
  striped: false,
};

StudentsTable.argTypes = {
  size: {
    control: { type: "select" },
    options: ["", "sm"],
  },
};

export default StudentsTable;
