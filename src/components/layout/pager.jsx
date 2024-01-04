export default function Pager({
  currentPage,
  setCurrentPage,
  startIndex,
  setStartIndex,
  totalItems,
}) {
  const totalPages = Math.ceil(totalItems / 15);

  const prevPage = async () => {
    setCurrentPage(currentPage - 1);
    setStartIndex(startIndex - 15);
  };

  const nextPage = async () => {
    setCurrentPage(currentPage + 1);
    setStartIndex(startIndex + 15);
  };

  return (
    <div className="pager full-width">
      <h5 className="pager-info">
        found {totalItems} items, currently on page {currentPage}
      </h5>
      <ul className="flex-row h-list">
        {startIndex > 0 ? (
          <li className="pager-item">
            <button className="pager-button" onClick={() => prevPage()}>
              Previous Page
            </button>
          </li>
        ) : (
          ""
        )}
        {currentPage === totalPages ? (
          ""
        ) : (
          <li className="pager-item">
            <button className="pager-button" onClick={() => nextPage()}>
              Next Page
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}
