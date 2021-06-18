
export const addCommaToPrice = (price:number | string) => {
    return typeof price === 'number' ? price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : price.replace(/\B(?=(\d{3})+(?!\d))/g, ','); 
}