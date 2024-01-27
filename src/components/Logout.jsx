import React from "react";
import firebase from "firebase/app";
import "firebase/auth";


const Logout = () => {
    const handleLogout = async () => {
        try {
        await firebase.auth().signOut();
        console.log("User logged out successfully");
        } catch (error) {
        console.error("Error logging out:", error.message);
        }
    };

    return (
        <div>
        <button onClick={handleLogout}>Log Out</button>
        </div>
    );
};

export default Logout;
