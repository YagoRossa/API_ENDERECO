import path from 'node:path';
import { Router } from 'express';
import multer from 'multer';
import { listEndereco } from './app/useCases/endereco/listEndereco'
import { creatEndereco } from './app/useCases/endereco/createEndereco'
import { listCidade } from './app/useCases/cidade/listCidade';
import { createCidade } from './app/useCases/cidade/createCidade';
import { createBairro } from './app/useCases/bairro/createBairro';
import { listBairro } from './app/useCases/bairro/listBairro'
export const router = Router();


const upload = multer({ 

	storage: multer.diskStorage({
		destination(req, file, callback){
			callback(null, path.resolve(__dirname, '..', 'uploads'));
		},
		filename(req, file, callback){
			callback(null, `${Date.now()}-${file.originalname}`);
		},
	})

});

router.post('/endereco', creatEndereco);
router.get('/endereco', listEndereco);
router.post('/cidade', createCidade);
router.get('/cidade', listCidade);
router.post('/bairro', createBairro);
router.get('/bairro', listBairro);