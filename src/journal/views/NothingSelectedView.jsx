
export const NothingSelectedView = () => {
    return (
        <div className="flex flex-col bg-indigo-900 h-screen md:h-full lg:h-full  items-center justify-center p-4 rounded-2xl animate__animated animate__fadeInLeft animate__faster">
            <div className=" text-white justify-center items-center text-center">
                <svg className="h-10 w-10 text-white-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" /></svg>
            </div>
            <div className="text-white justify-center items-center text-center">
                <h5 className="text-xl">Selecciona o crea una entrada</h5>
            </div>
        </div>
    );
};
