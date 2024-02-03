import React, { useEffect } from "react";
import PlayList from "../component/CRUD/PlayList";
import Home from "../component/Home/Home";
import { useDispatch, useSelector } from "react-redux";
import { MusicGet } from "../Store/songs";

const AllList = () => {
  const getData = useSelector((state) => state.musicUp.InputData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(MusicGet());
  }, [dispatch]);

  return (
    <Home>
      <PlayList DUMMY_MUSIC={getData} />
    </Home>
  );
};

export default AllList;
