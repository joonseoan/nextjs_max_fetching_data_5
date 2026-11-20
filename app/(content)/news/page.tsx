// 'use client'

import { NewsProps } from '@/dummy-data';
import NewsList from "@/components/news/news-list";
import { Suspense } from 'react';
// import { NewsListProps } from "@/components/news/news-list";
// import { useState } from "react";
import { getAllNews } from '@/lib/news';
import NewsLoading from './loading';

async function News() {
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [err, setError] = useState<string>('');
  // const [news, setNews] = useState<NewsProps[]>([]);

  // [Fetching option 1].
  // Use React hook such as useEffect.
  // However, we need to switch this component to the client side component
  // which is `use client`
  // It is not the best way!

  // [Fetching option 2].
  // By default and as long as it the the server side, it is
  // the server component in React.
  // In the server component, we can fetch the data directly inside of
  // this component with `async` function.
  // It will give us the SEO

  let dummyNews: NewsProps[] = [];
  // 2) Fetching data from inside NextJS
  try {
    dummyNews = await getAllNews() as NewsProps[];
  } catch (err) {
    
  } finally {
    // setIsLoading(false);
  }


  // 1) Fetch data from outside NextJS
  // try {
  //   // 
  //   const response = await fetch('http://localhost:8080/news');
    
  //   if (!response.ok) {
  //     throw new Error('Failed to fetch news data.');
  //     // setError('The unexpected error occurs');
  //   }

  //   dummyNews = await response.json() as NewsProps [];
  // } catch (err) {
    
  // } finally {
  //   // setIsLoading(false);
  // }

  console.log('dummyNews: ', dummyNews)


  return <>
      <h1>News Page</h1>
      {dummyNews.length && <NewsList news={dummyNews} />}
  </>
}

// [IMPORTANT]
// Must use this for the Promise-based component as same as the component with `params`
function NewsPage() {
  return  <News />
  // return <Suspense fallback={<NewsLoading/>}>
    // <News />
  // </Suspense>
}

export default News;