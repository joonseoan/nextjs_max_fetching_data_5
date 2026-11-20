// Must implement `default.tsx`, not `page.tsx`
/**
 * 
 * default.tsx는 Fallback입니다.

하지만 Fallback이 선택되면 다른 슬롯(children)과 함께 렌더링됩니다.

예를 들어:
return (
  <>
    {children}
    {modal}
  </>
);

- modal/page.tsx가 매칭되면 → modal에 해당 페이지가 렌더링됩니다.
- 매칭되는 페이지가 없고 Fallback이 필요하면 → modal에 default.tsx가 렌더링됩니다.
- default.tsx가 null을 반환하면 → 아무것도 표시되지 않습니다.
- default.tsx가 <h1>Hello</h1>을 반환하면 → children과 함께 Hello가 표시됩니다.
  핵심: default.tsx와 @modal의 실제 페이지가 동시에 렌더링되는 것은 아닙니다. 둘 중 하나가 선택됩니다
 */
function ModalDefaultPage() {
  return null;
}

export default ModalDefaultPage;