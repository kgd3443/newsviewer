import { useParams } from "react-router-dom";
import Categories from "./Categories";
import NewsList from "./NewsList";

export default function NewsPage() {
  const params = useParams();
  const categoryFromUrl = params.category ?? "all";

  return (
    <>
      <Categories />
      <NewsList category={categoryFromUrl} />
    </>
  );
}
