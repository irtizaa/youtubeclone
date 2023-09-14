import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constant";
import { Category, Height } from "@mui/icons-material";

// const selectedCategory = "New";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      Height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((Category) => (
      <button
        className="category-btn"
        onClick={() => {
          setSelectedCategory(Category.name);
        }}
        style={{
          background: Category.name === selectedCategory && "#FC1503",
          color: "white",
        }}
      >
        <span
          style={{
            color: Category.name === selectedCategory ? "white" : "red",
            marginRight: "15px",
          }}
        >
          {Category.icon}
        </span>
        <span
          style={{ opacity: Category.name === selectedCategory ? "1" : "0.8" }}
        >
          {Category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
