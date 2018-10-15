window.onload = function () {


    function zipzap(n) {

        var arr = []

        for (var i = 1; i <= n; i++) {
            if (i % 3 === 0) {
                arr.push('zip')
            } else if (i % 5 === 0) {
                arr.push('zap')
            } else {
                arr.push(i)
            }
        }

        return arr.join("")

    }

    console.log(zipzap(8), ' => 12zip4zapzip78 , 8')
    console.log(zipzap(8), ' => 12zip4zapzip , 6')
    console.log(zipzap(30), ' => 12zip4zapzip78zipzap11zip1314zip1617zip19zapzip2223zipzap26zip2829zip , 30')


};