const Techs = ({ techs }: { techs: string[] }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {techs.map((e, index) => (
        <div
          key={index}
          className="t6 py-1 px-2 text-primary-light bg-primary-dark rounded-full"
        >
          {e}
        </div>
      ))}
    </div>
  );
};

export default Techs;
