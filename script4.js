var objects = {};
objects['object5'] = {
        name: 'object5', 
        description: 'long description for the object 5, that can take several lines and even more long description for the object 5, that can take several lines and even more long description for the object 5, that can take several lines and even more long description for the object 5, that can take several lines and even more', 
        description_image: './5.png'
};
objects['object6'] = {
        name: 'object6', 
        description: 'long description for the object 6, that can take several lines and even more', 
        description_image: './06-barcode.png'
};
        


AFRAME.registerComponent('markerhandler', {
    init: function () {
      
      const marker = this.el;
      const name = document.querySelector('.instructions');
      const description = document.querySelector('.description_txt');
            
      const button_close_fact = document.querySelector('button[data-action="close_fact"]');
      const button_camera_map = document.querySelector('button[data-action="camera_map"]');
      const button_language = document.querySelector('button[data-action="language"]');      
      div.style.display = "none";
      description.style.display = "none";
      button_close_fact.style.display = "none"; 
      button_camera_map.innerText="C";
      button_camera_map.style.display = "block";
      button_language.innerText = "L";
      button_language.style.display = "block";
            
      button_close_fact.addEventListener('click', function () {
            name.innerText = "";
            description.innerText = "";
            button_close_fact.innerText="";
            div.style.display = "none";
            button_close_fact.style.display = "none";
            description.style.display = "none";
        });
            
      button_camera_map.addEventListener('click', function () {
            // switch between map and camera
            current_select = button_camera_map.innerText;
            if (current_select == "C") {
                    // enable camera
                    button_camera_map.innerText = "M";
            }
            else {
                    // disable camera
                    // enable map
                    button_camera_map.innerText = "C";
            }
        });
            
      button_language.addEventListener('click', function () {
            
        });
      
      // test display
      //name.innerText = objects['object5'].name;
      //var elem_img = document.createElement("img");
      //elem_img.src = objects['object5'].description_image;
      //description.appendChild(elem_img);
      //var elem_txt = document.createTextNode(objects['object5'].description);
      //description.appendChild(elem_txt);
      
      marker.addEventListener('markerFound', () => {
        button_close_fact.innerText = 'X';
        description.innerText = "";     
        name.innerText = objects[marker.id].name;
        var elem_img = document.createElement("img");
        elem_img.src = objects[marker.id].description_image;
        description.appendChild(elem_img);
        var elem_txt = document.createTextNode(objects[marker.id].description);
        description.appendChild(elem_txt);
        name.style.display = "block";
        button_close_fact.style.display = "block";
        description.style.display = "block";

      });
      //marker.addEventListener('markerLost', () => {
      //  name.innerText = "";
      //  description.innerText = "";
      //})
    }
  });
