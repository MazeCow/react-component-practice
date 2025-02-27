export interface ImageSetProps {
  clickHandler: (set: string) => void;
  galleryType: string;
}

const ThemeSwitcher = ({
  clickHandler: setGalleryType,
  galleryType: selectedImageSet,
}: ImageSetProps) => {
  return (
    <div>
      <button
        className={`btn btn-lg  my-2 mx-1 ${
          selectedImageSet == "nature" ? "btn-dark" : "btn-outline-dark"
        }`}
        onClick={() => setGalleryType("nature")}
      >
        Nature
      </button>
      <button
        className={`btn btn-lg  my-2 mx-1 ${
          selectedImageSet == "city" ? "btn-dark" : "btn-outline-dark"
        }`}
        onClick={() => setGalleryType("city")}
      >
        City
      </button>
    </div>
  );
};

export default ThemeSwitcher;
