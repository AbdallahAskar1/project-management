import { forwardRef } from "react";

const Input=forwardRef(function({ label, textarea, ...props },ref) {
 const classes= "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 focus:outline-none focus:border-stone-600"
    return (
    <p className="flex flex-col gap-1 my-4 text-stone-500 uppercase">
      <label htmlFor="title">{label}</label>
      {textarea ? (
        <textarea ref={ref} className={classes} {...props} />
      ) : (
        <input ref={ref} type="text" {...props} className={classes} />
      )}
    </p>
  );
})

export default Input;
