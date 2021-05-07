const http = require('http')
const { index, about, contact, pricing, services, work, blog } = require('./loadContent')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end(index)
    }
    else if(req.url === '/about'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end(about)
    }
    else if(req.url === '/blog'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end(blog)
    }
    else if(req.url === '/contact'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end(contact)
    }
    else if(req.url === '/pricing'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end(pricing)
    }
    else if(req.url === '/services'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end(services)
    }
    else if(req.url === '/work'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end(work)
    }
    else {
        res.end('<h1>Page Not Found</h1>')
    }
})

module.exports = server