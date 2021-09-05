chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message, sender , sendResponse){

    if(message.txt == 'copy products keywords on Redbubble'){
        let informations = document.getElementsByClassName('styles__button--2oYLO styles__neutral--9kdyo styles__strong--U_14i styles__small--3dqom');
        var keywords = [];
        for(elt of informations){
            let keyword = elt.title;
            keywords.push(keyword);
        }
        
        function deleteSpecifecWord(arr, word) {
            for (var i = 0; i < arr.length; i++){
                arr[i] = arr[i].replace(word,'');
            }
        }
        deleteSpecifecWord(keywords , 'T-Shirt');
        var hiddenElement = document.createElement('a');  
        hiddenElement.href = 'data:attachment/text,' + encodeURI(keywords);
        hiddenElement.target = '_blank';
        hiddenElement.download = 'RedbubbleKeywords.txt';
        hiddenElement.click();
    }
}