import "../../App.css";
export default function CustomImage({ imgSrc, pt, wd }) {
  return (
    <div className="custom-image" style={{ paddingTop: pt }}>
      <img src={imgSrc} alt="" style={{ width: wd }} />
    </div>
  );
}
