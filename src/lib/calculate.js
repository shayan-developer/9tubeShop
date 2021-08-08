export const calculate = (basket) => (
    basket?.reduce((amount, item) => item.price*item.amount + amount, 0)
)