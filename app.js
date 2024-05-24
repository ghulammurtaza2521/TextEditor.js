  // Searching Text Start

  function higlight() {
    var para = document.getElementById('para')
    var change = para.innerText.toLowerCase()
    var input1 = document.getElementById('inp').value.toLowerCase()
    para.innerHTML = (change.replaceAll(input1, `<mark> ${input1}</mark>`))
}
// Searching Text End

// ChangeColor Start

function changecolor() {
    var fcolor = document.getElementById("fcolor").value
    document.execCommand('foreColor', false, fcolor)
}
// ChangeColor End



// ChangeFont Start
function changeFont() {
    var font = document.getElementById("font").value
    document.execCommand('fontname', false, font)
}

// ChangeFont End


// ChangeFontSize Start

function Fontsize() {
    var size = document.getElementById("size").value
    document.execCommand('fontsize', false, size)
}

function changeSize() {
    var mysize = document.getElementById("fontSize").value;
    document.execCommand('fontSize', false, mysize);
}