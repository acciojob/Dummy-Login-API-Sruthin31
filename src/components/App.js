import React, { useState } from "react";

const users = [
    {
        id: 1,
        name: "ABC",
        email: "abc@gmail.com",
        password: "12"
    },
    {
        id: 2,
        name: "DEF",
        email: "def@gmail.com",
        password: "1234"
    },
    {
        id: 3,
        name: "GHI",
        email: "ghi@gmail.com",
        password: "123456"
    }
]
function App(){
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

    const[userErrors,setEmailErrors] = useState("");
    const[passwordErrors,setPasswordErrors] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();

        setEmailErrors("");
        setPasswordErrors("");

        setTimeout(()=>{
            const user = users.find((u)=>u.email === email);
            if(!user){
                console.log("User not found");
                setEmailErrors("User not found");
                setPasswordErrors("");
                return
            }
            if(user.password !== password){
                console.log("Password Incorrect");
                setPasswordErrors("Password Incorrect");
                setEmailErrors("");
                return;
            }
            console.log(user);
        },3000);
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input id="input-email" type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <p id="user-error">{userErrors}</p>
            <input id="input-password" type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <p id="password-error">{passwordErrors}</p>
            <button id="submit-form-btn" type="submit">Login</button>
        </form>
        </>
    )
}

export default App;