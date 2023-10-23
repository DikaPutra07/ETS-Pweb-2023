const registerForm = document.querySelector("#registerModal form");

registerForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const nama = document.getElementById("nama").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        try {
            const response = await fetch("https://ets-pemrograman-web-f.cyclic.app/users/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ nama, email, password }),
            });

            console.log(response);

            if (response.ok) {
                const data = await response.json();
                alert("Berhasil Register");
                window.location.href = "login.html"
            } else {
                // Handle kesalahan login
                console.error("Register failed");
            }
        } catch (error) {
            console.error(error);
        }
});