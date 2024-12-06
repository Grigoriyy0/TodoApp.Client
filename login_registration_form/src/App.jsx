import "./App.css";
import {useState} from "react";
function App() {

    const[name, setName] = useState("");
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");

    const register = () => {
        fetch('http://localhost:3001/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                name: name,
                password: password,
            }),
        });
    }

    return (
        <div className="App">

            <label htmlFor="">
                Username <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                Name <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                Password <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <div className="Wrapper">
                    <button onClick={register}>Create an account!</button>
                </div>
            </label>
            <br/>

        </div>
    )
}

export default App;