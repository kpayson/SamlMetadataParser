import "./styles.css";
import { nihLoginSaml } from "./test-data/nihLoginSPMetadata";
import { test2Saml } from "./test-data/test2";
import { testIdSaml } from "./test-data/samlTestId";

import { parseSamlMetadata } from "./parser";

function displayResult(res) {
  document.getElementById("app").innerHTML = `
    <h1>Saml Metadata Parser</h1>
    <div>${res}</div>
    `;
}

const xml = test2Saml;
const res = parseSamlMetadata(xml);

const resString = JSON.stringify(res);
displayResult(resString);
console.log(res);
