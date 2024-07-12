import UserForm from "@/components/UserForm";
import UserList from "@/components/UserList";
import WebLayout from "@/layouts/WebLayout";

const FetchPage = () => {
  return (
    <WebLayout title="Fetch Data">
      <section className="flex flex-col p-4">
        <h4> Http Request</h4>
        <div className="grid grid-cols-2 gap-3">
          <UserForm />
          <UserList />
        </div>
      </section>
    </WebLayout>
  );
};

export default FetchPage;
