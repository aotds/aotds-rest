import { Operation, OperationFunction } from "express-openapi";
import { Request } from "express";
import Battles from "../../../services/battles";

export const parameters = [
  {
    in: "path",
    name: "battle_id",
    required: true,
    type: "string",
  },
];

export default (battles: Battles) => {
  const GET: Operation = async (req: Request, res: any) => {
    try {
      const battle = await battles.getBattle(req.params.battle_id);
      res.json(battle);
    } catch (e) {
      res.boom.notFound("battle not found", e);
    }
  };

  GET.apiDoc = {
    description: "Get current state of a battle",
    operationId: "getBattle",
    responses: {
      default: {
        description: "An error occurred",
        schema: {
          additionalProperties: true,
        },
      },
    },
  };

  const POST: OperationFunction = async(req: Request,res: any) => {
      await battles.createBattle(
        req.params.battle_id, req.body
      );

      res.json(req.body);
  };

  POST.apiDoc = {
    description: "Create a new battle",
    operationId: "postBattle",
    responses: {
      default: {
        description: "An error occurred",
        schema: {
          additionalProperties: true,
        },
      },
    },
  };

  return {
    GET,
    POST,
  };
};
