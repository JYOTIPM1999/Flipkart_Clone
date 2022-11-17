const express = require("express");
const UserModel = require("../Schema/user.model");
const jwt = require("jsonwebtoken");

const app = express.Router();
