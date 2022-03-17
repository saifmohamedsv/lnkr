import { Box, Button, Drawer, List, Typography, Link } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { DrawerStyle, NavLabel, NavListStyle, Navtitle } from "./style";
const Tags = [
  { tag: "Heart", id: "" },
  { tag: "Lungs", id: "" },
  { tag: "Cancer", id: "" },
  { tag: "Ears", id: "" },
  { tag: "Critical", id: "" },
  { tag: "Liver", id: "" },
];
const TagsNav = () => {
  const location = useLocation();
  const router = useNavigate();
  if (location.pathname.includes("tags"))
    return (
      <Drawer sx={DrawerStyle} variant="permanent" anchor="left">
        <List sx={NavListStyle}>
          <Typography variant="h1" color="initial" sx={Navtitle}>
            Tags
          </Typography>
          {Tags.map((item, index) => (
            <Typography
              variant="h1"
              sx={NavLabel}
              key={index}
              onClick={() => {
                router(`/patients/tags/${item.tag.toLowerCase()}`);
              }}
            >
              {item.tag}
            </Typography>
          ))}
        </List>
      </Drawer>
    );
  return "";
};

export default TagsNav;
