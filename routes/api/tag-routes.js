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
TODO:
router.post('/', (req, res) => {
  // create a new tag
});
TODO:
router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});
TODO:
router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
