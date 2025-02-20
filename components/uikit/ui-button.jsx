import clsx from "clsx";

export function Uibutton({ children, className, size, variant }) {
  const buttonClassName = clsx(
    "transition-colors",
    className,
    {
      md: "rounded text-sm px-6 py-2",
      lg: "rounded-lg text-2xl px-5 py-2",
    }[size],
    {
      primary: "bg-teal-600 text-white  duration-300 hover:bg-teal-500 ",
      outline:
        "border border-teal-600  text-teal-600  duration-300 hover:bg-teal-50",
    }[variant]
  );

  return <button className={buttonClassName}>{children}</button>;
}
