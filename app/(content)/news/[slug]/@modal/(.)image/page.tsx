'use client';

/**
 * [IMPORTANT] - intercepting route & parallel route
 * Please, find next_js_parallel_intercepting_routes_guide.md in the project
 * `..` should not use to intercept /image folder. It is a url base, not a fold structure base.
 * @modal is a virtual house to contain the intercepting route.
 * Hence, (.)image folder ignores @modal folder location.
  
  The lecture said, "These parallel route folders like @modal @archive @latest
  please do not add anything to the URL. They are just there to organize the files
  in a certain way NextJS expects.

  However regarding for `(.)image` folder, since it's the URL path,
  that must be taken care of in the intercepting route folder name,
  we don't have to change that name if we move it into such a parallel route folder.
  "

  The advantage of this?
*/


// Only for internal routing. Then this page is intercepted alternatively
// instead of `image` page.
// This page is is not activated when reloading page.

// It is useful when it combines with parallel routes
import { DUMMY_NEWS } from "@/dummy-data";
import { notFound } from "next/navigation";
import { useRouter } from "next/navigation";
import { Suspense } from "react";
import { use } from "react";

export type NewsImagePropsIntercepting = {
  params: Promise<{ slug: string }>;
}

// `async` is only in the SERVER SIDE COMPONENT!
// The client side component does not support `async` component.
// async function NewsImageIntercepting
function NewsImageIntercepting({ params }: NewsImagePropsIntercepting) {
  const router = useRouter();
  // [IMPORTANT]
  // ONLY IN the SERVER SIDE COMPONENT!
  // const { slug } = await params;

  // React 19 — use() API
  // React 19의 use()는 Context와 Promise의 값을 읽기 위한 API입니다.

  // 1. use(Context) — 조건부 Context 접근
  // 기존 useContext()와 달리 조건문 안에서도 호출할 수 있습니다.

  /*
    function Component({ enabled }) {
      if (enabled) {
        const theme = use(ThemeContext);
        console.log(theme);
      }

      return <div>Hello</div>;
    }
  */

  //   2. use(Promise) — Promise 결과 읽기
  // async/await 없이 Promise의 결과를 읽고 Suspense와 연동할 수 있습니다.

  /*
    import { use, Suspense } from 'react';

    function User({ userPromise }) {
      const user = use(userPromise);

      return <h1>{user.name}</h1>;
    }

    function App({ userPromise }) {
      return (
        <Suspense fallback={<p>Loading...</p>}>
          <User userPromise={userPromise} />
        </Suspense>
      );
    }
  */
  const { slug } = use(params);
  const newsItem = DUMMY_NEWS.find((news) => news.slug === slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
          />
        </div>
      </dialog>
    </>
  )
}

function NewsImageInterceptingPage({ params }: NewsImagePropsIntercepting) {
  return <Suspense>
    <NewsImageIntercepting params={params}/>
  </Suspense>
}

export default NewsImageInterceptingPage;
