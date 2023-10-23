const loginForm = document.querySelector("#loginModal form");

loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Kirim permintaan POST API untuk login
        try {
            const response = await fetch("https://ets-pemrograman-web-f.cyclic.app/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            console.log(response);

            if (response.ok) {
                const data = await response.json();
                // Simpan token ke localStorage
                localStorage.setItem("token", data.data.access_token);

                alert("Berhasil Login")
                window.location.href = "index.html"
            } else {
                // Handle kesalahan login
                console.error("Login failed");
            }
        } catch (error) {
            console.error(error);
        }
});