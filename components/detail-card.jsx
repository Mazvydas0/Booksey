export default function DetailCard({ name, address, hours, onClick}) {
  return (
    <div onClick={onClick} className="flex cursor-pointer flex-col items-start justify-center p-4 m-2 bg-gray-100 border border-gray-200 rounded-lg shadow-md">
      <h4 className="text-lg font-bold mb-2">{name}</h4>
      <p className="text-sm text-gray-500 mb-2">{address}</p>
      <p className="text-sm text-gray-500">{hours}</p>
    </div>
  );
}
