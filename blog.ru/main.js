const api_url = 'http://api.blog.ru/posts';

async function getPosts() {
    let res = await fetch(api_url);
    let posts = await res.json();

    document.querySelector('.post-list').innerHTML = '';

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

async function addPost () {
    const title = document.getElementById('exampleInputEmail1').value,
          body = document.getElementById('exampleInputPassword1').value;

    let formData = new FormData();
    formData.append('title', title);
    formData.append('body', body);

    let res = await fetch(api_url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(formData)
    });

    let data = await res.json();
    console.log(data);

    if(data.stats === true) {
        await getPosts();
    }
}

getPosts();





