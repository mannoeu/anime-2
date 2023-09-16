export const NODES = {
  getEpisodesNode: () => document.querySelector("#episodes"),
  getPlayerNode: () => document.querySelector("#player"),
};

const createEpisodeCard = (episode) => {
  const episodeCard = document.createElement("a");
  episodeCard.href = "watch.html?link=" + episode?.link;
  episodeCard.classList.add("group/episode", "overflow-hidden");

  const episodeListItem = document.createElement("li");
  episodeListItem.classList.add("w-[320px]", "h-[280px]", "relative");

  const episodeBlur = document.createElement("div");
  episodeBlur.classList.add(
    "pointer-events-none",
    "select-none",
    "w-full",
    "h-full",
    "bg-c_dark_1/60",
    "absolute",
    "top-0",
    "left-0",
    "z-5",
    "group-hover/episode:bg-c_dark_1/40",
    "transition-all"
  );

  const episodeImage = document.createElement("img");
  episodeImage.classList.add("object-cover", "w-[100%]", "h-[100%]");
  episodeImage.src = episode?.thumbnail;

  const episodeQuality = document.createElement("span");
  episodeQuality.classList.add(
    "absolute",
    "top-4",
    "left-2",
    "bg-red-600",
    "uppercase",
    "text-xs",
    "p-1",
    "rounded-md"
  );
  episodeQuality.textContent = episode?.quality;

  const episodeInfoHeader = document.createElement("header");
  episodeInfoHeader.classList.add("absolute", "bottom-4", "left-2", "right-2");

  const episodeNumber = document.createElement("p");
  episodeNumber.classList.add("text-xs", "shadow-sm");
  episodeNumber.textContent = episode?.episodeNumber;

  const episodeTitle = document.createElement("h2");
  episodeTitle.classList.add("text-md", "shadow-sm");
  episodeTitle.textContent = episode?.title;

  const playIcon = document.createElement("i");
  playIcon.classList.add(
    "absolute",
    "top-1/2",
    "left-1/2",
    "transform",
    "-translate-x-1/2",
    "-translate-y-1/2",
    "w-12",
    "h-12",
    "bg-c_gray_1/60",
    "scale-95",
    "rounded-full",
    "p-2",
    "group-hover/episode:scale-105",
    "transition-all"
  );
  playIcon.setAttribute("data-feather", "play-circle");

  episodeInfoHeader.appendChild(episodeNumber);
  episodeInfoHeader.appendChild(episodeTitle);

  episodeListItem.appendChild(episodeBlur);
  episodeListItem.appendChild(episodeImage);
  episodeListItem.appendChild(episodeQuality);
  episodeListItem.appendChild(episodeInfoHeader);
  episodeListItem.appendChild(playIcon);

  episodeCard.appendChild(episodeListItem);

  return episodeCard;
};

const createPlayer = (url) => {
  const player = document.createElement("video");
  player.src = url;
  player.controls = true;
  player.autoplay = false;
  player.classList.add("w-5/6", "h-5/6", "mx-auto");

  return player;
};

export const Fabric = {
  createEpisodeCard,
  createPlayer,
  insertInDOM: (node, ...content) => {
    node.append(...content);
  },
};
