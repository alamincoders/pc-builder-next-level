import { useSession, getSession } from "next-auth/react";
import Link from "next/link";
import { useReducer, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { uuid } from "uuidv4";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import PcBuilderCard from "@/components/PcBuilderCard";

const PcBuilder = ({ userSession, pcBuilded = [] }) => {
  const { data: session } = useSession();
  const { categories = {}, pcbuilder } = useSelector((state) => state.pcbuilder);
  const router = useRouter();

  const { cpu_processor = [], motherboard = [], ram = [], power_supply_unit = [], storage_device = [], monitor = [] } = categories;

  const [envet] = useReducer(
    (prev, next) => {
      return { ...prev, ...next };
    },
    {
      cpu_processor:
        cpu_processor.length > 0
          ? cpu_processor?.map((item) => ({
              productName: item.productName,
              id: item.id,
              image: item.image,
            }))
          : [],
      motherboard:
        motherboard.length > 0
          ? motherboard?.map((item) => ({
              productName: item.productName,
              id: item.id,
              image: item.image,
            }))
          : [],
      ram:
        ram.length > 0
          ? ram?.map((item) => ({
              productName: item.productName,
              id: item.id,
              image: item.image,
            }))
          : [],
      power_supply_unit:
        power_supply_unit.length > 0
          ? power_supply_unit?.map((item) => ({
              productName: item.productName,
              id: item.id,
              image: item.image,
            }))
          : [],
      storage_device:
        storage_device.length > 0
          ? storage_device?.map((item) => ({
              productName: item.productName,
              id: item.id,
              image: item.image,
            }))
          : [],
      monitor:
        monitor.length > 0
          ? monitor?.map((item) => ({
              productName: item.productName,
              id: item.id,
              image: item.image,
            }))
          : [],
    }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://pc-builder-json.vercel.app/api/pcBuilder", {
        id: uuid(),
        userName: session?.user?.name,
        pcBuilder: envet,
      });

      setTimeout(() => {
        toast.success("Congratulations for building your PC!", {
          autoClose: 3000,
          toastId: Math.random(),
        });
      }, 5000);

      setTimeout(() => {
        router.reload();
      }, 8000);
      return response;
    } catch (error) {
      toast.error("Something went wrong!", {
        autoClose: 2000,
        toastId: Math.random(),
      });
    }
  };

  return (
    <div>
      <h1 className="text-center text-2xl">Welcome, {session?.user?.name}</h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th></th>
                <th>Category Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>A</th>
                <td>
                  <Link href={`/product/cpu_processor`}>CPU / Processor</Link>
                </td>
              </tr>
              <tr>
                <th>B</th>
                <td>
                  <Link href={`/product/motherboard`}>Motherboard</Link>
                </td>
              </tr>
              <tr>
                <th>C</th>
                <td>
                  <Link href={`/product/ram`}>RAM</Link>
                </td>
              </tr>
              <tr>
                <th>D</th>
                <td>
                  <Link href={`/product/storage_device`}>Storage Device</Link>
                </td>
              </tr>
              <tr>
                <th>E</th>
                <td>
                  <Link href={`/product/power_supply_unit`}>Power Supply Unit</Link>
                </td>
              </tr>
              <tr>
                <th>F</th>
                <td>
                  <Link href={`/product/monitor`}>Monitor</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="container mx-auto">
          <h1 className="text-center text-2xl uppercase">PC Builder </h1>
          <table className="table table-pin-rows">
            <thead>
              <tr>
                <th>Category Name</th>
                <th>Product Name</th>
              </tr>
            </thead>
            <tbody>
              {cpu_processor?.map((product) => (
                <tr key={product.id}>
                  <td>CPU / Processor</td>
                  <td>{product.productName}</td>
                </tr>
              ))}
              {motherboard?.map((product) => (
                <tr key={product.id}>
                  <td>Motherboard</td>
                  <td>{product.productName}</td>
                </tr>
              ))}
              {ram?.map((product) => (
                <tr key={product.id}>
                  <td>RAM</td>
                  <td>{product.productName}</td>
                </tr>
              ))}
              {power_supply_unit?.map((product) => (
                <tr key={product.id}>
                  <td>Power Supply Unit</td>
                  <td>{product.productName}</td>
                </tr>
              ))}
              {storage_device?.map((product) => (
                <tr key={product.id}>
                  <td>Storage Device</td>
                  <td>{product.productName}</td>
                </tr>
              ))}
              {monitor?.map((product) => (
                <tr key={product.id}>
                  <td>Monitor</td>
                  <td>{product.productName}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {pcbuilder && (
            <div className="flex justify-center items-center my-4">
              <form onSubmit={handleSubmit}>
                <button type="submit" className="btn btn-outline btn-accent">
                  PC Builder
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
      {useSession && <h1 className="text-center text-2xl uppercase my-5">{userSession?.user?.name} PC</h1>}

      <div className="flex justify-center items-center flex-col md:flex-none">
        {pcBuilded &&
          pcBuilded?.map((item, index) => (
            <div key={item.id}>
              <h2 className="text-center my-3">{`PC ${index + 1} - ${item.id}`}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 container mx-auto gap-4">
                {Object.keys(item.pcBuilder)?.map((category) => (
                  <div key={category}>
                    {item.pcBuilder[category].map((product) => (
                      <PcBuilderCard key={product.id} title={product.productName} image={product.image} description={category} id={product.id} />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PcBuilder;

export async function getServerSideProps(context) {
  const userSession = await getSession(context);
  const { data } = await axios.get("https://pc-builder-json.vercel.app/api/pcBuilder");
  const pcBuilded = data.filter((item) => item.userName === userSession?.user?.name);
  return {
    props: {
      userSession,
      pcBuilded,
    },
  };
}
