import React, {useState} from 'react';

const PersonCard = (props) => {
    const [age, setAge] = useState(props.age);

    const birthdayClick = () => {
        setAge(+age+1)
    };
    return (
        <div className='PersonCard'>
            <h2>{props.lastName}, {props.firstName}</h2>
            <p>Age: {age}</p>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick={birthdayClick}> Birthday Button for {props.firstName} {props.lastName} </button>
        </div>
    );
}

export default PersonCard;