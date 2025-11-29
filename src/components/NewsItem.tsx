import styles from "./NewsItem.module.css";

export type Article = {
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
};

export default function NewsItem({ article }: { article: Article }) {
  const { title, description, url, urlToImage } = article;

  return (
    <div className={styles.newsItem}>
      {urlToImage && (
        <div className={styles.thumbnail}>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="thumbnail" />
          </a>
        </div>
      )}

      <div className={styles.contents}>
        <h2>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
