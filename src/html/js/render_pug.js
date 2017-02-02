const fs = require('fs'),
	pug = require('pug');

function render(filename, context) {
	return new Promise((resolve, reject) => {
		fs.readFile(
			`${__dirname}/../pug/${filename}.pug`,
			'utf8',
			(fs_err, data) => {
				if(fs_err) reject(fs_err);
				pug.render(
						data,
						context,
						(err, html) => {
							if(err) reject(err);
							else resolve(html);
						}
					);
			}
		);
	});
}

module.exports = {
	render
};
