function postA() {
  alert(`Hello!`);
}

function postB() {
  alert(`Bye!`);
}

export {postA, postB};

module.exports = {
getPosts(req, res) {
},
addPost(req, res) {
},
updatePost(req, res) {
},
removePost(req, res) {
}
}
