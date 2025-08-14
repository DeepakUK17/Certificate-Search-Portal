async function searchCertificates() {
    const teamId = document.getElementById("teamId").value.trim();
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    if (!teamId) {
        resultsDiv.innerHTML = "<p>Please select a team ID.</p>";
        return;
    }

    try {
        const res = await fetch("certificates.json");
        const files = await res.json();

        const matches = files.filter(file => file.toLowerCase().startsWith(teamId.toLowerCase()));

        if (matches.length === 0) {
            resultsDiv.innerHTML = "<p>No certificates found for this Team ID.</p>";
            return;
        }

        matches.forEach(file => {
            const img = document.createElement("img");
            img.src = `certificates/${file}`;
            img.alt = file;
            img.style.width = "300px";
            img.style.margin = "10px";

            const link = document.createElement("a");
            link.href = `certificates/${file}`;
            link.download = file;
            link.innerText = `Download ${file}`;

            resultsDiv.appendChild(img);
            resultsDiv.appendChild(document.createElement("br"));
            const button = document.createElement("button");
            button.innerText = `Download ${file}`;
            button.onclick = () => {
                const a = document.createElement("a");
                a.href = `certificates/${file}`;
                a.download = file;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            };
            resultsDiv.appendChild(button);
            resultsDiv.appendChild(document.createElement("hr"));
        });

    } catch (error) {
        resultsDiv.innerHTML = "<p>Error loading certificates.</p>";
        console.error(error);
    }
}
