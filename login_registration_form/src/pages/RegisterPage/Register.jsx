import "./RegisterPage.css";
import {useState} from "react";
function Register() {

    const[name, setName] = useState("");
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");

    const register = () => {
        fetch('http://localhost:5129/api/Users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "username": username,
                "name": name,
                "password": password
            }),
        }).then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error(error));
    }

    return (
        <div className="App">

            <label htmlFor="">
                <div className="wrap_input">
                    Username <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    Name <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    Password <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className="Wrapper">
                    <button onClick={register}>Create an account!</button>
                </div>
            </label>
            <br/>

        </div>
    )
}

export default Register;