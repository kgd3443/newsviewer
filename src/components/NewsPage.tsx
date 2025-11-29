import { useParams } from "react-router-dom";
import Categories from "./Categories";
import NewsList from "./NewsList";

type RouteParams = {
  category?: string;
};

export default function NewsPage() {
  const params = useParams<RouteParams>();
  const category = params.category ?? "all";

  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
}
