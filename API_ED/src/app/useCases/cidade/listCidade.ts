import { Request, Response } from 'express';
import { Cidade } from '../../models/Cidade';

export async function listCidade(req: Request, res: Response) { 

	try {
		
		const cidade = await Cidade.find(); 

		res.json(cidade); 

	} catch (error) {

		console.log(error);
		res.sendStatus(500); 
	}
}