import styled, {css} from "styled-components";

const StyledButton = styled.button`
    border: 0;
    display: inline-flex;
    padding: 5px 15px; 
    border-radius: 5px;
    cursor: pointer; 
    align-items: center;
    
    svg {
        height: 16px; 
        margin-right: 5px;
    }

    ${props => props.size === 'l' && css`
        font-size: 1.2rem;
        padding: 10px 20px;
        svg {
            height: 20px;
        }
    `}

    ${props => props.primary && css`
        background-color: #5542F6;
        border: 1px solid #5542F6; 
        color: #fff;
    `}

    ${props => props.white && !props.outline && css`
        background-color: #fff;
        color: #000; 
    `}

    ${props => props.white && props.outline && css`
        background-color: transparent;
        color: #fff;
        border: 1px solid #fff;  
    `}

`;

export default function Button({children, ...rest}) {
    return (
        <StyledButton {...rest}>{children}</StyledButton>
    );
}