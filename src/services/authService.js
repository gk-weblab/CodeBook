function setToken(data) {
	if (data.accessToken) {
		sessionStorage.setItem("token", data.accessToken);
		sessionStorage.setItem("cbid", data.user.id);
	}
}
 async function fetchData(route,requestOptions) {
	try{
		const response = await fetch(`http://localhost:4000/${route}`, requestOptions);
		
	    const data = await response.json();
        return data;
	}catch (error) {
         throw error
	}
   
}

export async function login(authDetails) {
	const requestOptions = {
		method: "POST",
		headers: { "content-type": "application/json" },
		body: JSON.stringify(authDetails),
	};
      const data = await fetchData("login",requestOptions)
	  setToken(data)
	return data;
}

export async function register(authDetails) {
	const requestOptions = {
		method: "POST",
		headers: { "content-type": "application/json" },
		body: JSON.stringify(authDetails),
	};

    const data = await fetchData("register",requestOptions)
    setToken(data)
	return data;
}

export async function logout(authDetails) {
	sessionStorage.removeItem("token");
	sessionStorage.removeItem("cbid");
}
