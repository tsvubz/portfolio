import PropTypes from 'prop-types'
import styled from 'styled-components'
import { AlignItems, FlexDirection, JustifyContent } from '../../styles'

const StyledLink = styled.a`
    display: flex;
    flex-direction: ${({ direction }) => direction || FlexDirection.ROW };
    justify-content: ${({ justify }) => justify || JustifyContent.CENTER};
    align-items: ${({ align }) => align || AlignItems.CENTER };
    gap: ${({ gap }) => gap || '0'};
    color: ${({ color }) => color || '#eaeff2'};
    text-decoration: ${({ textDecoration }) => textDecoration || 'none'};

    &:hover {
        color: ${({ hoverColor }) => hoverColor || '#dfe0e0'};
        cursor: pointer;
    }
`

function Link({ children, href, color, hoverColor, direction, justify, align, gap, ...props }) {
  return (
    <>
        <StyledLink href={href} color={color} hoverColor={hoverColor} direction={direction} justify={justify} align={align} gap={gap} {...props}>
            {children}
        </StyledLink>
    </>
  )
}

Link.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    color: PropTypes.string,
    hoverColor: PropTypes.string,
    textDecoration: PropTypes.string, 
    direction: PropTypes.string,
    justify: PropTypes.string,
    align: PropTypes.string,
    gap: PropTypes.string, 
  };

export default Link