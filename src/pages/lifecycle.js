import WebLayout from "@/layouts/WebLayout";
import { useEffect, useState } from "react";

const LifeCyclePage = () => {
  const [data, setData] = useState({
    value1: 0,
    value2: 0,
    value3: 0,
  });
  const [data2, setData2] = useState(0);
  const [sum, setSum] = useState(0);
  function jumlah() {
    setSum(data.value1 + data.value2 + data.value3 + data2);
    console.log("dijumlahkan");
  }
  useEffect(() => {
    console.log(data);
    jumlah();
  }, [data2]);

  return (
    <WebLayout title="Life Cycle Page">
      <div className="flex gap-2 p-4">
        <h1 className="text-white text-3xl">{parseInt(sum)}</h1>
        <input
          type="number"
          value={data.value1}
          className="text-black bg-gray-300 px-4 py-2"
          onChange={(e) =>
            setData((dataInputan) => {
              return { ...dataInputan, value1: parseInt(e.target.value) };
            })
          }
        />
        <input
          type="number"
          value={data.value2}
          className="text-black bg-gray-300 px-4 py-2"
          onChange={(e) =>
            setData((dataInputan) => {
              return { ...dataInputan, value2: parseInt(e.target.value) };
            })
          }
        />
        <input
          type="number"
          value={data.value3}
          className="text-black bg-gray-300 px-4 py-2"
          onChange={(e) =>
            setData((dataInputan) => {
              return { ...dataInputan, value3: parseInt(e.target.value) };
            })
          }
        />
        <input
          type="number"
          value={data2}
          className="text-black bg-gray-300 px-4 py-2"
          onChange={(e) => setData2(parseInt(e.target.value))}
        />
      </div>
    </WebLayout>
  );
};

export default LifeCyclePage;
