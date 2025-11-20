users.forEach((user) => {
    if (user.name === currentUser) {
        document.querySelector('.username-info').innerHTML += user.name
        document.querySelector('.email-info').innerHTML += user.email
    }
})