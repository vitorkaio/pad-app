import styled from 'styled-components';

export const Conteudo = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};

  width: ${(props) => props.width};
  height: ${(props) => props.height};

`;