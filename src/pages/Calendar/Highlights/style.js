export const Container = {
  flexGrow: 1,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
};
export const Title = {
  fontSize: "20px",
  mb: 2,
};

export const HighlightsContainer = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
};
export const Highlight = {
  flexGrow: 1,
  width: "100%",
  p: 1,
  borderRadius: "4px",
  boxShadow: "0px 3px 10px rgba(0,0,0,0.1)",
  display: "flex",
  alignItems: "center",
  transition: "all ease-in-out 0.4s",
  bgcolor: "#fff",
  cursor: "pointer",
  "&:hover": {
    transform:"scale(1.08)",
  },
};
