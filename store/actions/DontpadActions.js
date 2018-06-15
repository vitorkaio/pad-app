export const addPad = (dados) => {
  return {
    type: 'ADD_PAD',
    dados: dados
  };
} ;

export const addUrl = (url) => {
  return {
    type: 'ADD_URL',
    url: url
  };
} ;