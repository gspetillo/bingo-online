function generateCards() {
  let cardCount = document.getElementById("card-count").value;
  console.log("Cards: " + cardCount);

  let cardForm = document.getElementById("card-form");
  cardForm.style.display = "none";

  let cardResults = document.getElementById("card-results");
  cardResults.style.display = "inline";

  let app = document.getElementById("app");
  app.style.backgroundColor = "#fff";
  app.style.backgroundImage = "flex";


  date = new Date()
  document.title = `Cartelas - Bingo Online - ${date.toLocaleString('pt-br')}`;

  for (let i = 0; i < cardCount; i++) {
    numsB = Array.from({ length: 15 }, (_, i) => i + 1);
    numsI = Array.from({ length: 15 }, (_, i) => i + 16);
    numsN = Array.from({ length: 15 }, (_, i) => i + 31);
    numsG = Array.from({ length: 15 }, (_, i) => i + 46);
    numsO = Array.from({ length: 15 }, (_, i) => i + 61);

    let selectedB = [];
    let selectedI = [];
    let selectedN = [];
    let selectedG = [];
    let selectedO = [];

    let card = `
      <table id="card">
        <tr>
          <th>B</th>
          <th>I</th>
          <th>N</th>
          <th>G</th>
          <th>O</th>
        </tr>
    `;

    for (let j = 0; j < 5; j++) {
      selectedB.push(
        numsB.splice(Math.floor(Math.random() * numsB.length), 1)[0]
      );
      selectedI.push(
        numsI.splice(Math.floor(Math.random() * numsI.length), 1)[0]
      );
      if (j != 2) {
        selectedN.push(
          numsN.splice(Math.floor(Math.random() * numsN.length), 1)[0]
        );
      } else {
        selectedN.push("X");
      }
      selectedG.push(
        numsG.splice(Math.floor(Math.random() * numsG.length), 1)[0]
      );
      selectedO.push(
        numsO.splice(Math.floor(Math.random() * numsO.length), 1)[0]
      );

      if (j != 2) {
        card += `<tr>
        <td>${selectedB[j]}</td>
        <td>${selectedI[j]}</td>
        <td>${selectedN[j]}</td>
        <td>${selectedG[j]}</td>
        <td>${selectedO[j]}</td>
        </tr>`;
      } else {
        card += `<tr>
        <td>${selectedB[j]}</td>
        <td>${selectedI[j]}</td>
        <td style="padding: 0;">
          <img src="../../assets/android-chrome-512x512.png" width="35px" alt="" />
        </td>
        <td>${selectedG[j]}</td>
        <td>${selectedO[j]}</td>
        </tr>`;
      }
    }

    let hash =
      String(selectedB) +
      "," +
      String(selectedI) +
      "," +
      String(selectedN) +
      "," +
      String(selectedG) +
      "," +
      String(selectedO);

    console.log(hash);

    card += `
      <tr>
        <td colspan="5">
          <p style="font-size:10px;">
            HASH: ${stringToHash(hash)}
          </p>
        </td>
      </tr>
    `;

    card += `</table>`;
    cardResults.innerHTML += card;
  }
  window.print();
}

function stringToHash(string) {
  var hash = 0;

  if (string.length == 0) return hash;

  for (i = 0; i < string.length; i++) {
    char = string.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }

  if (hash < 0) {
    return hash * -1;
  } else {
    return hash;
  }
}
