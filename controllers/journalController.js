const User = require("../models/userModel");

exports.createJournal = async (req, res, next) => {
  const user = await User.findById(req.params.userId);
  user.journals.push(req.body);
  await user.save();
  res.status(201).json(user.journals);
};

exports.getJournals = async (req, res, next) => {
  const user = await User.findById(req.params.userId);
  res.json(user.journals);
};

exports.getJournal = async (req, res, next) => {
  const user = await User.findById(req.params.userId);
  const journal = user.journals.id(req.params.journalId);
  res.json(journal);
};

exports.updateJournal = async (req, res, next) => {
  const user = await User.findById(req.params.userId);
  const journal = user.journals.id(req.params.journalId);
  Object.assign(journal, req.body);
  await user.save();
  res.json(journal);
};

exports.deleteJournal = async (req, res, next) => {
  const user = await User.findById(req.params.userId);
  user.journals.id(req.params.journalId).deleteOne();
  await user.save();
  res.status(204).send();
};
