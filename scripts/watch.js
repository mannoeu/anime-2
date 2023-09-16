import { Controller } from "../api.js";
import { Fabric, NODES } from "../fabric.js";

async function initialize() {
  const data = await Controller.getPlayer(window.location.search);

  const url = data["1080p"] || data["720p"] || data["480p"];

  Fabric.insertInDOM(NODES.getPlayerNode(), Fabric.createPlayer(url));

  feather.replace();
}

initialize();
