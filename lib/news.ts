// BACKEND!!!
// [After using NextJS Backend]
import sql from 'better-sqlite3';

const db = sql('data.db');

export async function getAllNews() {
  const news = db.prepare('SELECT * FROM news').all();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return news;
}

export async function getNewsItem(slug: string) {
  const newsItem = db.prepare('SELECT * FROM news WHERE slug = ?').get(slug);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return newsItem;
}

export async function getLatestNews() {
  const latestNews = db
    .prepare('SELECT * FROM news ORDER BY date DESC LIMIT 3')
    .all();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return latestNews;
}

export async function getAvailableNewsYears() {
  const years = db
    .prepare("SELECT DISTINCT strftime('%Y', date) as year FROM news")
    .all()
    .map((year) => (year as { year: string }).year);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return years;
}

export function getAvailableNewsMonths(year: string) {
  return db
    .prepare(
      "SELECT DISTINCT strftime('%m', date) as month FROM news WHERE strftime('%Y', date) = ?"
    )
    .all(year)
    .map((month) => (month as { month: string }).month);
}

export async function getNewsForYear(year: string) {
  const news = db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? ORDER BY date DESC"
    )
    .all(year);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return news;
}

export async function getNewsForYearAndMonth(year: string, month: string) {
  const news = db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ? ORDER BY date DESC"
    )
    .all(year, month);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return news;
}


// [Before using separate backend.]
// import sql from 'better-sqlite3';
// import { DUMMY_NEWS, NewsProps } from '@/dummy-data';

// const db = sql('data.db');

// // Basically, it is sync function. We do not need to implement `async` here. 
// export async  function getAllNews() {
//   // In NextJS server (NOT SEPERATE SERVER), it directly fetches news data
//   // from the database.
//   const news = db.prepare('SELECT * FROM news').all();
//   await new Promise((resolve, reject) => { setTimeout(resolve, 2000) });
//   return news;
//   // return DUMMY_NEWS;
// }

// export async function getLatestNews() {
//   return DUMMY_NEWS.slice(0, 3);
// }

// export function getAvailableNewsYears() {
//   return DUMMY_NEWS.reduce((years: number[], news: NewsProps) => {
//     const year = new Date(news.date).getFullYear();

//     if (!years.includes(year)) {
//       years.push(year);
//     }

//     return years;
//   }, []).sort((a, b) => b - a);
// }

// export function getAvailableNewsMonths(year: string) {
//   return DUMMY_NEWS.reduce((months: number[], news: NewsProps) => {
//     const newsYear = new Date(news.date).getFullYear();

//     if (newsYear === +year) {
//       const month = new Date(news.date).getMonth();
//       if (!months.includes(month)) {
//         months.push(month + 1);
//       }
//     }

//     return months;
//   }, []).sort((a, b) => b - a);
// }

// export function getNewsForYear(year: string) {
//   return DUMMY_NEWS.filter(
//     (news) => new Date(news.date).getFullYear() === +year
//   );
// }

// export function getNewsForYearAndMonth(year: string, month: string) {
//   return DUMMY_NEWS.filter((news) => {
//     const newsYear = new Date(news.date).getFullYear();
//     const newsMonth = new Date(news.date).getMonth() + 1;
//     return newsYear === +year && newsMonth === +month;
//   });
// }
