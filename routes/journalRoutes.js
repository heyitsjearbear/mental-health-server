const express = require("express");
const journalController = require("../controllers/journalController");
const router = express.Router();

router.post("/:userId/journals", journalController.createJournal);
router.get("/:userId/journals/", journalController.getJournals);
router.get("/:userId/journals/:journalId", journalController.getJournal);
router.put("/:userId/journals/:journalId", journalController.updateJournal);
router.delete("/:userId/journals/:journalId", journalController.deleteJournal);

module.exports = router;