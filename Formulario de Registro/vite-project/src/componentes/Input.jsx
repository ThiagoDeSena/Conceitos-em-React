
// eslint-disable-next-line react/prop-types
function Input({ type, placeholder,full }) {
  return (
    <input type={type} placeholder={placeholder} className={`border border-gray-400 py-1 px-2 ${full}`} />
  );
}

export default Input;