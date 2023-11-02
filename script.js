 document.getElementById("loginForm").addEventListener("submit", function(e) {
            e.preventDefault();

            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;
            var rememberMe = document.getElementById("checkbox").checked;

            if (rememberMe) {
                localStorage.setItem("savedUsername", username);
                localStorage.setItem("savedPassword", password);
            } else {
                localStorage.removeItem("savedUsername");
                localStorage.removeItem("savedPassword");
            }

            alert("Logged in as " + username);

            if (localStorage.getItem("savedUsername")) {
                var existingButton = document.createElement("button");
                existingButton.id = "existing";
                existingButton.textContent = "Login as existing user";
                existingButton.addEventListener("click", function() {
                    alert("Logged in as " + localStorage.getItem("savedUsername"));
                });
                document.body.appendChild(existingButton);
            }
        });