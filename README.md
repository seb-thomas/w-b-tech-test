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

**Notes**

- I would like to have improved the AddAnimal/Update code by using a HOC, they're basically the same thing but smooshing them into one component was messy, and I've had to add a few conditions depending on whether it's in edit or add state.

- I tried adding linting early on, but realised Gatsby already has it like CRA, so I just left it as reporting in the CLI.

- I really wanted to use GraphQL as my API, and maybe that was a bit too much to do! But it was good to learn more about it. One thing I would really have liked to do is use it for application state - right now I'm making use of polling which is ok, but the refetch method would be an improvement I think. I wanted to put refetch in the state and use it across several components, I just couldn't get reactive vars working in time.

- The tests only run once! :D This is because I'm not mocking the data - I figured that was one step too far. So when you run a test you're actually hitting the GraphlQL server and modifiying the data for that run. And if you run the test again it will get things confused. I could probably fix the tests for this.. but I need to ship! :D

- There's a bug! :o But apparently it's not my fault.. there's a bug with the json-graphql-server library I'm using to serve the GraphQL.
  I haven't been able to pin down exactly when it happens but sometimes the last card will be deleted instead of the one you clicked on.
  https://github.com/marmelab/json-graphql-server/issues/76
