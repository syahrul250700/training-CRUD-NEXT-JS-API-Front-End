import ListCart from "@/components/ListCart";
import ListProduct from "@/components/ListProduct";
import ShopContextProvider from "@/contexts/shopContext";
import WebLayout from "@/layouts/WebLayout";

const ReducerPage = () => {
  return (
    <WebLayout title="Reducer">
      <section className="flex flex-col p-4">
        <h4>Reducer</h4>
        <div className="grid grid-cols-2 gap-3">
          <ShopContextProvider>
            <ListProduct />
            <ListCart />
          </ShopContextProvider>
        </div>
      </section>
    </WebLayout>
  );
};

export default ReducerPage;
