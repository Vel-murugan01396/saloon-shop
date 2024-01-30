export const userValidator=user=>{
    const userRegex=/^[^\s@]+@[^\s@]+$/;
    return userRegex.test(user)
}
export const passwordValidator =password=>{
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    return passwordRegex.test(password)
}