import styled, { css } from 'styled-components';

const Row = styled.div`
  display: flex;
  ${props =>
    props.type === 'horizontal' &&
    css`
      justify-content: space-between;
      align-items: center;
    `}
  ${props =>
    props.type === 'vertical' &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
    /* flex-direction: ${props => (props.type === 'horizontal' ? 'row' : 'column')};
    justify-content: ${props => (props.type === 'horizontal' ? 'space-between' : 'initial')};
    align-items: ${props => (props.type === 'horizontal' ? 'center' : 'initial')};
    gap: ${props => (props.type === 'vertical' ? '1.6rem' : 'initial')}; */
`;

Row.defaultProps = {
    type: 'vertical',
}

export default Row;
