export default function InputField({ label, value, onChange, placeholder }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium text-black-500">{label}</label>

      <input
        type="text"
        inputMode="decimal"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          w-full
          rounded-lg
          border
          border-gray-300
          mb-2
          px-4
          py-3
          outline-none
          focus:border-blue-500
        "
      />
    </div>
  );
}
