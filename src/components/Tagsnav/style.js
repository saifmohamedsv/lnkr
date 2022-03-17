export const NavLabel = {
  fontSize: "20px",
  color: "#111",
  textAlign: "start",
  fontWeight: "500",
  cursor: "pointer",
  transition: "all ease-in-out 0.6s",
  flexGrow: 1,
  "&:hover": {
    color: "#0F1BF2",
    transform: "scale(1.1)",
  },
};
export const Navtitle = {
  fontSize: "24px",
  color: "#111",
  fontWeight: "700",
};
export const NavElementStyle = {
  flexGrow: 1,
  width: "100%",
  minWidth: 60,
  cursor: "pointer",
};
export const NavListStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "32px",
};
export const DrawerStyle = {
  flexShrink: 0,
  transition: "all ease-in-out 0.6s",
  "& .MuiDrawer-paper": {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    flexGrow: 1,
    transition: "all ease-in-out 0.6s",
    boxSizing: "border-box",
    bgcolor: "#fff",
    borderRadius: "5px",
    pt: 4,
    pl: "24px",
    pr: "48px",
    mr: 2,
  },
};
