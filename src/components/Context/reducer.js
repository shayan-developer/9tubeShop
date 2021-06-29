export const initialState = {
    basket: []
};

export const calc = (basket) => (
    basket?.reduce((amount, item) => item.price + amount, 0)
)

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                basket: [...state.basket, action.item]
            }

        case "REMOVE":
            const index = state.basket.findIndex(
                (item) => item.id === action.id
            )
            let newBasket = [...state.basket]
            if (index >= 0) {
                newBasket.splice(index, 1)
            } else {
                console.warn("can not remove item")
            }
            return {
                ...state,
                basket: newBasket
            }

        default:
            return state
    }
}
