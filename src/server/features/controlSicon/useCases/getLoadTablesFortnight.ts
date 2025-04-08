import { controlSicon } from '..';

const getErrorResponse = (error: string) => ({
  online: false,
  error,
  module: {
    id: 0,
    fortnight: 0,
    status: '',
    name: '',
  },
});

export const getLoadTablesFortnight = async () => {
  const moduleName = 'cargar_tablas';

  try {
    const siconModule = await controlSicon.repositories.getFortnightByModule(moduleName);

    if (siconModule.length === 0) {
      return getErrorResponse(`No se encontro el módulo de ${moduleName.replace('_', ' ')}`);
    }

    return {
      online: true,
      error: '',
      module: { ...siconModule[0] },
    };
  } catch (error) {
    console.log({ errorSicon: error });
    return getErrorResponse('Servidor no accesible');
  }
};
