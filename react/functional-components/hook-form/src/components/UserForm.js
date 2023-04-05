import React, {useState} from 'react';

const UserForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password}
        console.log("Welcome", newUser)
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");

    };
    return (
        <div className='userClass'>
            <form className='createUser' onSubmit={ createUser }>
                <div>
                    <label>First Name:</label>
                    <input className='formInput' type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </div>
                <div>
                    <label>Last Name:</label>
                    <input className='formInput' type='text' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <div>
                    <label>Email:</label>
                    <input className='formInput' type='text' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input className='formInput' type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input className='formInput' type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                </div>
            </form>
            <h4>Your Form Data:</h4>
            <div className='PersonCard'>
                <p><b>First Name:</b> {firstName}</p>
                <p><b>Last Name:</b> {lastName}</p>
                <p><b>Email:</b> {email}</p>
                <p><b>Password:</b> {password}</p>
                <p><b>Confirm Password:</b> {confirmPassword}</p>
            </div>
        </div>
    );
}

export default UserForm;