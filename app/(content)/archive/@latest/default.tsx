// Since we does not implement [year] slug as same as the way of archive page,
// we need to set `default.tsx` here.
// Then we can delete `@latest/page.tsx`
// because this page will be a role of `page.tsx`

import NewsList from "@/components/news/news-list";
import { NewsProps } from "@/dummy-data";
import { getLatestNews } from "@/lib/news";
import { Suspense } from "react";

async function LatestNews() {
  const latestNews = await getLatestNews() as NewsProps[];

  return <>
    <h2>Latest News</h2>
    <NewsList news={latestNews} />
  </>
}

function LatestNewsPage() {
  return <Suspense fallback={<p>Latest news coming...</p>}>
    <LatestNews />
  </Suspense>
}

export default LatestNewsPage;
