exports.seed = async function (knex) {
  await knex("steps").insert([
    //grilled cheese
    { step_number: 1, instructions: "heat pan on medium", howTos_id: 1 },
    {
      step_number: 2,
      instructions: "place cheese between bread",
      howTos_id: 1,
    },
    { step_number: 3, instructions: "butter pan", howTos_id: 1 },
    { step_number: 4, instructions: "insert sandwich into pan", howTos_id: 1 },
    { step_number: 5, instructions: "flip when golden", howTos_id: 1 },
    { step_number: 6, instructions: "serve", howTos_id: 1 },
    //restore cast-iron wood stove
    {
      step_number: 1,
      instructions: "remove rust and dirt with wire brush",
      howTos_id: 2,
    },
    {
      step_number: 2,
      instructions: "apply stove polish liberally with cloth",
      howTos_id: 2,
    },
    { step_number: 3, instructions: "remove excess", howTos_id: 2 },
    //purify water
    {
      step_number: 1,
      instructions:
        "pour collected water through filter to remove particulates",
      howTos_id: 3,
    },
    { step_number: 3, instructions: "fill pot with water", howTos_id: 3 },
    { step_number: 3, instructions: "bring to a boil", howTos_id: 3 },
    { step_number: 4, instructions: "enjoy hot or let cool", howTos_id: 3 },
    ,
  ]);
};
