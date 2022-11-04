const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tag = await Tag.findAll();
    res.status(200).json(tag)
    } catch (err) {
        console.log(err)
    }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tags = await Tag.findByPk(req.params.id)
    if (!tags) {
       return res.status(400).json({message: 'No tags!'})
    }

    res.status(200).json(tags)

  } catch (err) {
      console.log(err)
  }
});
router.post('/', async(req, res) => {
  // create a new tag
  try {
const tag= await Tag.create(req.body);
    res.status(200).json(tag)
  } catch (err) {
    res.status(500).json(err)
  }
});
router.put('/:id', async(req, res) => {
  // update a tag's name by its `id` value
  try {
    const tag = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
      individualHooks: true,
    });
    if (!tag) {
      res.status(404).json({ message: "No tags with id!" });
    }else{
    res.status(200).json(tag);
  }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async(req, res) => {
  // delete on tag by its `id` value
  try {
    const tag = await Tag.destroy( {
      where: {
        id: req.params.id,
      },
      individualHooks: true,
    });
    if (!tag) {
      res.status(404).json({ message: "No tags with id!" });
    }else{
    res.status(200).json(tag);
  }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
