

const SelectField = (props) => {
  return (
    <div className={props.error ? "mySelectField error" : "mySelectField"}>
      <label htmlFor={props.id}>
        {props.label}
        <span className="required">*</span>
      </label>
      <select
        type={props.type}
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
        list={props.list}
        value={props.value}
        onChange={props.onChange}
        required
      >
        {props.option.map((v, i) => (
          <option value={i} key={i} disabled={v == "請選擇" && "disabled"}>
            {v}
          </option>
        ))}
      </select>
      <div className="helperText">{props.error}</div>
    </div>
  );
};

export default SelectField;
