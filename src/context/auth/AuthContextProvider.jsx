import { useState } from "react"
import AuthContext from "./AuthContext"

const AuthContextProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <AuthContext value={{ isLoggedIn, setIsLoggedIn }}>{children}</AuthContext>
    )
}

export default AuthContextProvider;