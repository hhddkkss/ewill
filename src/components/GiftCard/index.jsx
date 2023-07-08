import "../../scss/giftCard.css";

const GiftCard = (props) => {
  return (
    <div className="giftCard">
      {props.grade.charCodeAt(props.grade) >= 65 &&
      props.grade.charCodeAt(props.grade) < 68 ? (
        <div className="certificate">
          <img src="certificateA.png" alt="certificateA" />
          <p className="grade">{props.grade}</p>
        </div>
      ) : (
        <div className="certificate DCertificate">
          <img src="certificateD.png" alt="certificateD" />
          <p className="grade ">{props.grade}</p>
        </div>
      )}

      {props.grade.charCodeAt(props.grade) >= 65 &&
      props.grade.charCodeAt(props.grade) < 68 ? (
        <>
          <p className="quantity">{props.quantity}</p>
          <p className="giftName">{props.giftname}</p>
        </>
      ) : (
        <>
          <p className="quantity dQuantity">{props.quantity}</p>
          <p className="giftName dName">{props.giftname}</p>
        </>
      )}
    </div>
  );
};

export default GiftCard;
