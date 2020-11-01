import React, { Fragment } from "react";

interface PageButtonProps {
  currentPage: number;
  totalPages: number;
  onChange: (page: number) => void;
}

const PageButton: React.FC<PageButtonProps> = ({
  currentPage,
  totalPages,
  onChange,
}) => {
  // NextPage
  const setNext = () => {
    if (currentPage < totalPages) {
      onChange(currentPage + 1);
    }
  };

  // LastPage
  const setUp = () => {
    if (currentPage > 1) {
      onChange(currentPage - 1);
    }
  };

  // FinalPage
  const setLast = () => {
    if (currentPage !== totalPages) {
      onChange(totalPages);
    }
  };

  // FirstPage
  const setFirst = () => {
    if (currentPage !== 1) {
      onChange(1);
    }
  };

  const setThis = (page: number) => {
    onChange(page);
  };

  // Last Few Pages
  const showLastFew = () => {
    if (currentPage >= 4) {
      //show only last 2
      return (
        <Fragment>
          <button
            onClick={() => {
              setThis(currentPage - 2);
            }}
          >
            {currentPage - 2}
          </button>
          <button
            onClick={() => {
              setThis(currentPage - 1);
            }}
          >
            {currentPage - 1}
          </button>
        </Fragment>
      );
    } else {
      //show all
      const allLastFew = [];
      for (let i = 1; i < currentPage; i++) {
        allLastFew.push(
          <button
            onClick={() => {
              setThis(i);
            }}
          >
            {i}
          </button>
        );
      }
      return allLastFew;
    }
  };

  // Next Few Pages
  const showNextFew = () => {
    if (currentPage + 2 < totalPages) {
      //show only next 2
      return (
        <Fragment>
          <button
            onClick={() => {
              setThis(currentPage + 1);
            }}
          >
            {currentPage + 1}
          </button>
          <button
            onClick={() => {
              setThis(currentPage + 2);
            }}
          >
            {currentPage + 2}
          </button>
        </Fragment>
      );
    } else {
      //show all
      const allNextFew = [];
      for (let i = currentPage + 1; i <= totalPages; i++) {
        allNextFew.push(
          <button
            onClick={() => {
              setThis(i);
            }}
          >
            {i}
          </button>
        );
      }
      return allNextFew;
    }
  };

  // Searching haven't started
  if (totalPages === 0) {
    return <Fragment />;
  }
  // There are in total 1 page
  else if (currentPage === 1 && totalPages === 1) {
    return (
      <div className="page-group">
        <button className="btn-active">{currentPage}</button>
      </div>
    );
  }
  // There are more than 1 page, and currently at 1st page
  else if (currentPage === 1) {
    return (
      <div className="page-group">
        <button className="btn-active">{currentPage}</button>
        {showNextFew()}
        <button onClick={setNext}>&gt;</button>
        <button onClick={setLast}>&gt;&gt;</button>
      </div>
    );
  }
  // There are more than 1 page, and currently at the last page
  else if (currentPage === totalPages) {
    return (
      <div className="page-group">
        <button onClick={setFirst}>&lt;&lt;</button>
        <button onClick={setUp}>&lt;</button>
        {showLastFew()}
        <button className="btn-active">{currentPage}</button>
      </div>
    );
  }
  // There are more than 1 page, and currently in the middle
  else {
    return (
      <div className="page-group">
        <button onClick={setFirst}>&lt;&lt;</button>
        <button onClick={setUp}>&lt;</button>
        {showLastFew()}
        <button className="btn-active">{currentPage}</button>
        {showNextFew()}
        <button onClick={setNext}>&gt;</button>
        <button onClick={setLast}>&gt;&gt;</button>
      </div>
    );
  }
};
export default PageButton;
