import { Input, Label, Select } from "@rebass/forms";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Box, Button, Flex } from "rebass";
import { MusicGet, MusicUpdate } from "../../Store/songs";


const UpdateMusic = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const genreInput = useRef();
  const titleInput = useRef();
  const nameInput = useRef();
  const albumInput = useRef();
  const updateInput = useSelector((state) => state.musicUp.InputData);
  const FilterData = updateInput.filter((item) => item._id === id);

  useEffect(() => {
    dispatch(MusicGet());
  }, [dispatch]);


  const submitHandler = (e) => {
    e.preventDefault();

    const genre = genreInput.current.value;
    const title = titleInput.current.value;
    const artist_name = nameInput.current.value;
    const album_name = albumInput.current.value;
    dispatch(
      MusicUpdate({
        data: {
          id,
          genre,
          title,
          artist: artist_name,
          album: album_name,
        },
      })
    );
  };

  return (
    <Flex
      as={"div"}
      minHeight={"89vh"}
      maxHeight={"89vh"}
      overflow="scroll"
      alignItems={"center"}
      justifyContent={"center"}
      color={"black"}
    >
      {FilterData.map((item, index) => (
        <Box
          as={"form"}
          py={2}
          width={"60%"}
          onSubmit={submitHandler}
          sx={{
            boxShadow: "1px 1px 9px #0003",
            p: "2rem",
            borderRadius: "10px",
          }}
          key={index}
        >
          <Flex mx={-2} mb={3} flexWrap="wrap" alignItems={"center"}>
            <Box width={1 / 2} px={2}>
              <Label htmlFor="">Genre</Label>
              <Select id={""} ref={genreInput} defaultValue={item.gener}>
                <option>Blues</option>
                <option>Classical music</option>
                <option>Country</option>
                <option>Disco</option>
                <option>Electronic music</option>
                <option>Hip hop music</option>
                <option>Jazz</option>
                <option>Middle Eastern music</option>
                <option>Pop music</option>
                <option>Reggae</option>
                <option>Rock music</option>
                <option>Rhythm and blues</option>
                <option>Vocal music</option>
              </Select>
            </Box>
            <Box width={1 / 2} px={2}>
              <Label htmlFor="">Title</Label>
              <Input
                type={"text"}
                id={""}
                ref={titleInput}
                defaultValue={item.title}
              ></Input>
            </Box>
          </Flex>
          <Flex mx={-2} mb={3} flexWrap="wrap">
            <Box width={1 / 2} px={2}>
              <Label htmlFor="">Artist Name</Label>
              <Input
                type={"text"}
                id={""}
                ref={nameInput}
                defaultValue={item.artist}
              ></Input>
            </Box>
            <Box width={1 / 2} px={2}>
              <Label htmlFor="">Album Name</Label>
              <Input
                type={"text"}
                id={""}
                ref={albumInput}
                defaultValue={item.album}
              ></Input>
            </Box>
          </Flex>
          <Flex mx={-2} mb={3} flexWrap="wrap">
            <Box width={1 / 2} px={2} my={2}>
              <Button
                type="reset"
                width={"100%"}
                backgroundColor={"#ef345d"}
                sx={{ cursor: "pointer" }}
              >
                cancel
              </Button>
            </Box>
            <Box width={1 / 2} px={2} my={2}>
              <Button
                type="submit"
                width={"100%"}
                backgroundColor={"#cccc4c"}
                sx={{ cursor: "pointer" }}
              >
                submit
              </Button>
            </Box>
          </Flex>
        </Box>
      ))}
    </Flex>
  );
};

export default UpdateMusic;
