/*  
 setInterval(function() {
     console.log($('#plate1').css)
    $('#plate1').css({ fill: "#000"});
    }, 1000);
    setInterval(function() {
    $('#plate1').css({ fill: "#FFF"});
    }, 2000);

     */


    var tl = new TimelineMax({onComplete:changeColor});
	

	function changeColor()
	{
		tl.from('#plate1, #plate2', .5, {fill:"red"
		}).from('#plate1, #plate2', .6, {
			fill:"#fff"
		})
	}
