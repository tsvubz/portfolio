import styled from "styled-components"
import PropTypes from 'prop-types'
import { AlignItems, FlexDirection, JustifyContent } from '../../styles'


const Container = styled.div`
    display: flex;
    flex-direction: ${({ direction }) => direction || FlexDirection.ROW };
    justify-content: ${({ justify }) => justify || JustifyContent.CENTER};
    align-items: ${({ align }) => align || AlignItems.CENTER };
    gap: ${({ gap }) => gap || '0'};
    height: ${({ height }) => height || '4rem'};
    width: 100%;
    margin: 0;
`

function Flex({ children, direction, justify, align, gap, height }) {
  return (
    <>
        <Container direction={direction} justify={justify} align={align} gap={gap} height={height}>
            {children}
        </Container> 
    </>
  )
}

Flex.propTypes = {
    children: PropTypes.node,
    direction: PropTypes.string,
    justify: PropTypes.string,
    align: PropTypes.string,
    gap: PropTypes.string,
    height: PropTypes.string,
}

export default Flex