import  { Request, Response } from "express";
import playerServices from '../services/player'

const post = async (req: Request, resp: Response) => {
    try {
    
        if(!Object.values(req.body).length) throw Error("Não pode vir vazio");

        const respService = await playerServices.add(req.body)
        if(!respService) throw new Error("Erro ao cadastrar!!")

        return resp.status(200).send("Cadastrado com sucesso")
        
    } catch (error: any) { 
        return resp.status(400).send(error)
    }
}

const get = async (req: Request, resp: Response) => {
    try {
       const key = Object.keys(req.query).find(query => {
        if(query === 'id' || query === 'key') return query;
       })

       if(!key) throw new Error("Attributo de recuperação não encontrado")

       const value = req.query[key] as string
       const respService = await playerServices.get(value);
       
        return resp.status(200).send(respService)
       

    } catch (error) {
        return resp.status(400).send(error)
    }
}

const getAll = async (req: Request, resp: Response) => {
    try {
        
    } catch (error) {
        return resp.status(400).send(error)
    }
}

export default {
    post,
    get,
    getAll
}