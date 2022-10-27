import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProductTypes } from "../../common/types/types";

type Hero = {
  id: number;
  image: string;
};

export interface ProductsState {
  value: number;
  products: ProductTypes[];
  hero: Hero[];
  categories: string[];
}

const initialState: ProductsState = {
  value: 0,
  products: [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      image: "/images/p1.png",
      category: "chair",
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      image: "/images/p2.png",
      category: "chair",
    },
    {
      id: 3,
      name: "Product 3",
      price: 300,
      image: "/images/p3.png",
      category: "cabinet",
    },
    {
      id: 4,
      name: "Product 4",
      price: 400,
      image: "/images/p4.png",
      category: "sofa",
    },
    {
      id: 5,
      name: "Product 5",
      price: 500,
      image: "/images/p5.png",
      category: "sofa",
    },
    {
      id: 6,
      name: "Product 6",
      price: 600,
      image: "/images/p6.png",
      category: "cabinet",
    },
    {
      id: 7,
      name: "Product 7",
      price: 700,
      image: "/images/p7.png",
      category: "bench",
    },
    {
      id: 8,
      name: "Product 8",
      price: 800,
      image: "/images/p8.png",
      category: "bench",
    },
    {
      id: 9,
      name: "Product 9",
      price: 900,
      image: "/images/p9.png",
      category: "chair",
    },
    {
      id: 10,
      name: "Product 9",
      price: 900,
      image: "/images/p9.png",
      category: "chair",
    },

    {
      id: 11,
      name: "Product 5",
      price: 500,
      image: "/images/p5.png",
      category: "sofa",
    },
    {
      id: 12,
      name: "Product 3",
      price: 300,
      image: "/images/p3.png",
      category: "cabinet",
    },
    {
      id: 13,
      name: "Product 3",
      price: 300,
      image: "/images/p3.png",
      category: "cabinet",
    },
  ],
  hero: [
    { id: 1, image: "/images/hero.jpg" },
    { id: 2, image: "/images/hero2.jpg" },
    { id: 3, image: "/images/hero3.jpg" },
  ],
  categories: ["chair", "cabinet", "sofa", "bench"],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, incrementByAmount } = productsSlice.actions;

export default productsSlice.reducer;
