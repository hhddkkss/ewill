import React from "react";
import InputField from "../components/Form/InputField";
import "/src/form.css";
import SelectField from "../components/Form/SelectField";
import DefaultButton from "../components/Button/Button";

const stores = [];

for (let i = 1; i <= 100; i++) {
  let initText = "store";
  stores.push((initText += i));
}

const paymentOption = ["請選擇", "digital payment", "ATM"];

const Form = () => {
  return (
    <div className="formContainer">
      <form className="form" noValidate>
        <div className="formTitle">
          FORM
          <img src="/turtle.svg" alt="title" className="turtle" />
        </div>
        <InputField
          type={"text"}
          label={"store"}
          name={"store"}
          id={"store"}
          list={"storeName"}
        ></InputField>
        <InputField
          type={"text"}
          label={"name"}
          name={"name"}
          id={"name"}
        ></InputField>
        <InputField
          type={"tel"}
          label={"phone"}
          name={"phone"}
          id={"phone"}
        ></InputField>
        <InputField
          type={"text"}
          label={"Amount of consumption"}
          name={"amount"}
          id={"amount"}
        ></InputField>
        <SelectField
          type={"select"}
          label={"payment"}
          name={"payment"}
          id={"payment"}
          option={paymentOption}
        ></SelectField>

        <datalist id="storeName">
          {stores.map((v, i) => (
            <option value={v} key={i} />
          ))}
        </datalist>
      </form>

      <DefaultButton text={"Submit"} />
    </div>
  );
};

export default Form;
