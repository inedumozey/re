
function getFontSize(size:number) {
    const conversionRtae: number = 1.3256;
    const value = Math.floor(Number(size) * conversionRtae)
    // add px to value
    return `${value}px`
}

export default getFontSize