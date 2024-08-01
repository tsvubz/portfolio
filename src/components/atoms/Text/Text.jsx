
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Define a styled component for text
const StyledText = styled.p`
  font-size: ${({ size }) => size || '1rem'};
  font-weight: ${({ weight }) => weight || 'normal'};
  color: ${({ color }) => color || 'inherit'};
  text-align: ${({ align }) => align || 'left'};
  margin: ${({ margin }) => margin || '0'};
  padding: ${({ padding }) => padding || '0'};
  line-height: ${({ lineHeight }) => lineHeight || 'normal'};
  
`;

// Define the Text component
const Text = ({ children, size, weight, color, align, margin, padding, lineHeight, ...props }) => {
  return (
    <StyledText
      size={size}
      weight={weight}
      color={color}
      align={align}
      margin={margin}
      padding={padding}
      lineHeight={lineHeight}
      {...props}
    >
      {children}
    </StyledText>
  );
};

// Define prop types
Text.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
  weight: PropTypes.string,
  color: PropTypes.string,
  align: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  lineHeight: PropTypes.string,
  transform: PropTypes.oneOf(['none', 'capitalize', 'uppercase', 'lowercase']),
};



export default Text;
