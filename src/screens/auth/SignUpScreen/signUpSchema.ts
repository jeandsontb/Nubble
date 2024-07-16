import {stringUtils} from '@utils';
import {z} from 'zod';

const userNameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim;

export const signUpSchema = z.object({
  username: z
    .string()
    .min(5, 'Username muito curto')
    .regex(userNameRegex, 'Username inválido')
    .toLowerCase(),
  firstName: z
    .string()
    .min(5, 'Nome muito pequeno')
    .max(50, 'Nome muito longo')
    .transform(stringUtils.capitalizerFirstNames),
  lastName: z
    .string()
    .min(5, 'Nome muito pequeno')
    .max(50, 'Nome muito longo')
    .transform(stringUtils.capitalizerFirstNames),
  email: z.string().email('Email inválido'),
  password: z.string().min(8, 'Senha deve ter no mínimo 8 caracteres'),
});

export type SignUpSchemaTypes = z.infer<typeof signUpSchema>;
