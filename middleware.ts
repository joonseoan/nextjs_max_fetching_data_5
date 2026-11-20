// middleware.ts is reserved file name from NextJS.
// it should be under root project folder.

import { NextResponse } from "next/server";

// The function name must be `middleware` as well.
// It is a function that is not really meant to block or handle an incoming request.
// we could do that though but instead it a typically meant to take a look at some incoming
// request, maybe change it a bit, or maybe block it.

// For example, to implement authentication and maybe redirect to another page
// if a user is not authenticated, for example,
// which you could do with help of the built-in redirect method
// on this next response.
// `return NextResponse.redirect()`

// But you often also just might want to let the request
// go on to its original destination,
// maybe after evaluating or changing it.

// middleware does allow us to set up code that will run on every request that is
// sent to any page or any route anywhere in our entire website
// so we can inspect the request, block the request or redirect the request


export function middleware(request: Request) {
  // We can instantiate it to create a new response from scratch,
  // but we get some utility methods like `next` which simply forwards the incoming request
  // to its actual destination.
  // Also, that kind of describes what the purpose of this middleware functions, as does its name.

  // It will show all the requestS from the app, NextJS.
  // So this looks at all the request and then we can modify the logic here.
  console.log('request in middleware: ', request);
  // return new NextResponse
  return NextResponse.next();
}

// [IMPORTANT!]
// In order to filter out all requests except for `/news`
// Must use `config` variable name and `matcher` property name
export const config = {
  matcher: '/news'
}
