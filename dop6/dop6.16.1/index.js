const container = document.querySelector("#data-container");

const renderPost = async (postId) => {
  try {
    const postResponse = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    if (!postResponse.ok) {
      throw new Error("Ошибка запроса");
    }
    const postData = await postResponse.json();

    const commentResponse = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    );
    if (!commentResponse.ok) {
      throw new Error("Ошибка запроса");
    }
    const postComments = await commentResponse.json();

    const post = document.createElement("div");
    post.setAttribute("id", "post");
    post.classList.add("post");

    post.innerHTML = `
  <h1 class="post__title">${postData.title}</h1>
  <p class="post__text">${postData.body}</p>
  <b class="post__comments-text">Комментарии</b>
  <div class="post__comments">
  </div>
`;
    document.querySelector("body").append(post);

    const commentBlock = document.querySelector(".post__comments");
    postComments.forEach((element) => {
      console.log(element);
      const comment = document.createElement("div");
      comment.classList.add("post-comment");
      comment.innerHTML = `
  <span class="post-comment__author">${element.email}</span>
      <span class="post-comment__text">
      ${element.body}
      </span>
  `;
      commentBlock.append(comment);
    });
  } catch (error) {
    console.log("error", error);
  }
};

renderPost(1);
