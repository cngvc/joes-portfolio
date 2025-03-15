const Lists = ({ data, label }: { label: string; data?: string[] }) => {
  return (
    data && (
      <>
        <div className="text-muted-foreground lg:group-hover:text-foreground duration-200 t5">
          {label}:
        </div>
        <ul className="list-disc mb-4 list-outside pl-[18px] t5 text-muted-foreground lg:group-hover:text-foreground duration-200">
          {data?.map((e, index) => (
            <li key={index}>
              <span className="text-muted-foreground lg:group-hover:text-foreground duration-200">
                {e}
              </span>
            </li>
          ))}
        </ul>
      </>
    )
  );
};

export default Lists;
