var myHeaders = new Headers();
myHeaders.append("X-RapidAPI-Host", "target1.p.rapidapi.com");
myHeaders.append(
  "X-RapidAPI-Key",
  "08aa9469ecmsh0b4656d24bd39ddp17745ejsnd5afcac65636"
);

var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

// fetch(
//   "https://target1.p.rapidapi.com/products/v3/get-details?tcin=53245242&store_id=911",
//   requestOptions
// )
//   .then((response) => response.text())
//   .then((result) => console.log(result))
//   .catch((error) => console.log("error", error));

const fetcher = async (tcin) => {
  const res = await fetch(
    `https://target1.p.rapidapi.com/products/v3/get-details?tcin=${tcin}&store_id=911`,
    requestOptions
  );
  const data = await res.json();
  return data;
};

const nrylst = [
  "80371744",
  "80930415",
  "80930418",
  "83905571",
  "80930435",
  "15305154",
  "86205859",
  "49148605",
  "80930431",
  "86205847",
  "80930425",
  "86205853",
  "80930428",
  "80139648",
  "86205860",
  "83905607",
  "86326701",
  "52341856",
  "15287653",
  "80930407",
  "77523377",
  "52342737",
  "15287659",
  "83905579",
  "80930410",
  "86205864",
  "80930416",
  "52747193",
  "80930428",
  "52747237",
  "86205845",
  "80930425",
  "86205846",
  "83905600",
  "86205851",
  "80930412",
  "80930410",
  "80371743",
  "80930407",
  "86205858",
  "86205849",
  "86205863",
  "15287657",
  "80930413",
  "80930422",
  "11869841",
  "80371741",
  "83905578",
  "83905585",
  "80960570",
  "80930424",
  "80930429",
  "80930423",
  "86767313",
];
// export const fin = Promise.all(nrylst.map((nr) => fetcher(Number(nr))));
function delay(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

export const fin = async () => {
  let arr = [];
  for (let nr of nrylst) {
    arr.push(await fetcher(Number(nr)));
    await delay(1000);
  }
  return arr;
};