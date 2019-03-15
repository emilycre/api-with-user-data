const config = {
    apiKey: "AIzaSyCGgezVBbMTimo0rKwccTp_LhP7T_-4718",
    authDomain: "weatherwebapp-2d13f.firebaseapp.com",
    databaseURL: "https://weatherwebapp-2d13f.firebaseio.com",
    projectId: "weatherwebapp-2d13f"
};

firebase.initializeApp(config);

const database = firebase.database();
export const usersRef = database.ref('users');
export const favoritesByUserRef = database.ref('favorites-by-user');
export const auth = firebase.auth();
