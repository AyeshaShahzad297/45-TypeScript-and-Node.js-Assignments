// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
let current_users: string[] = ['Henry', 'Lisa', 'Patrick', 'Jessie', 'Jane'];
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let new_users: string[] = ['Eric', 'HENRY', 'jane', 'Jack', 'John'];
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

    function checkUserName(new_users:string[], current_users:string[]):void{
        const lowerCasedCurrentUsers = current_users.map(user => user.toLowerCase());
        for(let newUser of new_users){
            const lowerCasedNewUsers = newUser.toLowerCase();
            if(lowerCasedCurrentUsers.includes(lowerCasedNewUsers)){
                console.log(`${newUser} username already exists. You need to enter a new username.`);        
            }else{
                    console.log('Username is available.');
        }
    }

}
checkUserName(new_users, current_users);