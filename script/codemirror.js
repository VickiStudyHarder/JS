var codeEditor = CodeMirror.fromTextArea(
  document.getElementById("code-editor"),
  {
    mode: "javascript",
    lineNumbers: true,
    theme: "eclipse"
  }
);

var consoleElement = document.getElementById("console");
var runButton = document.getElementById("run-button");

function redirectConsoleLog() {
  var originalLog = console.log;
  console.log = function (message) {
    var outputLine = document.createElement("div");
    outputLine.textContent = message;
    consoleElement.appendChild(outputLine);
    originalLog.apply(console, arguments);
  };
}

function runCode() {
  // 执行代码
  try {
    eval(codeEditor.getValue());
  } catch (error) {
    console.log("Error: " + error.message);
  }
}

runButton.addEventListener("click", runCode);

// 页面加载完成后执行的逻辑
window.addEventListener("load", function () {
  redirectConsoleLog();
  runCode();
});
