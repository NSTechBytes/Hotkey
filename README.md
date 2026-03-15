# Hotkey Addon

Addon that registers global hotkeys and dispatches key down/up callbacks to Novadesk scripts.

## Files
- `Hotkey.sln` - Visual Studio solution
- `Hotkey/Hotkey.vcxproj` - Visual Studio project
- `Hotkey/main.cpp` - addon entry points and exported API
- `Hotkey/Hotkey.rc` / `Hotkey/resource.h` - version metadata resource
- `NovadeskAPI/novadesk_addon.h` - addon API header
- `NovadeskAddon.props` - common build props
- `addon.json` - addon name and version used for release packaging

## Build
1. Open `Hotkey.sln` in Visual Studio 2019+.
2. Build `Debug|x64` or `Release|x64`.
3. Output DLL will be under `dist\\x64\\...`.
4. For `Release`, a ZIP is created in the same output folder named `Name_vXXX.zip` using `addon.json`.

## Build from terminal
```powershell
.\Build.ps1
.\Build.ps1 -Configuration Release
```

## Usage
```javascript
import { addon } from "novadesk";

const hotkey = addon.load("path/to/Hotkey.dll");

const id = hotkey.register("CTRL+SHIFT+M", {
  onKeyDown: () => console.log("down"),
  onKeyUp: () => console.log("up")
});

// hotkey.unregister(id);
```

## API
### `hotkey.register(hotkey, handler)`
Registers a global hotkey and returns an id.

- `hotkey` (`string`): Example `"CTRL+SHIFT+M"`, `"CTRL+ALT+SPACE"`, `"F12"`.
- `handler` (`function | object`): If a function is provided, it is used as `onKeyDown`.
  - `onKeyDown` (`function`)
  - `onKeyUp` (`function`)

### `hotkey.unregister(id)`
Unregisters a hotkey by id. Returns `true` on success.
