// This layout moves out to `(content)` and `(marketing)`
import { ReactNode, Suspense } from 'react';
import './globals.css';
// We do not want to implement `MainHeader` any more. The problem here is that that navigation
// is part of the root layout, so every page has it. So, what we want to achieve here is that
// we have different root layout for the starting page than for the rest of the this application.
// It can be achieved by adding `route group`.
// The `route group` can be created under app folder with peculiar `()` with any name like (content).
// It does not add anything to the URL path, unlike other folders like `@archive` or `news`
// Instead, it creates `route group` only which means we can now move routes into that folder.
// `Route group` now allows us to set up a dedicated layout.
// The route group can be also created in the nested page.
// Here we can create multiple groups like `(content)` and `(marketing)`
// The benefit of of `route group` is the dedicated layout.
// (marketing) is for the all marketing related page.

// [IMPORTANT]
// Please make sure that the group folders (content) and (marketing) are not relative
// to the paths.
// The starting page starts with (marketing)/page.tsx
import MainHeader from '@/components/main-header/main-header';

export const metadata = {
  title: 'Next.js Page Routing & Rendering',
  description: 'Learn how to route to different pages.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* <div id="page">
          <Suspense>
            <MainHeader />
          </Suspense>
          {children}
        </div> */}
      </body>
    </html>
  )
}
