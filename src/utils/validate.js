export const validate=(email , password )=>{
    const emailRegEx =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const passRegEx =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!emailRegEx) return "invalid Email Address";
    if(!passRegEx) return "invalid Password";

    return null
}