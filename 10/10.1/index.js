const users = [
	{
	  username: 'David',
	  status: 'online',
	  lastActivity: 10
	},
	{
	  username: 'Lucy',
	  status: 'offline',
	  lastActivity: 22
	},
	{
        username: 'Bob',
        status: 'online',
        lastActivity: 104
    }
];

let usersOnlineNames = [];
// users.forEach(el => el.status ==='online' ? usersOnlineNames.push(el.username):null)

users.forEach(el => {
	if (el.status ==='online'){
		usersOnlineNames.push(el.username)
	}
})



alert(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames.join(', ')}`)

