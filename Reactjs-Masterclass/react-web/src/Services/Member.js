import AxiosInstance from "./AxiosInstance";


export const GetAllMembers = async(payload) => {
    try {
        const { data } = await AxiosInstance.get("/members",{
            headers: {
              'Content-Type': 'application/json'
            }
        })
    
        return data;
    } catch (error) {
        console.log(error)
        return []
    }
}



export const GetMemberById = async(id) => {
    const data = await AxiosInstance.get(`/members/${id}`, {
        headers: {
          'Content-Type': 'application/json'
        }
    })

    return data;
}


export const CreateMember = async(payload) => {
    const data = await AxiosInstance.post(`/members`, payload, {
        headers: {
          'Content-Type': 'application/json'
        }
    })

    return data;
}


export const UpdateMemberById = async(id, payload) => {
    const data = await AxiosInstance.put(`/members/${id}`, payload, {
        headers: {
          'Content-Type': 'application/json'
        }
    })

    return data;
}


export const DeleteMemberById = async(id) => {
    const data = await AxiosInstance.delete(`/members/${id}`,{
        headers: {
          'Content-Type': 'application/json'
        }
    })

    return data;
}

