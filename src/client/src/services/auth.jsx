// export const signIn = (username, password) => {
//     const data = { username: username, password: password };
//     routes.post('users/login', data)
//       .then((response) => {
//         const data = response.data;
//         if (data.message === "Usuário autenticado!") {
//           return data;
//         } else {
//           setLoginError("Usuário ou senha inválidos!");
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//         setLoginError("Ocorreu um erro ao efetuar login!");
//       });
//   }

export const signIn = (username, password) => {
    return new Promise((resolve, reject) => {
    const data = { username: username, password: password };
      api
        .post('users/login', data)
        .then((res) => {
          resolve({
            user: {
              data: {
                name: res.data.username,
              },
              tokenType: 'Bearer',
              accessToken: res.data.token,
            },
          });
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
  
  