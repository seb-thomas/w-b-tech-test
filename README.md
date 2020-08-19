# Wolf & Badger tech test

## Test brief

Create a CRUD application for animal ‘top trumps’

Each animal will have a name, type (mammal, reptile, fish or amphibious), be either carnivore or herbivore, and can be declared as extinct or not extinct.

- Your application should display a catalogue of cards containing information about each animal.

- You must include buttons to remove, read and edit each animal card, and to add new animal cards.

- The repository for the project must be publicly hosted on GitHub.

- Your application must be very easy to build, test and run.

The review of your application will take into consideration the following:

- Clarity and intent within both production code and test suites

- Predictability of system behaviour

- Number of lines of code written (less is more)

- Coding standards/best practices

- Ease of set-up/running - documentation

Extra credit

- Use graphql for extra credit

## Notes

- Doing this test was a good experience - as the brief mentioned GraphQL I really wanted to use that along with Gatsby (as that is what W&B plan to use) and use it as an opportunity to learn something new.
- "Build a CRUD app" is a deceptively simple brief and there were a lot of decisions to make to not get sidetracked, prioritise and stick to the brief, while making a stable app in a relatively short time.
- I considered using Redux (Ducks convention) as I have on previous real-world apps and tests, but I decided against it because although it's useful state management, I thought the extra boilerplate code wouldn't really add anything to demonstrate my JS knowledge, and I really wanted to work with real data from an API - not just data in a store.
- At first I went with JSON server to run a local REST API, but as I wanted to use GraphQL I found a similar library for JSON GraphQL.
- This was quite a challenge to learn, perhaps more than I initially realised and longer to figure everything out, but it was very rewarding.
- There's a bug! :o But apparently it's not my fault..
  If you click delete on a middle card the last card is removed. This only happens after you add a new card, which led me to realise it's actually a reported bug in the json-graphql-server library I'm using to serve the GraphQL. I spent a lot of time trying to groom the data type for the mutation, but didn't find a solution in time.
  https://github.com/marmelab/json-graphql-server/issues/76A

- Gatsby was also quite a learning experience, to get my head around the difference to normal React apps, and build time vs run time data.
- I ended up using Apollo for queries to my GraphQL server rather than Fetch API, which helped a lot. I could have used Apollo for app state management too but that seemed like a nice-to-have extra.
- I read in the Apollo docs that polling is a standard way of re-retrieving data, it seemed a little odd to me to keep making requests, but as it was in the docs I figured it was OK. I found out later about the Refetch method, and would like to implement that instead.
- For testing, again I wanted to learn something I had less experience with so I did end to end tests with Cypress, rather than unit tests with Jest. I would have been nice to do both, but - time! Cypress was a great experience, the docs are excellent.
- Again a bit of a bug here due to time constraints and not something I foresaw - the data for the tests is not mocked, so when the suite runs it mutates the GraphQL. When you run the test suite again it will fail because the starting data has been changed. If you want to run the tests again you just need to stop all the processes and run the npm command again.

- I would like to have improved the AddAnimal/Update code by using a HOC, they're basically the same thing but having them as one component is a bit messy, and I've had to add a few conditions depending on whether it's in edit or add state.

- I tried adding linting early on, but realised Gatsby already has it like CRA, so I just left it as reporting in the CLI.

- I focussed on running the app in develop rather than in build, as the project is running a db server the work required to make it function in build without a server for the front end code would have taken longer again.

## 🚀 Quick start

**To run the project**

Get Gatsby and JSON GraphQL server running with one npm script command:

```shell
npm install
npm start
```

**To test the project**

Tests are done with Cypress. I thought it would be a good end to end way of making sure the app is always working, and also I haven't used it much so it's useful for me to learn more.

```shell
npm install
npm run test:e2e
```

**Building**

Build has not been tested or implemented further than what comes with Gatsby by default. Given that this project runs a GraphQL server and work required around CORs and other issues would detract from coding time for other features, I have focussed on running the project in development. I have left the build command in, and it may be possible to get the app running if you serve the static project on localhost. You will need to run the db separately, for which you can use this command:

```shell
npm run build
npm run db
```
