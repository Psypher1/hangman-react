export function showNotification(setter) {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 2000);
}

export function checkWin(correct, wrong, word) {
  let status = "win";

  // check for woin
  word.split("").forEach((letter) => {
    //   if correct letter does not include letter from word - not win
    if (!correct.includes(letter)) {
      status = "";
    }
  });

  //check for lose
  if (wrong.length === 6) {
    status = "lose";
  }

  return status;
}
