import React from "react";


const User = (prop)=>{
    const {user} = prop;
    return (
        <div>
            <h2>{user.name}</h2>
            <h4>{user.email}</h4>
            <h4>{user.password1}</h4>
            <h4>{user.password2}</h4>
        </div>
    )
}

export default User;