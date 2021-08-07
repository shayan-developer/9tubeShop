export const initialState = {
    basket: [],
    user: null
};

export const calc = (basket) => (
    basket?.reduce((amount, item) => item.price + amount, 0)
)

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            const find = state.basket.findIndex(item => item.id === action.item.id)
            let findedItem = find >= 0 ? state.basket[find] : null
            let array = [];
            if (findedItem) {
                let item = {
                    ...action.item,
                    amount: state.basket[find].amount + 1
                }
                array = [...state.basket]
                array[find] = item
            } else {
                array = [...state.basket, action.item]
            }
            return {
                ...state,
                basket: array
            }

        case "REMOVE":
            const index = state.basket.findIndex(
                (item) => item.id === action.item
            )
            let findItem = state.basket[index]
            let newBasket = []
            if (findItem.amount === 1) {
                let filter = state.basket.filter((item) => item.id !== action.item)
                newBasket = [...filter]
            } else {
                let item = {
                    ...state.basket[index],
                    amount: state.basket[index].amount - 1
                }
                newBasket = [...state.basket]
                newBasket[index] = item
            }
            return {
                ...state,
                basket: newBasket
            }

        case "SET_USER":
            return {
                ...state,
                user: action.user
            }

        default:
            return state
    }
}
