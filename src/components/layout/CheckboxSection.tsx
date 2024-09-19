import { CheckboxSectionProps } from "src/types/types";

const CheckboxSection = ({ children, zod }: CheckboxSectionProps) => {
  const { onChange: zodOnChange, ...restZodProps } = zod || {};

  return (
    <div className="flex items-center gap-2 px-4 py-6  bg-neutral-50">
      <input
        type="checkbox"
        className="w-5 h-5 accent-yellow-300 focus:ring-offset-1 focus:ring focus:ring-yellow-300"
        onChange={zodOnChange}
        {...restZodProps}
      />
      <div />
      <div className="flex items-center gap-2">{children}</div>
    </div>
  );
};

export default CheckboxSection;
