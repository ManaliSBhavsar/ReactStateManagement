import { useContext, useState } from "react";
import {UserContext} from "../context/UserContext";

function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const userContext = useContext(UserContext);
    if (!userContext) {
        throw new Error("useContext must be used within a UserProvider");
    }
    const { setUser } = userContext;
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setUser({userName, password});
    }
    return (
        <div>
            <h1>Login</h1>
            <input 
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Username"
            />
            <input 
            type="password"
            value={password}
            onChange= {(e) => setPassword(e.target.value)}
            placeholder="Password"
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Login
