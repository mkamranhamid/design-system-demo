import styled from "styled-components";

export const Input = styled.input`
    height: 0;
    width: 0;
    visibility: hidden;
    display: none;

    &:checked + label {
        background: #bada55;
    }
    
    &:checked + label:after {
        left: calc(100% - 5px);
        transform: translateX(-100%);
    }
`

export const Label = styled.label`
    cursor: pointer;
    text-indent: -9999px;
    width: 30px;
    height: 20px;
    background: grey;
    display: block;
    border-radius: 100px;
    position: relative;

    &:after {
        content: "";
        position: absolute;
        top: 5px;
        left: 5px;
        width: 10px;
        height: 10px;
        background: #fff;
        border-radius: 90px;
        transition: 0.3s;
    }
    &:active:after {
        width: 30px;
    }
` 