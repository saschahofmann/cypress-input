import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

const ERROR = "#e42113";

interface InputProps {
  placeholder?: string;
  value?: string;
  onChange: (e: any) => void;
}

const StyledInput = styled.input<InputProps>`
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 8px 12px;
  transition: border 0.3s, box-shadow 0.3s;
  font-size: 14px;
`;

const Input: React.FC<InputProps> = ({ placeholder, value, onChange }) => {
  return (
    <div className={`flex flex-column`}>
      <StyledInput
        className={`br2`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
