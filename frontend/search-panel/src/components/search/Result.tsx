import React, { useState, useEffect } from "react";
//import { useSelector } from "react-redux";
//import { RootState } from "../store/store";
import PageButton from "./PageButton";
import { ExportData } from "../../type.d";
import { Link } from "react-router-dom";

interface ResultProps {
  results: ExportData[];
  count: number;
  label: string;
  option: string;
  setPage: (page: number) => void;
}

const Result: React.FC<ResultProps> = ({
  results,
  count,
  label,
  option,
  setPage,
}) => {
  // All the selected data's id

  // Each page has 10 results
  //const PAGE_SIZE = 10;

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    setTotalPages(Math.ceil(count / 10));
  }, [count]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setPage(page);
  };

  // Data shown in the choosen page, only 10

  const renderedTable =
    results.length === 0
      ? null
      : results.map((res) => {
          return (
            <tr key={res.id}>
              <td>{res.billno}</td>

              <td>
                {" "}
                <Link to={`/product/${res.id}`}>{res.product} </Link>
              </td>

              <td>{res.indiancompany}</td>
              <td>{res.foreigncompany}</td>
            </tr>
          );
        });
  if (totalPages === 0) {
    return null;
  } else if (results.length === 0) {
    return <div>No results found. Set to blury search?</div>;
  }
  return (
    <div className="table-area">
      <h3>
        You have searched: &nbsp;{label} in the {option} category, get {count}{" "}
        results in total.
      </h3>
      <table className="result-table">
        <thead>
          <tr>
            <th>Bill Number</th>

            <th>Product</th>

            <th>Indian Company</th>
            <th>Foreign Company</th>
          </tr>
        </thead>
        <tbody>{renderedTable}</tbody>
      </table>
      <PageButton
        currentPage={currentPage}
        totalPages={totalPages}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default Result;
