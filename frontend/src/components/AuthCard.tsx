import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AuthCard() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        if(!email || !password) {
            setError("Email and password are required");
            return;
        }
        if(!email.includes("@")) {
            setError("Invalid email format");
            return;
        }
        try {
            const response = await axios.post(
                "http://localhost:8080/auth/login",
                {
                    email,
                    password
                },
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )

            // Supondo que o backend retorne um token
            const { token } = response.data
            console.log(token)

            // Salva o token no local storage ou cookies
            localStorage.setItem("authToken", token)

            // Redireciona para página inicial
            navigate("/home")

        } catch(err) {
            setError("Login failed");
            console.log(err);
        }
    }

    const handleRegister = async () => {
        if(!firstName || !lastName || !email || !password) {
            setError("All fields are required");
            return;
        }
        if(!email.includes("@")) {
            setError("Invalid email format");
            return;
        }
        try {
            const fullName = `${firstName} ${lastName}`;
            const response = await axios.post(
                "http://localhost:8080/auth/register",
                {
                    fullName,
                    email,
                    password
                },
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )

            const { token } = response.data;
            console.log(token)

            // Salve o token no localStorage ou cookies
            localStorage.setItem("authToken", token);

            // Redirecione para a página inicial ou dashboard
            navigate("/home");

        } catch(err) {
            setError("Registration failed");
            console.log(err)
        }
    }

    return (
        <div className="flex flex-col items-center justify-center p-8 rounded-8px shadow-md w-full max-w-md bg-gray-500">
            <h3>Echo App</h3>
            <div className="flex">
                <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="error-message">{error}</p>}
            <button
                className=" bg-btn-blue text-white px-4 py-2 rounded-b-sm cursor-pointer text-xl transition duration-200 w-full h-12 hover:bg-hover-btn-bg"
                onClick={handleLogin}
            >
                Register
            </button>
        </div>
    )
}

export default AuthCard;