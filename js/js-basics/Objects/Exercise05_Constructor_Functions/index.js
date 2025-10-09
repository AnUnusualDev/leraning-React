
function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

let post1 = new Post(
    "Buongiorno im Soggiorno",
    "Das ist ein wundervoller Text",
    "Jonas Miejski"
);

console.log(post1);
