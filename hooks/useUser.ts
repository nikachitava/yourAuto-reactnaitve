import { getUserData } from "@/service/storage/userData";
import { UserType } from "@/types/UserType";
import { useEffect, useState } from "react";

const useUser = () => {
	const [user, setUser] = useState<UserType | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

    const getUser = async () => {
        try {
            const user = await getUserData();
            setUser(user)
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

	useEffect(() => {
		getUser()
	}, []);

    return {user, loading, error};
};

export default useUser;
