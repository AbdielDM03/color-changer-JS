const colors = ['green', 'blue', 'red','yellow', 'black']

document.getElementById("colorChanger").addEventListener("click", change)

let index = 0;

function change(){
    document.getElementsByTagName("body")[0].style.background = colors[index++]
    if (index > colors.length){
        index = 0
    }
}
change()


// array -> add event to run func -> grab random color -> show it