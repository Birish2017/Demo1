import React from "react";
import PropTypes from "prop-types";
import Tootip from "./Tootip";
const CheckboxInput = ({
  name,
  label,
  value,
  disabled,
  error,
  tooltipText,
  toolip
}) => {
  let wrapperClass = "form-group";
  if (error && error.length > 0) {
    wrapperClass += " has-error";
  }
  const onCheckboxChange = event => {};
  const renderCheckboxTitle = () => {
    let className = "checbox--title";
    className =
      error && error.length > 0 ? className + "  has-error" : className;

    let renderTitle = null;
    if (label) {
      renderTitle = (
        <div>
          <span>{label}</span>
          <span
            style={{ padding: 10 + "px" }}
            className="glyphicon glyphicon-eye-open"
            data-tip="React-tooltip"
          ></span>
        </div>
      );
    }
    return renderTitle;
  };
  const renderTooltip = () => {
    if (toolip) {
      return <Tootip tooltipText={tooltipText}></Tootip>;
    }
  };
  return (
    <div>
      <label>
        <input
          type="checkbox"
          name={name}
          checked={value}
          disabled={disabled}
          //onChange={onCheckboxChange}
        />
        {renderCheckboxTitle()}
        {renderTooltip()}
      </label>
    </div>
  );
};
CheckboxInput.propTypes = {
  name: PropTypes.string,
  value: PropTypes.bool,
  disabled: PropTypes.bool
};
export default CheckboxInput;
