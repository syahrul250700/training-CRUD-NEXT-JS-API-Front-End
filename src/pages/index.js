import Header from "@/components/Header";
import ListItem from "@/components/ListItem";
import Product from "@/components/Product";
import WebLayout from "@/layouts/WebLayout";
import Head from "next/head";

const index = () => {
  const items = [{ name: 1 }, { name: 2 }];
  const products = [
    { name: "product1", description: "deskripsi produk 1" },
    { name: "product2", description: "deskripsi produk 2" },
    { name: "product3", description: "deskripsi produk 3" },
  ];
  return (
    <WebLayout title="Home">
      <ListItem items={items} />
      <section className="flex flex-col p-4">
        <h4>State & Props</h4>
        <div className="grid grid-cols-3 gap-3 ">
          {products.map((r, i) => {
            return (
              <Product key={i} name={r.name} description={r.description} />
            );
          })}
        </div>
      </section>
      <p>ini paragraph</p>
    </WebLayout>
  );
};

export default index;
