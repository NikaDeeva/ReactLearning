import { useState } from "react";

function LoginState() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showProfile, setShowProfile] = useState(false);

    return (
        <div>

            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                {isLoggedIn ? "Log out" : "Log in"}
            </button>

            {isLoggedIn && (
                <div>
                    <p>Welcome back! You are logged in</p>
                    <p>Secret content</p>

                    <button onClick={() => setShowProfile(!showProfile)}>
                        {showProfile ? "Hide details" : "Show details"}
                    </button>

                    {showProfile && (
                        <div>
                            <p>Name: Arina</p>
                            <p>Student: yeahhh brooooo</p>
                            <p>67: cringe for her</p>
                        </div>
                    )}
                    <button onClick={() => setIsLoggedIn(false)}>Log out</button>
                </div>
            )}
            {!isLoggedIn && (
                <div>
                    <p>You are logged out</p>
                    <button onClick={() => setIsLoggedIn(true)}>Log in</button>
                </div>
            )}

        </div>
    );
}

export default LoginState;