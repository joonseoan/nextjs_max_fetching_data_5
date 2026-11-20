// BACKEND!!!

import sql from 'better-sqlite3';
import { DUMMY_NEWS, NewsProps } from '@/dummy-data';

const db = sql('data.db');

// Basically, it is sync function. We do not need to implement `async` here. 
export async  function getAllNews() {
  // In NextJS server (NOT SEPERATE SERVER), it directly fetches news data
  // from the database.
  const news = db.prepare('SELECT * FROM news').all();
  await new Promise((resolve, reject) => { setTimeout(resolve, 2000) });
  return news;
  // return DUMMY_NEWS;
}

export async function getLatestNews() {
  return DUMMY_NEWS.slice(0, 3);
}

export function getAvailableNewsYears() {
  return DUMMY_NEWS.reduce((years: number[], news: NewsProps) => {
    const year = new Date(news.date).getFullYear();

    if (!years.includes(year)) {
      years.push(year);
    }

    return years;
  }, []).sort((a, b) => b - a);
}

export function getAvailableNewsMonths(year: string) {
  return DUMMY_NEWS.reduce((months: number[], news: NewsProps) => {
    const newsYear = new Date(news.date).getFullYear();

    if (newsYear === +year) {
      const month = new Date(news.date).getMonth();
      if (!months.includes(month)) {
        months.push(month + 1);
      }
    }

    return months;
  }, []).sort((a, b) => b - a);
}

export function getNewsForYear(year: string) {
  return DUMMY_NEWS.filter(
    (news) => new Date(news.date).getFullYear() === +year
  );
}

export function getNewsForYearAndMonth(year: string, month: string) {
  return DUMMY_NEWS.filter((news) => {
    const newsYear = new Date(news.date).getFullYear();
    const newsMonth = new Date(news.date).getMonth() + 1;
    return newsYear === +year && newsMonth === +month;
  });
}
