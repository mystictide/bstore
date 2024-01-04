export default function Book({ data }) {
  return (
    <>
      {data.volumeInfo ? (
        <a
          className="book-preview"
          aria-label={data.volumeInfo.title}
          href={`/bstore/#/details/${data.volumeInfo.industryIdentifiers[0].identifier}`}
          key={data.volumeInfo.industryIdentifiers[0].identifier}
        >
          <div className="flex-column">
            <div className="info flex-column">
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
              <h6>by {data.volumeInfo.authors?.join(", ")}</h6>
            </div>
          </div>
        </a>
      ) : (
        ""
      )}
    </>
  );
}
