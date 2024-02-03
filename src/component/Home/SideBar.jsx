import React from "react";
import { Box, Card, Flex, Image, Text } from "rebass";
import { NavLink } from "react-router-dom";
import brandLogo from "../../img/Frame 4095.svg";
import PlaylistAddCheckOutlinedIcon from "@mui/icons-material/PlaylistAddCheckOutlined";
// import AlbumOutlinedIcon from "@mui/icons-material/AlbumOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

const DUMMY_MENU = [
  {
    name: "PlayList",
    path: "/",
    Icons: <PlaylistAddCheckOutlinedIcon />,
  },
  // {
  //   name: "Album",
  //   path: "/album",
  //   Icons: <AlbumOutlinedIcon />,
  // },
  {
    name: "Add Music",
    path: "/create",
    Icons: <AddCircleOutlineOutlinedIcon />,
  },
];

const SideBar = () => {
  return (
    <Box sx={{ position: "fixed" }}>
      <Box width={254} height="90vh" backgroundColor={"#04364A"}>
        <Flex
          sx={{
            height: "11vh",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            // boxShadow: "-1px 2px 4px #fff3",
            padding: "1rem",
            color: "white", // Adjusted text color to white
          }}
        >
          <Image src={brandLogo} sx={{ width: "40%" }} />
        </Flex>

        <Box sx={{ mt: "4rem" }}>
          {DUMMY_MENU.map((item, index) => (
            <Card
              m={3}
              sx={{
                borderRadius: 2,
                "&:hover": {
                  backgroundColor: "#0A1", // Set background color to white
                  color: "#0A1D56", // Set text color to the original background color
                },
              }}
              key={index}
            >
              <NavLink to={item.path}>
                <Flex
                  sx={{
                    alignItems: "center",
                    gap: "1rem",
                    padding: 2,
                  }}
                >
                  {React.cloneElement(item.Icons, {
                    style: { color: "#99BC85" },
                  })}
                  <Text
                    color={
                      item.name === "PlayList" || item.name === "Add Music"
                        ? "white"
                        : "black"
                    }
                  >
                    {item.name}
                  </Text>
                </Flex>
              </NavLink>
            </Card>
          ))}
        </Box>
      </Box>
      <Flex
        width={254}
        height="10vh"
        alignItems={"center"}
        justifyContent={"center"}
        backgroundColor="#04364A"
      ></Flex>
    </Box>
  );
};

export default SideBar;
