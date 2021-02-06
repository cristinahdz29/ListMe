// testing route
// sending json back to user
module.exports = (req, res, next) => {
    res.status(200).json("ok")
}