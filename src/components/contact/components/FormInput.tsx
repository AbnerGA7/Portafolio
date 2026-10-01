interface Props {
  id: string;
  label: string;
  name: string;
  disabled: boolean;
  placeholder: string;
  type?: "text" | "email";
}

const FormInput: React.FC<Props> = ({
  id,
  label,
  type = "text",
  name,
  disabled,
  placeholder,
}) => (
  <div className="flex flex-col gap-1">
    <label htmlFor={id} className="text-white font-medium block">
      {label}:
    </label>
    <input
      id={id}
      type={type}
      name={name}
      disabled={disabled}
      placeholder={placeholder}
      required
      className="bg-white/20 text-white px-4 py-2 rounded-lg placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50"
    />
  </div>
);

export default FormInput;
