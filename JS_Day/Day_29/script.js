// Elements
const loginForm = document.getElementById('login-form');
const postForm = document.getElementById('post-form');
const loginSection = document.getElementById('login-section');
const postSection = document.getElementById('post-section');
const postsFeed = document.getElementById('posts-feed');
const postsContainer = document.getElementById('posts-container');

// Logged-in user
let currentUser = null;

// Posts array
const posts = [];

// Handle Login
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (you can replace this with actual authentication logic)
    if (username && password) {
        currentUser = username;
        localStorage.setItem('currentUser', username);

        alert(`Welcome, ${username}!`);
        loginSection.classList.add('hidden');
        postSection.classList.remove('hidden');
        postsFeed.classList.remove('hidden');
    } else {
        alert('Please enter valid credentials.');
    }
});

// Handle Post Creation
postForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const content = document.getElementById('post-content').value;
    const imageInput = document.getElementById('post-image');
    const image = imageInput.files[0] ? URL.createObjectURL(imageInput.files[0]) : null;

    const newPost = {
        username: currentUser,
        content,
        image,
        likes: 0,
        comments: [],
        timestamp: new Date().toLocaleString(),
    };

    posts.unshift(newPost); // Add post to the start of the array
    displayPosts();
    postForm.reset();
});

// Display Posts
function displayPosts() {
    postsContainer.innerHTML = ''; // Clear posts container

    posts.forEach((post, index) => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        postElement.innerHTML = `
            <h3>${post.username}</h3>
            <p>${post.content}</p>
            ${post.image ? `<img src="${post.image}" alt="Post image" />` : ''}
            <p><small>${post.timestamp}</small></p>
            <button onclick="likePost(${index})">Like (${post.likes})</button>
            <button onclick="commentPost(${index})">Comment</button>
            <div class="comments">
                ${post.comments.map((comment) => `<p>${comment}</p>`).join('')}
            </div>
        `;

        postsContainer.appendChild(postElement);
    });
}

// Handle Like
function likePost(index) {
    posts[index].likes += 1;
    displayPosts();
}

// Handle Comment
function commentPost(index) {
    const comment = prompt('Enter your comment:');
    if (comment) {
        posts[index].comments.push(comment);
        displayPosts();
    }
}

// Auto-login if user exists in localStorage
window.onload = () => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
        currentUser = storedUser;
        loginSection.classList.add('hidden');
        postSection.classList.remove('hidden');
        postsFeed.classList.remove('hidden');
    }
};
