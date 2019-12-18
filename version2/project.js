var store_event = window.localStorage;
//file:///Applications/MAMP/htdocs/Project%20Web2%20Version2/project.html
    window.addEventListener("load", function(e){
      var temp_load = new AddEventTo_LocalStorage("load" , e );
      temp_load.addEvent();
    });
    window.addEventListener("unload", function(e){
        var temp_unload = new AddEventTo_LocalStorage("unload", e);
        temp_unload.addEvent();
    });
    setInterval(function(){
        $.ajax({
                "type":"POST",
                "url" : "http://localhost/dashboard/ProjectWeb2Version2/setData.php",
                "data" : {
                    AllRecords : JSON.stringify(store_event)
                },
                "success" : function(response){
                    console.log("done");
                    console.log(response);
                    store_event.clear()
                }

            });
    },5000);

var Generate = document.getElementById("characterView");
var divCharacters = document.getElementById("divCharacters");
var divImage = document.getElementById("divImage");

Generate.addEventListener("click",function(e){
   
    var txt = document.getElementsByTagName("input")[0];
    var n = parseInt(txt.value);

    if(n>=1 && n<=26){
    
        // localStorage of Generate Button and is valid
        var temp_Generate = new AddEventTo_LocalStorage("Generate", e );
        temp_Generate.addEvent();

        
        // to remove the previos element in divCharacters and divImage
        if (divCharacters.childNodes.length!=0){
                while (divCharacters.childNodes.length!=0) {
                    divCharacters.removeChild(divCharacters.childNodes[0]);
                }
        }
        if (divImage.childNodes[0]!=null){
            divImage.removeChild(divImage.childNodes[0]);
        }

        // array of character and array of boolean to now if character push to body or not to handle duplicated
        var characters = [String];
        var charactersHasAddedOrNot = [Boolean];
        for(i=97;i<123;){
            characters.push(String.fromCharCode(i++));
            charactersHasAddedOrNot.push(0);
        }

        for(var i=0;i<n;i++){
            var indexRadrom;
         // to create unique character to show
           while (true) {
             indexRadrom = Math.floor(Math.random()*26+1);
             if(charactersHasAddedOrNot[indexRadrom]==0){
                charactersHasAddedOrNot[indexRadrom]=1;
                break;
             }
           }

           // create new element to hold character
            var characterView = document.createElement("input");
            characterView.type = "submit";
            characterView.value = characters[indexRadrom];
            characterView.style.borderColor = 'lightgray';
            characterView.style.borderWidth = '1px';
            // add event to element when chicled
            characterView.addEventListener("click",function(e){

                var temp_click = new AddEventTo_LocalStorage("click to character {"+e.target.value+"}", e);
                temp_click.addEvent();

                // reset all element and add borderColor=red to the only element that has been selected
                var list = divCharacters.childNodes;
                for(var j=0;j<list.length;j++){
                    list[j].style.borderColor = 'lightgray';
                    list[j].style.borderWidth = '1px';
                }
                e.target.style.borderColor = 'red';
                e.target.style.borderWidth = '3px';

                // create new element to hold image
                var img = document.createElement("img");
                img.src = e.target.value+".jpg";
                img.width = 400;
                img.height = 400;
                if (divImage.childNodes[0] != null){
                    divImage.removeChild(divImage.childNodes[0]);
                }
                divImage.appendChild(img);
            });
            divCharacters.appendChild(characterView);
        }
    }else{
         alert("Please Enter Number from 1 to 26 ");
    }
});
function AddEventTo_LocalStorage(nameEvent , e , addEvent){
    this.nameEvent = nameEvent;
    this.e = e;
    this.addEvent = function(){
        var myData =  new data(nameEvent,new Date(),e.target)
        store_event.setItem(nameEvent,JSON.stringify(myData));
    }

}