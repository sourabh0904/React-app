interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onclick: () => void;
}

const Button = ({ children, color = "primary", onclick }: Props) => {
  return (
    <div>
      <button type="button" className={"btn btn-" + color} onClick={onclick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
