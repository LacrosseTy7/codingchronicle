function checkForInput() {
    value = document.querySelector('.user-input').value
    if (!value) {
        document.querySelector('.empty-words').innerHTML = 'Enter a valid email address, phone number, or Skype name.'
        document.querySelector('.forgot-password').classList.add('invalid')
    } else if (value.length < 8) {
        document.querySelector('.empty-words').innerHTML = 'Must be 8 characters or more.'
        document.querySelector('.forgot-password').classList.add('invalid')
    }else{
        let usernameFound;
        document.querySelector('.empty-words').innerHTML = ''
        document.querySelector('.forgot-password').classList.remove('invalid')
        if (!usernameFound) {
            document.querySelector('.empty-words').innerHTML = "That account doesn't exist! Please contact the Admin to get an account at 30twilson@go.dsdmail.net."
            document.querySelector('.forgot-password').classList.add('invalid')
        };
        users.forEach((user)=>{
            if (user.name === value) {
                document.querySelector('body').innerHTML = `
                <div>
                <img class="gradient-background" src="images/gradient.webp">
                <div class="sign-in-container">
                    <img class="cc-icon" src="images/cc-logo">
                    <p class="sign-in-text">Enter password</p>
                    <p class="empty-words"></p>
                    <input onkeydown="if (event.key === 'Enter') {checkForCorrectPassword(users)}" class="user-input" type="password" placeholder="Password">
                    <a onclick="alert('Welcome to the instructions. This page is for your Password. Enter it into the password spot. Then press sign in.')" class="forgot-password">Forgot your password?</a>
                    <button onclick="checkForCorrectPassword(users)" class="next-button">Sign in</button>
                </div>
                </div>
                `;
            };
        });
    };

}