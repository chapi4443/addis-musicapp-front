import { Input, Label, Select } from "@rebass/forms";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Box, Button, Flex } from "rebass";
import { MusicInput } from "../../Store/songs";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
const CreateMusic = () => {
  const dispatch = useDispatch();

  const genreInput = useRef();
  const titleInput = useRef();
  const nameInput = useRef();
  const albumInput = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const genre = genreInput.current.value;
    const title = titleInput.current.value;
    const artist_name = nameInput.current.value;
    const album_name = albumInput.current.value;

    dispatch(
      MusicInput({
        data: {
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
      minHeight={"89vh"}
      maxHeight={"89vh"}
      overflow="scroll"
      alignItems={"center"}
      justifyContent={"center"}
      color={"black"}
    >
      <ToastContainer />
      <Box
        as={"form"}
        py={2}
        width={"60%"}
        onSubmit={submitHandler}
        sx={{ boxShadow: "1px 1px 9px #0003", p: "2rem", borderRadius: "10px" }}
      >
        <Flex mx={-2} mb={3} flexWrap="wrap" alignItems={"center"}>
          <Box width={1 / 2} px={2}>
            <Label htmlFor="">Genre</Label>
            <Select id={""} ref={genreInput}>
              <option disabled selected></option>
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
            <Input type={"text"} id={""} ref={titleInput}></Input>
          </Box>
        </Flex>
        <Flex mx={-2} mb={3} flexWrap="wrap">
          <Box width={1 / 2} px={2}>
            <Label htmlFor="">Artist Name</Label>
            <Input type={"text"} id={""} ref={nameInput}></Input>
          </Box>
          <Box width={1 / 2} px={2}>
            <Label htmlFor="">Album Name</Label>
            <Input type={"text"} id={""} ref={albumInput}></Input>
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
              backgroundColor={"#64CCC5"}
              sx={{ cursor: "pointer" }}
            >
              submit
            </Button>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default CreateMusic;
