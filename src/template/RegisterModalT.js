import Input from "../components/Input";

export default function RegisterModalT({ onClose }) {
  const handleSubmitForm = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form className="m-3 " onSubmit={handleSubmitForm}>
        <h1>User Name</h1>
        <Input placeholder={"Enter your  Username"} />
        <h1>Company Name</h1>
        <Input placeholder={"Enter company name"} />
        <h1>First Name</h1>
        <Input placeholder={"Enter your name"} />
        <h1>Last Name</h1>
        <Input placeholder={"Enter your surname"} />
        <h1>Telephone Number</h1>
        <Input placeholder={"Enter your Telephone Number"} />
        <h1>Address</h1>
        {/* need? */}
        <Input placeholder={"Enter your address"} />
        <h1>Email</h1>
        <Input placeholder={"Enter your Email"} />
        <h1>Password</h1>
        <Input placeholder={"Password"} />
        <h1>Confirm Password </h1>
        <Input placeholder={"Enter Confirm Password"} />
        <div className="bg-blue-600 rounded flex justify-center h-[50px] my-7 shadow-xl">
          <button type="submit" className="text-white text-xl font-semibold">
            Create an Account
          </button>
        </div>
      </form>
    </>
  );
}

// <Input
// placeholder={'First name'}
// name='firstName'
// value={input.firstName}
// onChange={handleChangeInput}
// error={error.firstName}
// />
