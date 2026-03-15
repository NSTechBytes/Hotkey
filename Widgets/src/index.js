import { widgetWindow, addon } from 'novadesk'

const widget = new widgetWindow({
    id: "Hotkey",
    script: "ui/script.ui.js"
})

const hotkeyAddon = addon.load("D:\\Novadesk-Project\\Hotkey\\dist\\x64\\Debug\\Hotkey\\Hotkey.dll")

const w_ID = hotkeyAddon.register("W", {
    onKeyDown: function () { console.log("CTRL+SHIFT+M down"); },
    onKeyUp: function () { console.log("CTRL+SHIFT+M up"); }
});
