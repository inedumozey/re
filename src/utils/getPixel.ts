import extractNum from "./extractNum";

function getPixel(size:string) {
    let value:number;
    if (size.includes('px')) {
        value = Number(extractNum(size))
    }
    else if (size.includes('rem') || size.includes('em')) {
        // extract the number and conver to px
        value = Number(extractNum(size)) * 16
    }
    else if (size.includes('%')) {
        // use defualt size --70px
        value = Number(extractNum(size)) * 100
    }
    else {
        throw Error('Invalid size')
    }
    return value
}

export default getPixel