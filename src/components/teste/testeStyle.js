import styled from 'styled-components';

export const Conteudo = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: calc(100vh - 80px);

`;

export const BotoesSections = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;

  > *:nth-child(2) {
    margin-left: 10px;
  }

`;