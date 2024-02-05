import axios from "axios";
import { toast } from "react-toastify";

export const fetchInputData = async (Data) => {
  try {
    const createMusic = await fetch(
      "https://musicaddis.onrender.com/api/v1/music/songs",
      {
        method: "POST",
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

    if (createMusic.ok) {
      toast.success("Song CREATED successfully!");
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    } else {
      const errorResponse = await createMusic.json();
      toast.error(errorResponse.error);
    }
  } catch (error) {
    console.error(error);
    toast.error(error);
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
  try {
    const id = Data.id;
    const updateData = await fetch(
      `https://musicaddis.onrender.com/api/v1/music/songs/${id}`,
      {
        method: "put",
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

    if (updateData.status === 200 || updateData.status === 204) {
      toast.success("Song UPDATED successfully!");
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    } else {
      const errorResponse = await updateData.json();
      toast.error(errorResponse.error);
    }
  } catch (error) {
    console.error(error);
    toast.error("An unexpected error occurred.");
  }
};

export const fetchDelete = async (data) => {
  const id = data.id;
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
    toast.success("Song DELETED successfully!");
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }
};
