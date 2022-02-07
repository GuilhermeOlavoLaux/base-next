export default function teste (req, res) {
    res.status(200).json({
        metodo: req.method
    })
}