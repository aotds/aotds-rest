export default {};

const GET = (req,res) => {
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

module.exports =  () => {
    return {
        GET,
  parameters: [
    {
      in: 'path',
      name: 'battle_id',
      required: true,
      type: 'string'
    }
  ]
    };

};
