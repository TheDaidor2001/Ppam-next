'use server'

import prisma from "@/lib/prisma"


export const getUsers = async () => {

  try {
    const users = await prisma.voluntarios.findMany()
    
    if(!users) {
        throw new Error('No users found')
    }

    return users

  } catch (error) {
    console.log(error);
    
    return {
        ok: false,
        message: error
    }
  }

}