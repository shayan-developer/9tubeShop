//for dollar to toman
export const toman = (price) => {
    const result = (price * 25000);
    const toman = `${result.toLocaleString()} تومان`;
    return toman
}