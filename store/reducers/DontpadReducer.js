const initialState = {
  dontpad: {
    url: '',
    texto: '',
    arqs: null,
    links: null,
    senha: ''
  }
}

const dontpadReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'ADD_PAD':
      const dados = action.dados;
      return {
        ...state,
        dontpad: {
          ...state.dontpad,
          texto: dados.texto,
          arqs: dados.arqs,
          links: dados.links,
          senha: dados.senha,
        }
    }
    break

    case 'ADD_URL':
      return {
        ...state,
        dontpad: {
          ...state.dontpad,
          url: action.url
        }
      }
    break

    default:
      return state;
  }
}

export default dontpadReducer;