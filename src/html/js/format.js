let regex = /[%@{](\w+)[%@}]/g;

function format(text, context) {
	return text.replace(regex, (match, part) => {
		if(
			(
				match[0] === '{' &&
				match[match.length - 1] === '}'
			) ||
			match[0] === match[match.length - 1]
		) {
			if(part in context && context[part]) {
				return context[part];
			}
		}
		return match;
	})
}

module.exports = format;
