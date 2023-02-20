import { User } from '../models/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const getAll = async (req, res) => {
  try {
    const users = await User.findAll()
    res.status(200).send({
      message: 'Users retrieved successfully',
      data: users
    })
  } catch (error) {
    res.status(500).send({
      message: 'Error -> servidor'
    })
    next(error);
  };
}

export const create = async (req, res) => {
  try {
    const { name, email, password } = req.body
    const register = await User.findOne({ where: { email } })
    console.log(register)
    if (!register && register != null) {
      res.status(400).send({
        message: 'User already exists'
      })
      return
    }

    const newUser = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, 10),
    })
    res.status(200).send({
      message: 'User created successfully',
      data: newUser
    })
  } catch (error) {
    res.status(500).send({
      message: error.message
    })
  }
}

export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, password } = req.body;
    const userUpdate = await User.findByPk(id)

    userUpdate.update({
      name,
      password,
    })

    if (userUpdate) {
      res.status(200).send({
        message: 'User updated successfully',
        data: userUpdate
      })
      return
    }

    res.status(400).send({
      message: 'User not found'
    })
  } catch (error) {
    res.status(500).send({
      message: 'Error -> servidor'
    })
  }
}

export const remove = async (req, res) => {
  try {
    const { id } = req.params
    const userDelete = await User.destroy({ where: { id } })
    if (userDelete) {
      res.status(200).send({
        message: 'User deleted successfully',
      })
      return
    }

    res.status(400).send({
      message: 'User not found'
    })
  } catch (error) {
    res.status(500).send({
      message: 'Error -> servidor'
    })
  }
}

export const findById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      res.status(400).send({
        message: 'User not found'
      })
      return
    }

    res.status(200).send({
      message: 'User retrieved successfully',
      data: user
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: 'Error -> servidor'
    })
  }

}

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    // console.log(user)
    if (!user) {
      res.status(400).send({
        message: 'User not found'
      })
      return
    }

    const passwordIsValid = bcrypt.compareSync(password, user.password);
    if (passwordIsValid) {
      let keyJwt = process.env.KEY_JWT
      let data = {
        time: Date(), userId: user.id
      }
      res.status(200).send({
        message: 'User logged successfully',
        data: user,
        token: jwt.sign(data, keyJwt),

      })
      return
    }

    res.status(401).send({
      message: 'Wrong password'
    })
  } catch (error) {
    res.status(500).send({
      message: 'Error -> servidor'
    })
  }
}