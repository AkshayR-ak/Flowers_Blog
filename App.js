import React, { useState } from 'react';
import './App.css';
const BlogPost = ({ post }) => {
  const [showContent, setShowContent] = useState(false); return (
    <div className="blog-post">
      <h2 onClick={() => setShowContent(!showContent)}>{post.title}</h2>
      {showContent && (
        <>
          <p>{post.content}</p>
        </>
      )}
    </div>
  );
};
const BlogList = ({ posts }) => {
  return (
    <div className="blog-list">
      {posts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
};
const SearchBar = ({ onFilter }) => {
  const handleInputChange = (e) => {
    const filterValue = e.target.value; onFilter(filterValue);
  };
  return (
    <input type="text" placeholder="Search Here" onChange={handleInputChange} />
  );
};
function App() {
  const initialPosts = [
    {
      id: 1,
      title: 'Sunflowers',
      content: 'It is great timing that International Friendship Day falls right in the middle of sunflower season! These bright and cheerful blooms are full of positive meanings; friendship is one, but sunflowers also symbolise happiness, warmth, luck, and adoration. They are some of the best flowers to send to a friend to show how much you appreciate them.'
    },
    {
      id: 2, title: 'Rose',
      content: 'Roses are one of the most popular flowers by far, and they are available in practically every colour, with each shade offering its own unique meaning. If you are celebrating friendship, yellow roses are the top pick, as they symbolise friendship and joy. Pink roses also work well, as they tell someone you admire and appreciate them.'
    },
    {
      id: 3,
      title: 'Gerberas',
      content: 'These cute daisy-like blooms are always the perfect pick-me-up in any bouquet. They come in plenty of different colours and types; we love using the smaller germini varieties in our bouquets! Both orange and yellow gerbera daisies symbolise friendship, and their bright happy blooms are sure to put a smile on your friends face. Pink gerberas are another good choice, as they represent admiration and gratitude.'
    },
    {
      id: 4,
      title: 'Tulips',
      content: 'If you are looking for birthday flowers for a friend in spring, you cannot go wrong with tulips! Yellow tulips are our top pick colour-wise, as they represent happiness and friendship. Plus, in the Victorian language of flowers, they have got the cutest message of all: "there is sunshine in your smile." Pink tulips are also an apt choice for friends, as they symbolise affection, best wishes, and care.'
    },
  ];
  const [posts] = useState(initialPosts);
  const [filteredPosts, setFilteredPosts] = useState(posts); const handleFilter = (filterValue) => {
    const filtered = posts.filter((post) => post.title.toLowerCase().includes(filterValue.toLowerCase())
    );
    setFilteredPosts(filtered);
  };
  return (
    <div className="App">
      <h1>React Web Blog</h1>
      <h2>Flowers</h2>
      <SearchBar onFilter={handleFilter} />
      <BlogList posts={filteredPosts} />
    </div>
  );
}
export default App;
