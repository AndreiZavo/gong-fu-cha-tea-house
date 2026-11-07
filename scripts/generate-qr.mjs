// Genereaza QR-ul dinamic din config.json.
// QR-ul contine DOAR https://<domain>/qr. Destinatia reala se schimba din site/_redirects.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import QRCode from "qrcode";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const config = JSON.parse(fs.readFileSync(path.join(root, "config.json"), "utf8"));

if (!config.domain || config.domain.includes("DE-COMPLETAT")) {
  console.warn("ATENTIE: domeniul nu e completat in config.json. Generez un QR de TEST, nu il trimite la print.");
}

const url = `https://${config.domain}${config.qrPath}`;
const outDir = path.join(root, "qr");
fs.mkdirSync(outDir, { recursive: true });

const opts = {
  errorCorrectionLevel: config.qr.errorCorrection,
  margin: config.qr.margin,
  color: { dark: config.qr.darkColor, light: config.qr.lightColor },
};

const svg = await QRCode.toString(url, { ...opts, type: "svg" });
fs.writeFileSync(path.join(outDir, "gongfucha-qr.svg"), svg);
await QRCode.toFile(path.join(outDir, "gongfucha-qr.png"), url, { ...opts, width: config.qr.pngWidth });

console.log(`QR generat pentru: ${url}`);
console.log("Fisiere: qr/gongfucha-qr.svg (print), qr/gongfucha-qr.png (test)");
