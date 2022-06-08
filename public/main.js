export const createMainContent = () => {
  // Create h1
  const h1 = document.createElement("h1");
  h1.innerText = "Catstagram";

  // Create img
  const img = document.createElement("img");
  img.style.margin = "20px";
  img.style.maxWidth = "500px";
  img.style.maxHeight = "300px";

  //create btn

  const newImgBtn = document.createElement("button");
  newImgBtn.innerHTML = "New Cat";

  //popularity score section
  const popularityScoreContainer = document.createElement("span");
  popularityScoreContainer.innerHTML = "Popularity Score: ";

  const popScore = document.createElement("span");
  popScore.innerHTML = 0;

  //upvote and downvote buttons

  const popBtnContainer = document.createElement("div");

  const upvoteBtn = document.createElement("button");
  const downvoteBtn = document.createElement("button");
  upvoteBtn.innerHTML = "upvote";
  downvoteBtn.innerHTML = "downvote";
  upvoteBtn.style.margin = "5px";

  const container = document.querySelector(".container");
  container.appendChild(h1);
  container.appendChild(img);
  container.appendChild(newImgBtn);
  container.appendChild(popularityScoreContainer);
  popularityScoreContainer.appendChild(popScore);
  container.appendChild(popBtnContainer);
  popBtnContainer.appendChild(upvoteBtn);
  popBtnContainer.appendChild(downvoteBtn);

  newImgBtn.addEventListener("click", fetchImage);

  upvoteBtn.addEventListener("click", upvote);

  downvoteBtn.addEventListener("click", downvote);

  function upvote() {
    popScore.innerHTML++;
  }

  function downvote() {
    popScore.innerHTML--;
  }

  fetchImage();
};

const fetchImage = async () => {
  // Fetch image from API and set img url
  try {
    const kittenResponse = await fetch(
      "https://api.thecatapi.com/v1/images/search?size=small"
    );
    // Converts to JSON
    const kittenData = await kittenResponse.json();
    // console.log(kittenData);
    const kittenImg = document.querySelector("img");
    kittenImg.src = kittenData[0].url;
  } catch (e) {
    console.log("Failed to fetch image", e);
  }
};
