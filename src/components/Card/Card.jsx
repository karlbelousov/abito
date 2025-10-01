import "./Card.css";

export const Card = ({ title, price, address, date, img }) => {
  return (
    <a href="./product.html" className="card">
      <div className="card__img">
        <img src={img} alt={title} />
      </div>
      <h5 className="card__title">{title}</h5>
      <strong className="card__price">{price}</strong>
      <div className="card__desc-box">
        <span className="card__desc">{address}</span>
        <span className="card__desc">{date}</span>
      </div>
    </a>
  );
};
