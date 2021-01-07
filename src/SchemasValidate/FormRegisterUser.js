import * as Yup from 'yup';

export const registerUserSchema = Yup.object().shape({
  numberPhone: Yup.string()
    .required('Numero de telefono es obligatorio')
    .min(10, 'Numero incorrecto')
    .max(12, 'Numero incorrecto'),
});

export const personasDataRegister = Yup.object().shape({
  identifyNumber: Yup.string()
    .required('Numero de identificacion es obligatorio')
    .min(10, 'numero de identificacion incorrecto')
    .max(15, 'numero de identificacion incorrecto'),

  name: Yup.string()
    .required('El nombre es obligatorio')
    .min(3, 'Nombre debe tener minimo 3 caracteres')
    .max(50, 'nombre debe tener maximo 50 caracteres'),

  lastName: Yup.string()
    .required('El apellido es obligatorio')
    .min(3, 'Apellido debe tener minimo 3 caracteres')
    .max(50, 'Apellido debe tener maximo 50 caracteres'),

  email: Yup.string()
    .email()
    .required('El email es obligatorio')
    .min(10, 'Email incorrecto')
    .max(40, 'El email debe contener menos de 40 caracteres'),

  city: Yup.string()
    .required("Ciudad es requerida")
    .min("3", "La ciudad es incorrecta"),

	 contactNumber: Yup
	 .string()
	 .required("Numero de contacto Obligatorio")
	 .min(9, 'Numero de telefono incorrecto')
	 .max(13, 'Numero de telefono incorrecto')
});
