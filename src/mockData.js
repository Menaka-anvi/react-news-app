// src/mockData.js

const mockArticles = [
  {
    source: { name: "Mock Times" },
    author: "Jane Doe",
    title: "Sample Headline for Demo",
    description: "This is a mock description of a news article.",
    url: "https://example.com/article1",
    urlToImage: "https://via.placeholder.com/300x200",
    publishedAt: "2026-07-12T10:00:00Z",
    content: "This is the full mock content for demo purposes."
  },
  {
    source: { name: "Demo News" },
    author: "John Smith",
    title: "Another Demo Headline",
    description: "This is another mock article for recruiters to see.",
    url: "https://example.com/article2",
    urlToImage: "https://via.placeholder.com/300x200",
    publishedAt: "2026-07-12T11:00:00Z",
    content: "Additional mock content goes here for demo."
  },
  {
    source: { name: "Recruiter Daily" },
    author: "Alice Johnson",
    title: "Third Demo Article",
    description: "Showing multiple articles makes the feed look real.",
    url: "https://example.com/article3",
    urlToImage: "https://via.placeholder.com/300x200",
    publishedAt: "2026-07-12T12:00:00Z",
    content: "Recruiters can scroll through several mock headlines."
  },
  {
    source: { name: "Career News" },
    author: "Bob Lee",
    title: "Fourth Demo Headline",
    description: "This mock article demonstrates pagination.",
    url: "https://example.com/article4",
    urlToImage: "https://via.placeholder.com/300x200",
    publishedAt: "2026-07-12T13:00:00Z",
    content: "Pagination buttons will still work with mock data."
  }
];

export default mockArticles;
