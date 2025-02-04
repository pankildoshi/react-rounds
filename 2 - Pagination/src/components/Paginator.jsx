import React, { useState } from "react";

const Paginator = ({ items, pageSize, Item }) => {
  const [currentPage, setCurrentPage] = useState(0);
  let pages = items ? parseInt(items.length / pageSize) + 1 : 1;

  const handleChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const prevPage = () => {
    if (currentPage == 0) return;
    setCurrentPage((curr) => curr - 1);
  };

  const nextPage = () => {
    if (currentPage == pages) return;
    setCurrentPage((curr) => curr + 1);
  };

  return (
    <div>
      <button onClick={prevPage} disabled={currentPage == 0}>
        Prev
      </button>
      {Array.from({ length: pages }, (_, index) => (
        <button key={index} onClick={() => handleChange(index)}>
          {index + 1}
        </button>
      ))}
      <button onClick={nextPage} disabled={currentPage == pages - 1}>
        Next
      </button>
      {items.map((item, index) => {
        if (
          index >= currentPage * pageSize &&
          index < (currentPage + 1) * pageSize
        ) {
          return (
            <div key={item.id}>
              {item.id}. {item.title}
            </div>
          );
        }
      })}
    </div>
  );
};

export default Paginator;
