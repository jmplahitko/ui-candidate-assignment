
# Instructions

- Given the story below, build a SPA that will satisfy the acceptance criteria below.
- You must have node.js installed (lts version should be fine) to complete this assignment.
- Single page is fine.
- Styling and design is up to the discretion of the developer, but *must be done with .scss and without the help of a framework or design system*
  - Extra credit for cleanest, most beautiful design
- TypeScript is preferred, with typings, but not manditory
- An easter egg is appreciated, but not required
- What we are looking for:
  - Proper componentization
  - Appropriate units of reuse
  - Separation of Concerns
  - Apparent understanding of reactive programming concepts
  - Clean, declaritive code
    - Your code should be so clean, we can read it like a book
  - Visual appeal
  - Reasonable comments when needed

## Story

As a user, I want to search for a dad joke, so that I can annoy my kids.

## Acceptance Criteria

- App will use Vue
- Entry .js should be written in `app/app.ts`
- Entry for .scss should be written in `app/styles/index.scss`
- App will use the [Global Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- Data will be fetched from the [icanhasdadjoke API](https://icanhazdadjoke.com/api)
- App will be mounted in a `<div id="mount">` element (already provided in index.html)
- User must be able to search by term with paging
  - Term must be validated to accept word charcters only
  - Paging is limited to 10 results per page
- Must be WCAG Level AA compliant, per [Wave Accessibility Tool](https://wave.webaim.org/extension/)

## Building and Watching

- This project uses Vue CLI. The following command should be all you need:
  - To install dependencies: `npm i`
  - To build the project: `npm run build`
  - To run the project: `npm run watch`
