import fallbackImage from "../../assets/img/img404.jpg";

export default function Book({ data, price}) {
  return (
    <>
      {data ? (
        <a
          className="book-preview"
          aria-label={data.title}
          href={`/bstore/#/details/${data.industryIdentifiers[0].identifier}`}
          key={data.industryIdentifiers[0].identifier}
        >
          <div className="flex-column">
            <div className="info flex-column">
              {data.imageLinks?.smallThumbnail ? (
                <img
                  loading="lazy"
                  alt={data.title}
                  src={data.imageLinks.smallThumbnail}
                />
              ) : (
                <img loading="lazy" alt={data.title} src={fallbackImage} />
              )}
              <h5>{data.title}</h5>
              <h6>by {data.authors?.join(", ")}</h6>
              {price ? <h6>{price} TRY</h6> : ""}
            </div>
          </div>
        </a>
      ) : (
        ""
      )}
    </>
  );
}
