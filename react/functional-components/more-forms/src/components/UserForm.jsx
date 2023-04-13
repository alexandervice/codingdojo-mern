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
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    // // alternate option (make sure your label has an htmlFor and the input has a name)
    // const [user, setUser] = useState({
    //     firstName: "",
    //     lastName: "",
    //     email: "",
    //     password: "",
    //     confirmPassword: ""
    // })

    // const changeUser = (e) => {
    //     setUser({...user, [e.target.name]: e.target.value})
    // }

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
                    <label htmlFor='firstName'>First Name:</label>
                    <input name='firstName' className='formInput' type='text' value={firstName} onChange={handleFirstName}/>
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
                        confirmPassword !== password ?
                        <p className='validation'>Passwords must match.</p> :
                        ""
                    }
                    <label>Password:</label>
                    <input className='formInput' type='password' value={password} onChange={handlePassword}/>
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input className='formInput' type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                </div>

                {/* <input className='submitInput' type={formCompletion} value='Submit Form' /> */}
            </form>
            <h4>Your Form Data:</h4>
            <div className='PersonCard'>
                <p>First Name:<b> {firstName}</b> </p>
                <p>Last Name:<b> {lastName}</b> </p>
                <p>Email:<b> {email}</b> </p>
                <p>Password:<b> {password}</b> </p>
                <p>Confirm Password:<b> {confirmPassword}</b> </p>
            </div>
        </div>
    );
}

export default UserForm;