"use strict";

module.exports = {
	
	run: () => {		
		const path = require('path');
		const c = require(path.join(__dirname, "controls.js"));
		const site_root = c.path("..");

		const fs = require("fs");
		const rimraf = require("rimraf");
		const minify = require("minify");


		const remove_dirs = [];
		const remove_files = [];

		const minify_dirs = ["/public"];


		for(const dir of remove_dirs){
			c.log("Removing " + path.join(dir));
			rimraf.sync(path.join(site_root, dir));
		}

		for(const file of remove_files){
			c.log("Removing " + path.join(file));
			fs.unlinkSync(path.join(site_root, file));
		}
		
		for(const dir of minify_dirs){
			if(!fs.existsSync(path.join(site_root, dir))) continue;
			const files = fs.readdirSync(path.join(site_root, dir));
			for(const file of files){
				const p = path.extname(file).toLowerCase();
				if(p === ".html" || p === ".css" || p === ".js"){
					c.log("Minifying " + path.join(dir, file));
					minify(path.join(site_root, dir, file)).then(minified => {
						fs.writeFileSync(path.join(site_root, dir, file), minified);
					}).catch(e => {c.fail("Failed to minify" + path.join(dir, file) + ": " + e);});
				}else if(p === ".json"){
					c.log("Minifying " + path.join(dir, file));
					fs.writeFileSync(file, JSON.stringify(JSON.parse(fs.readFileSync(path.join(site_root, dir, file)))));
				}
			}
		}
	}
}