export interface ImageSetProps {
  clickHandler: (set: string) => void;
  galleryType: string;
}

const ThemeSwitcher = ({
  clickHandler: setGalleryType,
  galleryType: type,
}: ImageSetProps) => {
  return (
    <div>
      <button
        className={`btn btn-lg  my-2 mx-1 ${
          type == "nature" ? "btn-dark" : "btn-outline-dark"
        }`}
        onClick={() => setGalleryType("nature")}
      >
        Nature
      </button>
      <button
        className={`btn btn-lg  my-2 mx-1 ${
          type == "city" ? "btn-dark" : "btn-outline-dark"
        }`}
        onClick={() => setGalleryType("city")}
      >
        City
      </button>
    </div>
  );
};

export default ThemeSwitcher;
