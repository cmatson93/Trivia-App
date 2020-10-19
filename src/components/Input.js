import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = ({ id, name, label, value, placeholder, isRequired, handleChange }) => {
    const [inputVal, setInputVal] = useState(value);

    return (
        <InputContainer>
            { inputVal ? inputVal.length > 0 ? <StyledLabel htmlFor={id}>{label}</StyledLabel> : null : null}
            <StyledInput 
                id={id}
                key={id}
                placeholder={placeholder}
                value={inputVal}
                onChange={(event) => setInputVal(event.target.value)}
            />
        </InputContainer>
    )
}

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    
`;

const StyledLabel = styled.label`

`;

const StyledInput = styled.input`
    background: none;
    border: none;
    border-bottom: 1px solid black;
    &:focus {
        /* border: none; */
        outline: none;
    }
`;

export default Input;

Input.propTypes = {
    id: PropTypes.string, 
    name: PropTypes.string, 
    label: PropTypes.string, 
    value: PropTypes.string, 
    isRequired: PropTypes.bool, 
    handleChange: PropTypes.func
}