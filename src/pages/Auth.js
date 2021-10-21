import FirebaseAuth from "../components/auth/FirebaseAuth";

const Auth = () => {
  return (
    <div
      className="relative h-screen"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1436397543931-01c4a5162bdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1919&q=80")`,
        objectFit: "cover",
      }}
    >
      <div
        className="flex  items-center absolute top-0 right-0 w-full h-full"
        style={{
          backgroundColor: "rgb(0,0,0,0.7)",
        }}
      >
        <div className="w-3/4 lg:w-2/5 mx-auto   shadow-lg bg-gray-800 rounded-md py-32 ">
          <FirebaseAuth />
        </div>
      </div>
    </div>
  );
};

export default Auth;
