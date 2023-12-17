import { useSelector } from "react-redux";

export const SideBar = () => {

    const {displayName} = useSelector(state => state.auth);

    return (

        <aside className="pt-16 w-60 bg-gray-300">
            <div className="flex flex-col h-full">

                <div className="p-3 text-center text-black">
                    <h3 className="text-2xl font-bold mb-4">{displayName}</h3>
                    <hr />
                </div>

                <ul className="items-center">
                    {
                        ['Enero', 'Febrero', 'Marzo', 'Abril'].map((item) => (
                            <li key={item}
                            className="flex flex-row gap-3 p-3 text-blue hover:text-black hover:bg-gray-200 cursor-pointer">
                                <svg className="w-6 h-6 text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m13 19-6-5-6 5V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17Z" />
                                </svg>
                                <p>{item}</p>
                            </li>
                        ))
                    }
                </ul>

            </div>
        </aside>

    );
};
