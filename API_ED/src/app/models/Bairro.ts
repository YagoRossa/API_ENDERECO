import {model, Schema } from "mongoose";


export const Bairro = model("bairro", new Schema({ 
	name: { 
		
		type: String,
		required: true, 

	}
}));