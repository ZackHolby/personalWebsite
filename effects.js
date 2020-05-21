
//typewriter for title slide
var i=0;

function typeWriter() {
    let name = 'Zachary Holbrook';
    let info = 'Computer Science at Ohio State'
    if (i < info.length) {
        document.getElementById("titleName").innerHTML += name.charAt(i);
        document.getElementById("titleInfo").innerHTML += info.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}
