let certificateCache = null; // ✅ cache JSON after first fetch

async function searchCertificates() {
    const teamId = document.getElementById("teamId").value.trim();
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    if (!teamId) {
        resultsDiv.innerHTML = "<p>Please select a team ID.</p>";
        return;
    }

    try {
        // ✅ Load JSON only once
        if (!certificateCache) {
            const res = await fetch("certificates.json");
            certificateCache = await res.json();
        }
        const files = certificateCache;

        // ✅ Search only in filenames (not load all images!)
        const matches = files.filter(file => file.toLowerCase().startsWith(teamId.toLowerCase()));

        if (matches.length === 0) {
            resultsDiv.innerHTML = "<p>No certificates found for this Team ID.</p>";
            return;
        }

        matches.forEach(file => {
            const container = document.createElement("div");
            container.style.marginBottom = "20px";
            container.style.textAlign = "center";

            // ✅ Lazy load image (loads only when visible)
            const img = document.createElement("img");
            img.src = `certificates/${file}`;
            img.alt = file;
            img.style.width = "300px";
            img.style.display = "block";
            img.style.margin = "10px auto";
            img.loading = "lazy";  // 🚀 key optimization
            container.appendChild(img);

            // ✅ Download button only (faster than showing <a> + <button>)
            const button = document.createElement("button");
            button.innerText = `Download ${file}`;
            button.style.marginTop = "5px";
            button.onclick = () => {
                const a = document.createElement("a");
                a.href = `certificates/${file}`;
                a.download = file;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            };
            container.appendChild(button);

            resultsDiv.appendChild(container);
            resultsDiv.appendChild(document.createElement("hr"));
        });

    } catch (error) {
        resultsDiv.innerHTML = "<p>Error loading certificates.</p>";
        console.error(error);
    }
}
