
export default function Entry(props) {
  console.log(props);
  return (
    <article className="entry">
      <div className="image-container">
        <img
          src={props.img.src}
          alt={props.img.alt}
          width={125}
          className="main_image"
        />
      </div>
      <div>
        <img src="/marker.png" alt="Marker"  className="marker"/>
        <span>{props.country}</span>
        <a href= {props.googleMapsLink}>View on Google Maps</a>
        <h2>{props.title}</h2>
        <p className="dates">{props.dates}</p>
        <p className="description">{props.text}</p>
      </div>
    </article>
  );
}
