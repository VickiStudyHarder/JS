// var codeEditor = CodeMirror.fromTextArea(
//   document.getElementById("code-editor"),
//   {
//     mode: "javascript",
//     lineNumbers: true,
//     theme: "eclipse",
//     autoRefresh: true
//   }
// );
// codeEditor.setSize('100%','80%')


// var consoleElement = document.getElementById("console");
// var runButton = document.getElementById("run-button");

// function redirectConsoleLog() {
//   var originalLog = console.log;
//   console.log = function (message) {
//     var outputLine = document.createElement("div");
//     outputLine.textContent = message;
//     consoleElement.appendChild(outputLine);
//     originalLog.apply(console, arguments);
//   };
// }

// function runCode() {
//   // 执行代码
//   try {
//     eval(codeEditor.getValue());
//   } catch (error) {
//     console.log("Error: " + error.message);
//   }
// }

// runButton.addEventListener("click", runCode);

// // 页面加载完成后执行的逻辑
// window.addEventListener("load", function () {
//   redirectConsoleLog();
//   runCode();
// });

function createCodeEditor(elementId, options) {
  var codeEditor = CodeMirror.fromTextArea(document.getElementById(elementId), options);

  function redirectConsoleLog(consoleElement) {
    var originalLog = console.log;
    console.log = function (message) {
      var outputLine = document.createElement("div");
      outputLine.textContent = message;
      consoleElement.appendChild(outputLine);
      originalLog.apply(console, arguments);
    };
  }

  function runCode(codeEditor, consoleElement) {
    // 执行代码
    try {
      eval(codeEditor.getValue());
    } catch (error) {
      console.log("Error: " + error.message);
    }
  }

  var consoleElement = document.getElementById(options.consoleId);
  var runButton = document.getElementById(options.runButtonId);

  runButton.addEventListener("click", function () {
    runCode(codeEditor, consoleElement);
  });

  // 页面加载完成后执行的逻辑
  window.addEventListener("load", function () {
    redirectConsoleLog(consoleElement);
    runCode(codeEditor, consoleElement);
  });

  return codeEditor;
}

// 创建第一个编辑器
var codeEditor1 = createCodeEditor("code-editor1", {
  mode: "javascript",
  lineNumbers: true,
  theme: "eclipse",
  autoRefresh: true,
  consoleId: "console1",
  runButtonId: "run-button1"
});

// 创建第二个编辑器
var codeEditor2 = createCodeEditor("code-editor2", {
  mode: "htmlmixed",
  lineNumbers: true,
  theme: "material",
  autoRefresh: true,
  consoleId: "console2",
  runButtonId: "run-button2"
});
codeEditor2.setSize('100%','90%')
