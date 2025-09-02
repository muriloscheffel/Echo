import { useState } from "react";
import axios from "axios";

function SetUsernameScreen() {
    const [username, setUsername] = useState("");
    const [error, setError] = useState("");

    const handleSetUsername = async () => {
        if(!username) {
            setError("Username is required")
            return
        }
        try {
            const response = await axios.post(
                "http://localhost:8080/auth/changeusername",
                {
                    username
                },
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )

        } catch(err) {
            console.log(err)
            setError("Failed setting username")
        }
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button
                className=" bg-btn-blue text-white px-4 py-2 rounded-b-sm cursor-pointer text-xl transition duration-200 w-full h-12 hover:bg-hover-btn-bg"
                onChange={handleSetUsername}
            />
        </div>
    )
}

export default SetUsernameScreen;