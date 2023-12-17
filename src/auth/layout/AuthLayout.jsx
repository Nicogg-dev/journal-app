export const AuthLayout = ({ children, title = '' }) => {
    return (
        <div className="flex bg-indigo-900 h-screen w-screen items-center justify-center p-4">

            <div className="w-5/6 md:w-96 bg-white shadow-md rounded-md p-4 text-center ">

                <h5 className="text-2xl font-bold">{title}</h5>
                {children}

            </div>

        </div>
    );
};
