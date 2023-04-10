import React, {useState} from 'react';

const UserForm = () => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password}
        console.log("Welcome", newUser)
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setHasBeenSubmitted(true);
    };

    // validations
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("First Name is required");
        } 
        else if(e.target.value.length < 2) {
            setFirstNameError("First Name must be at least 2 characters");
        }
        else {
            setFirstNameError("");
        }
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("Last Name is required");
        } 
        else if(e.target.value.length < 2) {
            setLastNameError("Last Name must be at least 2 characters");
        }
        else {
            setLastNameError("");
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("Last Name is required");
        } 
        else if(e.target.value.length < 2) {
            setLastNameError("Last Name must be at least 2 characters");
        }
        else {
            setLastNameError("");
        }
    }
    return (
        <div className='userClass'>
            <form className='createUser' onSubmit={ createUser }>
                <div>
                    {
                        firstNameError ?
                        <p className='validation'>{firstNameError}</p> :
                        ""
                    }
                    <label>First Name:</label>
                    <input className='formInput' type='text' value={firstName} onChange={handleFirstName}/>
                </div>
                <div>
                    {
                        lastNameError ?
                        <p className='validation'>{lastNameError}</p> :
                        ""
                    }
                    <label>Last Name:</label>
                    <input className='formInput' type='text' value={lastName} onChange={handleLastName}/>
                </div>
                <div>
                    {
                        emailError ?
                        <p className='validation'>{emailError}</p> :
                        ""
                    }
                    <label>Email:</label>
                    <input className='formInput' type='text' value={email} onChange={handleEmail}/>
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
        </div>
    );
}

export default UserForm;