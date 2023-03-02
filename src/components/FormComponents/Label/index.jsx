import React from 'react';
import { StyledLabel, RequiredAsterisk } from './Label.styles';

function Label({ children, onlyRead, required, labelIcon, ...props }) {
  return (
    <StyledLabel $onlyRead={onlyRead} labelIcon={labelIcon} {...props}>
      {required ? <RequiredAsterisk>*</RequiredAsterisk> : ''}
      {children}
      {labelIcon && <span style={{ marginLeft: '5px' }}>{labelIcon}</span>}
    </StyledLabel>
  );
}

export default Label;
