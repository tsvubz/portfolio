
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { AlignItems, JustifyContent, ScreenSize } from '../../styles'; 

const getColumns = (size) => {
  if (size === ScreenSize.DESKTOP) return 3;
  if (size === ScreenSize.TABLET) return 2;
  if (size === ScreenSize.MOBILE) return 1;
  return 3;
};

// Define the styled component for the grid
const StyledGrid = styled.div`
  display: grid;
  width: 100%;
  justify-content: ${({ justify }) => justify || JustifyContent.CENTER};
  align-items: ${({ align }) => align || AlignItems.STRETCH};
  grid-template-columns: ${({ size }) => `repeat(${getColumns(size)}, minmax(0px, 1fr))`};
  grid-template-rows: ${({ rows }) => (rows ? `repeat(${rows}, minmax(0px, 1fr))` : 'auto')};
  gap: ${({ gap }) => (gap !== undefined ? `${gap}rem` : 'var(--gap-grid)')};
  column-gap: ${({ columnGap }) => (columnGap !== undefined ? `${columnGap}rem` : 'initial')};
  row-gap: ${({ rowGap }) => (rowGap !== undefined ? `${rowGap}rem` : 'initial')};
`;

const Grid = ({ children, rows, justify, align, gap, columnGap, rowGap, size, ...props }) => {
  return (
    <StyledGrid
      rows={rows}
      justify={justify}
      align={align}
      gap={gap}
      columnGap={columnGap}
      rowGap={rowGap}
      size={size}
      {...props}
    >
      {children}
    </StyledGrid>
  );
};

Grid.propTypes = {
  children: PropTypes.element.isRequired,
  rows: PropTypes.string,
  justify: PropTypes.string,
  align: PropTypes.string,
  gap: PropTypes.string,
  columnGap: PropTypes.string,
  rowGap: PropTypes.string,
  size: PropTypes.string,
};


export default Grid;
