"use client"
import { useState } from "react";
import { Headers } from "../components/Header.jsx";
import { ProductList } from "../components/ProductList.jsx";

export default function Home() {
  const [getAllProducts, setAllProducts] = useState([]);
  const [getTotal, setTotal] = useState(0);
  const [getCountProducts, setCountProducts] = useState(0);


  return (
    <>
      <Headers
      getAllProducts = {getAllProducts}
      setAllProducts ={setAllProducts}
      getTotal = {getTotal}
      setTotal = {setTotal}
      getCountProducts = {getCountProducts}
      setCountProducts = {setCountProducts}  
      />
      <ProductList
      getAllProducts = {getAllProducts}
      setAllProducts ={setAllProducts}
      getTotal = {getTotal}
      setTotal = {setTotal}
      getCountProducts = {getCountProducts}
      setCountProducts = {setCountProducts}  
      />
    </>
  );
}
