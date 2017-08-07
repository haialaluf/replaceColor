replaceColor = (oldColor, newColor) => {
    function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})` : null;
    }
	var replace = (el) => {
		if (el.style.backgroundColor === hexToRgb(oldColor)) 
			el.style.backgroundColor = hexToRgb(newColor);
		if (el.style.borderColor === hexToRgb(oldColor)) 
			el.style.borderColor = hexToRgb(newColor);
		if (el.style.color === hexToRgb(oldColor)) 
			el.style.color = hexToRgb(newColor);

	}
	var all = document.getElementsByTagName("*");

    for (var i=0, max=all.length; i < max; i++) {
         replace(all[i])
    }
}
