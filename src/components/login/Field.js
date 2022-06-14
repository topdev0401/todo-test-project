import React from 'react';
import PropTypes from 'prop-types';
// Components
import * as Styled from './login.style'
import Icons from '../../assets/icons';

function Field({
  label,
  type,
  placeholder,
  name,
  isRequired,
  onChange,
  onBlur,
  onFocus,
  value,
  errors,
  iconName
}) {

  return (
    <Styled.FieldWrapper isErrored={errors[name]}>
      <Styled.Label isErrored={errors[name]} htmlFor={name}>
        {label}
      </Styled.Label>
      <br />
      
      <Styled.IconWrapper> {Icons[iconName]} </Styled.IconWrapper> 
      <Styled.Input
        isErrored={errors[name]}
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        required={isRequired}
        value={value}
      />
      <Styled.ErrorSpan errors={errors[name]}>{errors[name]}</Styled.ErrorSpan>
    </Styled.FieldWrapper>
  );
}

Field.propTypes = {
  errors: PropTypes.object,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  value: PropTypes.string,
};

Field.defaultProps = {
  value: '',
  errors: null,
};

export default Field;
