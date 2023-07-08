import "../scss/gift.css";
import GiftCard from "../components/GiftCard";

const giftData = [
  { giftname: "dehumidifier", quantity: "ONE", grade: "A" },
  { giftname: "range hood", quantity: "ONE", grade: "B" },
  { giftname: "vacuum cleaner", quantity: "ONE", grade: "C" },
  { giftname: "toaster", quantity: "ONE", grade: "D" },
  { giftname: " scale", quantity: "ONE", grade: "E" },
  { giftname: "straightening iron", quantity: "ONE", grade: "F" },
  { giftname: "vacuum cleaner", quantity: "FIVE", grade: "G" },
  { giftname: "rice cooker", quantity: "TEN", grade: "H" },
];

const Gift = () => {
  return (
    <div className="giftContainer">
      <div className="giftCards">
        {giftData.map((item, i) => (
          <GiftCard
            grade={item.grade}
            quantity={item.quantity}
            key={i}
            giftname={item.giftname}
          >
            {item.giftname}
          </GiftCard>
        ))}
      </div>
    </div>
  );
};

export default Gift;
