theBeatlesPlay = (musicArr, instrArr) => {
    var arr = []
    var i
    for (i = 0; i < musicArr.length && instrArr.length; i++) {
        var a = `${musicArr[i]}` + 'plays'+ `${instrArr[i]}`

        return  arr.push(a)
    }

}
