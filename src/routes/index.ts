import * as express from "express";

export const register = (app: express.Application ) => {
  app.get("/items", (req, res) => {
    res.render("items");
  });

  app.get("/", (req, res) => {
    res.render("index");
  });
};