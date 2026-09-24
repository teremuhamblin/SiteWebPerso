import { danger, warn } from "danger";

const modified = danger.git.modified_files;

if (modified.includes("vehicle.conf")) {
  warn("Modification du fichier tactique vehicle.conf détectée.");
}
