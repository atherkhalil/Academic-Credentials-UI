import React from "react";
import { Table } from "reactstrap";
import Switch from "react-switch";
import EmptyData from "../general/EmptyData.js";
import moment from "moment";
import Link from "next/link";
import { downloadCredentialPdf } from "../../services/files.service.js";

const CoursesTable = ({
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
            <th>Level</th>
            <th>Session</th>
            <th>Issuance date</th>
            <th>Expiry date</th>
            <th>Credit Hours</th>
            <th>Faculty</th>
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
              <td>{row.level}</td>
              <td>{row.session}</td>
              <td>{moment(parseInt(row.issuanceDate)).format("DD-MM-YYYY")}</td>
              <td>{moment(parseInt(row.expiryDate)).format("DD-MM-YYYY")}</td>
              <td>{row.creditHours}</td>
              <td>{row.faculty}</td>
              <td style={{ fontSize: "24px" }}>
                <Link href={`/issuer/courses/credentials/detail/${row.id}`}>
                  <i class="ri-eye-fill cursor-pointer"></i>
                </Link>
                <i onClick={() => downloadCredentialPdf(row.credentialUrl)} class="ri-file-download-fill cursor-pointer"></i>
              </td>
            </tr>
          ))}
          <tr className="text-center">
            <td colspan="12">
              {issuerList?.length == 0 && <EmptyData />}
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

CoursesTable.args = {
  bordered: false,
  borderless: false,
  dark: false,
  hover: false,
  responsive: false,
  striped: false,
};

CoursesTable.argTypes = {
  size: {
    control: { type: "select" },
    options: ["", "sm"],
  },
};

export default CoursesTable;
