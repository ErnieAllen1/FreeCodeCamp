const footballTeam = {
  team: "Arsenal",
  year: 2025,
  headCoach: "Mikel Arteta",
  players: [
    { name: "David Raya", position: "goalkeeper", isCaptain: false },
    { name: "Ben White", position: "defender", isCaptain: false },
    { name: "William Saliba", position: "defender", isCaptain: false },
    { name: "Gabriel", position: "defender", isCaptain: false },
    { name: "Miles Lewis-Skelly", position: "defender", isCaptain: false },
    { name: "Declan Rice", position: "midfielder", isCaptain: false },
    { name: "Martin Odegaard", position: "midfielder", isCaptain: true },
    { name: "Mikel Merino", position: "midfielder", isCaptain: false },
    { name: "Bukayo Saka", position: "forward", isCaptain: false },
    { name: "Gabriel Martinelli", position: "forward", isCaptain: false },
    { name: "Kai Havertz", position: "forward", isCaptain: false },
  ],
};

const playerCards = document.querySelectorAll(".player-card");
const cardsContainer = document.querySelector(".cards");
const selectContainer = document.querySelector("#players");

const getCards = function (option) {
  const cards =
    option === "all"
      ? footballTeam.players
      : footballTeam.players.filter((player) => player.position === option);

  return cards.map(
    (player) => `<div class="player-card">
          <h2>${
            player.isCaptain ? "(Captain)" + " " + player.name : player.name
          }</h2>
          <p>Position: ${player.position}</p>
        </div>`
  );
};

const getTeamStats = function () {
  const teamName = document.getElementById("team");
  const year = document.getElementById("year");
  const headCoach = document.getElementById("head-coach");
  teamName.textContent = footballTeam.team;
  year.textContent = footballTeam.year;
  headCoach.textContent = footballTeam.headCoach;
};

getTeamStats();
selectContainer.addEventListener("change", function () {
  cardsContainer.innerHTML = getCards(selectContainer.value);
});
