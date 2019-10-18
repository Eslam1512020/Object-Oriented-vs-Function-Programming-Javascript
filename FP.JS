const users = new Map();
const user = function(email, password, passwordConfirmation) {
    this.email = email;
    this.password = password;
    this.passwordConfirmation = passwordConfirmation;
    this.signedIn = false;
    return this;
}
const saveUserInfo = function(user){
    users.set(user.email, user);
}
const signUp = function(user){
    if (typeof users.get(user.email) === "undefined"){
        console.log("your account  has been created");
        saveUserInfo(user);
    }else if (password !== confirmpassword){
        console.log("password dont match")
    }else {
        console.log("Email address is registered before");
    }
}

const signIn = function(user){
    function authenticateUser() {
        if (typeof users.get(user.email) === "undefined"){
            console.log("User does not exist!");
        } else if (users.get(user.email).password === user.password){
            console.log("welcome you are logged in ");
            user.signedIn = true;
        } else {
            console.log("wrong password!");
        }
    }
const signOut = function(user){
    function logOut(){
        if (user.signedIn= true){
           return  user.signedIn = false;
            console.log(" log out successful!");
        }else{
            console.log("error happen .please try again")
        }
    }
    const changePassword = function(previous, next, user){
        if (previous === users.get(user.email).password){
            console.log("Password change successful!");
            user.password = next;
            user.passwordConfirmation = next;
            save(user);      
        }
        else {
             console.log("Password authentication failed. Password change failed!");
        }
    
    }

module.exports = { user, signIn, signUp, signOut, changePassword}