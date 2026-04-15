import { Link } from "react-router";

const ErrorPage = () => {
    return (
       
        <div className="flex flex-col items-center justify-center min-h-screen bg-base-200">
            <div className="text-center">

                <h1 className="text-9xl font-extrabold text-red-800 animate-bounce">
                    404
                </h1>

                <h2 className="text-3xl font-bold mt-8 text-base-content">
                    Oops! You've in wrong Path.
                </h2>

                <div className="mt-10">
                    <Link to="/" className="btn btn-primary btn-wide shadow-lg hover:scale-105 transition-transform">
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;