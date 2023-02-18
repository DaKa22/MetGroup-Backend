import { Article } from '../models/Article.js'
import { Store } from '../models/Store.js'

export const getAll = async (req, res) => {
  try {
    const articles = await Article.findAll()
    res.status(200).send({
      message: 'Articles retrieved successfully',
      data: articles
    })
  } catch (error) {
    res.status(500).send({
      message: 'Error -> servidor'
    })
  }
}

export const findById = async (req, res) => {
  try {
    const article = await Article.findByPk(req.params.id, { include: Store })
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

export const relationArticleStore = async (req, res) => {
  try {
    const { articleId, storeId, reference } = req.body
    const article = await Article.findByPk(articleId)
    
    if (!article) {
      res.status(400).send({
        message: 'Article not found'
      })
      return
    }

    const store = await Store.findByPk(storeId)
    if (!store) {
      res.status(400).send({
        message: 'Store not found'
      })
      return
    }

    article.addStore(storeId, { through: { reference } })
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

export const create = async (req, res) => {
  try {
    const { name, description, image } = req.body

    const register = await Article.findOne({ where: { name: name } })

    if (register) {
      res.status(400).send({
        message: 'Article already exists'
      })
      return
    }
    const article = await Article.create({ name, description, image })

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