//window Name _blank, _parent, _self, _top

var myWindow;

function openWindow() {

    let url = 'http://www.google.com';

    let features = "width=800px,height=500px"

    myWindow = window.open(url, "", features);

}


function closeWindow() {
    myWindow.close();
}