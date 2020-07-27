import React, { useState } from "react";
import BoxContainer from "../Box-container/Box-container";
import "./Action-div.css";

function ActionDiv() {
  const [longUrl, setLongUrl] = useState("");
  const [response, setResponse] = useState({});
  // const [isCopy, setIsCopy] = useState(false);

  let requestHeaders = {
    "Content-Type": "application/json",
    apikey: "7e7340c4de784a5b9f1df4ffa1c9b999",
  };
  let linkRequest = {
    destination: "https://www.youtube.com/channel/UCHK4HD0ltu1-I212icLPt3g",
    domain: { fullName: "Rebrand.ly" },
  };

  function getShortLink() {
    if (longUrl) {
      linkRequest.destination = longUrl;
      fetch("https://api.rebrandly.com/v1/links", {
        method: "POST", // or 'PUT'
        body: JSON.stringify(linkRequest),
        headers: requestHeaders,
      })
        .then((response) => response.json())
        .then((data) => {
          setResponse(data);
        })
        .then(setLongUrl(""))
        .catch((error) => {
          response.error = "error";
        });
    }
  }

  const copyToClipboard = (str) => {
    const el = document.createElement("textarea");
    el.value = str;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  };

  return (
    <div className="action-div">
      <div className="input-container">
        <div>
          <input
            type="text"
            placeholder="Shorten a link here..."
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
          />
          <button onClick={getShortLink}>Shorten It</button>
        </div>
      </div>
      {response.shortUrl && response.destination ? (
        <>
          <div className="short-link-container">
            <p>{response.destination}</p>
            <p>
              <a href={response.shortUrl}>{response.shortUrl}</a>
            </p>
            <p>
              <button
                className="block-btn"
                onClick={() => copyToClipboard(response.url)}
              >
                Copy
              </button>
            </p>
          </div>
        </>
      ) : response.errors ? (
        <div className="error">Invalid URL</div>
      ) : null}

      <div className="stats">
        <h2>Advanced Statistics</h2>
        <div>
          Track how your links are performing across the web with our advanced
          statistics dashboard
        </div>
        <BoxContainer />
      </div>
    </div>
  );
}

export default ActionDiv;
