const { readFileSync } = require('fs');

exports.about = readFileSync('../HTML/about.html','utf-8')
exports.blog = readFileSync('../HTML/blog.html','utf-8')
exports.contact = readFileSync('../HTML/contact.html','utf-8')
exports.index = readFileSync('../HTML/index.html','utf-8')
exports.pricing = readFileSync('../HTML/pricing.html','utf-8')
exports.services = readFileSync('../HTML/services.html','utf-8')
exports.work = readFileSync('../HTML/work.html','utf-8')
