// This component only for the parallel route. 
import { ReactNode } from "react";

function NewsDetailLayout({ children, modal }: { children: ReactNode, modal: ReactNode }) {
  return <>
    {modal}
    {children}
  </>;
}

export default NewsDetailLayout;