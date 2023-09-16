const BASE_URL = "https://animesvision.vercel.app";

async function request(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro:", error);
    return [];
  }
}

export const Controller = {
  async getPlayer(prams) {
    const data = await request(`${BASE_URL}/anime/player${prams}`);
    return data;
  },
  async getEpisodes() {
    const data = await request(`${BASE_URL}/home/episodios`);
    return data;
  },
};
