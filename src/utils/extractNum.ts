function extractNum(str:any) {
    let size_ = "";
    for (let i:number = 0; i < str.length; i++) {
        if (!isNaN(str[i])) {
            size_ += str[i]
        }
    }
    return size_
}

export default extractNum