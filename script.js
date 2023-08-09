// script.js
// 페이크된 접속자 목록
const fakeUsernames = ["나비", "바둑이", "고양이", "뭉멍"];

// 접속자 목록을 업데이트하는 함수
function updateOnlineUsers() {
    const userContainer = document.getElementById("user-list");
    userContainer.innerHTML = ""; // 기존 목록 초기화

    fakeUsernames.forEach(username => {
        const userItem = document.createElement("li");
        userItem.textContent = username;
        userContainer.appendChild(userItem);
    });
}

// 초기화 및 업데이트
document.addEventListener("DOMContentLoaded", () => {
    updateOnlineUsers();
});
// script.js
document.addEventListener("DOMContentLoaded", function() {
    const postForm = document.getElementById("create-post-form");
    const postList = document.getElementById("post-list");

    postForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const titleInput = document.getElementById("post-title");
        const contentInput = document.getElementById("post-content");

        const title = titleInput.value;
        const content = contentInput.value;

        if (title && content) {
            createPost(title, content);
            titleInput.value = "";
            contentInput.value = "";
        }
    });

    function createPost(title, content) {
        const postContainer = document.createElement("div");
        postContainer.className = "post-container";

        const postTitle = document.createElement("h3");
        postTitle.textContent = title;

        const postContent = document.createElement("p");
        postContent.textContent = content;

        postContainer.appendChild(postTitle);
        postContainer.appendChild(postContent);

        postList.appendChild(postContainer);
    }
});