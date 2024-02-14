let token = '3fcc2810529f62f151a5a97c72c2ad406990532724d1f58d'


export const server_calls = {
    get: async () => {
        const response = await fetch(`https://phone-book-kife.onrender.com`,
        {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'x-access-token' : `Bearer ${token}`
            }
        })

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`https://phone-book-kife.onrender.com`,
        {
            method: 'POST',
            headers : {
                'Content=Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error('Failed to fetch data from thr server')
        }

        return await response.json()
    },

    update: async(id:string, data: any = {}) => {
        const response = await fetch(`https://phone-book-kife.onrender.com/${id}`,
        {
            method: 'POST',
            headers: {
                'Content=Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error('Failed to update data on server')
        }

        return await response.json()
    },


    delete: async(id:string) => {
    const response = await fetch(`https://phone-book-kife.onrender.com/${id}`,
    {
        method: 'DELETE',
        headers: {
            'Content=Type': 'application/json',
            'x-access-token': `Bearer ${token}`
        }
    })

    if (!response.ok) {
        throw new Error('Failed to DELETE data on server')
    }

    return;
}
}
