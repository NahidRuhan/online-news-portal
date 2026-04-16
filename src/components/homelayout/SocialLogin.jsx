import { use } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../provider/AuthContext";


const SocialLogin = () => {
  const {signInWithGoogle,signInWithGithub} = use(AuthContext)

  const handleGoogleSignIn = () => {
    signInWithGoogle()
    .then().catch((error) => console.log(error));

  }
  const handleGithubSignIn = () => {
    signInWithGithub()
    .then().catch((error) => console.log(error));
  }
  return (
    <div>
      <h2 className="font-bold mb-5">Login With</h2>
      <div className="space-y-3">
        <button onClick={handleGoogleSignIn} className="btn btn-secondary btn-outline w-full">
          <FcGoogle size={24} /> Login with Google
        </button>
        <button onClick={handleGithubSignIn} className="btn btn-outline btn-primary w-full">
          <FaGithub size={24} /> Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;