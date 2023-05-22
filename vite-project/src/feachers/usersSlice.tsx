import { createSlice, createAsyncThunk} from "@reduxjs/toolkit"

interface User{
    id:string;
    name: string
}

interface UsersState{
    status: string;
    users: User[];
    error: string | null
}
const initialState: UsersState= {
    status:'idle',
    users:[],
    error: null
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async()=>{
    const res = await fetch('http://localhost:5000/user/users')
    const json = await res.json()
    return json as User[]
})

export const login = createAsyncThunk('users/login', async (user: User) => {
    try {
      const res = await fetch('http://localhost:5000/user/login', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      });
      const json = await res.json();
      console.log(json);
      return json;
    } catch (err) {
      console.log(err);
      throw new Error('login failed');
    }
  });

export const register = createAsyncThunk('users/register', async(user: User)=>{
    try{
        const res = await fetch("http://localhost:5000/user/register", {
            method: "POST",
            body: JSON.stringify(user),
            headers:{
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        const json = await res.json()
        console.log(json)
        return json
    }
    catch(err){
        console.log(err)
        throw new Error("register failed")
    }
})

const usersSlice = createSlice({
    name:"users",
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchUsers.fulfilled, (state, action)=>{
            state.status = "success";
            state.users = action.payload
        }).addCase(login.fulfilled, (state, action)=>{
            state.status = "succes"
            console.log(action)
            localStorage.setItem('token', action.payload.jwt)
        }).addCase(register.fulfilled, (state, action)=>{
            state.status = "success"
            state.users.push(action.payload.user)
           console.log(action)
        })
    }
})

export default usersSlice.reducer