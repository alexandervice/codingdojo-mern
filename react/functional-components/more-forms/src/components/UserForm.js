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
            setEmailError("Email is required");
        } 
        else if(e.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters");
        }
        else {
            setEmailError("");
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("Password is required");
        } 
        else if(e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters");
        }
        else {
            setPasswordError("");
        }
    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(password !== confirmPassword) {
            setConfirmPasswordError("Passwords must match");
        } 
        else {
            setConfirmPasswordError("");
        }
    }
    return (
        <div className='userClass'>
            <form className='createUser' onSubmit={ createUser }>
                {
                    hasBeenSubmitted ?
                    <h3> Thank you for submitting the form! </h3> :
                    <h3> Welcome, please complete the following form. </h3>
                }
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
                    {
                        passwordError ?
                        <p className='validation'>{passwordError}</p> :
                        ""
                    }
                    {
                        confirmPasswordError ?
                        <p className='validation'>{confirmPasswordError}</p> :
                        ""
                    }
                    <label>Password:</label>
                    <input className='formInput' type='password' value={password} onChange={handlePassword}/>
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input className='formInput' type='password' value={confirmPassword} onChange={handleConfirmPassword}/>
                </div>
            </form>
        </div>
    );
}

export default UserForm;