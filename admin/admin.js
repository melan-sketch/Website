var iframeDoc;
if (window.frames && window.frames.iframeId &&
    (iframeDoc = window.frames.iframeId.document)) {
    var iframeBody = iframeDoc.body;
    var ifromContent = iframeBody.innerHTML;
}
function changeColor() {
    let color = document.getElementById('colorInputColor').value;
    document.iframe.style.backgroundColor = color;
}