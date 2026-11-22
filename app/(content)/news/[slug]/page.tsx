// export const dynamic = 'force-dynamic';
import { DUMMY_NEWS, NewsProps } from '@/dummy-data';
import { getNewsItem } from '@/lib/news';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

export type NewsDetailPageProps = {
  params: Promise<{ slug: string }>;
};

async function NewsDetail({ params }: NewsDetailPageProps) {
  const { slug } = await params;
  // Since we use NextJS server
  const newsDetail = await getNewsItem(slug) as NewsProps;
  // const newsDetail = DUMMY_NEWS.find((newsDetail) => newsDetail?.slug === slug);

  if (!newsDetail) {
    notFound();
  }

  return <>
    <article className='news-article'>
      <header>
        <Link href={`/news/${slug}/image`}>
          <img src={`/images/news/${newsDetail?.image}`} alt={newsDetail?.title} /> 
        </Link>
        <h1>{newsDetail?.title}</h1>
        <time dateTime={newsDetail?.date}>{newsDetail?.date}</time>
      </header>
    </article>
    <h1>{newsDetail?.content}</h1>
  </>
}

function NewsDetailPage({ params }: NewsDetailPageProps) {
  // [IMPORTANT!]
  // Even it is covered by `loading.ts`, it should not implement the bare children component
  // without `<Suspense />`. The component fetching data the the async function in the server side
  // does not know which data is coming here and then which data should be rendered in this component.
  // return <NewsDetail params={params} />
  
  // Hence, `loading.ts` does not work here due to `fallback` prop.
  return <Suspense fallback={<p>Loading...</p>}>
    <NewsDetail params={params} />
  </Suspense>
}

export default NewsDetailPage;
