const logger = (req, res, next) => {
    const date = new Date();
    console.log(date.toISOString() + '-' + req.method + '-' + req.url);
    next();
    
}

module.exports = logger;