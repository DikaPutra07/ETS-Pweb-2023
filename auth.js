       // Cek apakah token ada di localStorage
const token = localStorage.getItem("token");

if (!token) {
    // Token tidak ada, tampilkan modal login
    const loginModal = document.getElementById("loginModal");
    const registerModal = document.getElementById("registerModal");

    loginModal.style.display = "block";

    // Tambahkan event listener untuk form login
    const loginForm = document.querySelector("#loginModal form");
    const registerForm = document.querySelector("#registerModal form");
  
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

                // Tutup modal login
                loginModal.style.display = "none";
                window.location.href = "index.html"
            } else {
                // Handle kesalahan login
                console.error("Login failed");
            }
        } catch (error) {
            console.error(error);
        }
    });

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
                console.log(data);
            } else {
                // Handle kesalahan login
                console.error("Register failed");
            }
        } catch (error) {
            console.error(error);
        }
    });
}
        