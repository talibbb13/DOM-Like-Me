var container = document.querySelector("#container")

var love = document.querySelector("#container i")

container.addEventListener("dblclick", function() {

    love.style.transform = "scale(1.3)"
    love.style.opacity = 1

    setTimeout(() => {
        love.style.opacity = 0
        love.style.transform = "scale(0)"
    }, 1500);
})
