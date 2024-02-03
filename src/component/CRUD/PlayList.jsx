import React from "react";
import DataTable from "react-data-table-component";
import { Box } from "rebass";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { useDispatch, useSelector } from "react-redux";
import { MusicDelete, StaticsGet } from "../../Store/songs";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { Select } from "@rebass/forms";

const PlayList = (props) => {
  const getStastic = useSelector((state) => state.musicUp.StaticsData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(StaticsGet());
  }, [dispatch]);
  console.log(getStastic);
  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Artist name",
      selector: (row) => row.artist,
      sortable: true,
    },
    {
      name: "Album",
      selector: (row) => row.album,
      sortable: true,
    },
    {
      name: "Gener",
      selector: (row) => row.gener,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => (
        <Box>
          <NavLink
            as={"a"}
            mx={2}
            sx={{
              color: "#3874cf",
              "&:hover": { color: "#3874cf63" },
            }}
            to={`/edit/${row._id}`}
          >
            <EditOutlinedIcon />
          </NavLink>
          <Box
            as={"a"}
            sx={{
              color: "#d44545",
              "&:hover": { color: "#d4454563" },
            }}
            onClick={() => deleteHandler(row._id)}
          >
            <DeleteForeverOutlinedIcon />
          </Box>
        </Box>
      ),
    },
  ];
  const deleteHandler = (id) => {
    dispatch(MusicDelete({ id }));
  };
  const customstayle = {
    headCells: {
      style: {
        backgroundColor: "#04364A",
        color: "#fff",
      },
    },
  };
  return (
    <Box
      maxHeight={"89vh"}
      overflow="scroll"
      minHeight={"89vh"}
      flexWrap="wrap"
      py={4}
      px={2}
    >
      <Box
        as={"div"}
        p={2}
        sx={{
          fontSize: "20px",
          fontWeight: "bold",
          color: "#04364A",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <Box as={"span"} sx={{ color: "#04364A", fontSize: 15 }}>
          {getStastic?.totalSongs} Total Songs
        </Box>
        <Box as={"span"} sx={{ color: "#04364A", fontSize: 15 }}>
          {getStastic?.totalGenres} Total Geners
        </Box>
        <Box as={"span"} sx={{ color: "#04364A", fontSize: 15 }}>
          {getStastic?.totalArtists} Total Artist
        </Box>
        <Box as={"span"} sx={{ color: "#04364A", fontSize: 15 }}>
          {getStastic?.totalAlbums} Total Albums
        </Box>
        <Select
          style={{
            fontSize: "16px",
            width: "200px",
          }}
        >
          <option style={{ fontSize: "14px" }}>
            Blues {getStastic?.genreStatistics?.Blues}
          </option>
          <option style={{ fontSize: "14px" }}>
            Classical music {getStastic?.genreStatistics?.["Classical music"]}
          </option>
          <option style={{ fontSize: "14px" }}>
            Country {getStastic?.genreStatistics?.Country}
          </option>
          <option style={{ fontSize: "14px" }}>
            Disco {getStastic?.genreStatistics?.Disco}
          </option>
          <option style={{ fontSize: "14px" }}>
            Electronic music {getStastic?.genreStatistics?.["Electronic music"]}
          </option>
          <option style={{ fontSize: "14px" }}>
            Hip hop music {getStastic?.genreStatistics?.["Hip hop music"]}
          </option>
          <option style={{ fontSize: "14px" }}>
            Jazz {getStastic?.genreStatistics?.Jazz}
          </option>
          <option style={{ fontSize: "14px" }}>
            Middle Eastern music{" "}
            {getStastic?.genreStatistics?.["Middle Eastern music"]}
          </option>
          <option style={{ fontSize: "14px" }}>
            Pop music {getStastic?.genreStatistics?.["Pop music"]}
          </option>
          <option style={{ fontSize: "14px" }}>
            Reggae {getStastic?.genreStatistics?.reggae}
          </option>
          <option style={{ fontSize: "14px" }}>
            Rock music {getStastic?.genreStatistics?.["Rock music"]}
          </option>
          <option style={{ fontSize: "14px" }}>
            Rhythm and blues {getStastic?.genreStatistics?.["Rhythm and blues"]}
          </option>
          <option style={{ fontSize: "14px" }}>
            Vocal music {getStastic?.genreStatistics?.["Vocal music"]}
          </option>
        </Select>
      </Box>
      {props.DUMMY_MUSIC && (
        <DataTable
          columns={columns}
          data={props.DUMMY_MUSIC}
          fixedHeader
          highlightOnHover
          pointerOnHover
          maxHeight="73.8vh"
          minHeight="73.8vh"
          customStyles={customstayle}
          pagination
        ></DataTable>
      )}
      <table style={{ width: "50%", color: "#272727", border: "1px solid" }}>
        <tr>
          <th style={{ borderBottom: "1px solid" }}>Album</th>
          <th style={{ borderBottom: "1px solid" }}>Artist</th>
          <th style={{ borderBottom: "1px solid" }}># Songs</th>
        </tr>
        {getStastic?.albumStatistics?.map((item) => (
          <tr style={{ border: "1px solid" }}>
            <td style={{ textAlign: "center" }}>{item.album}</td>
            <td style={{ textAlign: "center" }}>{item.artist}</td>
            <td style={{ textAlign: "center" }}>{item.songs}</td>
          </tr>
        ))}
      </table>
      <Box maxHeight={"15.2vh"} minHeight={"15.2vh"}></Box>
    </Box>
  );
};

export default PlayList;
