import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ButtonProps = {
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: any;
  bgColor?: string;
  bgColorHover?: string;
  borderColor?: string;
  txtColor?: string;
  txtColorHover?: string;
  hoverBtn?: boolean;
  type?: "button" | "submit" | "reset";
  onSubmit?: (e: Event) => void;
};

function Button({
  label,
  icon,
  borderColor,
  bgColor = "bg-transparent",
  bgColorHover,
  txtColor = "text-white",
  txtColorHover,
  hoverBtn = false,
  type = "button",
}: ButtonProps) {

  return (
    <button
      className={`border ${bgColor} ${borderColor} ${txtColor} ${
        hoverBtn ? `${"hover:"+bgColorHover}  ${"hover:"+txtColorHover}`: null} transition-colors px-4 py-2 rounded-lg flex items-center justify-center gap-2`}
      type={type}>
      {label}
      {icon && <FontAwesomeIcon icon={icon} />}
    </button>
  );
}

export default Button;
