const apiUrl = `https://61c823f0adee460017260ba9.mockapi.io/api/azer29`


export async function apiLogin() {
    try {
      const response = await fetch(apiUrl + '/users', {
          method: 'GET',
          header: {
              'Content-Type': 'application/json',
          },
          
      });
      return await response.json();
  } catch (error) {
      throw error;
  }
};
