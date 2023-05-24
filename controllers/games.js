const { Game } = require('../models')


async function create (req, res){
  try{
    const game = await Game.create(req.body)
    res.stauts(200).json(game)
  } catch (error){
    res.status(500).json(error)
  }
}

async function index (req,res){
  try{
    const games = await Game.findAll()
    res.status(200).json(cats)
  } catch (error){
    res.status(500).json(error)
  }
}

async function update (req, res){
  try{
    const game = await Game.update(
      req.body,
      {where: {id: req.params.gameId}, returning: true}
    )
    res.status(200).json(game)
  } catch (error){
    res.status(500).json(error)
  }
}

async function deleteGame (req, res){
  try{
    const numberOfRowsRemoved = await Game.destroy(
      { where: { id: req.params.catId } }
    )
    res.status(200).json(numberOfRowsRemoved)
  } catch (error){
    res.status(500).json(error)
  }
}

module.exports = {
  create,
  index,
  update,
  delete: deleteGame
}