import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

//Este proyecto está hecho con Node 18.0.0 para poder usar vite
export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Kirby"]);
  const onAddCategory = (newCategory) => {
    //setCategories(categories.concat("Animal Crossing"));
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={onAddCategory} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
