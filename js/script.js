
document.write("Welcome to Logan Walker's website. Now as you can see, there is a button right underneath.  Click it now or die");
document.write("<br>");
document.write("btw, if in the top right corner, you get an error saying 'pop-up blocked' then just click allow please for this to work, thx");
document.write("<br>");
// 1. Create the button
var button = document.createElement("button");
button.innerHTML = "Do Something";

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

// 3. Add event handler
button.addEventListener ("click", function() {
    for(i=0; i<5; i++){    
    window.open("http://youtube.com");    
}
});