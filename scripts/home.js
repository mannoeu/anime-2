import { Controller } from "../api.js";
import { Fabric, NODES } from "../fabric.js";

async function initialize() {
  const data = await Controller.getEpisodes();

  Fabric.insertInDOM(
    NODES.getEpisodesNode(),
    ...data.map((item) => Fabric.createEpisodeCard(item))
  );

  feather.replace();
}

initialize();
