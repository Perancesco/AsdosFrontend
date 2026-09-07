document.addEventListener('DOMContentLoaded', function() {
    const element = document.querySelector('#container');
    
    console.log('Node Type:', element.nodeType); // 1 (Node.ELEMENT_NODE)
    console.log('Node Name:', element.nodeName); // DIV
    console.log('Node Value:', element.nodeValue); // null (karena element node)
    
    const textNode = element.firstChild;
    console.log('Text Node Type:', textNode.nodeType); // 3 (Node.TEXT_NODE)
    console.log('Text Node Name:', textNode.nodeName); // #text
    console.log('Text Node Value:', textNode.nodeValue); // teks (termasuk whitespace)
});