//  =================================================================
//  Variables
//  =================================================================

// appearance
let button_backgroundColor = "rgba(30,30,30,0.8)";
let button_strokeColor = "rgba(217, 217, 217, 0.8)";
let button_strokeColor_Accent = "rgb(4, 255, 100)";
let button_Radius = 10;
let strokeWidth = 2;
let fontColor = "rgb(255, 255, 255)";
let fontColor_Accent = "rgb(4, 255, 100)";
let fontSize = 30;

// dimensions
let button_width = 70;
let button_height = 70;

let padY = 5;
let padX = 5;

//  =================================================================
//  Helper Functions
//  =================================================================

function getElementProperty(id, property) {
  result = ui.getElementProperty(id, property);
  // console.log("Result: " + property + " = " + result)
  return result;
}

function setElementProperty(id, property, value) {
  ui.setElementProperties(id, { [property]: value });
}

//  =================================================================
//  Buttons
//  =================================================================

ui.addShape({
  type: "rectangle",
  id: "background",
  width: 230,
  height: 150,
  fillColor: "rgba(255, 255, 255, 0)",
  strokeWidth: 0,
});

ui.addShape({
  type: "rectangle",
  id: "w_Button",
  x: button_width + strokeWidth + padX,
  y: strokeWidth,
  width: button_width,
  height: button_height,
  radius: button_Radius,
  fillColor: button_backgroundColor,
  strokeColor: button_strokeColor,
  strokeWidth: 2,
});

ui.addText({
  type: "text",
  id: "w_Button_Text",
  text: "W",
  x:
    getElementProperty("w_Button", "x") +
    getElementProperty("w_Button", "width") / 2,
  y:
    getElementProperty("w_Button", "y") +
    getElementProperty("w_Button", "height") / 2,
  fontColor: fontColor,
  fontSize: fontSize,
  textAlign: "centercenter",
});

ui.addShape({
  type: "rectangle",
  id: "a_Button",
  x: strokeWidth,
  y: button_height + strokeWidth + padY,
  width: button_width,
  height: button_height,
  radius: button_Radius,
  fillColor: button_backgroundColor,
  strokeColor: button_strokeColor,
  strokeWidth: 2,
});

ui.addText({
  type: "text",
  id: "a_Button_Text",
  text: "A",
  x:
    getElementProperty("a_Button", "x") +
    getElementProperty("a_Button", "width") / 2,
  y:
    getElementProperty("a_Button", "y") +
    getElementProperty("a_Button", "height") / 2,
  fontColor: fontColor,
  fontSize: fontSize,
  textAlign: "centercenter",
});

ui.addShape({
  type: "rectangle",
  id: "s_Button",
  x: button_width + strokeWidth + padX,
  y: button_height + strokeWidth + padY,
  width: button_width,
  height: button_height,
  radius: button_Radius,
  fillColor: button_backgroundColor,
  strokeColor: button_strokeColor,
  strokeWidth: 2,
});

ui.addText({
  type: "text",
  id: "s_Button_Text",
  text: "S",
  x:
    getElementProperty("s_Button", "x") +
    getElementProperty("s_Button", "width") / 2,
  y:
    getElementProperty("s_Button", "y") +
    getElementProperty("s_Button", "height") / 2,
  fontColor: fontColor,
  fontSize: fontSize,
  textAlign: "centercenter",
});

ui.addShape({
  type: "rectangle",
  id: "d_Button",
  x: (button_width + strokeWidth + padX) * 2,
  y: button_height + strokeWidth + padY,
  width: button_width,
  height: button_height,
  radius: button_Radius,
  fillColor: button_backgroundColor,
  strokeColor: button_strokeColor,
  strokeWidth: 2,
});

ui.addText({
  type: "text",
  id: "d_Button_Text",
  text: "D",
  x:
    getElementProperty("d_Button", "x") +
    getElementProperty("d_Button", "width") / 2,
  y:
    getElementProperty("d_Button", "y") +
    getElementProperty("d_Button", "height") / 2,
  fontColor: fontColor,
  fontSize: fontSize,
  textAlign: "centercenter",
});

//  =================================================================
//  IPC
//  =================================================================

ipcRenderer.on("w_keyDown", (event, payload) => {
  setElementProperty("w_Button", "strokeColor", button_strokeColor_Accent);
  setElementProperty("w_Button_Text", "fontColor", fontColor_Accent);
});

ipcRenderer.on("w_keyUp", (event, payload) => {
  setElementProperty("w_Button", "strokeColor", button_strokeColor);
  setElementProperty("w_Button_Text", "fontColor", fontColor);
});

ipcRenderer.on("a_keyDown", (event, payload) => {
  setElementProperty("a_Button", "strokeColor", button_strokeColor_Accent);
  setElementProperty("a_Button_Text", "fontColor", fontColor_Accent);
});

ipcRenderer.on("a_keyUp", (event, payload) => {
  setElementProperty("a_Button", "strokeColor", button_strokeColor);
  setElementProperty("a_Button_Text", "fontColor", fontColor);
});

ipcRenderer.on("s_keyDown", (event, payload) => {
  setElementProperty("s_Button", "strokeColor", button_strokeColor_Accent);
  setElementProperty("s_Button_Text", "fontColor", fontColor_Accent);
});

ipcRenderer.on("s_keyUp", (event, payload) => {
  setElementProperty("s_Button", "strokeColor", button_strokeColor);
  setElementProperty("s_Button_Text", "fontColor", fontColor);
});

ipcRenderer.on("d_keyDown", (event, payload) => {
  setElementProperty("d_Button", "strokeColor", button_strokeColor_Accent);
  setElementProperty("d_Button_Text", "fontColor", fontColor_Accent);
});

ipcRenderer.on("d_keyUp", (event, payload) => {
  setElementProperty("d_Button", "strokeColor", button_strokeColor);
  setElementProperty("d_Button_Text", "fontColor", fontColor);
});
