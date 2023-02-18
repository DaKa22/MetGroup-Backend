import { Store } from '../models/Store.js'
import { User } from '../models/User.js'
import { Article } from '../models/Article.js'

export const getAll = async (req, res) => {
  try {
    const stores = await Store.findAll({ include: User })
    res.status(200).send({
      message: 'Stores retrieved successfully',
      data: stores
    })
  } catch (error) {
    res.status(500).send({
      message: 'Error -> servidor'
    })
  }
}

export const findById = async (req, res) => {
  try {
    const store = await Store.findByPk(req.params.id, { include: Article })
    if (!store) {
      res.status(400).send({
        message: 'Store not found'
      })
      return
    }

    res.status(200).send({
      message: 'Store retrieved successfully',
      data: store
    })
  } catch (error) {
    res.status(500).send({
      message: 'Error -> servidor'
    })
  }
}

export const create = async (req, res) => {
  try {
    const store = await Store.create(req.body)
    res.status(200).send({
      message: 'Store created successfully',
      data: store
    })
  } catch (error) {
    res.status(500).send({
      message: 'Error -> servidor'
    })
  }
}

export const update = async (req, res) => {
  try {
    const store = await Store.findByPk(req.params.id)
    if (!store) {
      res.status(400).send({
        message: 'Store not found'
      })
      return
    }

    store.update(req.body)
    res.status(200).send({
      message: 'Store updated successfully',
      data: store
    })
  } catch (error) {
    res.status(500).send({
      message: 'Error -> servidor'
    })
  }
}

export const remove = async (req, res) => {
  try {
    const store = await Store.findByPk(req.params.id)
    if (!store) {
      res.status(400).send({
        message: 'Store not found'
      })
      return
    }
    
    store.destroy()
    res.status(200).send({
      message: 'Store deleted successfully'
    })
  } catch (error) {
    res.status(500).send({
      message: 'Error -> servidor'
    })
  }
}