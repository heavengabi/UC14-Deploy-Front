const baseApi = 'http://localhost:3000'

document.addEventListener("DOMContentLoaded", async () => {
    const formLogin = document.getElementById('login-container')
    const formRegister = document.getElementById('formRegister')

    if (formLogin) {

        formLogin.addEventListener('submit', async(e) => {
            e.preventDefault()

            const email = document.getElementById('email').value
            const password = document.getElementById('password').value

            const res = await fetch(`${baseApi}/login`, {
                headers: { "Content-Type": "application/json" },
                method: 'POST',
                credentials: "include",
                body: JSON.stringify({ email: email, password: password })
            })

            console.log(res)

            const data = await res.json()

            if (!data.success) {
                alert(`Algo deu errado: ${data.message}`)
            } else {
                alert(data.message)
                window.location.href = './home.html'
            }

        })
    }

    if (formRegister) {

        formRegister.addEventListener('submit', async(e) => {
            e.preventDefault()
            
            const name = document.getElementById('name').value
            const email = document.getElementById('email').value
            const password = document.getElementById('password').value
            const confirmPassword = document.getElementById("confirmPassword").value

            if (password !== confirmPassword) {
                alert('As senhas não coincidem')
                return
            }

            const res = await fetch(`${baseApi}/register`, {
                headers: { "Content-Type": "application/json" },
                method: 'POST',
                credentials: "include",
                body: JSON.stringify({ name: name, email: email, password: password })
            })

            console.log(res)

            const data = await res.json()

            alert(data.message)

        })
    }    

})