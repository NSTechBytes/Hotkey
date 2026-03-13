# Hotkey-Template (Single Addon)

Minimal starter template for one standalone Novadesk addon.

## Files
- `Hotkey.sln` - Visual Studio solution
- `Hotkey/Hotkey.vcxproj` - Visual Studio project
- `Hotkey/main.cpp` - addon entry points and exported API
- `Hotkey/Hotkey.rc` / `Hotkey/resource.h` - version metadata resource
- `NovadeskAPI/novadesk_addon.h` - addon API header
- `NovadeskAddon.props` - common build props
- `addon.json` - addon name and version used for release packaging

## How to use
1. Open `Hotkey.sln` in Visual Studio 2019+.
2. Build `Debug|x64` or `Release|x64`.
3. Output DLL will be under `dist\x64\...`.
4. For `Release`, a ZIP is created in the same output folder named `Name_vXXX.zip` using `addon.json`.
5. Rename strings in `Hotkey/main.cpp` and `Hotkey/Hotkey.rc` to match your addon name.
6. Update `addon.json` with your addon `name` and `version`.

## Build from terminal
```powershell
.\Build.ps1
.\Build.ps1 -Configuration Release
```
