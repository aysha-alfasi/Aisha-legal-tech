function Card({ title, description, icon, className = "" }) {
  return (
    <div className={`bg-white shadow-md rounded-lg p-6 flex flex-col items-start ${className}`}>
      {icon && <div className="mb-4">{icon}</div>}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default Card;
