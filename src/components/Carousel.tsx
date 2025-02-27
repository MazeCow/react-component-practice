export interface ImageSet {
  key?: string;
  fontClass?: string;
  galleryType?: string;
  imgs: string[];
  alts: string[];
}

const Carousel = (imageSet: ImageSet) => {
  const { imgs, alts } = imageSet;
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-indicators">
        {imgs.map((img: string, index: number) => (
          <button
            key={index}
            type="button"
            className={index == 0 ? "active" : ""}
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={index}
            aria-label={"Slide " + (index + 1)}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {imgs.map((img: string, index: number) => (
          <div
            key={index}
            className={"carousel-item" + (index == 0 ? " active" : "")}
          >
            <img
              src={img + `?${index}`}
              className="d-block w-100"
              alt={alts[index]}
            />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
