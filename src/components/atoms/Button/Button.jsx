import styled from "styled-components"
import PropTypes from 'prop-types';

const Button = styled.button`
    display: flex;
    color: #eaeff2;
    background-color: #3282e0;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1rem;
    padding: 1rem;
    border-radius: 0.5rem;
    height: 2.4rem;
    font-size: 1rem;
    border: none;

    &:hover {
    background-color: #2c4d90;
    cursor: pointer;
    }
`

function ResumeButton({ children, onClick, ...props }) {
  
  return (
    <>
      <Button 
        onClick={onClick}
        {...props}
        >
          {children}
        </Button>
    </>
  )
}

ResumeButton.propTypes = {
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func,
};

export default ResumeButton