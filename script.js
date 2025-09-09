async function searchCertificates() {
    const teamId = document.getElementById("teamId").value.trim();
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    if (!teamId) {
        resultsDiv.innerHTML = "<p>Please enter a Team ID.</p>";
        return;
    }

    try {
        const res = await fetch("certificates.json");
        const files = await res.json();

        const matches = files.filter(file =>
            file.toLowerCase().startsWith(teamId.toLowerCase())
        );

        if (matches.length === 0) {
            resultsDiv.innerHTML = "<p>No certificates found for this Team ID.</p>";
            return;
        }

        matches.forEach(file => {
            const button = document.createElement("button");
            // extract name after teamID_
            const displayName = file.split("_")[1]?.replace(".png", "") || file;
            button.innerText = `Download: ${displayName}`;
            button.style.margin = "10px";

            button.onclick = () => {
                const a = document.createElement("a");
                a.href = `certificates/${file}`;
                a.download = file;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            };

            resultsDiv.appendChild(button);
            resultsDiv.appendChild(document.createElement("br"));
        });

    } catch (error) {
        resultsDiv.innerHTML = "<p>Error loading certificates.</p>";
        console.error(error);
    }
}
