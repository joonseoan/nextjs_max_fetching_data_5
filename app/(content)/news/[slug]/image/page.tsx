import { DUMMY_NEWS, NewsProps } from "@/dummy-data";
import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export type NewsImageProps = {
  params: Promise<{ slug: string }>;
}

async function NewsImage({ params }: NewsImageProps) {
  const { slug } = await params;
  // const newsItem = DUMMY_NEWS.find((news) => news.slug === slug);
  const newsItem = await getNewsItem(slug) as NewsProps;


  if (!newsItem) {
    notFound();
  }

  return <div className="fullscreen-image">
    <img
      src={`/images/news/${newsItem.image}`}
      alt={newsItem.title}
    />
  </div>
}

function NewsImagePage({ params }: NewsImageProps) {
  return <Suspense fallback={<p>Reloading..</p>}>
    <NewsImage params={params}/>
  </Suspense>
}

export default NewsImagePage;