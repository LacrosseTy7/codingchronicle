users.forEach((user) => {
    if (user.name === currentUser) {
        document.querySelector('.username-info').innerHTML += user.name
        document.querySelector('.email-info').innerHTML += user.email
        for (let i = 0; i < user.password.length; i++) {
            document.querySelector('.password-info').innerHTML += '•'
        }
        document.querySelector('.friend-code-info').innerHTML += user.friendCode
        userFriends = user.friends
    }
})

users.forEach((friend)=>{
    if (userFriends.includes(friend.name)) {
        document.querySelector('.friends-list').innerHTML += `<li class="friend">${friend.name}</li>`
    }
})

function addFriend() {
    document.querySelector('.add-friend-container').innerHTML += '<input class="friend-code-input" onkeydown="if (event.key === `Enter`) {addToList()}" placeholder="Enter Friend Code:"> <button class="add-button" onclick="addToList()">Add</button>'
    document.querySelector('.add-friend-button').onclick = function() {
        document.querySelector('.friend-code-input').remove()
        document.querySelector('.add-button').remove()
        document.querySelector('.add-friend-button').onclick = function() {
            addFriend()
        }
    }
}

function addToList() {
    if (document.querySelector('.friend-code-input').value === '') {
        document.querySelector('.friend-code-input').placeholder = 'Please enter a friend code.'
    } else {
        document.querySelector('.friend-code-input').remove()
        document.querySelector('.add-button').remove()
        document.querySelector('.add-friend-button').onclick = function() {
            addFriend()
        }
    }
}