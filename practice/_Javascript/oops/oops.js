const blogPost = new Object();

blogPost.title = 'My life is shit';
blogPost.category = 'failures';
blogPost.content = 'hahahaha no comment';

console.log(blogPost.title);
console.log(blogPost.category);
console.log(blogPost.content);

console.log(typeof blogPost);
console.log(JSON.stringify(blogPost));