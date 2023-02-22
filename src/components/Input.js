export default function Input({
  type,
  placeholder,
  name,
  value,
  onChange,
  error
}) {
  return (
    <>
      <input
        className={`${
          error ? "border-2 border-rose-600" : ""
        } w-[400px] h-[50px] my-4 `}
        type={type || "text"}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
}
