import { app, addon } from "novadesk";

console.log("=== RegisterHotkey Integration (Addon API) ===");

function loadHotkeyAddon() {
  var debugPath = "../dist/x64/Debug/Hotkey/Hotkey.dll";
  var releasePath = "../dist/x64/Release/Hotkey/Hotkey.dll";

  try {
    var a = addon.load(debugPath);
    if (a && a.hotkey && typeof a.hotkey.register === "function") {
      console.log("[INFO] Loaded Hotkey addon (Debug): " + debugPath);
      return a;
    }
  } catch (e) {
    console.log("[INFO] Debug addon load failed, trying Release...");
  }

  try {
    var b = addon.load(releasePath);
    if (b && b.hotkey && typeof b.hotkey.register === "function") {
      console.log("[INFO] Loaded Hotkey addon (Release): " + releasePath);
      return b;
    }
  } catch (e2) {
    console.error("[FAIL] Release addon load failed: " + String(e2));
  }

  return null;
}

const hotkeyAddon = loadHotkeyAddon();
if (!hotkeyAddon) {
  console.error("[FAIL] Hotkey addon not loaded or missing hotkey.register");
  app.exit();
}

const hotkeyId = hotkeyAddon.hotkey.register("CTRL+SHIFT+M", {
  onKeyDown: function () { console.log("CTRL+SHIFT+M down"); },
  onKeyUp: function () { console.log("CTRL+SHIFT+M up"); }
});

const spaceId = hotkeyAddon.hotkey.register("CTRL+SHIFT+SPACE", {
  onKeyDown: function () { console.log("CTRL+SHIFT+SPACE down"); },
  onKeyUp: function () { console.log("CTRL+SHIFT+SPACE up"); }
});

console.log("Registered ids:", hotkeyId, spaceId);

// setTimeout(function () {
//   hotkeyAddon.hotkey.unregister(hotkeyId);
//   hotkeyAddon.hotkey.unregister(spaceId);
//   console.log("Hotkeys unregistered");
//   app.exit();
// }, 5000);
