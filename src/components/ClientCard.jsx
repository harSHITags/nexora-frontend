const ClientCard = ({ client }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow text-center">
      {client.image && (
        <img
          src={client.image}
          alt={client.name}
          className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
        />
      )}

      <p className="text-gray-600 mb-4 text-sm">
        {client.description}
      </p>

      <h4 className="font-bold text-gray-800">
        {client.name}
      </h4>

      <p className="text-sm text-gray-500">
        {client.designation}
      </p>
    </div>
  );
};

export default ClientCard;
