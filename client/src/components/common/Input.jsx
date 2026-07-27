const Input = ({
    label,
    name ="",
    type = "text",
    placeholder,
    value,
    onChange,
    error,
    required = false,
    className = "",
  }) => {
    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label className="text-sm font-medium">
            {label}
            {required && <span className="text-red-500"> *</span>}
          </label>
        )}
  
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          name={name}
          className={`border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500 ${className}`}
        />
  
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  };
  
  export default Input;