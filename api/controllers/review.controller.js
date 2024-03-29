const createError = require("../utils/createError")
const Review = require("../models/review.model")
const Gig = require("../models/gig.model")

const createReview = async (req, res, next) => {
    if (req.isSeller)
        return next(createError(403, "Seller can't create a review"))

    const newReview = new Review({
        userId: req.userId,
        gigId: req.body.gigId,
        desc: req.body.desc,
        star: req.body.star,

    })
    try {

        const review = await Review.findOne({
            gigId: req.body.gigId,
            userId: req.userId
        })

        if (review) return next(createError(403, "You already created review"))

        const savedReview = await newReview.save();

        await Gig.findByIdAndUpdate(req.body.gigId, { inc: { totalstars: req.body.star } })
        res.status(201).send(savedReview)
    } catch (err) {
        next(err)
    }
}

const getReviews = async (req, res, next) => {
    try {
        const reviews = await Review.find({ gigId: req.params.gigId })
        res.status(200).send(reviews)
    } catch (err) {
        next(err)
    }
}

const deleteReview = async (req, res, next) => {
    try {

    } catch (err) {
        next(err)
    }
}

module.exports = { createReview, getReviews, deleteReview }