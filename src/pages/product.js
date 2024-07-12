import WebLayout from "@/layouts/WebLayout";
import { useEffect, useState } from "react";
import React from "react";
import {
  Button,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  useDisclosure,
  Modal,
  ModalHeader,
  ModalContent,
  ModalBody,
  Input,
  ModalFooter,
} from "@nextui-org/react";
import { CirclePlus, Eye, SquarePen, Trash } from "lucide-react";
import { formatDate } from "@/libs/utils";

const ProductPage = () => {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState("Data Produk belum ada");

  const getProduct = async () => {
    try {
      const res = await fetch("api/v1/products", {
        method: "GET",
      });
      const data = await res.json();
      console.log(data);
      if (res.status == 401 || res.status == 400) {
        setError(data.message);
      } else {
        setProduct(data.results);
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <WebLayout title="Product Page">
      <div className="h-screen grid-cols-3 flex-col p-4">
        <div className="col-span-2 mb-2">
          <div className="flex justify-center">
            <h1 className="text-2xl font-bold">Product</h1>
          </div>
        </div>
        <div className="col-span-2 mb-2">
          <Button
            onPress={onOpen}
            color="primary"
            startContent={<CirclePlus color="white" />}
          >
            <span className="text-white">Add Product</span>
          </Button>
        </div>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement="top-center"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 text-gray-800">
                  Add Product
                </ModalHeader>
                <ModalBody className="text-gray-900">
                  <Input
                    autoFocus
                    label="Name Product"
                    placeholder="Enter your product name"
                    variant="bordered"
                  />
                  <Input
                    autoFocus
                    label="Price"
                    placeholder="Enter your price"
                    variant="bordered"
                  />
                  <Input
                    autoFocus
                    label="Quantity"
                    placeholder="Enter your quantity"
                    variant="bordered"
                  />
                  <Input
                    autoFocus
                    label="Description"
                    placeholder="Enter your description"
                    variant="bordered"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" onPress={onClose}>
                    Cancel
                  </Button>
                  <Button
                    color="success"
                    onPress={onClose}
                    className="text-white"
                  >
                    Send
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
        {product.length > 0 ? (
          <Table
            sx={{ minWidth: 650 }}
            aria-label="Tabel Product"
            className="flex justify-center"
          >
            <TableHeader>
              <TableColumn>No</TableColumn>
              <TableColumn>Name</TableColumn>
              <TableColumn>Price</TableColumn>
              <TableColumn>Description</TableColumn>
              <TableColumn>Quantity</TableColumn>
              <TableColumn>Created At</TableColumn>
              <TableColumn>Updated At</TableColumn>
              <TableColumn>Action</TableColumn>
            </TableHeader>
            <TableBody>
              {product.map((products, index) => (
                <TableRow key={products?.product_id} className="text-black">
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{products?.name_Product}</TableCell>
                  <TableCell>{products?.price}</TableCell>
                  <TableCell>{products?.description}</TableCell>
                  <TableCell>{products?.quantity}</TableCell>
                  <TableCell>{formatDate(products?.createdAt)}</TableCell>
                  <TableCell>{formatDate(products?.updatedAt)}</TableCell>
                  <TableCell>
                    <Button
                      startContent={<Eye />}
                      color="warning"
                      className="mr-1"
                    >
                      View
                    </Button>
                    <Button
                      startContent={<SquarePen />}
                      color="success"
                      className="mr-1"
                    >
                      Edit
                    </Button>
                    <Button
                      startContent={<Trash />}
                      color="danger"
                      className="mr-1"
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <TableBody emptyContent={"No rows to display."}>{error}</TableBody>
        )}
      </div>
    </WebLayout>
  );
};

export default ProductPage;
