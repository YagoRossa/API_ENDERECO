import {model, Schema } from "mongoose";


export const Cidade = model("cidade", new Schema({ 
	name: { 

		type: String,
		required: true, 

	},
    estado:{

        type: String,
		required: true, 
		
    }
}));