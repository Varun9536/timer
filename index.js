
let button = document.getElementById("btn")
button.addEventListener("click", () => {
    document.getElementById("btn").disabled = true

    let circle = document.querySelector(".circle")
    let progvalue = document.getElementById("value")

    var s = 0
    let skip = document.getElementById("skip")
    skip.addEventListener("click", () => {
        s = 1
    })


    let add = document.getElementById("add")
    var addBtn = 0
    add.addEventListener("click", () => {
        addBtn = 1
    })



    var progstart = 60

    let progress = setInterval(() => {
        progstart = progstart - 1


        if (s === 1) {
            s = 0
            progstart = 0
        }

        if (addBtn === 1) {

            if (progstart <= 49) {
                progstart = progstart + 10
            }
            else {
                progstart = 59
            }
            addBtn = 0
        }


        if (progstart < 10 && progstart > 0) {
            progvalue.innerHTML = "00:0" + progstart
        }

        if (progstart >= 10) {
            progvalue.innerHTML = "00:" + progstart
        }
        circle.style.background = `conic-gradient(rgb(102, 0, 102) ,  ${progstart * 6.0}deg , rgba(0, 0, 0, 0.1) 0deg)`


        if (progstart === 0) {
            progvalue.innerHTML = "00:0" + progstart
            document.getElementById("btn").disabled = false
            clearInterval(progress)
        }
    }, 1000)


})