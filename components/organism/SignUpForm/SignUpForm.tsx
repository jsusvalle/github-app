import { FC } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Box, Text, TextField, Spacer, Button } from "components/atoms";
import { LinkText } from "components/molecules";

import { userData } from "types/userData";
import { useSession } from "hooks";

export const SignUpForm: FC = () => {
    const { signUpUser } = useSession();
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<userData>({
        mode: 'onTouched',
        resolver: yupResolver(
            yup
            .object({
                name: yup
                .string()
                .required("Campo requerido"),
                email: yup
                .string()
                .email("Debe contener un email válido")
                .required("Campo requerido"),
                password: yup
                .string()
                .required("Campo requerido")
                .min(6, "Debe tener mínimo 6 carácteres"),
            })
            .required()
        ),
        defaultValues: {
            name: '',
            email: '',
            password: '',
        },
    });

    const onSubmit: SubmitHandler<userData> = data => {
        signUpUser(data);
    }

    return (
        <Box width='4/5'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Text size='2xl' weight='bold'>Registrarse</Text>

                <Spacer spacing={5} />
                
                <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                    <TextField
                        {...field}
                        {...register('name')}
                        bgColor="grayMain"
                        spacing={2}
                        id="name"
                        label={"Nombre"}
                        type="text"
                        error={!!errors.name}
                        helperText={errors.name?.message}
                    />
                    )}
                />

                <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                    <TextField
                        {...field}
                        {...register('email')}
                        bgColor="grayMain"
                        spacing={2}
                        id="email"
                        label={"Correo"}
                        type="text"
                        error={!!errors.email}
                        helperText={errors.email?.message}
                    />
                    )}
                />

                <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                    <TextField
                        {...field}
                        {...register('password')}
                        bgColor="grayMain"
                        spacing={2}
                        id="new-password"
                        label={"Contraseña"}
                        autocomplete="new-password"
                        type="password"
                        error={!!errors.password}
                        helperText={errors.password?.message}
                    />
                    )}
                />

                <Spacer spacing={5} />

                <Button
                    type="submit"
                    color="blue"
                    height="3rem"
                    spacing="0.5rem"
                    borderRadius="0.5rem"
                >
                    <Text size="md" textAlign="center" color="white">
                        Siguiente
                    </Text>
                </Button>

                <Spacer spacing={5} />

                <LinkText color="blueDark" href="/auth/login">¿Ya tienes cuenta? Haz click aquí</LinkText>
            </form>
        </Box>
    )
}
