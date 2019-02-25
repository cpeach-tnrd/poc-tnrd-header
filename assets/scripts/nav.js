var nav = {
	
	data : {current:null},

	init :function(r){
        
        r.data.current = document.getElementById("municipalities");
        r.set.active(r,r.data.current);
        
    },
	
	set: {
        
        parent : {
            active : function(r,e){
                r.data.current = e;
                
            }
        },
   
    active : function(r,e){
        var id = e.getAttribute("id");
        r.set.inactive(r,r.data.current);
        e.setAttribute("class","nav-items-item-menu-light");
        var menu = document.getElementById(id+"_menu");
        menu.style.display = "inline-block";
        r.data.current = e;
    },
    inactive : function(r,e){
        var id = e.getAttribute("id");
        var menu = document.getElementById(id+"_menu");
        e.setAttribute("class","nav-items-item-menu");
        menu.style.display = "none";

    }

},
	get: function(){},
};