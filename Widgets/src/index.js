import { widgetWindow, addon } from "novadesk";

const widget = new widgetWindow({
  id: "Hotkey",
  script: "ui/script.ui.js",
});

const hotkeyAddon = addon.load(
  "D:\\Novadesk-Project\\Hotkey\\dist\\x64\\Debug\\Hotkey\\Hotkey.dll"
);

const w_hotkey = hotkeyAddon.register("W", {
  onKeyDown: function () {
    ipcMain.send("w_keyDown", { key: "W" });
    // console.log("W down");
  },
  onKeyUp: function () {
    ipcMain.send("w_keyUp", { key: "W" });
    // console.log("W up");
  },
});

const a_hotkey = hotkeyAddon.register("A", {
  onKeyDown: function () {
    ipcMain.send("a_keyDown", { key: "A" });
    // console.log("A down");
  },
  onKeyUp: function () {
    ipcMain.send("a_keyUp", { key: "A" });
    // console.log("A up");
  },
});

const s_hotkey = hotkeyAddon.register("S", {
  onKeyDown: function () {
    ipcMain.send("s_keyDown", { key: "S" });
    // console.log("S down");
  },
  onKeyUp: function () {
    ipcMain.send("s_keyUp", { key: "S" });
    // console.log("S up");
  },
});

const d_hotkey = hotkeyAddon.register("D", {
  onKeyDown: function () {
    ipcMain.send("d_keyDown", { key: "D" });
    // console.log("D down");
  },
  onKeyUp: function () {
    ipcMain.send("d_keyUp", { key: "D" });
    // console.log("D up");
  },
});
