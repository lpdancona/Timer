const args = process.argv.slice(2);
const timer = function (time) {
  time = time * 1000;
  if (args > 0) {
    setTimeout(() => {
      process.stdout.write("\x07");
      console.log("alarm!!");
    }, time);
  } else if (args === isNaN) {
    return;
  }
};
timer(args);
