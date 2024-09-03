function get (req, res) {
    res.send(`Hello World!`);
};

function post (req, res) {
    const body = req.body;
    const resObj = {
        message: 'Server is healthy',
        data: body
    };
    res.status(200).send(resObj);
};


const healthController = {
    get,
    post
}

export default healthController;