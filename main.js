function test(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;


    // var user = localStorage.setItem("username", username);
    // var em = localStorage.setItem("email", email);
    // var pass = localStorage.setItem("password", password);

    const obj = {
        username,
        email,
        password
    }
    localStorage.setItem(obj.email, JSON.stringify(obj));
    showUserOnScreen(obj);
}
function showUserOnScreen(obj){
    const parentElem = document.getElementById('listofitems');
    const childElem = document.createElement('li');
    childElem.textContent = obj.username + ' - ' + obj.email+ ' - '+ obj.password;
    parentElem.appendChild(childElem);
}