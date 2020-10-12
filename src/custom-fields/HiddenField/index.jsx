import React from "react";
import PropTypes from "prop-types";
import guid from "guid";
import { FormGroup, Input, Label } from "reactstrap";

HiddenField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string,
};

HiddenField.defaultProps = {
  type: "hidden",
  label: "",
  disabled: true,
  value: "",
};

function HiddenField(props) {
  const { field, form, type, value, label, disabled } = props;
  const { name } = field;
  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Input
        id={name}
        {...field}
        type={type}
        value={value}
        disabled={disabled}
      />
    </FormGroup>
  );
}

export default HiddenField;
