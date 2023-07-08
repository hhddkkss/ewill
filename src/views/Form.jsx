import { useEffect, useState } from "react";
import InputField from "../components/Form/InputField";
import "../scss/form.css";
import SelectField from "../components/Form/SelectField";
import DefaultButton from "../components/Button";

const stores = [];

for (let i = 1; i <= 100; i++) {
  let initText = "store";
  stores.push((initText += i));
}

const paymentOption = ["請選擇", "digital payment", "ATM"];

const initFormValue = {
  store: "",
  name: "",
  phone: "",
  amount: "",
  payment: "0",
};
const errorValue = {
  store: "",
  name: "",
  phone: "",
  amount: "",
  payment: "",
};

const Form = () => {
  const [formValue, setFormValue] = useState(initFormValue);
  const [error, SetError] = useState(errorValue);
  const [buttonText, setButtonText] = useState("Submit");

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleValidStore = () => {
    SetError(errorValue);
    if (formValue.store.trim()) {
      const result = stores.filter((v) => v.includes(formValue.store));

      if (result.length === 0) {
        SetError((prev) => ({
          ...prev,
          store: "no result",
        }));
      }
    }
  };

  const handleValidate = (e) => {
    e.preventDefault();

    let isValid = true;
    //初始化表單
    SetError(errorValue);
    // check form data

    //store

    if (formValue.store.trim()) {
      const result = stores.find((v) => v === formValue.store);
      //undefined
      if (!result) {
        SetError((prev) => ({
          ...prev,
          store: "no result",
        }));
        isValid = false;
      }
    } else {
      SetError((prev) => ({
        ...prev,
        store: "此欄位為必填",
      }));
      isValid = false;
    }

    //phone

    if (formValue.phone.trim() && formValue.phone) {
      const reg = /^09[0-9]{8}$/;

      if (formValue.phone.match(reg) === null) {
        SetError((prev) => ({
          ...prev,
          phone: "請遵照手機格式輸入",
        }));
        isValid = false;
      }
    }

    if (!formValue.phone.trim()) {
      SetError((prev) => ({
        ...prev,
        phone: "此欄位為必填",
      }));
      isValid = false;
    }

    //name
    if (!formValue.name.trim() && formValue.name) {
      const regex = /^[\u4e00-\u9fa5a-zA-Z\s]+$/;

      if (formValue.name.match(regex) === null) {
        SetError((prev) => ({
          ...prev,
          name: "名字只能輸入中英文",
        }));
        isValid = false;
      }
    }

    if (!formValue.name.trim()) {
      SetError((prev) => ({
        ...prev,
        name: "此欄位為必填",
      }));
      isValid = false;
    }

    //amount

    if (!formValue.amount.trim()) {
      SetError((prev) => ({
        ...prev,
        amount: "此欄位為必填",
      }));
      isValid = false;

      if (typeof formValue.amount !== "number") {
        SetError((prev) => ({
          ...prev,
          amount: "please input number",
        }));
        isValid = false;
      }
    }

    if (formValue.amount.trim() && formValue.amount < 0) {
      SetError((prev) => ({
        ...prev,
        amount: "Must be greater than 0",
      }));
      isValid = false;
    }

    //payment
    if (formValue.payment == 0) {
      SetError((prev) => ({
        ...prev,
        payment: "此選項為必填",
      }));
      isValid = false;
    }

    if (isValid) {
      setButtonText("true");
    } else {
      setButtonText("false");
    }
  };

  useEffect(() => {
    handleValidStore();
  }, [formValue.store]);

  return (
    <div className="formContainer" id="form">
      <form className="form" noValidate>
        <div className="formTitle">
          FORM
          <img src="turtle.svg" alt="title" className="turtle" />
        </div>

        <InputField
          type={"text"}
          label={"store"}
          name={"store"}
          id={"store"}
          list={"storeName"}
          value={formValue.store}
          onChange={handleFormChange}
          error={error.store}
          required={true}
          placeholder="PlaceHolder Text"
        ></InputField>
        <InputField
          type={"text"}
          label={"name"}
          name={"name"}
          id={"name"}
          value={formValue.name}
          onChange={handleFormChange}
          error={error.name}
          required={true}
          placeholder="PlaceHolder Text"
        ></InputField>
        <InputField
          type={"tel"}
          label={"phone"}
          name={"phone"}
          id={"phone"}
          value={formValue.phone}
          onChange={handleFormChange}
          error={error.phone}
          maxLength="10"
          required={true}
          placeholder="PlaceHolder Text"
        ></InputField>
        <InputField
          type={"number"}
          label={"Amount of consumption"}
          name={"amount"}
          id={"amount"}
          value={formValue.amount}
          onChange={handleFormChange}
          required={true}
          error={error.amount}
          placeholder="PlaceHolder Text"
        ></InputField>
        <SelectField
          type={"select"}
          label={"payment"}
          name={"payment"}
          id={"payment"}
          value={formValue.payment}
          onChange={handleFormChange}
          required={true}
          option={paymentOption}
          error={error.payment}
        ></SelectField>

        <datalist id="storeName">
          {stores.map((v, i) => (
            <option value={v} key={i}>
              {v}
            </option>
          ))}
        </datalist>
      </form>
      <DefaultButton
        text={buttonText}
        onClick={handleValidate}
        condition={buttonText}
        id="buttonAnimation"
      />
    </div>
  );
};

export default Form;
