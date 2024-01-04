
export default function Book({ data }) {
  return (
    <div className="book-preview flex-column">
      <div className="info flex-column">
        {console.log(data)}
        {data.volumeInfo.imageLinks ? (
          <img
            loading="lazy"
            alt={data.title}
            src={data.volumeInfo.imageLinks.smallThumbnail}
          />
        ) : (
            <img
            loading="lazy"
            alt={data.volumeInfo.title}
            src="/img404.jpg"
          />
        )}
        <h5>{data.volumeInfo.title}</h5>
        <h6>by {data.volumeInfo.authors[0]}</h6>
      </div>
    </div>
  );
}
