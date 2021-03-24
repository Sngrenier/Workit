import styled from 'styled-components'


export const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 1rem;
background: var(--mainBlue);
border: 0.05rem solid var(--lightBlue);
border-color: var(--lightBlue);
color: var(--mainWhite);
border-radius: 2.5rem;
width: 90vw;
padding: 0.9rem 4rem;
curser: pointer;
margin: .5rem 0.5rem 0.5rem 0.5rem;
transition: all 0.5s ease-in-out;
&:hover{
    background: ${props => 
        props.cart? "var(--mainYellow)": "var(--lightBlue)"};
    color: ${props => 
        props.cart? "var(--darkYellow)": "var(--mainDark)"};
}
&:focus{
    outline:none;
}
`