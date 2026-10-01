interface Props {
  id: string;
  label: string;
  name: string;
  placeholder: string;
  rows: number;
  disabled: boolean;
}

const FormTextArea: React.FC<Props> = ({
  id,
  label,
  name,
  disabled,
  placeholder,
  rows,
}) => (
  <div className="flex flex-col gap-1">
    <label htmlFor={id} className="text-white font-medium block">
      {label}:
    </label>
    <textarea
      id={id}
      name={name}
      placeholder={placeholder}
      rows={rows}
      disabled={disabled}
      required
      className="bg-white/20 text-white px-4 py-2 rounded-lg placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50"
    />
  </div>
);

export default FormTextArea;
