export default function Input({ textarea, label, ...props }) {
  const classes =
    " p-1 border rounded-sm border-stone-300 bg-neutrals-800 text-stone-600 focus:outline-none focus:border-stone-600";
  return (
    <p className="flex flex-col gap-1 my-4 ">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea type="textarea" {...props} className={classes} />
      ) : (
        <input type="text" {...props} className={classes} />
      )}
    </p>
  );
}
