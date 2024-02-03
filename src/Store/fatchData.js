import axios from "axios";

export const fetchInputData = async (Data) => {
  const createMusic = fetch(
    "https://musicaddis.onrender.com/api/v1/music/songs",
    {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        gener: Data.genre,
        title: Data.title,
        artist: Data.artist,
        album: Data.album,
      }),
    }
  );

  if (createMusic) {
    window.location.href = "/";
  }
};

export const fetchGet = async () => {
  const getMusic = await axios.get(
    "https://musicaddis.onrender.com/api/v1/music/songs"
  );
  return getMusic.data;
};

export const fetchGetStatics = async () => {
  const data = await axios.get(
    "https://musicaddis.onrender.com/api/v1/music/overall-statistics"
  );
  return data.data;
};

export const fetchUpdate = async (Data) => {
  const id = Data.id
  const updateData = fetch(
    `https://musicaddis.onrender.com/api/v1/music/songs/${id}`,
    {
      method: "put",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        gener: Data.genre,
        title: Data.title,
        artist: Data.artist,
        album: Data.album,
      }),
    }
  );
  if (updateData) {
    window.location.href = "/";
  }
};

export const fetchDelete = async (data) => {
  const id = data.id
  const deleteData = fetch(
    `https://musicaddis.onrender.com/api/v1/music/songs/${id}`,
    {
      method: "delete",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ id }),
    }
  );
  if (deleteData) {
    window.location.reload();
  }
};
