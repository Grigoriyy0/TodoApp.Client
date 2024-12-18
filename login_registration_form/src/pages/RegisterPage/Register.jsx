import "./RegisterPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Register() {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [successMessage, setSuccessMessage] = useState(""); // State for success message
    const [errorMessage, setErrorMessage] = useState(""); // State for error message
    const navigate = useNavigate(); // Initialize useNavigate

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
        })
            .then((response) => {
                if (!response.ok) {
                    // If the response is not OK, throw an error
                    return response.json().then(errData => {
                        throw new Error(errData.message || 'Registration failed'); // Use the error message from the response
                    });
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setSuccessMessage("successful, redirecting to the login page"); // Set success message
                setErrorMessage(""); // Clear any previous error message
                setTimeout(() => {
                    navigate('/login'); // Redirect to login page after 2 seconds
                }, 2000);
            })
            .catch((error) => {
                console.error(error);
                setErrorMessage(error.message); // Set the error message
                setSuccessMessage(""); // Clear any previous success message
            });
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

            {successMessage && <div className="success-message">{successMessage}</div>} {/* Display success message */}
            {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Display error message */}
        </div>
    );
}

export default Register;