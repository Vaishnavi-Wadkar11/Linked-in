import { auth, provider } from "../firebase";

// Action to handle sign-in with Google
export function signInAPI() {
    return (dispatch) => {
        auth.signInWithPopup(provider)
            .then((result) => {
                // Handle sign-in success here
                console.log(result);
                // Dispatch user info or token if needed
            })
            .catch((error) => {
                alert(error.message); // Handle errors here
            });
    };
}

// Action to handle user authentication state
// export function getUserAuth() {
//     return (dispatch) => {
//         auth.onAuthStateChanged(async (user) => {
//             if (user) {
//                 dispatch(setUser(user)); // Dispatch an action to set the user in the store
//             }
//         });
//     };
// }

// Example action to set the user (you need to define this action)
export const setUser = (user) => ({
    type: "SET_USER",
    user: user,
});
