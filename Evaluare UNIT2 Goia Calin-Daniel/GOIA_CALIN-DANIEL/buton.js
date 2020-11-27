startTransition(); 
function startTransition() { 
    var images = document.getElementsByClassName("capture"); 
    for (var i = 0; i < images.length; ++i) { 
        images[i].style.opacity = 1; 
    } 
    var top = 1; 
    var c = images.length - 1; 
    setInterval(changeImage, 3000); 
    async function changeImage() { 
  
            var nextImage = (1 + c) % images.length;
			images[c].style.zIndex = top + 1; 
            images[nextImage].style.zIndex = top; 
            await transition(); 
            images[c].style.zIndex = top; 
            images[nextImage].style.zIndex = top + 1;
            top = top + 1; 
            images[c].style.opacity = 1;  
            c = nextImage; 
        } 
    function transition() { 
            return new Promise(function(resolve, reject) { 
                var del = 0.01; 
                var id = setInterval(changeOpacity, 10); 
                function changeOpacity() { 
                    images[c].style.opacity -= del; 
                    if (images[c].style.opacity <= 0) { 
                            clearInterval(id); 
                            resolve(); 
                        } 
                    } 
  
                })
        } 
} 