import type { FC } from 'react'

import { AuthLayout } from "components/templates";
import { SignUpForm } from "components/organism";

export const SignUpPage: FC = () => {
    return (
        <AuthLayout>
            <SignUpForm />
        </AuthLayout>
    )
}

export default SignUpPage;