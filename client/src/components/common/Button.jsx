const Button = (props) => {
  const {
    children,
    disabled = false,
    type = "button",
    variant = "primary",
    onClick,
    className,
  } = props;

  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button
      className={`rounded-lg px-4 py-2 font-medium transition duration-200 ${variants[variant]} ${className}`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
