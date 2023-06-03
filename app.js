const card = document.querySelector(".row");
const postUI = (posts) => {
    let result = "";
    posts.forEach((post) => {
        result += `

                   <div class="col-md-3">
                <div class="card mt-4">
                    <div class="card-title">
                        <span class="post-id">Post ıd: <b>${post.id}</b></span>
                        <h5 class="post-title">${post.title}</h5>
                    </div>
                    <div class="card-body">
                        <p class="post-content">${post.body}</p>
                        <button class="btn btn-info">Read More</button>
                    </div>
                </div>

            </div>

         `;

        card.innerHTML = result;
    });
};

///1. Yöntem Ajax
/*
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
xhr.onload = function() {
    const response = xhr.responseText;
    const data = JSON.parse(response);
    postUI(data);
};
xhr.send();
*/

/*2.Yöntem Fetch
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => postUI(data))
    .catch(error => console.log(error));
    */


///3. yöntem Async await
const getData = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    postUI(data)

}
getData();