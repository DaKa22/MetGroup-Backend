import { Article } from '../models/Article.js'

export const getAll = async (req, res) => {
  try {
    const articles = await Article.findAll({
      include: 'store'
    })
    res.status(200).send({
      message: 'Articles retrieved successfully',
      data: articles
    })
  } catch (error) {
    res.status(500).send({
      message: error.message+' Error -> servidor'
    })
  }
  
}

export const findById = async (req, res) => {
  try {
    const article = await Article.findByPk(req.params.id,
      {
        include: 'store'
      })
    if (!article) {
      res.status(400).send({
        message: 'Article not found'
      })
      return
    }

    res.status(200).send({
      message: 'Article retrieved successfully',
      data: article
    })
  } catch (error) {
    res.status(500).send({
      message: 'Error -> servidor'
    })
  }
}

export const create = async (req, res) => {
  try {
    const article = await Article.create(req.body)
    res.status(200).send({
      message: 'Article created successfully',
      data: article
    })
  } catch (error) {
    res.status(500).send({
      message: 'Error -> servidor'
    })
  }
}

export const update = async (req, res) => {
  try {
    const article = await Article.findByPk(req.params.id)
    if (!article) {
      res.status(400).send({
        message: 'Article not found'
      })
      return
    }

    article.update(req.body)
    res.status(200).send({
      message: 'Article updated successfully',
      data: article
    })
  } catch (error) {
    res.status(500).send({
      message: 'Error -> servidor'
    })
  }
}

export const remove = async (req, res) => {
  try {
    const article = await Article.findByPk(req.params.id)
    if (!article) {
      res.status(400).send({
        message: 'Article not found'
      })
      return
    }

    article.destroy()
    res.status(200).send({
      message: 'Article deleted successfully'
    })
  } catch (error) {
    res.status(500).send({
      message: 'Error -> servidor'
    })
  }
}