import React from "react";

const Form = (prop)=>{
    const {value,update,submit,disabled,errors} = prop;
    const onChange = (evt)=>{
        const {name,value,type,checked} = evt.target;
        const theValue = type==="checkbox" ? checked : value;
        update(name, theValue);
    }
    const onSubmit = (evt)=>{
        evt.preventDefault();
        submit();
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <h1>Sign Up</h1>
                    <button disabled={disabled}>Submit</button>
                    <div>
                        <div>{errors.name}</div>
                        <div>{errors.email}</div>
                        <div>{errors.password1}</div>
                        <div>{errors.password2}</div>
                    </div>
                </div>
            
                <label>Name:
                    <input
                        type="text"
                        name="name"
                        value={value.name}
                        onChange={onChange}
                    />
                </label>
                <br></br>
                <label>Email:
                    <input
                        type="text"
                        name="email"
                        value={value.email}
                        onChange={onChange}
                    />
                </label>
                <br></br>
                <label>Password:
                    <input
                        type="text"
                        name="password1"
                        value={value.password1}
                        onChange={onChange}
                    />
                </label>
                <br></br>
                <label>Password:
                    <input
                        type="text"
                        name="password2"
                        value={value.password2}
                        onChange={onChange}
                    />
                </label>
                <br></br>
                <br></br>
                <br></br>

                <label>Terms of service are the legal agreements between a service provider and a person who wants to use that service. The person must agree to abide by the terms of service in order to use the offered service. Terms of service can also be merely a disclaimer, especially regarding the use of websites
                    <input
                        type="checkbox"
                        name="termOfService"
                        checked={value.termOfService}
                        onChange={onChange}
                    />
                </label>
            </form>
        </div>
    )
}


export default Form;