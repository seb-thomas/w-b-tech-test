module.exports = {
  posts: [
    { id: 1, title: "Lorem Ipsum", views: 254, user_id: 123 },
    { id: 2, title: "Sic Dolor amet", views: 65, user_id: 456 },
  ],
  animals: [
    {
      id: 1,
      name: "Tiger",
      type: "mammal",
      diet: "carnivore",
      isExtinct: false,
    },
    {
      id: 2,
      name: "Lion",
      type: "mammal",
      diet: "carnivore",
      isExtinct: false,
    },
    {
      id: 3,
      name: "Badger",
      type: "mammal",
      diet: "carnivore",
      isExtinct: false,
    },
    {
      id: 4,
      name: "Snake",
      type: "reptile",
      diet: "carnivore",
      isExtinct: false,
    },
    {
      id: 5,
      name: "Cow",
      type: "mammal",
      diet: "herbivore",
      isExtinct: false,
    },
  ],
  users: [
    { id: 123, name: "John Doe" },
    { id: 456, name: "Jane Doe" },
  ],
  comments: [
    {
      id: 987,
      post_id: 1,
      body: "Consectetur adipiscing elit",
      date: new Date("2017-07-03"),
    },
    {
      id: 995,
      post_id: 1,
      body: "Nam molestie pellentesque dui",
      date: new Date("2017-08-17"),
    },
  ],
}
