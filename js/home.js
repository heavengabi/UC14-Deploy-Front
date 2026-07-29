const baseApi = "http://localhost:3000"

async function verify() {
    const res = await fetch(`${baseApi}/me`, {
        headers: { "Content-Type": "application/json" },
        method: 'GET',
        credentials: "include"
    })

    const data = await res.json()

    console.log(data)
    return data
}

document.addEventListener("DOMContentLoaded", async () => {
    const logged = await verify()

    console.log(logged)

    if (!logged.success) {
        alert('Não Autorizado!')
        window.location.href = "./login.html"
    }

    const user = document.getElementById("user")
    user.textContent = logged.user.name

})