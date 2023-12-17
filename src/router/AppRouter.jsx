import { Navigate, Route, Routes } from "react-router-dom";

import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { Loading } from "../ui/components/Loading";
import { useCheckAuth } from "../hooks/useCheckAuth";

export const AppRouter = () => {

    const  status  = useCheckAuth();

    if (status === 'checking') return <Loading />;

    return (
        <Routes>

            {
                status === 'authenticated'
                    ?
                    /* Journal */
                    <Route path="/*" element={<JournalRoutes />} />
                    :
                    /* Login y registro */
                    <Route path="/auth/*" element={<AuthRoutes />} />
            }

            <Route path="/*" element={<Navigate to="/auth/login" />} />

        </Routes>
    );
};
