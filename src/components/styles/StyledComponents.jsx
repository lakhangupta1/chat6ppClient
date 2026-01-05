import { styled } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

/* Hidden input */
export const VisuallyHiddenInput = styled("input")({
  border: 0,
  clip: "rect(0 0 0 0)",
  height: 1,
  margin: -1,
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  whiteSpace: "nowrap",
  width: 1,
});

/* Styled React Router Link */
export const Link = styled(RouterLink)`
  text-decoration: none;
  color: black;

  &:hover {
    background-color:rgba(32, 30, 30, 0.1);
  }
`;
