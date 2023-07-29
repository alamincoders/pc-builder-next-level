import React from "react";
import CPU from "./ui/CPU";
import MotherBoard from "./ui/MotherBoard";
import Ram from "./ui/Ram";
import Storage from "./ui/Storage";
import PowerSupply from "./ui/PowerSupply";
import Monitor from "./ui/Monitor";

const ProductDetails = ({ products, category }) => {
  return (
    <div className="">
      {category === "cpu_processor" && <CPU products={products} />}
      {category === "motherboard" && <MotherBoard products={products} />}
      {category === "ram" && <Ram products={products} />}
      {category === "storage_device" && <Storage products={products} />}
      {category === "power_supply_unit" && <PowerSupply products={products} />}
      {category === "monitor" && <Monitor products={products} />}
    </div>
  );
};

export default ProductDetails;
