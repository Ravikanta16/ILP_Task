let editIndex = null;

function loadBlogs() {
  const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
  const blogList = document.getElementById('blogList');
  blogList.innerHTML = '';

  blogs.forEach((blog, index) => {
    const blogDiv = document.createElement('div');
    blogDiv.className = 'blog';
    blogDiv.innerHTML = `
      <h3>${blog.title}</h3>
      <p>${blog.content}</p>
      <div class="actions">
        <button onclick="editBlog(${index})">Edit</button>
        <button onclick="deleteBlog(${index})">Delete</button>
      </div>
    `;
    blogList.appendChild(blogDiv);
  });
}

function saveBlog() {
  const title = document.getElementById('title').value.trim();
  const content = document.getElementById('content').value.trim();

  if (!title || !content) {
    alert('Please fill both title and content');
    return;
  }

  let blogs = JSON.parse(localStorage.getItem('blogs')) || [];

  if (editIndex !== null) {
    blogs[editIndex] = { title, content };
    editIndex = null;
  } else {
    blogs.push({ title, content });
  }

  localStorage.setItem('blogs', JSON.stringify(blogs));
  clearForm();
  loadBlogs();
}

function editBlog(index) {
  const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
  document.getElementById('title').value = blogs[index].title;
  document.getElementById('content').value = blogs[index].content;
  editIndex = index;
}

function deleteBlog(index) {
  let blogs = JSON.parse(localStorage.getItem('blogs')) || [];
  blogs.splice(index, 1);
  localStorage.setItem('blogs', JSON.stringify(blogs));
  loadBlogs();
}

function clearForm() {
  document.getElementById('title').value = '';
  document.getElementById('content').value = '';
  editIndex = null;
}

window.onload = loadBlogs;
