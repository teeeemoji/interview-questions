# interview questions

## how to develop

### Path description
- Path `<rootDir>/questions/` placed all questions and their test suite. When add new question, please named test file as same as question file, for example `q1.test.ts` is the test file for `q1.ts`.

- Path `<rootDir>/website` placed the website origin source code writen in *Vue*.

- Path `<rootDir>/dist` placed the build result of *website*.

### Script description

- `npm run test` use *jest* to run all test sute for questions writen in *TypeScript*.
- `npm run serve` start the *website* server which is an *Vue project*.
- `npm run build` build the *website* into static files in dist.