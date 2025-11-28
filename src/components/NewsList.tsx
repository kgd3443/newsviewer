import { useState, useEffect } from "react";
import styles from "./NewsList.module.css";
import NewsItem from "./NewsItem";
import axios from "axios";

export default function NewsList() {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          // TODO API Key 입력
          "https://newsapi.org/v2/top-headlines?country=us&apiKey={API KEY}"
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <div className={styles.newsListBlock}>Loading...</div>;
  }

  if (!articles) {
    return null;
  }

  return (
    <div className={styles.newsList}>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </div>
  );
}
