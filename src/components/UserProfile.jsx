const UserProfile = ({ user }) => {
    return (

      <div className="bg-opacity-20 backdrop-blur-lg border border-pink-500 p-6 rounded-xl shadow-lg w-80 mx-auto text-white text-center">
        <img
          src={user.avatar || "/assets/default-avatar.png"}
          alt="User Avatar"
          className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-pink-500"
        />
        <h3 className="text-lg font-bold">{user.name}</h3>
        <p className="text-sm text-gray-300">{user.email}</p>
        <p className="text-pink-400 mt-2">{user.role || "User"}</p>
        <button className="bg-pink-500 text-white px-4 py-2 mt-4 rounded-lg shadow-md hover:bg-pink-600 transition">
          Edit Profile
        </button>
      </div>
      
    );
  };
  
  export default UserProfile;
  