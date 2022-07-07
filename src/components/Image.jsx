import photo from "../images/1.png";

const Image = () => {
  return (
    <div className="image">
      <img src={photo} alt="user avatar" className="main__img" />
    </div>
  );
};

export default Image;
