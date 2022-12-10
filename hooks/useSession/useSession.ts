import { useSession as useSessionNextAuth, signIn, signOut } from "next-auth/react";
import { useRouter } from 'next/router';
import { toast } from "react-toastify";

import { userData } from 'types/userData';
import { signUpWithLocalStorage, loginWithLocalStorage, signOutCookie } from "utils/localstorage";

export const useSession = () => {
    const router = useRouter();
    const { status: githubSession } = useSessionNextAuth();
    
    const loginUser = async (data: userData) => {
        try {
            await loginWithLocalStorage(data);   
            router.push("/app/home");
        } catch (error: any) {
            toast.error(error);
        }
    }

    const signUpUser = async (data: userData) => {
        try {
            await signUpWithLocalStorage(data);
            toast.success("Cuenta creada");
            router.push("/auth/login");
        } catch(error: any) {
            toast.error(error);
        }
    
    }

    const loginGitHub = () => {
        signIn("github");
    }

    const signOutSessions = async () => {
        try {
            await signOut();
            signOutCookie();
            router.push("/auth/login");
        } catch(error: any) {
            toast.error(error);
        }
    }

    return {
        githubSession,
        loginUser,
        signUpUser,
        loginGitHub,
        signOutSessions
    };
};
