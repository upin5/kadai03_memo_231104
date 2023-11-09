document.addEventListener("DOMContentLoaded", function() {
    const saveButton = document.getElementById("kiroku");
    const resetButton= document.getElementById("kesu");
    const memoryButton= document.getElementById("yobu");

    const textarea = document.getElementById("tokuten");
    const textarea2 = document.getElementById("han"); // 新しいテキストエリアを取得

   // 全角文字を含む入力をブロックする関数
    function blockNonNumericInput(event) {
    const input = event.key;

    // 半角数字以外の文字をブロック
    if (!input.match(/^[-0-9]$/)) {
        event.preventDefault(); // 入力を無効にする
        }
   }

    // textareaに対して入力検証を追加
    textarea.addEventListener("keydown", blockNonNumericInput);



    textarea.addEventListener("focus", function(){
        textarea.style.boxShadow = "0 0 20px rgba(0, 0, 0, 1.0)";
    });
    textarea.addEventListener("blur", function() {
        textarea.style.boxShadow = "none";
    });

    saveButton.addEventListener("click", function() {
   
       



    let savedTextArray = JSON.parse(localStorage.getItem("savedTextArray")) || [];
    savedTextArray.push(textarea.value);
    localStorage.setItem("savedTextArray", JSON.stringify(savedTextArray));
    // alert("テキストが保存されました");
    
    textarea.value = "";
    
    });

    resetButton.addEventListener("click", function() {
        localStorage.removeItem("savedTextArray");
        textarea.value = "";
        textarea2.value = "";
    });

    memoryButton.addEventListener("click", function() {
        const savedTextArray = JSON.parse(localStorage.getItem("savedTextArray"));
      
        if (savedTextArray) {
            const formattedText = savedTextArray.map((text, index) => `${index + 1}半荘目： ${text}`).join("\n");
            textarea2.value = formattedText; 
            // alert("テキストが呼び出されました");
        } else {
            alert("保存されたテキストはありません");
        }
      });
        const savedText = localStorage.getItem("savedTextArray");
        if (savedText) {
 
           textarea2.value = savedText;
 
        }   
});
