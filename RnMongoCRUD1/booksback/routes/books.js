import Router from "express";
import Book from "../models/book.model.js";
const router = Router();

router.get("/", (req, res) => {
  Book.find()
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      res.json({ message: e });
    });
});

router.post("/", (req, res) => {
  const book = new Book({
    title: req.body.title,
    description: req.body.description,
  });

  book
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      res.json({ message: e });
    });
});

router.delete("/:id", (req, res) => {
  Book.findByIdAndRemove(
    { _id: req.params.id },
    (err, deletedDoc) => {
      if (err) res.json({ message: e });
      else {
        res.json(deletedDoc);
      }
    }
  );
});

router.patch("/:id", (req, res) => {
  Book.findByIdAndUpdate(
    { _id: req.params.id },
    {
      description: req.body.description,
      title: req.body.title,
    },
    { new: true },
    (err, updatedDoc) => {
      if (err) res.json({ message: e });
      else {
        res.json(updatedDoc);
      }
    }
  );
});

export default router;
