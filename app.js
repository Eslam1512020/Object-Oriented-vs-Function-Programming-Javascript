// Creating an empty dictionary to store users since we dont have database
userInput ={};  // i could easily made userInput = [] but i wanted to try ARRAY.FROM method
let users = Array.from(userInput);
class User{
    constructor(email, password, confirmPassword){
      this.email = email;
      this.password = password;
      this.confirmPassword = confirmPassword;
      this.sign = false;
      this.loginedin= false
    }
    // Sign UP (Allow user to sign up)
    signUp(){
      if (users.includes(this.email)){
        console.log("Email address is registered before ")
      } else if(this.password !== this.confirmPassword){
        console.log("password dont match")
      } else{
        this.sign= true 
        console.log("Hello" + " " + this.email )
      }
  }
    // Sign In (Allow user to sign in )  
    signIn(){
     if( users.includes(this.password && this.password === users.indexOf(this.email))){
        return this.loggedIn = true
     } else{
        console.log("password / email is wrong")
     }
  }
    // Signout (Allow user to sign out )
    signOut() {
      if (this.loggedIn) {
       this.signedIn == false;
        console.log(" you are logged out");
      } else {
        console.log("you are logged in");
     }
  }
    // Password Change (Allow user to change homework)
    passwordChange(oldPassword, newPassword) { 
      if(oldPassword === users.find(this.email)){
        this.oldPassword = newPassword;
        console.log("Thnaks for changing your password ")
      } else{
        console.log("Your password does not in our recors please try again");  
      }

  }

}
const eslam = new User("eslam_amin_151@hotmail.com", "200yes", "200yes");
eslam.signUp()
eslam.signIn();
eslam.signOut();
eslam.passwordChange("200yes","amin151");