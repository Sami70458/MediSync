const ReportCard = ({ report }) => {
    return (
      <div className="bg-opacity-20 backdrop-blur-lg border border-pink-500 p-6 rounded-xl shadow-lg w-80 mx-auto text-white">
        <h3 className="text-lg font-bold mb-2">{report.title}</h3>
        <p className="text-sm text-gray-300 mb-4">{report.date}</p>
        <p className="text-pink-400 mb-4">{report.description}</p>
        <button className="bg-pink-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-pink-600 transition">
          View Report
        </button>
      </div>
    );
  };
  
  export default ReportCard;
  