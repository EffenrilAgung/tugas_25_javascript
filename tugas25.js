var dataArray = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16]
function panggilData(ascending, descending) {
    console.log(`Sebelumnya : ${dataArray}`)
    ascending = dataArray.sort()
    descending = ascending.reverse()
    console.log(`Ascending : ${ascending}`)
    console.log(`Descending : ${descending}`)

    var filterdata = dataArray.filter(caridata => {
        return caridata > 10
    })
    console.log(`Filter > 10 : ${filterdata}`)
}

panggilData()