// [IMPORTANT]
// Basically as long as we use parallel route, /news/[slug]/page.tsx
// should be inside this @detail folder. However, we use {children}
// not {detail} props in layout.tsx. Therefore, it passes all children
// directory there including `page.tsx` in  [slug] folder.
// And here, we do not have any ux scenario that shows the two routes
// at the same route. Then, we do not need to create @detail folder here.