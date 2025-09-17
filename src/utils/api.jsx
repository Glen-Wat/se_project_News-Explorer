import { saveArticle, removeArticle, getSavedArticles } from "./localStorage";

// Initial mock articles for development
const articles = [
  {
    isSaved: true,
    title: "Gizmodos Best of IFA 2025 Awards: See the Winners",
    url: "https://gizmodo.com/best-of-ifa-2025-awards-winners-2000654651",
    urlToImage:
      "https://gizmodo.com/app/uploads/2025/09/Gizmodo-IFA-2025-Featured-Image-1-960x640.jpg",
    keyword: "Technology",
    content: "This is the tech that most impressed us at IFA 2025 in Berlin.",
    pubDate: " Updated September 8, 2025",
    author: "Gizmodo Staff",
  },
  {
    isSaved: true,
    title:
      "Robinhood Is Building a Social Network for Following Market Movers Trades",
    url: "https://gizmodo.com/robinhood-launches-social-feed-stock-trades-2000656886",
    urlToImage:
      "https://gizmodo.com/app/uploads/2025/09/robin_hood-960x640.jpg",
    keyword: "Finance",
    content: "Robinhood is jumping on the finance influencer bandwagon",
    pubDate: "September 10, 2025",
    author: "Ece Yildirim",
  },
].map((article) => ({ ...article, _id: crypto.randomUUID() }));

// 💡 Initialize localStorage with mock data ONCE if empty
if (!getSavedArticles().length) {
  localStorage.setItem("news-articles", JSON.stringify(articles));
}

// Get saved articles (used in /saved-articles)
const getArticles = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const savedArticles = getSavedArticles();
      resolve(savedArticles);
    }, 500);
  });
};

// Save or remove article
const saveArticles = async ({ isSaved, article }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const success = isSaved
        ? saveArticle(article)
        : removeArticle(article.url);
      resolve(success);
    }, 500);
  });
};

export { getArticles, saveArticles };
