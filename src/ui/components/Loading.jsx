
export const Loading = () => {
    return (
        
            <div className="flex w-screen h-screen flex-col items-center bg-indigo-900 justify-center gap-x-28">

                <svg className="col-span-12 animate-spin h-10 w-10 text-white dark:text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                </svg>

                <p className="text-indigo-200 dark:text-indigo-200">Cargando...</p>
            </div>
    )
}
