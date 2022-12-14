const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  TODO:// be sure to include its associated Products
  try {
    const Category = await Category.findAll();
    res.status(200).json(category)
    } catch (err) {
        console.log(err)
    }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const category = await Category.findByPk(req.params.id)
    if (!category) {
       return res.status(400).json({message: 'No category!'})
    }

    res.status(200).json(category)

  } catch (err) {
      console.log(err)
  }
});

router.post('/', async (req, res) => {
  try {
    const categories = await Category.create(req.body)
    res.status(200).json(categories)
  } catch (err) {
      console.log(err)
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const categories = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
      individualHooks: true
    });
    if (!categories[0]) {
      res.status(404).json({ message: 'No categories with id!' });
      return;
    }
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const category = await Category.destroy({
        where: {
            id: req.params.id
        }
    })

    if (!category) {
       return res.status(400).json({message: 'No categories!'})
    }

    res.status(200).json(category)
} catch (err) {
    console.log(err)
}
});

module.exports = router;
