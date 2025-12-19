const Dashboard = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <p className="text-gray-500">Projects</p>
          <h2 className="text-2xl font-bold">10</h2>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <p className="text-gray-500">Clients</p>
          <h2 className="text-2xl font-bold">8</h2>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <p className="text-gray-500">Contacts</p>
          <h2 className="text-2xl font-bold">25</h2>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <p className="text-gray-500">Subscribers</p>
          <h2 className="text-2xl font-bold">40</h2>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
