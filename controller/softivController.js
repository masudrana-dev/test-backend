const Blog = require('../model/softivSchema.js')

function createBlog(req, res) {
    const { blogName, details } = req.body

    const softivList = new Blog({
        blogName: blogName,
        details: details
    })
    softivList.save();
    res.send({ message: 'blog created' })
}

async function getAllBlog(req, res) {
    try {
        const blog = await Blog.find();
        res.json(blog)
    } catch (err) {
        res.send({ message: "failed to fetch", err })
    }

}

module.exports = { createBlog, getAllBlog }