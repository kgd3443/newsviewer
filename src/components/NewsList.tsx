import { useState, useEffect } from "react";
import styles from "./NewsList.module.css";
import NewsItem from "./NewsItem";
import type { Article } from "./NewsItem";
import axios from "axios";


type NewsListProps = {
  category: string;
};

export default function NewsList({ category }: NewsListProps) {
  const [articles, setArticles] = useState<Article[] | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query =
          category === "all" ? "" : `&category=${category}`;

        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us${query}&apiKey=ad4f75ab641d4ab7bd295234efd94073`
        );

        setArticles(response.data.articles);
      } catch (e) {
        console.error(e);
      }
      setLoading(false);
    };

    fetchData();
  }, [category]);

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
