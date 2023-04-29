import { useState } from 'react'

const Home = () => {
    const [name, setName] = useState('sam');
    const [age, setAge] = useState(25);

    const handleClick = (e) => {
        setName('hritik');
        setAge(24);
    }

    return (
        <div className="home">
            <h2>HomePage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>click me</button>
        </div>
    );
}

export default Home;