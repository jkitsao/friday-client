import FirebaseAuth from "../components/auth/FirebaseAuth";
import Head from "../components/seo/Head";

const Auth = () => {
  return (
    <>
      <Head
        title="Lucid | authentication"
        name="Auth page"
        content="Authentication"
      />
      <div
        className="relative h-screen"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1563724221514-1bceb0855985?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80")`,
          objectFit: "cover",
        }}
      >
        <div
          className="flex  items-center absolute top-0 right-0 w-full h-full"
          style={{
            backgroundColor: "rgb(0,0,0,0.5)",
          }}
        >
          <div className="w-3/4 lg:w-2/5 mx-auto bg-white backdrop-filter backdrop-blur-lg bg-opacity-20  shadow-lg  rounded-md py-16 ">
            <div className="flex justify-center py-5">
              <img
                className="h-16 w-16 rounded-full"
                src="https://avatars.dicebear.com/api/human/john.svg"
                alt=""
              />
            </div>
            <FirebaseAuth />
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
