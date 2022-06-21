State: the particular condition that a component is in at a specific time or event.
To create state use useState hook.
It provides a array of two methods [getter,setter] for the state.

useEffect(()=> {

},[])

Its takes a function as input and array of parameters.

If parameter changes then it re renders the component.
If no parameter is set /empty array. It runs the function after a successfully render the component.

Axios.get("url") returns a promise.

Promise has two methods.
1. .then(takes function as input) = on Success
2. .catch(takes function as input) = on Error