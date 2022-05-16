import React from "react";
import { Table } from "reactstrap";
import Switch from "react-switch";
import EmptyData from "../general/EmptyData.js";
import Link from "next/link";
import moment from "moment";

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
          <th>Gender</th>
          <th>Is Verified</th>
          <th>Joined</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {issuerList?.map((row, index) => (
          <tr>
            <th scope="row">{index + 1}</th>
            <td>{`${row.firstName} ${row.lastName}`}</td>
            <td>{moment(parseInt(row.dob)).format("DD:MM:YYYY")}</td>
            <td>{row.email}</td>
            <td>{row.telephone}</td>
            <td>{row.gender}</td>
            <td>{row.isVerified ? "Verified" : "Unverified"}</td>
            <td>{moment(parseInt(row.createdAt)).format("DD:MM:YYYY")}</td>
            <td style={{ fontSize: "24px" }}>
              <Link href={`/issuer/students/${row.id}`}>
                <i class="ri-eye-fill cursor-pointer"></i>
              </Link>
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
