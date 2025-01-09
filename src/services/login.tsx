type responseAPI = {
  success: boolean;
  accesToken: string;
  refreshToken?: string;
};
export const loginEndpoint = async (code: number): Promise<responseAPI> => {
  try {
    // const response = await fetch('/BACKEND_URL/login ', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ code }),
    // });
    // return response.json() as Promise<responseAPI>;

    // Simulate a request
    new Promise(promise => setTimeout(promise, 2000));
    return {
      success: true,
      accesToken:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NTY3ODkwIiwicm9sZSI6InVzZXIiLCJpYXQiOjE2ODM2Njg4MDAsImV4cCI6MTY4MzY3MDAwMH0.cNqKbVXlVZkk_sKZ1Tk_kIrmr1HpAnk8y2Gc8x_o7Sc',
      refreshToken:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NTY3ODkwIiwidHlwZSI6InJlZnJlc2giLCJpYXQiOjE2ODMzMDg4MDAsImV4cCI6MTY4MzgzNDgwMH0.YG7y6pIrkpCw9Bb7zTcyTcquEpOzPcyqDTQuSHUxzTA!',
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      accesToken: '',
      refreshToken:''
    };
  }
};
