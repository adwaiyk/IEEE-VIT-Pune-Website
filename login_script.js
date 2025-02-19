const formContainer = document.getElementById('form-container');
        const formTitle = document.getElementById('form-title');
        const authForm = document.getElementById('auth-form');
        const toggleLink = document.getElementById('toggle-signup');

        toggleLink.addEventListener('click', (e) => {
            e.preventDefault();

            if (formTitle.textContent === 'Login') {
                formTitle.textContent = 'Sign Up';
                authForm.innerHTML = `
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" placeholder="Enter your name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" placeholder="Enter your email" required>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" placeholder="Enter your password" required>
                    </div>
                    <button type="submit" class="btn">Sign Up</button>
                    <div class="toggle-btn">
                        <p>Already have an account? <a href="#" id="toggle-login">Login</a></p>
                    </div>
                `;

                document.getElementById('toggle-login').addEventListener('click', toggleForm);
            } else {
                toggleForm();
            }
        });

        function toggleForm() {
            formTitle.textContent = 'Login';
            authForm.innerHTML = `
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="Enter your email" required>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" placeholder="Enter your password" required>
                </div>
                <button type="submit" class="btn">Login</button>
                <div class="toggle-btn">
                    <p>Don't have an account? <a href="#" id="toggle-signup">Sign Up</a></p>
                </div>
            `;

            document.getElementById('toggle-signup').addEventListener('click', toggleForm);
        }