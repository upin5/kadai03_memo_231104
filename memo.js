
document.addEventListener("DOMContentLoaded", function() {
    const saveButton = document.getElementById("save");
    const resetButton= document.getElementById("reset");
    const memoryButton= document.getElementById("memory");

    const textarea = document.getElementById("maintext");
    const textarea2 = document.getElementById("maintext_2"); // 新しいテキストエリアを取得

    textarea.addEventListener("focus", function(){
        textarea.style.boxShadow = "0 0 20px rgba(0, 0, 0, 1.0)";
    });

    textarea.addEventListener("blur", function() {
        textarea.style.boxShadow = "none";
      });

    saveButton.addEventListener("click", function() {
        const savedText = textarea.value;
        if (savedText.includes("majan")) {
            const newWindow = window.open("ma.html", "_blank", "width=800,height=500");
        // }else if
        //     (savedText.includes("SAO") ){
        //      const newWindow2 = location.href ="https://sao-alicization.net/";
        }
        // タイムスタンプの取得
         const timestamp = new Date().toLocaleString();

         // テキストにタイムスタンプを追加
         const texttimestamp = `${savedText} (保存時刻: ${timestamp})`;   
    
    
         
    
        

        let savedTextArray = JSON.parse(localStorage.getItem("savedTextArray")) || [];
        savedTextArray.push(texttimestamp);
        localStorage.setItem("savedTextArray", JSON.stringify(savedTextArray));
    // alert("テキストが保存されました");
    
    textarea.value = "";


    });
    
    resetButton.addEventListener("click", function() {
    localStorage.removeItem("savedTextArray");
    textarea.value = "";
    textarea2.value = "";
    // alert("テキストが消去されました");
    });
    
    memoryButton.addEventListener("click", function() {
        const savedTextArray = JSON.parse(localStorage.getItem("savedTextArray"));
      
        if (savedTextArray) {
            textarea2.value = savedTextArray;
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
    
    