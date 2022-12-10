import type { FC } from 'react'

import { AuthLayout } from "components/templates";
import { LoginForm } from "components/organism";

export const LoginPage: FC = () => {
    return (
        <AuthLayout>
            <LoginForm />
        </AuthLayout>
    )
}

export default LoginPage;