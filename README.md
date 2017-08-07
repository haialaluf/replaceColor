replaceColor = (oldColor, newColor) => {
    function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})` : null;
    }
	var replace = (el) => {
	if ($(el).children().length)
		$(el).children().each((i, e)=>replace(e))
	else {
		if ($(el).css("background-color") === hexToRgb(oldColor)) 
			$(el).css("background-color", hexToRgb(newColor))
		if ($(el).css("border-color") === hexToRgb(oldColor)) 
			$(el).css("border-color", hexToRgb(newColor))
		if ($(el).css("color") === hexToRgb(oldColor)) 
			$(el).css("color", hexToRgb(newColor))

    }
}
	replace('body')
}
