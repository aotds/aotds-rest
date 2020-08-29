import { Operation } from "express-openapi";

export const parameters = [
    {
      in: 'path',
      name: 'battle_id',
      required: true,
      type: 'string'
    }
  ];


export const GET: Operation = (req:any,res:any) => {
    res.status(200);
    res.json({potato: 1});
}

GET.apiDoc = {
  description: 'Get current state of a battle',
  operationId: 'getBattle',
   responses: {
    default: {
        description: "An error occurred",
        schema: {
            additionalProperties: true
        }
    }
  }
};

