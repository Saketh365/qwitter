var firebaseConfig = {
apiKey: "AIzaSyBmtR_71DteI_IKejlEcq_UuzKv7-MLXAg",
authDomain: "qwitter-3945e.firebaseapp.com",
databaseURL: "https://qwitter-3945e-default-rtdb.firebaseio.com",
projectId: "qwitter-3945e",
storageBucket: "qwitter-3945e.appspot.com",
messagingSenderId: "815025503310",
appId: "1:815025503310:web:0dd31cc458f527f742971f",
measurementId: "G-X15ER2L34P"
};
firebase.intializeApp(firebaseConfig);
function addUser()
{
    user_name = document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
purpose : "adding user"
});
}