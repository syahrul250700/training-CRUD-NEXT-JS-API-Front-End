const ListItem = ({ items }) => {
  return (
    <div className="flex flex-col px-4">
      {items.map((r, i) => (
        <div key={i}>
          <h1>{r.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default ListItem;
