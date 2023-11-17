let freelancers = [
    {
      "name": "Alice",
      "job": "Writer",
      "price": 30,
    },
    {
        "name": "Bob",
        "job": "Teacher",
        "price": 50,
    },
    {
        "name": "Carol",
        "job": "Programmer",
        "price": 70,
    },
    {
        "name": "Mandy",
        "job": "Illustrator",
        "price": 45,
    },
    {
        "name": "Samuel",
        "job": "Voice Actor",
        "price": 35,
    },
    {
        "name": "Margaret",
        "job": "Engineer",
        "price": 90,
    },

  ]

// `setInterval` will call `addShape` every 1000 milliseconds (1 second)
// and return an interval ID that we can use to stop the interval later.
// Calling `clearInterval(addShapeIntervalId)` will stop the interval.
const addFreelancerIntervalId = setInterval(addFreelancer, 1000);

render(); // We call this function once to render the initial state

/**
 * Update the DOM to reflect the current state.
 * The term "render" is often used to describe this process.
 */
function render() {
  // Render the squares
  const post = document.querySelector("#posts");
  const postElements = freelancers.map((shape) => {
    const element = document.createElement("li");
    element.classList.add(freelancers.name, freelancers.job, freelancers.price);
    return element;
  });
}
  // TODO: Render the circles
/**
 * Add a random shape to the `shapes` array
 */
function addFreelancer() {
  const color = colors[Math.floor(Math.random() * colors.length)];
  const size = sizes[Math.floor(Math.random() * sizes.length)];
  if (shapes.length >= maxShapes) {
    clearInterval(addFreelancerIntervalId);
  // TODO: Randomize the size of the shape
  }
  shapes.push({ color, size });
  
  render();

  // TODO: Stop adding shapes if we've reached the maximum number of shapes
}