import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
} from "@nextui-org/react";
import { Lock, LogIn, LogInIcon, User } from "lucide-react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

const LoginPage = () => {
  const router = useRouter();
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async () => {
    console.log(input);
    try {
      const response = await fetch("api/v1/users/login", {
        method: "POST", //or PUT
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });
      const data = await response.json();
      if (data.code == 400) {
        setError(data.message);
        // alert(data.message)
        setIsLoading(false);
      } else if (data.code == 401) {
        setError(data.message);
        // alert(data.message)
        setIsLoading(false);
      } else {
        console.log(data);
        setTimeout(() => {
          setIsLoading(false);
          // alert(data.message);
        }, 1000);
        setError(null);
        router.push("/");
        setInput({ ...input, username: "", password: "" });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <main className="flex justify-center items-center h-screen">
      <Head>
        <title>Login</title>
      </Head>
      <div className="w-full md:w-[30%]">
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-bold">Login</h2>
          </CardHeader>
          <CardBody className="space-y-3">
            <Input
              label="Username"
              value={input.username}
              onChange={(e) => setInput({ ...input, username: e.target.value })}
              className="w-full rounded-lg py-2 px-4 text-black"
              endContent={<User />}
            />
            <Input
              label="Password"
              type="password"
              value={input.password}
              onChange={(e) => setInput({ ...input, password: e.target.value })}
              className="w-full rounded-lg py-2 px-4 text-black"
              endContent={<Lock />}
            />
          </CardBody>
          <CardFooter>
            <Button
              fullWidth={true}
              onClick={login}
              color="primary"
              startContent={<LogIn />}
            >
              Login
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
};

export default LoginPage;
