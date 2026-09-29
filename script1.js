// tasks 
// 1. use "jsonplaceholder.typicode.com/users" inside fetch  method and display the data in the console. Then display the users using ul tag in the web page.
let display1 = document.getElementById("display1");
let data1 = fetch("https://jsonplaceholder.typicode.com/users");
data1.then((res) => {
    return res.json();
}).then((data1) => {
    console.log(data1);
    data1.forEach((user) => {
        let list = document.createElement("ul");
        list.innerHTML = `
        <li>${user.username}</li>
        `
        display1.appendChild(list)
    })
}).catch(error => {
    console.error('Error fetching data1:', error)
});





// 2. use same website and display only the first 10 posts not all the posts. Each post should show required fields that is title and body.
let display2 = document.getElementById("display2");
let data = fetch("https://jsonplaceholder.typicode.com/posts");
data.then((res) => {
    return res.json();
}).then((data) => {
    let count = 1;
    for (let i = 0; i < 10; i++) {
        // console.log(data[i]);
        display2.innerHTML += `
        <p>${count++}. Title is: ${data[i].title}</p>
        <p> Body is: ${data[i].body}</p>
        `
    }
}).catch(error => {
    console.error('Error fetching data:', error)
});

