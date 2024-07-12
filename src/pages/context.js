import ItemAdd from "@/components/ItemAdd";
import ItemList from "@/components/ItemList";
import ItemContextProvider from "@/contexts/itemContext";
import WebLayout from "@/layouts/WebLayout";

const ContextPage = () => {
  return (
    <WebLayout title="Context">
      <section className=" flex flex-col p-4">
        <h4>Context</h4>
        <div className="grid grid-cols-2 gap-3">
          <ItemContextProvider>
            <ItemAdd />
            <ItemList />
          </ItemContextProvider>
        </div>
      </section>
    </WebLayout>
  );
};

export default ContextPage;
