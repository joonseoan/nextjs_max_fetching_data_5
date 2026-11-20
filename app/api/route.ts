// Route Handler:
// USE FUNCTION NAME HTTP METHODS: GET, PUT, PATCH, POST, PATCH, DELETE etc.
// Return json data. It can also accept JSON data and then return the json data to the pages.
// We can produce data, store data, do whatever we need to do, but which essentially are called
// behind the scenes from some clients,So from a mobile app or maybe even from one of our pages


// Does this work for external client?, mobile phone? how?
export function GET(request: Request) {
  console.log('request: ', request);

  // We can response with json data as well.
  // return Response.json();
  
  return new Response('Hello');
}

export function POST(request: Request) {}
