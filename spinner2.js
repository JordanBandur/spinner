const animations = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];

const animate = function(animation) {
  let timer = 100;
  for (const char of animation) {
    setTimeout(() => {
      process.stdout.write(char);
    }, timer);
    timer += 200;
  }
};

animate(animations);


