import os
import json

# Path to certificates folder
cert_folder = "certificates"

# List all files in the certificates folder
files = [f for f in os.listdir(cert_folder) if os.path.isfile(os.path.join(cert_folder, f))]

# Save as JSON
with open("certificates.json", "w") as f:
    json.dump(files, f, indent=4)

print(f"✅ certificates.json generated with {len(files)} files.")
