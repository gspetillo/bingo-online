function generateCards() {
  let cardCount = document.getElementById("card-count").value;
  console.log("Cards: " + cardCount);

  let cardForm = document.getElementById("card-form");
  cardForm.style.display = "none";

  let cardResults = document.getElementById("card-results");

  let app = document.getElementById("app");
  app.style.backgroundColor = "#fff";
  app.style.backgroundImage = "flex";

  for (let i = 0; i < cardCount; i++) {
    numsB = Array.from({ length: 15 }, (_, i) => i + 1);
    numsI = Array.from({ length: 15 }, (_, i) => i + 16);
    numsN = Array.from({ length: 15 }, (_, i) => i + 31);
    numsG = Array.from({ length: 15 }, (_, i) => i + 46);
    numsO = Array.from({ length: 15 }, (_, i) => i + 61);

    cardResults.style.display = 'inline'

    cardResults.innerHTML += `
            <table id="card">
                <tr>
                    <th>B</th>
                    <th>I</th>
                    <th>N</th>
                    <th>G</th>
                    <th>O</th>
                </tr>
                <tr>
                    <td>${
                      numsB.splice(
                        Math.floor(Math.random() * numsB.length),
                        1
                      )[0]
                    }</td>
                    <td>${
                      numsI.splice(
                        Math.floor(Math.random() * numsI.length),
                        1
                      )[0]
                    }</td>
                    <td>${
                      numsN.splice(
                        Math.floor(Math.random() * numsN.length),
                        1
                      )[0]
                    }</td>
                    <td>${
                      numsG.splice(
                        Math.floor(Math.random() * numsG.length),
                        1
                      )[0]
                    }</td>
                    <td>${
                      numsO.splice(
                        Math.floor(Math.random() * numsO.length),
                        1
                      )[0]
                    }</td>
                </tr>
                <tr>
                    <td>${
                      numsB.splice(
                        Math.floor(Math.random() * numsB.length),
                        1
                      )[0]
                    }</td>
                    <td>${
                      numsI.splice(
                        Math.floor(Math.random() * numsI.length),
                        1
                      )[0]
                    }</td>
                    <td>${
                      numsN.splice(
                        Math.floor(Math.random() * numsN.length),
                        1
                      )[0]
                    }</td>
                    <td>${
                      numsG.splice(
                        Math.floor(Math.random() * numsG.length),
                        1
                      )[0]
                    }</td>
                    <td>${
                      numsO.splice(
                        Math.floor(Math.random() * numsO.length),
                        1
                      )[0]
                    }</td>
                </tr>
                <tr>
                    <td>${
                      numsB.splice(
                        Math.floor(Math.random() * numsB.length),
                        1
                      )[0]
                    }</td>
                    <td>${
                      numsI.splice(
                        Math.floor(Math.random() * numsI.length),
                        1
                      )[0]
                    }</td>
                    <td style="padding: 0;">
                        <img src="../../assets/android-chrome-512x512.png" width="35px" alt="" />
                    </td>
                    <td>${
                      numsG.splice(
                        Math.floor(Math.random() * numsG.length),
                        1
                      )[0]
                    }</td>
                    <td>${
                      numsO.splice(
                        Math.floor(Math.random() * numsO.length),
                        1
                      )[0]
                    }</td>
                </tr>
                <tr>
                    <td>${
                      numsB.splice(
                        Math.floor(Math.random() * numsB.length),
                        1
                      )[0]
                    }</td>
                    <td>${
                      numsI.splice(
                        Math.floor(Math.random() * numsI.length),
                        1
                      )[0]
                    }</td>
                    <td>${
                      numsN.splice(
                        Math.floor(Math.random() * numsN.length),
                        1
                      )[0]
                    }</td>
                    <td>${
                      numsG.splice(
                        Math.floor(Math.random() * numsG.length),
                        1
                      )[0]
                    }</td>
                    <td>${
                      numsO.splice(
                        Math.floor(Math.random() * numsO.length),
                        1
                      )[0]
                    }</td>
                </tr>
                <tr>
                    <td>${
                      numsB.splice(
                        Math.floor(Math.random() * numsB.length),
                        1
                      )[0]
                    }</td>
                    <td>${
                      numsI.splice(
                        Math.floor(Math.random() * numsI.length),
                        1
                      )[0]
                    }</td>
                    <td>${
                      numsN.splice(
                        Math.floor(Math.random() * numsN.length),
                        1
                      )[0]
                    }</td>
                    <td>${
                      numsG.splice(
                        Math.floor(Math.random() * numsG.length),
                        1
                      )[0]
                    }</td>
                    <td>${
                      numsO.splice(
                        Math.floor(Math.random() * numsO.length),
                        1
                      )[0]
                    }</td>
                </tr>
            </table>
        `;
  }

  window.print();
}
