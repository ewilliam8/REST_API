async function getPosts() {
    let res = await fetch('https://jsonplaceholder.typicode.com/posts');
    let posts = await res.json();

    // console.log(posts[1].title);
    posts.forEach((post) => {
        document.querySelector('.post-list').innerHTML += `
        <div class="card" style="width: 18rem; margin: 0.5rem">
            <div class="card-body">
                <h5 class="card-title">${post.title}</h5>
                <p class="card-text">${post.body}</p>
                <a href="#" class="card-link">Подробнее</a>
            </div>
        </div>
        `
    });
}

getPosts();





