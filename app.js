document.addEventListener("DOMContentLoaded", (event) => {
  // Create the copy button
  const copyButton = document.createElement("button");
  copyButton.id = "copyButton";
  copyButton.textContent = "Share";

  // Append the button to the body (or any other desired element)
  document.body.appendChild(copyButton);

  // Add the click event listener to the button
  copyButton.addEventListener("click", function () {
    // Get the current URL
    let url = window.location.href; // Get the current URL
    showShareContainer();
    const shareOptionIcons = document.querySelectorAll('.share-option a');
    shareOptionIcons.forEach(icon => {
      let tempHref = icon.getAttribute("href");
      tempHref+=url;
      icon.setAttribute("href", tempHref);
      console.log(icon);
    });
    document.querySelector(".share-link input").value = url;
    document
      .querySelector("#copy-link-btn")
      .addEventListener("click", copyLink);
  });

  createAlertPopup();
});

function showShareContainer() {
  if (!document.getElementById("share-container")) {
    // Create the show Share popup container if it doesn't exist
    const shareContainer = document.createElement("div");
    shareContainer.id = "share-container";
    shareContainer.className = "share-container";
    shareContainer.style.display = "flex";
    shareContainer.innerHTML = `
        <div class="share-box">
            <div class="share-header">
                <h2>Share</h2>
                <button class="cross-icon" onclick="closeShareContainer()">&times;</button>
            </div>
            <div class="line"></div>
            <div class="share-options">
                <div class="share-option">
                    <a href="mailto:?subject=Welcome to Voxtra&amp;body=Check out this site " target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24"
                            stroke="white" stroke-width="2">
                            <path d="M3 8l9 6 9-6" stroke-linecap="round" stroke-linejoin="round" />
                            <rect width="20" height="16" x="3" y="5" rx="2" ry="2" />
                        </svg>
                    </a>
                    <a href="mailto:?subject=Welcome to Voxtra&amp;body=Check out this site " target="_blank"><p>Email</p></a>
                </div>
                <div class="share-option">
                    <a href="https://api.whatsapp.com/send/?text=" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
                            <path fill="#fff"
                                d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z">
                            </path>
                            <path fill="#fff"
                                d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z">
                            </path>
                            <path fill="#cfd8dc"
                                d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z">
                            </path>
                            <path fill="#40c351"
                                d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z">
                            </path>
                            <path fill="#fff" fill-rule="evenodd"
                                d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </a>
                    <a href="https://api.whatsapp.com/send/?text=" target="_blank"><p>WhatsApp</p></a>
                </div>
            </div>
            <div class="share-link">
                <input type="text" value="" />
                <button id="copy-link-btn"">Copy Link</button>
            </div>
        </div>`;
    document.body.appendChild(shareContainer); // Append the popup container to the document
  } else {
    document.getElementById("share-container").style.display = "flex"; // Show the popup if it already exists
  }

}

function closeShareContainer() {
  document.getElementById("share-container").style.display = "none";
  closeAlert();
}

function copyLink() {
  showAlert();
  const copyText = document.querySelector(".share-link input");
  copyText.select();
  document.execCommand("copy"); // Alert or notify the users
  console.log("URL copied to clipboard: ");
  event.preventDefault();
}

function showAlert() {
  const alertPopup = document.getElementById("alertPopup");
  if (alertPopup.style.display === "none") {
    showAlertPopup();
    setTimeout(function () {
      closeAlert();
    }, 2000); // Auto close after 2 seconds
  }
}

function showAlertPopup() {
  const alertPopup = document.getElementById("alertPopup");
  alertPopup.style.display = "block";
}

function createAlertPopup() {
  // Create the popup container
  const alertPopup = document.createElement("div");
  alertPopup.id = "alertPopup";
  alertPopup.style.display = "none";
  alertPopup.style.zIndex = "1";

  // Create the checkmark icon
  const checkmarkIcon = document.createElement("i");
  checkmarkIcon.innerHTML = "&#10004;"; // Checkmark icon

  // Create the message span
  const messageSpan = document.createElement("span");
  messageSpan.textContent = "Link Copied Successfully!";

  // Append the elements to the popup container
  alertPopup.appendChild(checkmarkIcon);
  alertPopup.appendChild(messageSpan);

  // Append the popup container to the body
  document.body.appendChild(alertPopup);
}

function closeAlert() {
  const alertPopup = document.getElementById("alertPopup");
  if (alertPopup) {
    alertPopup.style.display = "none";
  }
}
