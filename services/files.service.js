export const downloadCredentialPdf = (url) => {
    let filePath = url;
    var a = document.createElement('A');
    a.href = filePath;
    a.target = "_blank"
    a.download = filePath.substr(filePath.lastIndexOf('/') + 1);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}