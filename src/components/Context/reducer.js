export const initialState = {
    basket: []
};

export const calc = (basket) => {
    basket?.reduce((amount, item) => {
      return  item.price + amount, 0
    })
}

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                basket: [...state.basket, action.item]
            }

        default:
            return state
    }
}
