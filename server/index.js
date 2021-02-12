const express = require("express");
const app = express();
const cors = require("cors");
const { promisify } = require("util");
const readFile = promisify(require("fs").readFile);

let lists;
let versions;
let details;

app.use(cors());

app.get("/api/lists", async (req, res) => {
  if (!lists) {
    lists = JSON.parse(await readFile(__dirname + "/data/lists.json"));
  }

  res.json(lists).end();
});

app.get("/api/versions", async (req, res) => {
  if (!versions) {
    versions = JSON.parse(await readFile(__dirname + "/data/versions.json"));
  }

  let result = versions;
  if (req.query.listId) {
    const listId = parseInt(req.query.listId, 10);
    result = result.filter(({ ListId }) => ListId === listId);
  }

  res.json(result).end();
});

app.get("/api/details", async (req, res) => {
  if (!details) {
    details = JSON.parse(await readFile(__dirname + "/data/details.json"));
  }

  let result = details;
  if (req.query.versionId) {
    const versionId = parseInt(req.query.versionId, 10);
    result = result.filter(({ ListVersionId }) => ListVersionId === versionId);
  }

  res.json(result).end();
});

app.listen(4000);
