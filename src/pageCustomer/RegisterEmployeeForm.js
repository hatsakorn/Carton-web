import Input from "../components/Input";

export default function RegisterEmployeeForm() {
  const handleSubmitForm = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <h1>User Name</h1>
        <Input placeholder={"Enter your  Username"} />
        <h1>First Name</h1>
        <Input placeholder={"Enter your firstname"} />
        <h1>Surname</h1>
        <Input placeholder={"Enter your surname"} />
        <h1>Telephone Number</h1>
        <Input placeholder={"Enter your Telephone Number"} />

        <h1>Email</h1>
        <Input placeholder={"Enter your Email"} />
        <h1>Password</h1>
        <Input placeholder={"Password"} />
        {/* <h1>Confirm Password </h1>
        <Input placeholder={"Enter Confirm Password"} /> */}
        <div className="bg-blue-600 rounded flex justify-center h-[50px] my-7 shadow-xl">
          <button type="submit" className="text-white text-xl font-semibold">
            Create an Account
          </button>
        </div>
      </form>
    </>
  );
}
