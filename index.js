module.exports = {
	d3ensure: function (selection, tagName) {
		var sel = selection.select(tagName)
		if (sel.node())
			return sel
			
		sel = selection.append(tagName)
		return sel
	}
}

	
