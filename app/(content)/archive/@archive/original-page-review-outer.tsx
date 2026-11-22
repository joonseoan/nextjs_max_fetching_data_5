import { getAvailableNewsYears } from "@/lib/news";
import Link from "next/link";
import { Suspense } from "react";

async function ArchiveLinks() {
  const links = await getAvailableNewsYears();

  return <header id="archive-header">
    <nav>
      <ul>
        {
          links.map((link) => (
            <li key={link}>
              <Link href={`/archive/${link}`}>{link}</Link>
            </li>
          ))
        }
      </ul>
    </nav>
  </header>
}

function Archive() {
  return <Suspense fallback={<p>Loading Archive...</p>}>
    <ArchiveLinks />
  </Suspense>
}

export default Archive;