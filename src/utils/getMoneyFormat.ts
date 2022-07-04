export const getMoneyFormat = (money: number): string => {
    const moneyFormat = Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP',
        minimumFractionDigits: 0,
    }).format(money);
    return moneyFormat.toString();
};