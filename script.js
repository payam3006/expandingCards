let openedImg = 1;

const openImg = (i) => {
  if (i !== openedImg) {
    document.getElementById(`img${openedImg}`).classList.remove("imgOpen");
    document.getElementById(`imgTitle${openedImg}`).classList.add("hidden");

    document.getElementById(`img${i}`).classList.add("imgOpen");
    document.getElementById(`imgTitle${i}`).classList.remove("hidden");

    openedImg = i;
  }
};
