function toast({
    title = "",
    message = "",
    type = 'success',
    duration = 3000
}) {
    const main = document.getElementById('toast')



    if (main) {
        const toast = document.createElement('div')

        // auto remove toast
        const autoRemoveId = setTimeout(() => {
            main.removeChild(toast)
        }, duration + 1000)

        // remove when click
        toast.onclick = function (e) {
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast)
                clearTimeout(autoRemoveId)
            }
        }

        toast.classList.add('toast', `toast--${type}`)
        const delay = (duration / 1000).toFixed(2)
        toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`


        toast.innerHTML = `
            <div class="toast__icon">
                <i class="fa-solid fa-circle-check"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">
                    ${message}
                </p>
            </div>
            <div class="toast__close">
                <i class="fa-solid fa-xmark toast__icon--close"></i>
            </div>
        `

        main.appendChild(toast)

    }
}




function showSuccessToast() {
    toast({
        title: "Success 121",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        type: 'success',
        duration: 5000
    })
}

function showErrorToast() {
    toast({
        title: "Error",
        message: "Error to shown, please try again!",
        type: 'error',
        duration: 5000
    })
}