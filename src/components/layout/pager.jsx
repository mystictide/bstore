export default function Pager({ totalItems, startIndex, setStartIndex }) {
  return (
    <div className="pager full-width">
      <h5 className="pager-info">
        found {totalItems} items, currently on page {startIndex + 1}
      </h5>
      
      <ul className="flex-row h-list">
        {startIndex > 0 ? (
          <li className="pager-item">
            <button
              className="pager-button"
              onClick={() => setStartIndex(startIndex - 15)}
            >
              Previous Page
            </button>
          </li>
        ) : (
          ""
        )}
        {startIndex === totalItems ? (
          ""
        ) : (
          <li className="pager-item">
            <button
              className="pager-button"
              onClick={() => setStartIndex(startIndex + 15)}
            >
              Next Page
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}
