export function formatCurrency(value, currency){
    return new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: currency
    }).format(value)
}