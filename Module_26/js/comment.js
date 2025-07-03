document.getElementById('post-add').addEventListener('click', function(){
    const commentBox = document.getElementById('comment-box');
    const newComment = commentBox.value;
    // console.log(newComment)

    const commentContainer = document.getElementById('comment-container')
    const p = document.createElement('p');
    p.innerText = newComment;
    commentContainer.appendChild(p)
    commentBox.value = ''
})