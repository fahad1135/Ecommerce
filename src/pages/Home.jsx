import React from "react";
import TopNav from "../components/TopNav/TopNav";
import Header from "../components/Header/Header";
import PrimaryNav from "../components/PrimaryNav/PrimaryNav";
import ProductSection from "../components/ProductSection/ProductSection";
import NewProduct from "../components/NewProduct/NewProduct";
export default function Home() {
  return (
    <div>
      <TopNav />
      <Header />
      <PrimaryNav />
      <ProductSection />
      <NewProduct />
    </div>
  );
}
